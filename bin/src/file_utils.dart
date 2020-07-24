import 'dart:io';

Directory generateDirectory(String path, {bool force = false}) {
  final temp = Directory(path);
  if (!temp.existsSync()) temp.createSync(recursive: true);
  if (force) {
    final files = temp.listSync(recursive: true);
    if (files.isNotEmpty) {
      for (final file in files) {
        if (file is File) {
          file.deleteSync();
        }
      }
    }
  }
  return temp;
}

File generateFile(String path) {
  final temp = File(path);
  if (!temp.existsSync()) temp.createSync(recursive: true);
  return temp;
}
