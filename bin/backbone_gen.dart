import 'dart:convert';
import 'dart:io';

import 'package:args/args.dart';
import 'package:path/path.dart' as p;

import 'src/read_files.dart';
import 'src/write_files.dart';

const webComponents = 'web-components';
const directoryPath = 'path';
const outputPath = 'output';
const clean = 'clean';
const verbose = 'verbose';

ArgResults argResults;

void main(List<String> arguments) {
  exitCode = 0;
  final currentPath = Directory.current.path; //Platform.script.path;
  final parser = ArgParser()
    ..addOption(directoryPath, abbr: 'p', defaultsTo: currentPath)
    ..addOption(outputPath, abbr: 'o', defaultsTo: p.join(currentPath, 'build'))
    ..addFlag(clean, abbr: 'c', defaultsTo: true)
    ..addFlag(webComponents, abbr: 'w', defaultsTo: true);

  argResults = parser.parse(arguments);
  final sourcePath = argResults[directoryPath];
  final files = readFiles(sourcePath);
  final targetPath = argResults[outputPath];
  writeFiles(
    targetPath,
    files,
    webComponent: argResults[webComponents],
    clean: argResults[clean],
  );
}
