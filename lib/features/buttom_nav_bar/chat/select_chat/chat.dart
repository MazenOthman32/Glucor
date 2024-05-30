import 'package:flutter/material.dart';
import 'package:gradution_project/features/testying/chat_model.dart';

import 'chat_detail.dart';

class ChatSelected extends StatelessWidget {
  static const String routeName = " SelectedChat Screen";
  final ChatUser? user;

  const ChatSelected({super.key,  this.user});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ChatSelectedDetails(user: user!,),
    );
  }
}
