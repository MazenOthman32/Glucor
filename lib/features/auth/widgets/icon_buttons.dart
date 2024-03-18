import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';

// ignore: camel_case_types
class Col_icons extends StatelessWidget {
  const Col_icons({
    super.key,
    required this.text,
    required this.icon,
  });

  final String text;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CircleAvatar(
          radius: 20,
          backgroundColor: MainAssets.babyBlue,
          child: Icon(
            icon,
            color: MainAssets.blue,
          ),
        ),
        Text(
          text,
          style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700),
        )
      ],
    );
  }
}
