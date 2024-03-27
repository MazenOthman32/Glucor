import 'package:flutter/material.dart';
import 'package:gradution_project/features/homepage/widgets/conatainers.dart';
import 'package:gradution_project/features/homepage/widgets/healt_status.dart';
import 'package:gradution_project/features/homepage/widgets/rows.dart';

// ignore: camel_case_types
class All_Details extends StatelessWidget {
  const All_Details({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(height: 10),
        const Center(child: SugarLevel()),
        const SizedBox(height: 10),
        Center(child: NextMedican(size: size)),
        const SizedBox(height: 20),
        const Text(
          "Health Status Summary",
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
          textAlign: TextAlign.start,
        ),
        const SizedBox(height: 20),
        Center(child: Health_Status(size: size)),
      ],
    );
  }
}
