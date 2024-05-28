// ignore_for_file: overridden_fields
import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/set_profile.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/textfield.dart';

class VerifyPhoneNumber extends StatefulWidget {
  const VerifyPhoneNumber({super.key});
  static const String routeName = "verifyPhoneNumber";

  @override
  State<VerifyPhoneNumber> createState() => _VerifyPhoneNumberState();
}

class _VerifyPhoneNumberState extends State<VerifyPhoneNumber> {
  // ignore: annotate_overrides
  final verification = GlobalKey<FormState>();

  final TextEditingController phone = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final email = ModalRoute.of(context)!.settings.arguments as String;
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
                      label: 'Enter verification code (5-digit)',
                      controller: phone,
                      validator: (val) {
                        if (val!.isEmpty)
                          // ignore: curly_braces_in_flow_control_structures
                          return "Code is empty";
                        return null;
                      },
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
                    // ignore: avoid_print
                    print('email from verification $email');
                    Navigator.pushNamed(context, SetProfile.routeName, arguments: email);
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
