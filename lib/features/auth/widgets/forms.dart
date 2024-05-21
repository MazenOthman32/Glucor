// ignore_for_file: curly_braces_in_flow_control_structures, body_might_complete_normally_nullable, avoid_print, use_build_context_synchronously, no_leading_underscores_for_local_identifiers
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/textfield.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../../../core/widgets/buttons.dart';
import '../forget_password/forgot_password.dart';
import '../profileupdate.dart/verfication.dart';

class SiggnUpForm extends StatelessWidget {
  const SiggnUpForm({
    super.key,
    required this.signUpKey,
    required this.email,
    required this.phone,
    required this.pass,
    required this.passwordConfirm,
  });
  final Key signUpKey;
  final TextEditingController email;
  final TextEditingController phone;
  final TextEditingController pass;
  final TextEditingController passwordConfirm;

  @override
  Widget build(BuildContext context) {
    return Form(
      key: signUpKey,
      child: Column(
        children: [
          MainTextField(
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
          const SizedBox(height: 30),
          MainTextField(
            hint: '+20 01234567890',
            keyboard: TextInputType.phone,
            label: '* Phone Number',
            controller: phone,
            validator: (val) {
              if (val!.isEmpty)
                return "This Field is empty";
              else if (val.length > 11 || val.length < 11)
                return "phone number should be 11 ";
            },
          ),
          const SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Password',
            keyboard: TextInputType.emailAddress,
            controller: pass,
            validator: (val) {
              if (val!.isEmpty)
                return "This Field is empty";
              else if (val.length < 6)
                return "password should be longer than 6";
            },
          ),
          const SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Confirm Password',
            keyboard: TextInputType.emailAddress,
            controller: passwordConfirm,
            validator: (val) {
              if (val!.isEmpty)
                return "This Field is empty";
              else if (val != pass.text) return "confirm password is wrong ";
            },
          ),
        ],
      ),
    );
  }
}

class LoginForm extends StatelessWidget {
  const LoginForm({
    super.key,
    required this.loginkey,
    required this.email,
    required this.password,
  });
  final Key loginkey;

  final TextEditingController email;

  final TextEditingController password;

  @override
  Widget build(BuildContext context) {
    return Form(
      key: loginkey,
      child: Column(
        children: [
          MainTextField(
            visibleFalse: null,
            visibleTrue: null,
            hint: 'example@gmail.com',
            label: 'Email Address',
            keyboard: TextInputType.emailAddress,
            controller: email,
            validator: (value) {
              if (value!.isEmpty) {
                return "This Field is empty";
              } else if (!value.contains("@")) return "wrong email";
            },
          ),
          const SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Password',
            keyboard: TextInputType.emailAddress,
            controller: password,
            validator: (val) {
              if (val!.isEmpty) {
                return "This Field is empty";
              } else if (val.length < 6)
                return "password should be longer than 6";
            },
          ),
          const SizedBox(height: 10),
          Align(
            alignment: Alignment.centerRight,
            child: TextButton(
                onPressed: () {
                  Navigator.pushNamed(context, ForgotPassword.routeName);
                },
                child: const Text(
                  "Forgot Password",
                  style: TextStyle(color: MainAssets.blue),
                )),
          ),
          const SizedBox(height: 30),
        ],
      ),
    );
  }
}

Map<String, dynamic>? tokenData;

class ProfileForm extends StatefulWidget {
  const ProfileForm({
    super.key,
  });

  @override
  State<ProfileForm> createState() => _ProfileFormState();
}

class _ProfileFormState extends State<ProfileForm> {
  final TextEditingController fname = TextEditingController();
  final TextEditingController lname = TextEditingController();
  final TextEditingController genderrr = TextEditingController();
  final TextEditingController age = TextEditingController();
  final TextEditingController weight = TextEditingController();
  final TextEditingController height = TextEditingController();

  Future<void> _submit() async {
    final String fnamee = fname.text.trim();
    final String lnamee = lname.text.trim();
    final String gender = genderrr.text.trim();
    final String agee = age.text.trim();
    final String weightt = weight.text.trim();
    final String heightt = height.text.trim();

    // Retrieve token from SharedPreferences
    SharedPreferences _prefs = await SharedPreferences.getInstance();
    var _token = _prefs.getString('token');
    print('token: $_token');

    try {
      final response = await http.patch(
        Uri.parse('https://adc-8aar.onrender.com/userinfo'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'firstName': fnamee,
          'lastName': lnamee,
          'gender': gender,
          'age': agee,
          'weight': weightt,
          'height': heightt,
          'token': _token,
        }),
      );
      if (response.statusCode == 200) {
        // Update successful
        print('Update successful');
        // Navigate to the next screen or perform further actions
      } else {
        // Update failed
        print('Update failed. Status code: ${response.statusCode}');
        // Show error message or handle the failure accordingly
      }
    } catch (e) {
      // Handle connection error
      print('Failed to connect to the server: $e');
      // Show error message to the user
    }
  }

  final profilekey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Form(
      key: profilekey,
      child: Column(
        children: [
          MainTextField(
            hint: 'John',
            keyboard: TextInputType.text,
            label: 'First Name',
            controller: fname,
            validator: (val) {
              if (val!.isEmpty) return "First Name is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'Smith',
            keyboard: TextInputType.text,
            label: 'Last Name',
            controller: lname,
            validator: (val) {
              if (val!.isEmpty) return "Last Name is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'Male/Female',
            keyboard: TextInputType.text,
            label: 'Gender',
            controller: genderrr,
            validator: (val) {
              if (val!.isEmpty) return "Gender is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 30',
            keyboard: TextInputType.phone,
            label: 'Age',
            controller: age,
            validator: (val) {
              if (val!.isEmpty) return "Age is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 70 Kg',
            keyboard: TextInputType.phone,
            label: 'Weight',
            controller: weight,
            validator: (val) {
              if (val!.isEmpty) return "Weight is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 177 Cm',
            keyboard: TextInputType.phone,
            label: 'Height',
            controller: height,
            validator: (val) {
              if (val!.isEmpty) return "Height is Empty";
            },
          ),
          const SizedBox(height: 20),
          SizedBox(
            width: 133,
            child: BlueButton(
              buttonName: "Set",
              fn: () async {
                await _submit();
                if (profilekey.currentState!.validate()) {
                  Navigator.pushNamed(context, VerifyPhoneNumber.routeName);
                }
              },
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    fname.dispose();
    lname.dispose();
    genderrr.dispose();
    age.dispose();
    weight.dispose();
    height.dispose();
    super.dispose();
  }
}
