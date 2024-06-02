
import 'dart:convert';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/reset_password/reset_password.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/circle_indecator.dart';
import '../../../core/widgets/texts.dart';
import '../../../core/widgets/textfield.dart';
import 'package:http/http.dart' as http;

class ForgotPasswordBody extends StatefulWidget {
  const ForgotPasswordBody({super.key});

  @override
  State<ForgotPasswordBody> createState() => _ForgotPasswordBodyState();
}

class _ForgotPasswordBodyState extends State<ForgotPasswordBody> {
  final TextEditingController email = TextEditingController();

  bool isLoading = false;

  Future<void> _submit() async {
    final String emaill = email.text.trim();

    try {
      final response = await http.post(
        Uri.parse('https://adc-9v8m.onrender.com/request-password-reset'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'email': emaill,
        }),
      );
      if (response.statusCode == 200) {
        isLoading = false;
        setState(() {});
      } else {
        isLoading = false;
        setState(() {});
      }
    // ignore: empty_catches
    } catch (e) {
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Stack(
        children: [
          Container(
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
                      if (val!.isEmpty) {
                        return "This Field is empty";
                      } else if (!val.contains("@")) {
                        return "wrong email";
                      }
                      return null;
                    },
                  ),
                ),
                const SizedBox(height: 50),
                BlueButton(
                    buttonName: "Send",
                    fn: () async {
                      if (email.text.isEmpty) {
                        return;
                      }
                      setState(() {
                        isLoading = true;
                      });
                      _submit();
                      await FirebaseAuth.instance
                          .sendPasswordResetEmail(email: email.text);

                      // ignore: use_build_context_synchronously
                      Navigator.of(context).pushNamed(
                        ResetPasswordScreen.routeName,
                        arguments: email.text, // Pass the email as an argument
                      );
                    }),
              ],
            ),
          ),
          isLoading == true ? const CircleIndicator() : const SizedBox()
        ],
      ),
    );
  }
}
