import 'package:flutter/material.dart';
import 'package:gradution_project/features/homepage/homepage.dart';
import '../../../../core/widgets/buttons.dart';
import '../../../../core/widgets/rowas.dart';
import '../../../../core/widgets/textfield.dart';

class Qf2 extends StatelessWidget {
  const Qf2({super.key});
  static const String routeName = "qf2";
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
              const Form(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    MainTextField(
                      hint: 'ex : Type1',
                      keyboard: TextInputType.text,
                      label: '',
                    ),
                    SizedBox(height: 70),
                    SizedBox(
                      width: 250,
                      child: Text(
                        "How Long Have You Had this disease ? ",
                        textAlign: TextAlign.start,
                        style: TextStyle(color: Colors.grey, fontSize: 20),
                      ),
                    ),
                    SizedBox(height: 15),
                    MainTextField(
                      hint: 'ex: 2 Years',
                      keyboard: TextInputType.text,
                      label: '',
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 70),
              Center(
                child: BlueButton(
                  buttonName: "Next",
                  fn: () {
                    Navigator.pushNamed(context, HomePageScreen.routeName);
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
