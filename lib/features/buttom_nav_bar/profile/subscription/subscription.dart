import 'package:flutter/material.dart';

import 'subscription_home.dart';

class Subscription extends StatelessWidget {
  static const String routeName = " Subscription Screen";
  const Subscription({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SubscriptionHome(),
    );
  }
}