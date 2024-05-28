import 'package:flutter/material.dart';
import 'reset_password_datails.dart';

class ResetPasswordScreen extends StatelessWidget {
  const ResetPasswordScreen({super.key});
  static const String routeName = "ResetPasswordScreen";

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
        appBar: AppBar(
        title: const Text("Reset Password"),
        centerTitle: true,
      ),
      body: ResetPasswordScreenHome(),
    );
  }
}