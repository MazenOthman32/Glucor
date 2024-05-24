import 'package:flutter/material.dart';
import 'package:gradution_project/features/homepage/widgets/conatainers.dart';
import 'package:gradution_project/features/homepage/widgets/healt_status.dart';
import 'package:gradution_project/features/homepage/widgets/rows.dart';

// ignore: camel_case_types
class All_Details extends StatelessWidget {
  const All_Details({
    super.key,
    required this.size,
    this.oldreading,
  });

  final Size size;
  final int? oldreading;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 30),
          const Padding(
            padding: EdgeInsets.only(left: 20.0),
            child: Text(
              "Glucose Details",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              textAlign: TextAlign.start,
            ),
          ),
          const SizedBox(height: 20),
          const Center(child: SugarLevel()),
          const SizedBox(height: 10),
          Center(
              child: NextMedican(
            size: size,
            oldreading: oldreading,
          )),
          const SizedBox(height: 20),
          const Padding(
            padding: EdgeInsets.only(left: 20.0),
            child: Text(
              "Health Status Summary",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              textAlign: TextAlign.start,
            ),
          ),
          const SizedBox(height: 20),
          Center(child: Health_Status(size: size)),
          const SizedBox(height: 20),
          const Padding(
            padding: EdgeInsets.only(left: 20.0),
            child: Text(
              "Other Features",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              textAlign: TextAlign.start,
            ),
          ),
          const SizedBox(height: 20),
          Center(
              child: HeartRate(
            size: size,
          )),
          const SizedBox(height: 20),
          Center(
              child: ReportButton(
            size: size,
          )),
          const SizedBox(height: 30),
        ],
      ),
    );
  }
}
