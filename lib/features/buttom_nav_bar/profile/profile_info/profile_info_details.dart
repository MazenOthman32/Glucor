// ignore_for_file:
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/buttons.dart';
import 'package:image_picker/image_picker.dart';
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
                                      fit: BoxFit.cover)),
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
                          ))
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
                  focusNode: focusNode, label: "First Name ", text: 'John'),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode, label: "Last Name ", text: t),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode, label: "Email", text: 'John@gmail.com'),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode, label: "Phone ", text: '01234567890'),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode, label: "Height ", text: '180'),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode, label: "Weight ", text: '80'),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode,
                  label: "Type of Gloucose Level",
                  text: 'Type 1'),
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
                  text: '01270498060'),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode,
                  label: "Second contact ",
                  text: '01270498060'),
              const Dividerr(),
              RowOfEditProfile(
                  focusNode: focusNode,
                  label: "Ambulance",
                  text: '01270498060'),
              const SizedBox(height: 100),
              BlueButton(
                  buttonName: "Save changes",
                  fontSize: 15,
                  fn: () {
                    setState(() {
                      const sBar = SnackBar(
                        content: Text("Data Changed Succefully"),
                      );
                      ScaffoldMessenger.of(context).showSnackBar(sBar);
                    });
                    Navigator.pop(context);
                  }),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
