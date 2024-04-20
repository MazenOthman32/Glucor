import 'package:flutter/material.dart';
import '../util/constant.dart';

class BlueButton extends StatelessWidget {
  const BlueButton(
      {super.key,
      required this.buttonName,
      required this.fn,
      this.opacity,
      this.fontSize});
  final String buttonName;
  final VoidCallback fn;
  final double? opacity;
  final double? fontSize;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: fn,
      child: Container(
        height: 59,
        width: 201,
        decoration: BoxDecoration(boxShadow: [
          BoxShadow(
              blurRadius: 200,
              color: MainAssets.blue.withOpacity(opacity ?? 0.8))
        ]),
        child: Container(
          alignment: Alignment.center,
          height: 72,
          width: 201,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18), color: MainAssets.blue),
          child: Text(
            buttonName,
            style: TextStyle(
                color: Colors.white,
                fontSize: fontSize ?? 17,
                fontWeight: FontWeight.w500),
          ),
        ),
      ),
    );
  }
}

class SmallBlueButton extends StatelessWidget {
  const SmallBlueButton({
    super.key,
    required this.buttonName,
    required this.fn,
    this.opacity,
  });
  final String buttonName;
  final VoidCallback fn;
  final double? opacity;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: fn,
      child: Container(
        height: 59,
        width: 153,
        decoration: BoxDecoration(boxShadow: [
          BoxShadow(
              blurRadius: 200,
              color: MainAssets.blue.withOpacity(opacity ?? 0.8))
        ]),
        child: Container(
          alignment: Alignment.center,
          height: 72,
          width: 201,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18), color: MainAssets.blue),
          child: Text(
            buttonName,
            style: const TextStyle(
                color: Colors.white, fontSize: 18, fontWeight: FontWeight.w500),
          ),
        ),
      ),
    );
  }
}

class BackButtonn extends StatelessWidget {
  const BackButtonn({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.pop(context);
      },
      child: Container(
        height: 34,
        width: 63,
        decoration: BoxDecoration(
            color: MainAssets.blue, borderRadius: BorderRadius.circular(30)),
        child: const Icon(
          Icons.arrow_back_outlined,
          color: Colors.white,
        ),
      ),
    );
  }
}
