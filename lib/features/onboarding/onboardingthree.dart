import 'package:flutter/material.dart';
import '../../core/widgets/onboardingdetails.dart';
import '../../core/widgets/texts.dart';

class OnBoardingThree extends StatelessWidget {
  const OnBoardingThree({super.key});
  static const String routeName = "OnBoardingfourf";
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            OnBoardingImage(
              image: "assets/images/ff.png",
            ),
            LabeledOnboarding(
            text: "We Help You",
            ),
            SizedBox(height: 25),
            SizedBox(
              width: 346,
              child: DescriptionOnBoarding(
                text:
                    "if you are in danger we will help you by calling Ambulance",
              ),
            ),
            SizedBox(height: 160),
          ],
        ),
      ),
    );
  }
}
