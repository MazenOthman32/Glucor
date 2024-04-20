import 'package:flutter/material.dart';

import '../../../../../core/util/constant.dart';

class ReportCard extends StatelessWidget {
  const ReportCard({
    super.key,
    required this.iconData,
    required this.measure,
    required this.unit,
    required this.title,
  });
  final IconData iconData;
  final String measure;
  final String unit;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
      height: 150,
      width: 150,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: MainAssets.babyBlue.withOpacity(0.3)),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              Icon(iconData),
              const SizedBox(height: 5),
              Text(title),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(measure,
                  style: const TextStyle(fontWeight: FontWeight.w600)),
              Text(
                unit,
                style: const TextStyle(fontWeight: FontWeight.w600),
              )
            ],
          )
        ],
      ),
    );
  }
}
