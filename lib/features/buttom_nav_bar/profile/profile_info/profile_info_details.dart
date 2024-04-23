// ignore_for_file: no_leading_underscores_for_local_identifiers

import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/buttons.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../../core/widgets/rowas.dart';
import '../widgets/profile_info.dart';

class ProfileInfoDetails extends StatefulWidget {
  const ProfileInfoDetails({super.key});

  @override
  State<ProfileInfoDetails> createState() => _ProfileInfoDetailsState();
}

class _ProfileInfoDetailsState extends State<ProfileInfoDetails> {
  final ImagePicker picker = ImagePicker();
  File? pickedImage;
  fetchImage() async {
    final XFile? image = await picker.pickImage(source: ImageSource.gallery);
    if (image == null) {
      return;
    }
    setState(() {
      pickedImage = File(image.path);
    });
  }

  bool isEditable = false;
  FocusNode focusNode = FocusNode();
  String t = "Mac";
  Map<String, dynamic>? tokenData;

  @override
  void initState() {
    super.initState();
    _getToken();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.only(left: 15, right: 15, top: 20),
          child: Column(
            children: [
              const MaianAppBar(
                text: 'Profile Info',
              ),
              const SizedBox(height: 40),
              InkWell(
                onTap: fetchImage,
                child: SizedBox(
                  height: 100,
                  width: 100,
                  child: Stack(
                    children: [
                      pickedImage != null
                          ? Container(
                              height: 100,
                              width: 100,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(70),
                                image: DecorationImage(
                                  image: FileImage(pickedImage!),
                                  fit: BoxFit.cover,
                                ),
                              ),
                            )
                          : const CircleAvatar(
                              radius: 50,
                              backgroundColor: MainAssets.blue,
                              backgroundImage:
                                  AssetImage("assets/images/profile.jpg"),
                            ),
                      const Positioned(
                        bottom: 0,
                        right: 7,
                        child: CircleAvatar(
                          radius: 13,
                          backgroundColor: MainAssets.blue,
                          child: Icon(
                            Icons.edit,
                            color: Colors.white,
                            size: 18,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 50),
              const Align(
                alignment: Alignment.topLeft,
                child: Text(
                  "Personal Data",
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                  textAlign: TextAlign.start,
                ),
              ),
              const SizedBox(height: 20),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "First Name ",
                text: '${tokenData?['data'][1]}',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Last Name ",
                text: '${tokenData?['data'][2]}',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Gender ",
                text: '${tokenData?['data'][3]}',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Email",
                text: '${tokenData?['data'][0]}',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Phone ",
                text: '${tokenData?['data'][4]}',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Height ",
                text: '${tokenData?['data'][6]}',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Weight ",
                text: '${tokenData?['data'][5]}',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Type of Glucose Level",
                text: 'Type 1',
              ),
              const SizedBox(height: 50),
              const Align(
                alignment: Alignment.topLeft,
                child: Text(
                  "Important Contacts",
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                  textAlign: TextAlign.start,
                ),
              ),
              const SizedBox(height: 20),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "First contact ",
                text: '01270498060',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Second contact ",
                text: '01270498060',
              ),
              const Dividerr(),
              RowOfEditProfile(
                focusNode: focusNode,
                label: "Ambulance",
                text: '01270498060',
              ),
              const SizedBox(height: 100),
              BlueButton(
                buttonName: "Save changes",
                fontSize: 15,
                fn: () {
                  setState(() {
                    const sBar = SnackBar(
                      content: Text("Data Changed Successfully"),
                    );
                    ScaffoldMessenger.of(context).showSnackBar(sBar);
                  });
                  Navigator.pop(context);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _getToken() async {
    var _prefs = await SharedPreferences.getInstance();
    var _token = _prefs.getString('token');

    if (_token != null) {
      Map<String, dynamic> decodedToken = parseJwt(_token);
      // ignore: avoid_print
      print('Token profile info: $_token');

      setState(() {
        tokenData = decodedToken;
      });
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
