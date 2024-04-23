import 'package:device_preview/device_preview.dart';
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
  runApp(DevicePreview(builder: (context) => const MainScreen()));
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
      // ignore: avoid_print
      print(MainAssets.notificationIsOpend);
      // ignore: unnecessary_brace_in_string_interps, avoid_print
      print("${response}");

      if (snti > 300) {
        const number = '01270498060'; //set the number here
        await FlutterPhoneDirectCaller.callNumber(number);
      }
    } else {
      MainAssets.notificationIsOpend = true;
      // ignore: avoid_print
      print(MainAssets.notificationIsOpend);
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
      useInheritedMediaQuery: true,
      locale: DevicePreview.locale(context),
      builder: DevicePreview.appBuilder,
      debugShowCheckedModeBanner: false,
      routes: Routes.allRoutes,
    );
  }
}
