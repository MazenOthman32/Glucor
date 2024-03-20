import 'package:flutter/material.dart';
import 'signup_screen_home.dart';

class SignUpScreen extends StatelessWidget {
  const SignUpScreen({super.key});
  static const String routeName = "SignUpScreen";

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      body: SignUpScreenHome(),
    );
  }
}