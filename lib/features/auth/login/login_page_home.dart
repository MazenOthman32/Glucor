import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/buttons.dart';
import 'package:gradution_project/core/widgets/texts.dart';
import 'package:gradution_project/features/auth/signup/signuppage.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:gradution_project/core/widgets/rowas.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:gradution_project/features/auth/widgets/google_facebook.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

import '../../../core/widgets/circle_indecator.dart';
import '../../buttom_nav_bar/buttom_nav_bar.dart';

class LoginScreenHome extends StatefulWidget {
  const LoginScreenHome({super.key});

  @override
  State<LoginScreenHome> createState() => _LoginScreenHomeState();
}

class _LoginScreenHomeState extends State<LoginScreenHome> {
  final loginkey = GlobalKey<FormState>();
  final TextEditingController email = TextEditingController();
  final TextEditingController password = TextEditingController();
  bool isLoading = false;

 late SharedPreferences _prefs;
  String? _token;

  @override
  void initState() {
    super.initState();
    _initSharedPreferences();
  }

  Future<void> _initSharedPreferences() async {
    _prefs = await SharedPreferences.getInstance();
    _token = _prefs.getString('token');
    if (_token != null) {
      // Token exists, print it
      // ignore: avoid_print
      print('Token from Shared Preferences: $_token');
    }
  }

  Future<void> _submit() async {
    final String emaill = email.text.trim();
    final String passwordd = password.text.trim();

    try {
      final response = await http.post(
        Uri.parse('https://red-thankful-cygnet.cyclic.app/login'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'email': emaill,
          'password': passwordd,
        }),
      );
      if (response.statusCode == 200) {
        isLoading = false;
        setState(() {});
        // ignore: avoid_print
        print('Login successful');
        final responseData = jsonDecode(response.body);
        final token = responseData['token'];
        // Save token to shared preferences
        await _prefs.setString('token', token);
        Navigator.pushReplacement(
          // ignore: use_build_context_synchronously
          context,
          MaterialPageRoute(builder: (context) => const BottomNavBarScreen()),
        );
        // ignore: avoid_print
        print('Token: $token');
      } else {
        isLoading = false;
        setState(() {});
        // ignore: avoid_print
        print('Login failed. Status code: ${response.statusCode}');
        showDialog(
          // ignore: use_build_context_synchronously
          context: context,
          builder: (context) => AlertDialog(
            title: const Text('Login Failed'),
            content: const Text('Invalid email or password. Please try again.'),
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
    } catch (e) {
      // ignore: avoid_print
      print('Failed to connect to the server: $e');
      showDialog(
        // ignore: use_build_context_synchronously
        context: context,
        builder: (context) => AlertDialog(
          title: const Text('Connection Error'),
          content: const Text(
              'Failed to connect to the server. Please try again later.'),
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
        child: Stack(
          children: [
            Column(
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
                LoginForm(
                  loginkey: loginkey,
                  email: email,
                  password: password,
                ),
                const SizedBox(height: 100),
                Center(
                  child: BlueButton(
                    buttonName: "Log In",
                    fn: () {
                      if (loginkey.currentState!.validate()) {
                        isLoading = true;
                        setState(() {});
                        _submit();
                      }
                    },
                  ),
                ),
                const SizedBox(height: 55),
                const GoogleButton(),
                const SizedBox(height: 40),
                RowOfLogin(
                  text: "Don't have an account? ",
                  buttontext: "Sign Up",
                  fn: () {
                    Navigator.pushReplacementNamed(
                        context, SignUpScreen.routeName);
                  },
                ),
                const SizedBox(height: 50),
              ],
            ),
            isLoading == true ? const CircleIndicator() : const SizedBox()
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