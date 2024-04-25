import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class MainAssets {
  static Color babyBlue = const Color(0xffA4DCDD).withOpacity(0.8);
  static const Color blue = Color(0xff54B6C3);
  static  bool notificationIsOpend=true;
  static String name  = " ";
  // old Color 0xff4c8ca4
  // ************ Green Colors ****************
  // Green : 0xff46C4B9
  // baby Green :0xffa4dcde
}



class Backend{


static  TextEditingController fname = TextEditingController();
static   TextEditingController lname = TextEditingController();
static  TextEditingController genderrr = TextEditingController();
 static TextEditingController weight = TextEditingController();
static   TextEditingController height = TextEditingController();
static   TextEditingController phone = TextEditingController();
static Map<String, dynamic>? tokenData;
static late SharedPreferences _prefs;
static String? token;
  Future<void> getToken() async {

    _prefs = await SharedPreferences.getInstance();
    token = _prefs.getString('token');

    if (token != null) {
      Map<String, dynamic> decodedToken = parseJwt(token!);
      tokenData = decodedToken;
        fname.text = '${tokenData?['data'][1]}';
        lname.text = '${tokenData?['data'][2]}';
        genderrr.text = '${tokenData?['data'][3]}';
        phone.text = '${tokenData?['data'][4]}';
        height.text = '${tokenData?['data'][6]}';
        weight.text = '${tokenData?['data'][5]}';
        MainAssets.name =fname.text;
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