import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/texts.dart';
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

class SeeAllRow extends StatelessWidget {
  const SeeAllRow({
    super.key,
    required this.label,
    required this.fn,
  });
  final String label;
  final VoidCallback fn;

  @override
  Widget build(BuildContext context) {
    return Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
      DescriptionOnBoarding(
        text: label,
        size: 18,
        fontWeight: FontWeight.w500,
      ),
      Padding(
        padding: const EdgeInsets.only(right: 8.0),
        child: Row(
          children: [
            const Text(
              "See All",
              style: TextStyle(color: MainAssets.blue),
            ),
            InkWell(
              onTap: fn,
              child: const Icon(
                Icons.keyboard_arrow_right_sharp,
                size: 18,
                color: MainAssets.blue,
              ),
            ),
          ],
        ),
      )
    ]);
  }
}
