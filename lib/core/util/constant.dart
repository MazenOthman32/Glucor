import 'dart:convert';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';



const String spOpenApiKey =
    'sk-proj-FoUUL9G7ySBwjQHSwJuOT3BlbkFJJBsQCejNZWzuA09TRc68';

class MainAssets {
  static Color babyBlue = const Color(0xffA4DCDD).withOpacity(0.8);
  static const Color blue = Color(0xff54B6C3);
  static bool notificationIsOpend = true;
  static String name = " ";
  // old Color 0xff4c8ca4
  // ************ Green Colors ****************
  // Green : 0xff46C4B9
  // baby Green :0xffa4dcde
}

class Backend {
  static TextEditingController fname = TextEditingController();
  static TextEditingController lname = TextEditingController();
  static TextEditingController email = TextEditingController();
  static TextEditingController genderrr = TextEditingController();
  static TextEditingController weight = TextEditingController();
  static TextEditingController height = TextEditingController();
  static TextEditingController phone = TextEditingController();
  static TextEditingController type = TextEditingController();
  static TextEditingController time = TextEditingController();

  static Map<String, dynamic>? tokenData;
  static late SharedPreferences _prefs;
  static String? token;

  Future<void> getToken() async {
    _prefs = await SharedPreferences.getInstance();
    token = _prefs.getString('token');
    if (token != null) {
      Map<String, dynamic> decodedToken = parseJwt(token!);
      tokenData = decodedToken;
      email.text = '${tokenData?['data'][0]}';
      fname.text = '${tokenData?['data'][1]}';
      lname.text = '${tokenData?['data'][2]}';
      genderrr.text = '${tokenData?['data'][3]}';
      phone.text = '${tokenData?['data'][4]}';
      height.text = '${tokenData?['data'][6]}';
      weight.text = '${tokenData?['data'][5]}';
      type.text = '${tokenData?['data'][8]}';
      time.text = '${tokenData?['data'][9]}';

      MainAssets.name = fname.text;
      // ignore: avoid_print
    }
  }

  Map<String, dynamic> parseJwt(String token) {
    final parts = token.split('.');
    if (parts.length != 3) {
      throw Exception('invalid token');
    }

    final payload = _decodeBase64(parts[1]);
    final payloadMap = json.decode(payload);
    if (payloadMap is! Map<String, dynamic>) {
      throw Exception('invalid payload');
    }

    return payloadMap;
  }

  String _decodeBase64(String str) {
    String output = str.replaceAll('-', '+').replaceAll('_', '/');

    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw Exception('Illegal base64url string!"');
    }

    return utf8.decode(base64Url.decode(output));
  }
}

class ReportModel {
  static List lll = [];
  Future<void> fetchDataAndPrint() async {
    try {
      // Get a reference to the Firestore instance
      FirebaseFirestore firestore = FirebaseFirestore.instance;

      // Replace 'collectionPath' with your collection path
      String collectionPath = 'readingGraph';

      // Replace 'email' with the document ID
      String documentId = Backend.email.text;
      // Get reference to the document
      DocumentSnapshot documentSnapshot =
          await firestore.collection(collectionPath).doc(documentId).get();
      // Check if document exists
      if (documentSnapshot.exists) {
        // Retrieve data from the document
        Map<String, dynamic> data =
            documentSnapshot.data() as Map<String, dynamic>;
        List<dynamic> values = data.values.toList();
        // Convert values to integers
        List<int> intValues = values.map((value) => value as int).toList();
        // You can assign intValues to list if you want
        lll = intValues;
        // ignore: avoid_print
        print(lll);
      } else {
        // ignore: avoid_print
        print('Document does not exist');
      }
    } catch (e) {
      // ignore: avoid_print
      print('Error fetching data: $e');
    }
  }
}
