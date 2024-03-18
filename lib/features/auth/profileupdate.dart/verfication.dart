import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/qf2.dart';

import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/textfield.dart';


class VerifyPhoneNumber extends StatelessWidget {
  const VerifyPhoneNumber({super.key});
  static const String routeName = "verifyPhoneNumber";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(right: 20, left: 20, top: 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const MaianAppBar(
                text: "Phone Number",
              ),
              const SizedBox(height: 45),
              const SizedBox(
                width: 160,
                child: Text(
                  "Please verify your phone number ",
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.grey, fontSize: 16),
                ),
              ),
              const SizedBox(height: 85),
              const Form(
                child: Column(
                  children: [
                    MainTextField(
                      hint: '56234',
                      keyboard: TextInputType.text,
                      label: 'Enter verification code (5-digit)',
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 70),
              SizedBox(
                width: 153,
                child: BlueButton(
                  buttonName: "Verify",
                  fn: () {
                    Navigator.pushNamed(context, Qf2.routeName);
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
