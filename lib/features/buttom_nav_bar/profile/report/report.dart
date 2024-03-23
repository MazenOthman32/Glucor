import 'package:flutter/material.dart';

import 'report_datils.dart';



class Report extends StatelessWidget {
  static const String routeName = " Report Screen";
  const Report({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold (
      body: ReportDetails(),
    );
  }
}