// ignore_for_file: unused_import

import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/login/loginpage.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/set_profile.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/verfication.dart';
import 'package:gradution_project/features/auth/signup/signuppage.dart';
import 'package:gradution_project/features/buttom_nav_bar/buttom_nav_bar.dart';
import 'package:gradution_project/features/homepage/homepage.dart';
import 'package:gradution_project/features/onboarding/page_view.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/qf2.dart';
import 'package:gradution_project/features/start_screen/start_screen.dart';


class Routes {
  static Map<String, Widget Function(BuildContext)> allRoutes = {
    '/': (context) => const BottomNavBarScreen() ,//StartScreen(), 
    PageViewDemo.routeName: (context) => const PageViewDemo(),
    LoginScreen.routeName: (context) => const LoginScreen(),
    SignUpScreen.routeName: (context) => const SignUpScreen(),
    SetProfile.routeName: (context) =>  SetProfile(),

    VerifyPhoneNumber.routeName: (context) =>  VerifyPhoneNumber(),
    HomePageScreen.routeName: (context) => const HomePageScreen(),
    Qf2.routeName: (context) =>  const Qf2(),
  };
}
