import 'package:flutter/material.dart';

class GoogleAndFaceBook extends StatelessWidget {
  const GoogleAndFaceBook({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        CircleAvatar(
          backgroundColor: Colors.white,
          radius: 25,
          foregroundImage: AssetImage(
            "assets/images/icons/google.png",
          ),
        ),
        CircleAvatar(
          backgroundColor: Colors.white,
          radius: 25,
          foregroundImage: AssetImage(
            "assets/images/icons/Facebook.png",
          ),
        ),
      ],
    );
  }
}
