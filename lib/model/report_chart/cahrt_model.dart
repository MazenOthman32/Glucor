// ignore: depend_on_referenced_packages
import 'package:collection/collection.dart';

class GloucoseData {
  final int x;
  final int y;

  GloucoseData({required this.x, required this.y});
}

List<GloucoseData> get glData {
  final data = [100, 110, 130, 90, 30, 50, 190, 99, 110, 114, 154, 123];
  return data
      .mapIndexed(
          (index, element) => GloucoseData(x: index.toInt(), y: element))
      .toList();
}
