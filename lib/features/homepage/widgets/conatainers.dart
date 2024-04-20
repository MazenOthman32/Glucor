// ignore_for_file: deprecated_member_use, avoid_print
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter_phone_direct_caller/flutter_phone_direct_caller.dart';
import 'package:gradution_project/core/util/constant.dart';
import '../../../core/database/notes_sqlite/sqlite.dart';
import '../notificatins/noti/noti.dart';

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
      sensorReading = snap.value as int;

      snti = sensorReading!;

      setState(() {
        _listenToFirebaseData();
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

Future<void> _listenToFirebaseData() async {
  if (snti > 100) {
    String title = "Glocouse is High";
    String content = "Your Glocouse Level is $snti";
    String hour = DateTime.now().hour.toString();
    String minutes = DateTime.now().minute.toString().padLeft(2, '0');
    LocalNotificationService.showBasicNotification(title, content);
    int response = await sqldata.insertData('''
            INSERT INTO notification (`title`,`content` ,`hour`,`minutes`) VALUES ("$title","$content","$hour","$minutes") 
            ''');
    MainAssets.notificationIsOpend = false;
    print(MainAssets.notificationIsOpend);
    // ignore: unnecessary_brace_in_string_interps
    print("${response}");


    if (snti>300) {
      const number = '01270498060'; //set the number here
    await FlutterPhoneDirectCaller.callNumber(number);
    }
  } else {
    MainAssets.notificationIsOpend = true;
    print(MainAssets.notificationIsOpend);
  }
}
