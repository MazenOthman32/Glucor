import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/textfield.dart';
import '../../../../model/messages_model.dart';
import '../../../testying/messages_model/chat_model.dart';
import '../widgets/app_bar_row.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:image_picker/image_picker.dart';

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
  final ImagePicker _picker = ImagePicker();

  Future<void> _pickImage() async {
    final XFile? image = await _picker.pickImage(source: ImageSource.gallery);

    if (image != null) {
      // Upload the image to Firebase Storage
      String imageUrl = await _uploadImageToFirebase(image);
      // Send the image URL as a message
      messages.add({
        kMessage: imageUrl,
        kCreatedAt: DateTime.now(),
        'id': Backend.email.text,
        'type': 'image'
      });
    }
  }

  Future<String> _uploadImageToFirebase(XFile image) async {
    Reference storageReference = FirebaseStorage.instance
        .ref()
        .child('chat_images/${DateTime.now().millisecondsSinceEpoch}');
    UploadTask uploadTask = storageReference.putFile(File(image.path));
    TaskSnapshot storageTaskSnapshot = await uploadTask;
    String downloadUrl = await storageTaskSnapshot.ref.getDownloadURL();
    return downloadUrl;
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<QuerySnapshot>(
        stream: messages.orderBy(kCreatedAt).snapshots(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            
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
                      ChatAppBarRow(
                        user: widget.user,
                      ),
                      const SizedBox(height: 30),
                      Expanded(
                          child: ListView.separated(
                              controller: _scrollController,
                              itemBuilder: (context, index) {
                                var message = messagesList[index];
                                if (message.id == Backend.email.text) {
                                  return message.type == 'image'
                                      ? ImageMessageItem(messageModel: message)
                                      : Friendmessage(messageModel: message);
                                } else {
                                  return message.type == 'image'
                                      ? ImageMessageItem(messageModel: message)
                                      : MessageItem(messageModel: message);
                                }
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
                            'id': Backend.email.text,
                            'type': 'text'
                          });

                          widget.message.clear();
                          _scrollController.jumpTo(
                              _scrollController.position.maxScrollExtent);
                        },
                        widget: widget,
                        fn: () {
                          widget.message.clear();
                        },
                        onImagePicked: _pickImage,
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
    required this.onImagePicked,
  });
  final String? Function(String?) onSubmitted;
  final ChatSelectedDetails widget;
  final VoidCallback fn;
  final VoidCallback onImagePicked;

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
              suffixIcon: GestureDetector(
                onTap: onImagePicked,
                child: Container(
                  padding: const EdgeInsets.all(10),
                  child: const Icon(
                    Icons.image,
                    color: MainAssets.blue,
                    size: 20,
                  ),
                ),
              ),

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

class ImageMessageItem extends StatelessWidget {
  const ImageMessageItem({super.key, required this.messageModel});
  final MessageModel messageModel;

  void _showImageDialog(BuildContext context, String imageUrl) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return Dialog(
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Image.network(imageUrl),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: messageModel.id == Backend.email.text
          ? Alignment.bottomRight
          : Alignment.bottomLeft,
      child: GestureDetector(
        onTap: () => _showImageDialog(context, messageModel.message),
        child: Container(
          margin: const EdgeInsets.symmetric(vertical: 10),
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            color: messageModel.id == Backend.email.text
                ? MainAssets.blue
                : MainAssets.babyBlue,
            borderRadius: BorderRadius.circular(15),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Image.network(
                messageModel.message,
                width: 150,
                height: 150,
                fit: BoxFit.cover,
              ),
              Text(
                "${messageModel.time.toDate().hour}:${messageModel.time.toDate().minute}",
                textAlign: TextAlign.end,
                style: const TextStyle(color: Colors.black, fontSize: 10),
              ),
            ],
          ),
        ),
      ),
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
