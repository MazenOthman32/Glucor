// ignore: depend_on_referenced_packages
import 'package:collection/collection.dart';
import '../../core/util/constant.dart';

class GloucoseData {
  final int x;
  final int y;

  GloucoseData({required this.x, required this.y});
}

List<GloucoseData> get glData {
  final data =   ReportModel.lll; 
  return data
      .mapIndexed(
          (index, element) => GloucoseData(x: index.toInt(), y: element))
      .toList();
}
