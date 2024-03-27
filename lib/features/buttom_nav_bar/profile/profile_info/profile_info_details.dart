// ignore_for_file: must_be_immutable
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/buttons.dart';
import '../../../../core/widgets/rowas.dart';
import '../widgets/profile_info.dart';

class ProfileInfoDetails extends StatelessWidget {
  ProfileInfoDetails({super.key});
  
  bool isEditable = false;
  FocusNode focusNode = FocusNode();
  String t="Mac";

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15),
          child: Column(
            children: [
              const MaianAppBar(
                text: 'Profile Info',
              ),
              const SizedBox(height: 40),
              const SizedBox(
                height: 100,
                width: 100,
                child: Stack(
                  children: [
                    CircleAvatar(
                      radius: 50,
                      backgroundColor: MainAssets.blue,
                      backgroundImage: AssetImage("assets/images/profile.jpg"),
                    ),
                    Positioned(
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
              const SizedBox(height: 50),
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
                  focusNode: focusNode, label: "Weight", text: '75'),
              const SizedBox(height: 50),
              SmallBlueButton(buttonName: "Save changes", fn: () {}),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
