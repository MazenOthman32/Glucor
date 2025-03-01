import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../../../../core/util/constant.dart';

class DetailsRow extends StatelessWidget {
  const DetailsRow({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        ProfileD(
          number: "${MainAssets.heartRate} bpm",
          name: 'heart rate',
          icond: FontAwesomeIcons.heartPulse,
        ),
        const SizedBox(
          height: 90,
          child: VerticalDivider(
            color: Colors.white,
            thickness: 1,
            width: 2,
            indent: 20,
            endIndent: 20,
          ),
        ),
        ProfileD(
          number: "${Backend.weight.text} lbs",
          name: 'Weight',
          icond: FontAwesomeIcons.dumbbell,
        )
      ],
    );
  }
}

class ProfileD extends StatelessWidget {
  const ProfileD({
    super.key,
    required this.number,
    required this.name,
    required this.icond,
  });
  final String number;
  final String name;
  final IconData icond;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        FaIcon(
          icond,
          color: Colors.white,
          size: 25,
        ),
        const SizedBox(height: 5),
        Text(
          name,
          style: const TextStyle(color: Colors.white, fontSize: 13),
        ),
        Text(
          number,
          style: const TextStyle(
              color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600),
        ),
      ],
    );
  }
}
