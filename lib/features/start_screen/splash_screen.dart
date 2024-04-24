import 'dart:async';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../buttom_nav_bar/buttom_nav_bar.dart';
import 'start_screen.dart';

String? finalToken;

class SplashScreen extends StatefulWidget {
  static const String routeName = " Splash Screen";

  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    getValidation().whenComplete(() async {
      Timer(
          const Duration(seconds: 5),
          () => Navigator.pushNamed(
              context,
              finalToken == null
                  ? StartScreen.routeName
                  : BottomNavBarScreen.routeName));
    });
    super.initState();
  }

  Future getValidation() async {
    final SharedPreferences sharedPreferences =
        await SharedPreferences.getInstance();
    var obtained = sharedPreferences.getString('token');
    setState(() {
      finalToken = obtained;
    });
    // ignore: avoid_print
    print(finalToken);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Image.asset(
          "assets/images/logo22.png",
          width: 200,
          height: 200,
          fit: BoxFit.contain,
        ),
      ),
    );
  }
}
