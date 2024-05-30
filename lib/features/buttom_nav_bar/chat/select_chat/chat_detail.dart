import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/textfield.dart';
import '../../../../model/messages_model.dart';
import '../../../testying/chat_model.dart';
import '../widgets/app_bar_row.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

// ignore: must_be_immutable
class ChatSelectedDetails extends StatefulWidget {
  ChatSelectedDetails({super.key, required this.user});
  final ChatUser user;

  @override
  State<ChatSelectedDetails> createState() => _ChatSelectedDetailsState();

  TextEditingController message = TextEditingController();
}

class _ChatSelectedDetailsState extends State<ChatSelectedDetails> {
  CollectionReference messages =
      FirebaseFirestore.instance.collection(kMessageCollectiion);
  final _scrollController = ScrollController();

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<QuerySnapshot>(
        stream: messages.orderBy(kCreatedAt).snapshots(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            // ignore: avoid_print
            print(snapshot.data!.docs[0]['message']);
            List<MessageModel> messagesList = [];
            for (int i = 0; i < snapshot.data!.docs.length; i++) {
              messagesList.add(MessageModel.fromJson(snapshot.data!.docs[i]));
            }
            return SafeArea(
              child: Padding(
                padding: const EdgeInsets.only(left: 15, right: 15, top: 20),
                child: SizedBox(
                  width: double.infinity,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                       ChatAppBarRow(user: widget.user,),
                      const SizedBox(height: 30),
                      Expanded(
                          child: ListView.separated(
                              controller: _scrollController,
                              itemBuilder: (context, index) {
                                return messagesList[index].id ==
                                        Backend.email.text
                                    ? Friendmessage(
                                        messageModel: messagesList[index],
                                      )
                                    : MessageItem(
                                        messageModel: messagesList[index],
                                      );
                              },
                              separatorBuilder: (context, index) =>
                                  const SizedBox(height: 10),
                              itemCount: messagesList.length)),
                      SendMessageRow(
                        // ignore: body_might_complete_normally_nullable
                        onSubmitted: (data) {
                          messages.add({
                            kMessage: data,
                            kCreatedAt: DateTime.now(),
                            'id': Backend.email.text
                          });

                          widget.message.clear();
                          _scrollController.jumpTo(
                              _scrollController.position.maxScrollExtent);
                        },
                        widget: widget,
                        fn: () {
                          widget.message.clear();
                        },
                      )
                    ],
                  ),
                ),
              ),
            );
          } else {
            return const Text("Loading");
          }
        });
  }
}

class SendMessageRow extends StatelessWidget {
  const SendMessageRow({
    super.key,
    required this.widget,
    required this.fn,
    required this.onSubmitted,
  });
  final String? Function(String?) onSubmitted;

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
              onSubmitted: onSubmitted,
              hint: 'message',
              controller: widget.message,
              // ignore: body_might_complete_normally_nullable
              validator: (mesage) {
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
  const MessageItem({super.key, required this.messageModel});
  final MessageModel messageModel;

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
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                messageModel.message,
                style: const TextStyle(color: Colors.black),
              ),
              Text(
                "${messageModel.time.toDate().hour}:${messageModel.time.toDate().minute}",
                textAlign: TextAlign.end,
                style: const TextStyle(color: Colors.black, fontSize: 10),
              ),
            ],
          )),
    );
  }
}

class Friendmessage extends StatelessWidget {
  const Friendmessage({super.key, required this.messageModel});
  final MessageModel messageModel;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomRight,
      child: Container(
          padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 20),
          decoration: const BoxDecoration(
            color: MainAssets.blue,
            borderRadius: BorderRadius.only(
                topLeft: Radius.circular(30),
                topRight: Radius.circular(30),
                bottomLeft: Radius.circular(30)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                messageModel.message,
                style: const TextStyle(color: Colors.black),
              ),
              Text(
                "${messageModel.time.toDate().hour}:${messageModel.time.toDate().minute}",
                textAlign: TextAlign.end,
                style: const TextStyle(color: Colors.black, fontSize: 10),
              ),
            ],
          )),
    );
  }
}
