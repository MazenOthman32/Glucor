// ignore_for_file: avoid_print, prefer_const_constructors_in_immutables, use_build_context_synchronously
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/login/loginpage.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/circle_indecator.dart';
import '../../../core/widgets/texts.dart';
import 'package:http/http.dart' as http;

class ResetPasswordScreenHome extends StatefulWidget {
  ResetPasswordScreenHome({super.key});

  @override
  State<ResetPasswordScreenHome> createState() =>
      _ResetPasswordScreenHomeState();
}

class _ResetPasswordScreenHomeState extends State<ResetPasswordScreenHome> {
  final resetPasswordKey = GlobalKey<FormState>();
  final TextEditingController pass = TextEditingController();
  final TextEditingController passwordConfirm = TextEditingController();
  bool isLoading = false;
  String? errorMessage;
  String? resetToken;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final email = ModalRoute.of(context)!.settings.arguments as String;
    _getResetToken(email);
    print(email);
  }

  Future<void> _getResetToken(String email) async {
    setState(() {});

    try {
      final userDoc = await FirebaseFirestore.instance.collection('users').doc(email).get();
      if (userDoc.exists) {
        setState(() {
          resetToken = userDoc.data()?['resetPasswordToken'];
          print(resetToken);
        });
      } else {
        setState(() {
          errorMessage = "User not found";
        });
      }
    } catch (error) {
      setState(() {
        errorMessage = "Failed to retrieve reset token";
      });
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  Future<void> _submit() async {
    final String passs = pass.text.trim();
    final String passwordConfirmm = passwordConfirm.text.trim();

    try {
      final response = await http.post(
        Uri.parse('https://adc-8aar.onrender.com/reset-password'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'resetToken': resetToken,
          'newPassword': passs,
          'newPasswordConfirm': passwordConfirmm
        }),
      );
      if (response.statusCode == 200) {
        isLoading = false;
        setState(() {});
        print('Reset successful');
      } else {
        isLoading = false;
        setState(() {});
        print('Reset failed. Status code: ${response.statusCode}');
      }
    } catch (e) {
      isLoading = false;
        setState(() {});
      print('Failed to connect to the server: $e');
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
                const SizedBox(height: 10),
                const LabeledOnboarding(
                  text: 'Please Enter Your New Password',
                  fontsize: 25,
                ),
                const SizedBox(height: 20),
                ResetPasswordForm(
                  resetPasswordKey: resetPasswordKey,
                  pass: pass,
                  passwordConfirm: passwordConfirm,
                ),
                const SizedBox(height: 55),
                Center(
                  child: BlueButton(
                    buttonName: "Set",
                    fn: () async {
                      if (resetPasswordKey.currentState!.validate()) {
                        setState(() {
                          isLoading = true;
                          errorMessage = null;
                        });

                        try {
                          // Call your password reset function here
                          await _submit();

                          if (mounted) {
                            Navigator.of(context)
                                .pushNamed(LoginScreen.routeName);
                          }
                        } catch (e) {
                          setState(() {
                            errorMessage = e.toString();
                          });
                        } finally {
                          if (mounted) {
                            setState(() {
                              isLoading = false;
                            });
                          }
                        }
                      }
                    },
                  ),
                ),
                if (errorMessage != null) ...[
                  const SizedBox(height: 20),
                  Text(
                    errorMessage!,
                    style: const TextStyle(color: Colors.red),
                  ),
                ],
              ],
            ),
            isLoading ? const CircleIndicator() : const SizedBox(),
          ],
        ),
        
      ),
    );
  }

  @override
  void dispose() {
    pass.dispose();
    passwordConfirm.dispose();
    super.dispose();
  }
}
