// ignore_for_file: avoid_print, prefer_const_constructors_in_immutables, use_build_context_synchronously
import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:gradution_project/features/auth/widgets/google_facebook.dart';
import 'package:gradution_project/features/auth/widgets/line_or.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/texts.dart';
import '../login/loginpage.dart';
import '../profileupdate.dart/set_profile.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;


class SignUpScreenHome extends StatefulWidget {
   SignUpScreenHome({super.key});

  @override
  State<SignUpScreenHome> createState() => _SignUpScreenHomeState();
}

class _SignUpScreenHomeState extends State<SignUpScreenHome> {
  final signUpKey =GlobalKey<FormState>();

  final TextEditingController name= TextEditingController();
  final TextEditingController email= TextEditingController();
  final TextEditingController phone= TextEditingController();
  final TextEditingController pass= TextEditingController();
  final TextEditingController phoneNumber= TextEditingController();

  final TextEditingController passwordConfirm= TextEditingController();
    Future<void> _submit() async {
      final String namee = name.text.trim();
    final String phonee = phone.text.trim();
    final String emaill =email.text.trim();
    final String passwordd =pass.text.trim();
    final String passwordConfirmm =passwordConfirm.text.trim();

    try {
      final response = await http.post(
        Uri.parse('https://red-thankful-cygnet.cyclic.app/signup'), // Adjust this URL as needed
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'name': namee,
          'email': emaill,
          'password': passwordd,
          'phoneNumber':phonee,
          'passwordConfirm': passwordConfirmm
        }),
      );

      if (response.statusCode == 200) {
        // Signup successful
        print('Signup successful');
        // Navigate to the next screen or perform further actions
      } else {
        // Signup failed
        print('Signup failed. Status code: ${response.statusCode}');
        // Show error message or handle the failure accordingly
      }
    } catch (e) {
      // Handle connection error
      print('Failed to connect to the server: $e');
      // Show error message to the user
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: const Text('Connection Error'),
          content:
              const Text('Failed to connect to the server. Please try again later.'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text('OK'),
            ),
          ],
        ),
      );
    }
  }


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
            SiggnUpForm(signUpKey: signUpKey, email: email, phone:phone, pass: pass , passwordConfirm: passwordConfirm,),
            const SizedBox(height: 55),
            Center(
                child: BlueButton(
                    buttonName: "Sign Up",
                    fn: () {
                      _submit();
                      if(signUpKey.currentState!.validate()){

                        Navigator.pushReplacementNamed(context, SetProfile.routeName);
                        
                      }
                      
                      
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
  @override
  void dispose() {
    name.dispose();
    email.dispose();
    phone.dispose();
    pass.dispose();
    passwordConfirm.dispose();
    super.dispose();
  }
}
