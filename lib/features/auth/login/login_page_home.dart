import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/rowas.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:gradution_project/features/auth/widgets/google_facebook.dart';
import 'package:gradution_project/features/auth/widgets/line_or.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/texts.dart';
import '../../homepage/homepage.dart';
import '../signup/signuppage.dart';

class LoginScreenHome extends StatelessWidget {
  const LoginScreenHome({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.only(right: 30, left: 30, top: 40),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Center(
              child: Image.asset(
                "assets/images/logo22.png",
                width: 150,
                height: 100,
              ),
            ),
            const SizedBox(height: 10),
            const LabeledOnboarding(
              text: 'Log in',
              fontsize: 30,
            ),
            const SizedBox(height: 20),
            const LoginForm(),
            const SizedBox(height: 55),
            Center(
                child: BlueButton(
                    buttonName: "Log In",
                    fn: () {
                      Navigator.pushNamed(context, HomePageScreen.routeName);
                    })),
            const SizedBox(height: 35),
            const LineORRow(),
            const SizedBox(height: 20),
            const GoogleAndFaceBook(),
            const SizedBox(height: 40),
            RowOfLogin(
                text: "Don't have account? ",
                buttontext: "SignUp",
                fn: () {
                  Navigator.pushReplacementNamed(
                      context, SignUpScreen.routeName);
                })
          ],
        ),
      ),
    );
  }
}
