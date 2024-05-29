import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/features/buttom_nav_bar/chat/cahtbot/chatbot.dart';

class MessageModel {
  final String message;
  final String id;
  final Timestamp time;
  
  MessageModel(this.message, this.id ,this.time);
  factory MessageModel.fromJson(jsonData) {
    return MessageModel(jsonData[kMessage], jsonData['id'],jsonData[kCreatedAt] );
  }
}
