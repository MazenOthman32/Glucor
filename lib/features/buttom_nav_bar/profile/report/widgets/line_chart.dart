import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

import '../../../../../model/report_chart/cahrt_model.dart';

class LineChartW extends StatelessWidget {
  final List<GloucoseData> glAllData;
  const LineChartW(this.glAllData, {super.key});

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 2,
      child: LineChart(
          LineChartData(minX: 0, minY: 60, maxX: 12, maxY: 200, lineBarsData: [
        LineChartBarData(
          
            spots: glAllData
                .map((e) => FlSpot(
                  
                  e.x.toDouble(), e.y.toDouble()))
                .toList(),
            dotData: const FlDotData(show: true),
            
            
            isCurved: true)
      ])),
    );
  }
}
