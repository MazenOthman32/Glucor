import 'package:flutter/material.dart';
import 'notification_page_detail.dart';

class NotificationPage extends StatelessWidget {
  static const String routeName = " NotificationPage";
  const NotificationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: NotificationPageDetail(),
    );
  }
}