import 'package:flutter/material.dart';
import '../../core/widgets/onboardingdetails.dart';
import '../../core/widgets/texts.dart';
class OnBoardingTwo extends StatelessWidget {
  const OnBoardingTwo({super.key});
  static const String routeName = "OnBoardingThree";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const OnBoardingImage(
              image: "assets/images/onboarding1png.png",
            ),
            const SizedBox(height: 10),
            const LabeledOnboarding(text: "Be Careful"),
            const SizedBox(height: 25),
            SizedBox(
              width: 272,
              child: RichText(
                textAlign: TextAlign.center,
                text: const TextSpan(
                    style: TextStyle(
                        color: Colors.grey,
                        fontSize: 13,
                        fontWeight: FontWeight.w600),
                    children: [
                      TextSpan(text: " check your blood sugar every day"),
                      
                    ]),
              ),
            ),
            const SizedBox(height: 160),
          ],
        ),
      ),
    );
  }
}
