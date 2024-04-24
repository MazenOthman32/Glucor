import 'package:flutter/material.dart';
import '../../core/util/constant.dart';
import '../../core/widgets/buttons.dart';

import '../../core/widgets/texts.dart';
import '../onboarding/page_view.dart';

class StartScreen extends StatelessWidget {
  static const String routeName = " start Screen";
  const StartScreen({super.key});

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      body: SizedBox(
        height: double.infinity,
        child: SizedBox(
          width: double.infinity,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: size.height / 20),
              Image.asset(
                "assets/images/logo22.png",
                width: 200,
                height: 160,
              ),
              const SizedBox(height: 27),
              const Text(
                "Welcome To",
                style: TextStyle(fontSize: 46, fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 10),
              const Text(
                "Glucor App",
                style: TextStyle(
                    color: MainAssets.blue,
                    fontSize: 30,
                    fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 15),
              const DescriptionOnBoarding(text: "Follow your Glucose easily"),
              const SizedBox(height: 115),
              BlueButton(
                buttonName: "Get Started",
                fn: () {
                  Navigator.pushNamed(context, PageViewDemo.routeName);
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
