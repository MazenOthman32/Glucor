import 'package:flutter/material.dart';
import 'login_page_home.dart';


class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});
  static const String routeName = "LoginScreen";

  @override
  Widget build(BuildContext context) {
    return  const Scaffold(
      body: LoginScreenHome(),
    );
  }
}