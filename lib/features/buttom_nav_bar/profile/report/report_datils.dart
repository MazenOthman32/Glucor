import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../../../../core/widgets/buttons.dart';
import '../../../../core/widgets/rowas.dart';
import '../../../../model/report_chart/cahrt_model.dart';
import '../../../homepage/widgets/conatainers.dart';
import 'widgets/cards.dart';
import 'widgets/line_chart.dart';

class ReportDetails extends StatelessWidget {
  const ReportDetails({super.key});
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return SingleChildScrollView(
      child: SafeArea(
          child: Container(
        margin: const EdgeInsets.only(right: 20, left: 15, top: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const MaianAppBar(
              text: 'Report',
            ),
            const SizedBox(height: 40),
            SizedBox(
              width: double.infinity,
              height: 350,
              child: LineChartW(glData),
            ),
            const SizedBox(height: 30),
            Center(child: NextMedican(size: size)),
            const SizedBox(height: 30),
            const Rowl(),
            BlueButton(fn: () {},  buttonName: 'Save')
          ],
        ),
      )),
    );
  }
  

  
}

class Rowl extends StatelessWidget {
  const Rowl({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        ReportCard(
          iconData: FontAwesomeIcons.heartPulse,
          measure: '133',
          unit: 'bmp',
          title: 'rate',
        ),
        ReportCard(
          iconData: FontAwesomeIcons.dumbbell,
          measure: '97',
          unit: 'lbs',
          title: 'Weight',
        ),
        
      ],
    
    );
  }
}




