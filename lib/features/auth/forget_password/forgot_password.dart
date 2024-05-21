import 'package:flutter/material.dart';
import 'forgot_password_details.dart';

class ForgotPassword extends StatelessWidget {
  static String routeName = "FrogotPassword";
  const ForgotPassword({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Reset Password"),
        centerTitle: true,
      ),
      body: ForgotPasswordBody(),
    );
  }
}
