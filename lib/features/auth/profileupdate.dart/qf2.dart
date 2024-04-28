import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../../core/widgets/buttons.dart';
import '../../../../core/widgets/rowas.dart';
import '../../../../core/widgets/textfield.dart';
import 'package:http/http.dart' as http;
import '../login/loginpage.dart';

class Qf2 extends StatefulWidget {
  const Qf2({super.key});
  static const String routeName = "qf2";

  @override
  State<Qf2> createState() => _Qf2State();
}

class _Qf2State extends State<Qf2> {
  final TextEditingController type = TextEditingController();

  final TextEditingController time = TextEditingController();

   Future<void> _submit() async {
    final String typee = type.text.trim();
    final String timee = time.text.trim();

    // Retrieve token from SharedPreferences
    // ignore: no_leading_underscores_for_local_identifiers
    SharedPreferences _prefs = await SharedPreferences.getInstance();
    // ignore: no_leading_underscores_for_local_identifiers
    var _token = _prefs.getString('token');
    // ignore: avoid_print
    print('token: $_token');

    try {
      final response = await http.patch(
        Uri.parse('https://adc-8aar.onrender.com/diabeticInfo'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'diabetic_type':typee,
          'diabetic_time': timee,
          'token': _token,
        }),
      );
    if (response.statusCode == 200) {
      // Update successful
      // ignore: avoid_print
      print('Update successful');
      // Navigate to the next screen or perform further actions
    } else {
      // Update failed
      // ignore: avoid_print
      print('Update failed. Status code: ${response.statusCode}');
      // Show error message or handle the failure accordingly
    }
  } catch (e) {
    // Handle connection error
    // ignore: avoid_print
    print('Failed to connect to the server: $e');
    // Show error message to the user
  }
}
  final qukey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(right: 20, left: 20, top: 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const MaianAppBar(
                text: "Details About You",
              ),
              const SizedBox(height: 45),
              const SizedBox(
                width: 250,
                child: Text(
                  "What Type of Diabetes Do You Have ? ",
                  textAlign: TextAlign.start,
                  style: TextStyle(color: Colors.grey, fontSize: 20),
                ),
              ),
              Form(
                key: qukey,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    MainTextField(
                      hint: 'ex : Type1',
                      keyboard: TextInputType.text,
                      // ignore: body_might_complete_normally_nullable
                      label: '',
                      controller: type,
                      // ignore: body_might_complete_normally_nullable
                      validator: (val) {
                        if (val!.isEmpty) {
                          return "this Question is Required";
                        }
                      },
                    ),
                    const SizedBox(height: 70),
                    const SizedBox(
                      width: 250,
                      child: Text(
                        "How Long Have You Had this disease ? ",
                        textAlign: TextAlign.start,
                        style: TextStyle(color: Colors.grey, fontSize: 20),
                      ),
                    ),
                    const SizedBox(height: 15),
                    MainTextField(
                      hint: 'ex: 2 Years',
                      keyboard: TextInputType.text,
                      // ignore: body_might_complete_normally_nullable
                      label: '',
                      controller: time,
                      // ignore: body_might_complete_normally_nullable
                      validator: (val) {
                        if (val!.isEmpty) {
                          return "This Question is Required";
                        }
                      },
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 70),
              Center(
                child: BlueButton(
                  buttonName: "Next",
                  fn: () async{
                    await _submit();
                    if (qukey.currentState!.validate()) {
                      // ignore: use_build_context_synchronously
                      Navigator.pushNamed(context, LoginScreen.routeName);
                    }
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    type.dispose();
    time.dispose();
    super.dispose();
  }
}
