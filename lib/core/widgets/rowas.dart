import 'package:flutter/material.dart';
import '../util/constant.dart';
import 'buttons.dart';

class RowOfLogin extends StatelessWidget {
  const RowOfLogin({
    super.key,
    required this.text,
    required this.buttontext,
    required this.fn,
  });
  final String text;
  final String buttontext;
  final VoidCallback fn;
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(text, style: const TextStyle(color: Colors.grey)),
        GestureDetector(
          onTap: fn,
          child:
              Text(buttontext, style: const TextStyle(color: MainAssets.blue)),
        ),
      ],
    );
  }
}

class MaianAppBar extends StatelessWidget {
  const MaianAppBar({
    super.key,
    required this.text,
  });
  final String text;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const BackButtonn(),
        Text(
          text,
          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700),
        ),
        const SizedBox(
          width: 63,
        )
      ],
    );
  }
}
