import 'package:flutter/material.dart';

class GoogleAndFaceBook extends StatelessWidget {
  const GoogleAndFaceBook({
    super.key, required this.google, required this.face,
  });
  final VoidCallback google;
  final VoidCallback face;
  

  @override
  Widget build(BuildContext context) {
    return  Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        GestureDetector(
          onTap:google ,
          child: const CircleAvatar(
            backgroundColor: Colors.white,
            radius: 25,
            foregroundImage: AssetImage(
              "assets/images/icons/google.png",
            ),
          ),
        ),
        GestureDetector(
          onTap: face,
          child: const CircleAvatar(
            backgroundColor: Colors.white,
            radius: 25,
            foregroundImage: AssetImage(
              "assets/images/icons/Facebook.png",
            ),
          ),
        ),
      ],
    );
  }
}
