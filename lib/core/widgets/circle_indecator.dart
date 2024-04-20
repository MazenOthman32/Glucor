import 'package:flutter/material.dart';

import '../util/constant.dart';

class CircleIndicator extends StatelessWidget {
  const CircleIndicator({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        height: MediaQuery.of(context).size.height,
        child: const Center(
            child: CircularProgressIndicator(
          color: MainAssets.blue,
        )));
  }
}
