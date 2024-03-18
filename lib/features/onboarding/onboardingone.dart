import 'package:flutter/material.dart';

import '../../core/widgets/onboardingdetails.dart';
import '../../core/widgets/texts.dart';

class OnBoardingOne extends StatelessWidget {
  const OnBoardingOne({super.key});
  static const String routeName = "OnBoardingTwo";

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            OnBoardingImage(
              image: "assets/images/onboardimg2.png",
            ),
            SizedBox(height: 10),
            LabeledOnboarding(text: "Easy, Fast & App"),
            SizedBox(height: 25),
            SizedBox(
              width: 272,
              child: DescriptionOnBoarding(text: "Check glucose easy  "),
            ),
            SizedBox(height: 100 + 60),
          ],
        ),
      ),
    );
  }
}
