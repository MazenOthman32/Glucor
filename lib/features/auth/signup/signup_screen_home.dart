
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:gradution_project/features/auth/widgets/google_facebook.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/circle_indecator.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/texts.dart';
import '../login/loginpage.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

import '../profileupdate.dart/verfication.dart';

class SignUpScreenHome extends StatefulWidget {
  const SignUpScreenHome({super.key});

  @override
  State<SignUpScreenHome> createState() => _SignUpScreenHomeState();
}

class _SignUpScreenHomeState extends State<SignUpScreenHome> {
  Backend backend = Backend();
  final signUpKey = GlobalKey<FormState>();

  final TextEditingController name = TextEditingController();
  final TextEditingController email = TextEditingController();
  final TextEditingController phone = TextEditingController();
  final TextEditingController phoneNumber = TextEditingController();
  final TextEditingController pass = TextEditingController();
  final TextEditingController passwordConfirm = TextEditingController();

  bool isLoading = false;

  Future<void> _submit() async {
    final String namee = name.text.trim();
    final String phonee = phone.text.trim();
    final String emaill = email.text.trim();
    final String passwordd = pass.text.trim();
    final String passwordConfirmm = passwordConfirm.text.trim();
    Backend.email.text = emaill;
    try {
      final response = await http.post(
        Uri.parse('https://adc-9v8m.onrender.com/signup'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'name': namee,
          'email': emaill,
          'password': passwordd,
          'phoneNumber': phonee,
          'passwordConfirm': passwordConfirmm
        }),
      );

      if (response.statusCode == 200) {
        isLoading = false;
        setState(() {});

        // Get token from response
        final Map<String, dynamic> responseData = json.decode(response.body);
        final String token = responseData['token'];

        // Save token in SharedPreferences
        final prefs = await SharedPreferences.getInstance();
        prefs.setString('token', token);
        // ignore: use_build_context_synchronously
        Navigator.pushNamed(context, VerifyPhoneNumber.routeName,
            arguments: Backend.email.text);

      } else {
        isLoading = false;
        setState(() {});
      }
    } catch (e) {
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
                isLoading = false;
                setState(() {});
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
                  text: 'Sign Up',
                  fontsize: 30,
                ),
                const SizedBox(height: 20),
                SiggnUpForm(
                  signUpKey: signUpKey,
                  email: email,
                  phone: phone,
                  pass: pass,
                  passwordConfirm: passwordConfirm,
                ),
                const SizedBox(height: 55),
                Center(
                    child: BlueButton(
                        buttonName: "Sign Up",
                        fn: () {
                          if (signUpKey.currentState!.validate()) {
                            isLoading = true;
                            setState(() {});
                            _submit();
                          }
                        })),
                const SizedBox(height: 40),
                const GoogleButton(),
                const SizedBox(height: 40),
                RowOfLogin(
                  buttontext: 'Login',
                  text: "Already have an account? ",
                  fn: () {
                    Navigator.pushReplacementNamed(
                        context, LoginScreen.routeName);
                  },
                ),
                const SizedBox(height: 30),
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
    name.dispose();
    email.dispose();
    phone.dispose();
    pass.dispose();
    passwordConfirm.dispose();
    super.dispose();
  }
}
