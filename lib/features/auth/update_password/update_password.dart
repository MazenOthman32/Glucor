import 'package:flutter/material.dart';
import 'update_password_details.dart';

class UpdatePasswordScreen extends StatelessWidget {
  const UpdatePasswordScreen({super.key});
  static const String routeName = "UpdatePasswordScreen";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Update Password"),
        centerTitle: true,
      ),
      body: const UpdatePasswordScreenHome(),
    );
  }
}
