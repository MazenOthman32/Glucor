import 'package:flutter/material.dart';

class NextMedican extends StatelessWidget {
  const NextMedican({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      height: 50,
      width: size.width / 1.2,
      decoration: BoxDecoration(
          color: Colors.orangeAccent.withOpacity(0.5),
          borderRadius: BorderRadius.circular(10)),
      child: const Text(
        "Next Medication :  12:30",
        style: TextStyle(fontWeight: FontWeight.w700),
      ),
    );
  }
}
