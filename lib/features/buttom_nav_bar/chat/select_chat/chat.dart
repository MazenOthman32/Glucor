import 'package:flutter/material.dart';

import 'chat_detail.dart';

class ChatSelected extends StatelessWidget {
  static const String routeName = " SelectedChat Screen";

  const ChatSelected({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ChatSelectedDetails(),
    );
  }
}
