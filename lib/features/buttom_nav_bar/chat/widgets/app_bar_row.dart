import 'package:flutter/material.dart';

import '../../../../core/util/constant.dart';
import '../../../../core/widgets/texts.dart';

class ChatAppBarRow extends StatelessWidget {
  const ChatAppBarRow({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        GestureDetector(
            onTap: () => Navigator.of(context).pop(),
            child: const Icon(Icons.arrow_back)),
        CircleAvatar(
          radius: 20,
          backgroundColor: MainAssets.babyBlue,
          backgroundImage: const AssetImage(
            "assets/images/ff.png",
          ),
        ),
        const SizedBox(width: 10),
        const Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            FontW20(
              text: 'Dr.Mohammed Ahmed ',
            ),
            Text(
              "Online",
              style: TextStyle(color: Colors.grey, fontSize: 15),
            )
          ],
        )
      ],
    );
  }
}
