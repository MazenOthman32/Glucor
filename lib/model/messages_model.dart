import 'package:cloud_firestore/cloud_firestore.dart';
class MessageModel {
  final String id;
  final String message;
  final Timestamp time;
  final String type;

  MessageModel({
    required this.id,
    required this.message,
    required this.time,
    required this.type,
  });

  factory MessageModel.fromJson(DocumentSnapshot doc) {
    return MessageModel(
      id: doc['id'],
      message: doc['message'],
      time: doc['createdAt'],
      type: doc['type'] ?? 'text', // Default to 'text' if 'type' field is not present
    );
  }
}
