import 'dart:math';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_phone_direct_caller/flutter_phone_direct_caller.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:gradution_project/core/route/routes.dart';
import 'package:gradution_project/features/homepage/notificatins/noti/noti.dart';
import 'core/util/constant.dart';
import 'features/homepage/widgets/conatainers.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await LocalNotificationService.init();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MainScreen());
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int? sensorReading;
  int snti = 0;
  // ignore: deprecated_member_use
  final dataBase = FirebaseDatabase.instance.reference();

  _MainScreenState() {
    dataBase.child('test').onChildChanged.listen((event) {
      DataSnapshot snap = event.snapshot;
      if (snap.key == 'int') {
        sensorReading = snap.value as int;
        snti = sensorReading!;
      }

      setState(() {
        _listenToFirebaseData();
        
      });
    });
  }


  Future<void> _listenToFirebaseData() async {
    var random = Random();
    int id = random.nextInt(100);
    if (Backend.type.text == "type1") {
      if (snti > 200) {
        String title = "Glocouse is High";
        String content = "Your Glocouse Level is $snti";
        String hour = DateTime.now().hour.toString();
        String minutes = DateTime.now().minute.toString().padLeft(2, '0');
        LocalNotificationService.showBasicNotification(
            title, content, id.toString());
        // ignore: unused_local_variable
        int response = await sqldata.insertData('''
            INSERT INTO notification (`title`,`content` ,`hour`,`minutes`) VALUES ("$title","$content","$hour","$minutes") 
            ''');
        MainAssets.notificationIsOpend = false;

        if (snti > 250) {
          //set the number here
          await FlutterPhoneDirectCaller.callNumber(Backend.firstContact.text);
        }
      } else if (snti < 80) {
        String title = "Glocouse is Low";
        String content = "Your Glocouse Level is $snti";
        String hour = DateTime.now().hour.toString();
        String minutes = DateTime.now().minute.toString().padLeft(2, '0');
        LocalNotificationService.showBasicNotification(
            title, content, id.toString());
        // ignore: unused_local_variable
        int response = await sqldata.insertData('''
            INSERT INTO notification (`title`,`content` ,`hour`,`minutes`) VALUES ("$title","$content","$hour","$minutes") 
            ''');
        MainAssets.notificationIsOpend = false;
       
        if (snti < 60) {
          await FlutterPhoneDirectCaller.callNumber(Backend.firstContact.text);
        }
      } else {
        MainAssets.notificationIsOpend = true;
        
      }
    } else if (Backend.type.text == "type2") {
      if (snti > 450) {
        String title = "Glocouse is High";
        String content = "Your Glocouse Level is $snti";
        String hour = DateTime.now().hour.toString();
        String minutes = DateTime.now().minute.toString().padLeft(2, '0');
        LocalNotificationService.showBasicNotification(
            title, content, id.toString());
        // ignore: unused_local_variable
        int response = await sqldata.insertData('''
            INSERT INTO notification (`title`,`content` ,`hour`,`minutes`) VALUES ("$title","$content","$hour","$minutes") 
            ''');
        MainAssets.notificationIsOpend = false;
        
        if (snti > 500) {
          await FlutterPhoneDirectCaller.callNumber(Backend.firstContact.text);
        }
      } else if (snti < 80) {
        String title = "Glocouse is Low";
        String content = "Your Glocouse Level is $snti";
        String hour = DateTime.now().hour.toString();
        String minutes = DateTime.now().minute.toString().padLeft(2, '0');
        LocalNotificationService.showBasicNotification(
            title, content, id.toString());
        // ignore: unused_local_variable
        int response = await sqldata.insertData('''
            INSERT INTO notification (`title`,`content` ,`hour`,`minutes`) VALUES ("$title","$content","$hour","$minutes") 
            ''');
        MainAssets.notificationIsOpend = false;
        if (snti < 60) {
          await FlutterPhoneDirectCaller.callNumber(Backend.firstContact.text);
        }
      } else {
        MainAssets.notificationIsOpend = true;
        
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          textTheme: GoogleFonts.ptSerifTextTheme(
        Theme.of(context).textTheme,
      )),
      // ignore: deprecated_member_use
      debugShowCheckedModeBanner: false,
      routes: Routes.allRoutes,
    );
  }
}