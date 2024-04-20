import 'dart:io';

import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/verfication.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:image_picker/image_picker.dart';
import '../../../core/util/constant.dart';
import '../../../core/widgets/buttons.dart';
import '../../../core/widgets/rowas.dart';

class SetProfile extends StatefulWidget {
   const SetProfile({super.key});
  static const String routeName = "ProfileUpdateOne";

  @override
  State<SetProfile> createState() => _SetProfileState();
}

class _SetProfileState extends State<SetProfile> {
  final profilekey= GlobalKey<FormState>();
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


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(right: 20, left: 20, top: 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const MaianAppBar(
                text: "Profile",
              ),
              const SizedBox(height: 50),
              const Text(
                "Please set up your profile",
                style: TextStyle(color: Colors.grey, fontSize: 16),
              ),
              const SizedBox(height: 40),
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
                          :InkWell(
                            onTap: fetchImage,
                            child: const CircleAvatar(
                                            radius: 50,
                                            backgroundColor: MainAssets.blue,
                                            child: Icon(
                                              Icons.file_upload_outlined,
                                              color: Colors.white,
                                            ),
                                          ),
                          ),
              const SizedBox(height: 75),
              ProfileForm(profilekey: profilekey,),
              const SizedBox(height: 60),
              SizedBox(
                width: 133,
                child: BlueButton(
                  buttonName: "Set",
                  fn: () {
                    if(profilekey.currentState!.validate()){
                      
                    Navigator.pushNamed(context, VerifyPhoneNumber.routeName);
                    }
                  },
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
