// ignore_for_file: deprecated_member_use

import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';

class NextMedican extends StatefulWidget {
  const NextMedican({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  State<NextMedican> createState() => _NextMedicanState();
}

int? sensorReading;

class _NextMedicanState extends State<NextMedican> {
  final dataBase = FirebaseDatabase.instance.reference();

  _NextMedicanState() {
    dataBase.child('test').onChildChanged.listen((event) {
      DataSnapshot snap = event.snapshot;
      sensorReading = snap.value as int;
      setState(() {});
    });
  }
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      height: 50,
      width: widget.size.width / 1.2,
      decoration: BoxDecoration(
          color: Colors.orangeAccent.withOpacity(0.5),
          borderRadius: BorderRadius.circular(10)),
      child: Text(
        "Last Check : $sensorReading ",
        style: const TextStyle(fontWeight: FontWeight.w700),
      ),
    );
  }
}
