import 'dart:async';

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:heart_bpm/heart_bpm.dart';
import 'package:percent_indicator/percent_indicator.dart';

import '../../../core/util/constant.dart';
import '../../../core/widgets/rowas.dart';


class HeartRatePage extends StatefulWidget {
  static const String routeName = " FScreen";
  const HeartRatePage({super.key});

  @override
  State<HeartRatePage> createState() => _HeartRatePageState();
}

class _HeartRatePageState extends State<HeartRatePage> {
  List<SensorValue> data = [];
  int bpmValue = 0;
  bool finishied = false;
  double _percent = 0.0;

  @override
  void initState() {
    super.initState();
    _startLoading();
  }

  void _startLoading() {
    Timer.periodic(const Duration(milliseconds: 200), (Timer timer) {
      setState(() {
        if (_percent >= 0.99) {
          timer.cancel();
          MainAssets.heartRate = bpmValue;
          finishied = true;
        } else {
          _percent += 0.01;
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const MaianAppBar(
          text: 'Heart Rate',
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const SizedBox(height: 50),
          CircularPercentIndicator(
              radius: 100.0,
              lineWidth: 13.0,
              circularStrokeCap: CircularStrokeCap.round,
              animation: false,
              animationDuration: 0,
              percent:
                  finishied ? MainAssets.heartRate / 500 : bpmValue / 500,
              progressColor: MainAssets.blue,
              backgroundColor: MainAssets.babyBlue,
              center: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "${finishied ? MainAssets.heartRate : bpmValue}",
                    style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 40.0,
                        color: Colors.black),
                  ),
                  const SizedBox(width: 10),
                  const Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        FontAwesomeIcons.heart,
                        size: 25,
                        color: MainAssets.blue,
                      ),
                      Text(
                        "BPM",
                        style: TextStyle(
                            fontWeight: FontWeight.w600,
                            fontSize: 17.0,
                            color: Colors.black),
                      ),
                    ],
                  )
                ],
              )),
          const SizedBox(
            height: 50,
          ),
          HeartBPMDialog(
            borderRadius: 300,
            context: context,
            onRawData: (value) {
              setState(() {
                if (data.length == 100) {
                  data.removeAt(0);
                }
                data.add(value);
              });
            },
            onBPM: (value) => setState(() {
              bpmValue = value;
            }),
          ),
          const SizedBox(height: 50),
          Container(
            padding: const EdgeInsets.only(left: 30),
            child: LinearPercentIndicator(
              barRadius: const Radius.circular(20),
              progressColor: MainAssets.blue,
              width: 350,
              lineHeight: 20.0,
              percent: _percent,
              backgroundColor: MainAssets.babyBlue,
              center: Text(
                '${(_percent * 100).toInt() + 1}%',
                style: const TextStyle(fontSize: 12.0, color: Colors.white),
              ),
            ),
          ),
          const SizedBox(height: 50),
          const Text("Cover both the camera and flash with your finger",
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
              textAlign: TextAlign.center),
        ],
      ),
    );
  }
}
