import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/textfield.dart';

import '../widgets/app_bar_row.dart';

// ignore: must_be_immutable
class ChatSelectedDetails extends StatefulWidget {
  ChatSelectedDetails({super.key});

  @override
  State<ChatSelectedDetails> createState() => _ChatSelectedDetailsState();

  TextEditingController message = TextEditingController();
}

class _ChatSelectedDetailsState extends State<ChatSelectedDetails> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.only(left: 15, right: 15, top: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const ChatAppBarRow(),
            const SizedBox(height: 30),
            Expanded(
                child: ListView.separated(
                    itemBuilder: (context, index) => const MessageItem(),
                    separatorBuilder: (context, index) =>
                        const SizedBox(height: 10),
                    itemCount: 15)),
            SendMessageRow(
              widget: widget,
              fn: () {
                widget.message.clear();
              },
            )
          ],
        ),
      ),
    );
  }
}

class SendMessageRow extends StatelessWidget {
  const SendMessageRow({
    super.key,
    required this.widget,
    required this.fn,
  });

  final ChatSelectedDetails widget;
  final VoidCallback fn;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Container(
            margin: const EdgeInsets.only(top: 10, bottom: 10, right: 10),
            child: SendMessageTextField(
              hint: 'message',
              controller: widget.message,
              // ignore: body_might_complete_normally_nullable
              vaidator: (mesage) {
                if (mesage!.isEmpty) {
                  return "This Field is empty";
                }
              },
            ),
          ),
        ),
        GestureDetector(
          onTap: fn,
          child: Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
                color: MainAssets.babyBlue,
                borderRadius: BorderRadius.circular(20)),
            child: const Icon(
              Icons.send,
              size: 20,
            ),
          ),
        )
      ],
    );
  }
}

class MessageItem extends StatelessWidget {
  const MessageItem({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomLeft,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 20),
        decoration: BoxDecoration(
          color: MainAssets.babyBlue,
          borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(30),
              topRight: Radius.circular(30),
              bottomRight: Radius.circular(30)),
        ),
        child: const Text(
          "Hello Doctor ,I'm John Hello Doctor  ",
          style: TextStyle(color: Colors.black),
        ),
      ),
    );
  }
}
