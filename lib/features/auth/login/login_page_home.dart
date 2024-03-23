// ignore_for_file: avoid_print, use_build_context_synchronously

import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/rowas.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:gradution_project/features/auth/widgets/google_facebook.dart';
import 'package:gradution_project/features/auth/widgets/line_or.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/texts.dart';
import '../../homepage/homepage.dart';
import '../signup/signuppage.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class LoginScreenHome extends StatefulWidget {
  const LoginScreenHome({super.key});

  @override
  State<LoginScreenHome> createState() => _LoginScreenHomeState();
}

class _LoginScreenHomeState extends State<LoginScreenHome> {
  final loginkey = GlobalKey<FormState>();
  final TextEditingController email = TextEditingController();

  final TextEditingController password = TextEditingController();
  Future<void> _submit() async {
    final String emaill = email.text.trim();
    final String passwordd = password.text.trim();

    try {
      final response = await http.post(
        Uri.parse('http://192.168.1.5:8000/login'), // Adjust this URL as needed
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'email': emaill,
          'password': passwordd,
        }),
      );

      if (response.statusCode == 200) {
        // Login successful
        print('Login successful');
        // Navigate to the next screen or perform further actions
      } else {
        // Login failed
        print('Login failed. Status code: ${response.statusCode}');
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
              text: 'Log in',
              fontsize: 30,
            ),
            const SizedBox(height: 20),
            LoginForm(loginkey: loginkey, email: email, password: password,),
            const SizedBox(height: 55),
            Center(
                child: BlueButton(
                    buttonName: "Log In",
                    fn: () {
                      
                      if(loginkey.currentState!.validate()){
                        Navigator.pushNamed(context, HomePageScreen.routeName);

                      }
                      _submit();
                      
                      
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
  @override
  void dispose() {
    email.dispose();
    password.dispose();
    super.dispose();
  }
}
