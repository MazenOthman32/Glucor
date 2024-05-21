// ignore_for_file: must_be_immutable, body_might_complete_normally_nullable, curly_braces_in_flow_control_structures, avoid_print
import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/buttons.dart';
import 'package:gradution_project/core/widgets/texts.dart';
import 'package:gradution_project/features/auth/login/loginpage.dart';
import '../../../core/widgets/textfield.dart';

class ForgotPasswordBody extends StatelessWidget {
  ForgotPasswordBody({super.key});
  TextEditingController email = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        padding: const EdgeInsets.only(top: 60, right: 20, left: 20),
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Align(
              alignment: Alignment.centerLeft,
              child: SizedBox(
                width: 270,
                height: 50,
                child: FontW23(
                  text: "Please enter your email",
                ),
              ),
            ),
            const SizedBox(height: 50),
            Form(
              child: MainTextField(
                visibleFalse: null,
                visibleTrue: null,
                hint: 'example@gmail.com',
                label: 'Email Address',
                keyboard: TextInputType.emailAddress,
                controller: email,
                validator: (val) {
                  print(val);
                  if (val!.isEmpty) {
                    return "This Field is empty";
                  } else if (!val.contains("@")) return "wrong email";
                },
              ),
            ),
            const SizedBox(height: 50),
            BlueButton(
                buttonName: "Send",
                fn: () {
                  Navigator.of(context).pushNamed(LoginScreen.routeName);
                }),
          ],
        ),
      ),
    );
  }
}
