// ignore_for_file: non_constant_identifier_names

import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';

// ignore: camel_case_types
class Health_Status extends StatefulWidget {
  const Health_Status({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  State<Health_Status> createState() => _Health_StatusState();
}

// ignore: camel_case_types
class _Health_StatusState extends State<Health_Status> {
  int? sensorReading;
  // ignore: deprecated_member_use
  final dataBase = FirebaseDatabase.instance.reference();

  // ignore: unused_element
  _MainScreenState() {
    dataBase.child('test').onChildChanged.listen((event) {
      DataSnapshot snap = event.snapshot;

      setState(() {
        sensorReading = snap.value as int;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 30),
      height: 140,
      width: widget.size.width / 1.2,
      decoration: BoxDecoration(
          color: MainAssets.babyBlue, borderRadius: BorderRadius.circular(15)),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Text(
            "Blood Glucose Trends : Stable",
            style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
          ),
          Text(
            "Weight : 150 lbs",
            style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
          ),
          Text(
            "NextMedican : 12:2",
            style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
          ),
        ],
      ),
    );
  }
}
