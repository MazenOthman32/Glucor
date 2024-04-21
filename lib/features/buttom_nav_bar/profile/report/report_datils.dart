import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../../../../core/widgets/buttons.dart';
import '../../../../core/widgets/rowas.dart';
import '../../../../model/report_chart/cahrt_model.dart';
import '../../../homepage/widgets/conatainers.dart';
import 'widgets/cards.dart';
import 'widgets/line_chart.dart';
import 'package:screenshot/screenshot.dart';
import 'package:image_gallery_saver/image_gallery_saver.dart';

class ReportDetails extends StatefulWidget {
  const ReportDetails({super.key});

  @override
  State<ReportDetails> createState() => _ReportDetailsState();
}

class _ReportDetailsState extends State<ReportDetails> {
  ScreenshotController screenshotController = ScreenshotController();

  // ignore: non_constant_identifier_names
  SaveToGallery() {
    screenshotController.capture().then((Uint8List? image) {
      saveScreenshot(image!);
    });
    ScaffoldMessenger.of(context)
        .showSnackBar(const SnackBar(content: Text("Image Saved to gallery")));
  }

  saveScreenshot(Uint8List byte) async {
    final time = DateTime.now()
        .toIso8601String()
        .replaceAll('.', '-')
        .replaceAll(':', '-');
    final name = "Screenshot$time";
    await ImageGallerySaver.saveImage(byte, name: name);
  }

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return SingleChildScrollView(
      child: SafeArea(
          child: Container(
        color: Colors.white,
        margin: const EdgeInsets.only(right: 20, left: 15, top: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const MaianAppBar(
              text: 'Report',
            ),
            const SizedBox(height: 20),
            Screenshot(
              controller: screenshotController,
              child: Container(
                color: Colors.white,
                child: Column(
                  children: [
                    const SizedBox(height: 20),
                    SizedBox(
                      width: double.infinity,
                      height: 350,
                      child: LineChartW(glData),
                    ),
                    const SizedBox(height: 30),
                    Center(child: NextMedican(size: size)),
                    const SizedBox(height: 30),
                    const Rowl(),
                    const SizedBox(height: 70),
                  ],
                ),
              ),
            ),
            Center(
                child: BlueButton(
                    fn: () {
                      SaveToGallery();
                    },
                    buttonName: 'Save')),
            const SizedBox(height: 100),
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
