// ignore_for_file: deprecated_member_use, avoid_print
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import '../../../core/database/notes_sqlite/sqlite.dart';

class NextMedican extends StatefulWidget {
  const NextMedican({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  State<NextMedican> createState() => _NextMedicanState();
}

SqlData sqldata = SqlData();
int? sensorReading;
int snti = 0;

class _NextMedicanState extends State<NextMedican> {
  final dataBase = FirebaseDatabase.instance.reference();

    _NextMedicanState() {
    dataBase.child('test').onChildChanged.listen((event) {
      DataSnapshot snap = event.snapshot;
      if (snap.key == 'int') {
        sensorReading = snap.value as int;
        snti = sensorReading!;
      }

      setState(() {
        
      });
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
        "Last Check : ${sensorReading ?? 'Connection Problem'} ",
        style: const TextStyle(fontWeight: FontWeight.w700),
      ),
    );
  }
}
