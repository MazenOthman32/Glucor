import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:gradution_project/features/auth/widgets/google_facebook.dart';
import 'package:gradution_project/features/auth/widgets/line_or.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/texts.dart';
import '../login/loginpage.dart';
import '../profileupdate.dart/set_profile.dart';

class SignUpScreenHome extends StatelessWidget {
  const SignUpScreenHome({super.key});

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
              text: 'Sign Up',
              fontsize: 30,
            ),
            const SizedBox(height: 20),
            const SiggnUpForm(),
            const SizedBox(height: 55),
            Center(
                child: BlueButton(
                    buttonName: "Sign Up",
                    fn: () {
                      Navigator.pushNamed(context, SetProfile.routeName);
                    })),
            const SizedBox(height: 35),
            const LineORRow(),
            const GoogleAndFaceBook(),
            const SizedBox(height: 40),
            RowOfLogin(
              buttontext: 'Login',
              text: "Already have an account? ",
              fn: () {
                Navigator.pushReplacementNamed(context, LoginScreen.routeName);
              },
            ),
            const SizedBox(height: 30),
          ],
        ),
      ),
    );
  }
}
