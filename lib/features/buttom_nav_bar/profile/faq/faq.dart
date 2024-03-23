import 'package:flutter/material.dart';

import 'faq_page.dart';

class Faq extends StatelessWidget {
  static const String routeName = " Faq Screen";
  const Faq({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold (
      body: FaqDetails(),
    );
  }
}