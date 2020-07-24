import 'package:path/path.dart' as p;
import 'package:process_run/process_run.dart';

import 'constants.dart';
import 'file_utils.dart';
import 'package:recase/recase.dart';

Future<void> generateComponent(
  String path,
  String filename,
  Map<String, dynamic> data, {
  String prefix = 'x-',
  bool webComponent = false,
}) async {
  final name = data['name'] ?? filename ?? kDefaultWebComponentName;
  final className = ReCase(name).pascalCase;
  final id = ReCase(name).paramCase;
  final List<dynamic> properties = data['properties'] ?? [];
  final webPath = p.join(path, '${filename}/${filename}.ts');
  if (webComponent) {
    final tag = prefix + (data['tag'] ?? ReCase(name).paramCase);
    final base = generateFile(webPath);
    final sb = StringBuffer();
    bool hasProperties = properties.isNotEmpty;
    bool hasCss = hasProperties || data['custom_css'] != null;
    sb.write('import { LitElement, html, customElement');
    if (hasProperties) {
      sb.write(', property');
    }
    if (hasCss) {
      sb.write(', css');
      if (properties.isNotEmpty) {
        sb.write(', unsafeCSS');
      }
    }
    sb.write("""
 } from 'lit-element';

@customElement('$tag')
export class $className extends LitElement {

""");
    if (hasProperties) {
      // -- Generate Props --
      for (final prop in properties) {
        final defaultValue = (prop['default'] ?? '').toString();
        final propName = (prop['name'] ?? '').toString();
        // final propType = (prop['type'] ?? '').toString().toLowerCase();
        sb.writeln('@property()');
        sb.write('$propName');
        // if (propType.isNotEmpty) {
        //   sb.write(': $propType');
        // }
        sb.write(' = ');
        sb.writeln("'$defaultValue';");
        sb.writeln('');
      }
    }

    // -- Generate CSS --
    if (hasCss) {
      sb.write("""
static get styles() {
        return css`
      #$id {
""");
      if (hasProperties) {
        for (final prop in properties) {
          final type = (prop['type'] ?? 'string').toString().toLowerCase();
          dynamic defaultValue = '';
          if (type == 'string') {
            defaultValue = prop['default'] ?? '';
            defaultValue = "'$defaultValue'";
          } else if (type == 'number') {
            defaultValue = prop['default'] ?? 0;
          }
          final propName = (prop['name'] ?? '').toString();
          sb.writeln('         $propName: \${unsafeCSS(${defaultValue})};');
        }
      }
      if (data['custom_css'] != null) {
        final props = List.from(data['custom_css']);
        for (final item in props) {
          String description = item.toString();
          if (description.contains('{{') && description.contains('}}')) {
              description = description.replaceAll('{{', '\${unsafeCSS(');
              description = description.replaceAll('}}', ')}');
          }
          sb.write('         $description');
          if (!description.contains(';')) sb.write(';');
          sb.writeln('');
        }
      }
      sb.write("""
      }
        `;
    }
""");
      sb.writeln('');
    }

    // -- Generate HTML --
    sb.write("""
 render() {
        return html`
        <div id="$id">
            <slot></slot>
        </div>
        `;
    }
""");
    sb.writeln('');

    sb.writeln('}');
    await base.writeAsString(sb.toString());
    if (webComponent) {
      await run(
        'tsc',
        [webPath, '--outDir', p.join(path, filename)],
        verbose: true,
      );
    }
  }
}
