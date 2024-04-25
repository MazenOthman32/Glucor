// ignore_for_file: overridden_fields
import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/qf2.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/textfield.dart';


class VerifyPhoneNumber extends StatelessWidget {
  VerifyPhoneNumber({super.key});
  static const String routeName = "verifyPhoneNumber";
  // ignore: annotate_overrides
  final verification =GlobalKey<FormState>();
  final TextEditingController phone = TextEditingController();

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
               Form(
                key: verification,
                child: Column(
                  children: [
                    MainTextField(
                      hint: '56234',
                      keyboard: TextInputType.text,
                      // ignore: body_might_complete_normally_nullable
                      label: 'Enter verification code (5-digit)', controller: phone, validator:  (val ) {
              if(val!.isEmpty)
              // ignore: curly_braces_in_flow_control_structures
              return "Code is empty"; },
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