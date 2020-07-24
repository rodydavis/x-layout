import 'dart:convert';
import 'dart:io';
import 'package:path/path.dart' as p;
import 'package:recase/recase.dart';

import 'constants.dart';
import 'file_utils.dart';
import 'generate_component.dart';

Future<void> writeFiles(
  String path,
  List<File> files, {
  bool webComponent = false,
  String collectionName = 'components',
  bool clean = false,
}) async {
  final outputDir = generateDirectory(path, force: clean);
  final metaFile = generateFile(p.join(path, kMetaFileName));
  final _jsonOutput = <String, dynamic>{};
  _jsonOutput['count'] = files.length;
  _jsonOutput['$collectionName'] = [];
  final componentDir =
      generateDirectory(p.join(outputDir.path, 'web', collectionName));
  final sb = StringBuffer();
  final setFileNames = <String>{};
  for (final file in files) {
    final Map<String, dynamic> fileJson = json.decode(file.readAsStringSync());
    final filename =
        fileJson['filename'] ?? p.basename(file.path).split('.').first;
    setFileNames.add(filename);
    final name = fileJson['name'] ?? filename ?? kDefaultWebComponentName;
    final className = ReCase(name).pascalCase;
    _jsonOutput['$collectionName'].add(filename);
    await generateComponent(
      componentDir.path,
      filename,
      fileJson,
      webComponent: webComponent,
    );
    sb.writeln(
        "import { $className } from './$collectionName/$filename/$filename.js';");
    // sb.writeln("var $className = require('./$collectionName/$filename/$filename.js');");
  }
  if (webComponent) {
    final exportFile = generateFile(p.join(path, 'web', '$collectionName.js'));
    exportFile.writeAsStringSync(sb.toString());
  }
  metaFile.writeAsStringSync(json.encode(_jsonOutput));
}
