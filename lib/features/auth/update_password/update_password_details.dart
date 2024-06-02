
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/circle_indecator.dart';
import '../../../core/widgets/texts.dart';
import 'package:http/http.dart' as http;

import '../../buttom_nav_bar/buttom_nav_bar.dart';

class UpdatePasswordScreenHome extends StatefulWidget {
  const UpdatePasswordScreenHome({super.key});

  @override
  State<UpdatePasswordScreenHome> createState() =>
      _UpdatePasswordScreenHomeState();
}

class _UpdatePasswordScreenHomeState extends State<UpdatePasswordScreenHome> {
  final updatePasswordKey = GlobalKey<FormState>();
  final TextEditingController oldPass = TextEditingController();
  final TextEditingController pass = TextEditingController();
  final TextEditingController passwordConfirm = TextEditingController();
  bool isLoading = false;

  String? resetToken;
  final email = Backend.email.text;
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
  
    _getResetToken(email);
  }

  Future<void> _getResetToken(String email) async {
    setState(() {});

    try {
      final userDoc =
          await FirebaseFirestore.instance.collection('users').doc(email).get();
      if (userDoc.exists) {
        setState(() {
          resetToken = userDoc.data()?['resetPasswordToken'];

        });
      } else {}
    // ignore: empty_catches
    } catch (error) {
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  Future<void> _submit() async {
    final String passs = pass.text.trim();
    final String passwordConfirmm = passwordConfirm.text.trim();
    final String oldPasss = oldPass.text.trim();

    try {
      final response = await http.post(
        Uri.parse('https://adc-9v8m.onrender.com/updatePassword'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(
            {
              'email':email,
              'currentPassword':oldPasss,
              'newPassword': passs, 
            'newPasswordConfirm': passwordConfirmm}),
      );
      if (response.statusCode == 200) {
        isLoading = false;
        setState(() {});
      } else {
        isLoading = false;
        setState(() {});
      }
    } catch (e) {
      isLoading = false;
      setState(() {});
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
                UpadtePasswordForm(
                  resetPasswordKey: updatePasswordKey,
                  pass: pass,
                  passwordConfirm: passwordConfirm,
                  oldPassword: oldPass,
                ),
                const SizedBox(height: 55),
                Center(
                  child: BlueButton(
                    buttonName: "Set",
                    fn: () async {
                      if (updatePasswordKey.currentState!.validate()) {
                        setState(() {
                          isLoading = true;
                        });

                        try {
                          // Call your password reset function here
                          await _submit();

                          if (mounted) {
                            // ignore: use_build_context_synchronously
                            Navigator.of(context)
                                .pushNamed(BottomNavBarScreen.routeName);
                          }
                        } catch (e) {
                          setState(() {});
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
