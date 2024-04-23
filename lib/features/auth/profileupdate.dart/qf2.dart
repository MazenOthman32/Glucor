import 'package:flutter/material.dart';
import '../../../../core/widgets/buttons.dart';
import '../../../../core/widgets/rowas.dart';
import '../../../../core/widgets/textfield.dart';
import '../login/loginpage.dart';

class Qf2 extends StatefulWidget {
  const Qf2({super.key});
  static const String routeName = "qf2";

  @override
  State<Qf2> createState() => _Qf2State();
}

class _Qf2State extends State<Qf2> {
  final TextEditingController type = TextEditingController();

  final TextEditingController years = TextEditingController();

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
                      controller: years,
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
                  fn: () {
                    if (qukey.currentState!.validate()) {
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
    years.dispose();
    super.dispose();
  }
}
