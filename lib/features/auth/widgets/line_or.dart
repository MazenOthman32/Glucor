import 'package:flutter/material.dart';

class LineORRow extends StatelessWidget {
  const LineORRow({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          height: 5,
          width: 100,
          child: Divider(
            color: Colors.grey,
            thickness: 1,
            endIndent: 15,
          ),
        ),
        Text("or"),
        SizedBox(
          height: 3,
          width: 100,
          child: Divider(
            color: Colors.grey,
            thickness: 1,
            indent: 15,
          ),
        ),
      ],
    );
  }
}
