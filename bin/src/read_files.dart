import 'dart:io';

List<File> readFiles(String path) {
  final directory = Directory(path);
  if (!directory.existsSync()) throw Exception('Not a Valid Directory');
  final files = <File>{};
  for (final item in directory.listSync(recursive: true)) {
    if (item is File) {
      files.add(item);
    }
  }
  return files.toList();
}
