import 'dart:io';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/widgets/forms.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path/path.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../../../core/util/constant.dart';
import '../../../core/widgets/rowas.dart';

class SetProfile extends StatefulWidget {
  const SetProfile({super.key});
  static const String routeName = "ProfileUpdateOne";

  @override
  State<SetProfile> createState() => _SetProfileState();
}

class _SetProfileState extends State<SetProfile> {
  // final email = ModalRoute.of(context)!.settings.arguments as String;

  File? file;
  String? url;
  @override
  void initState() {
    super.initState();
    fetchProfilePicUrl();
  }

  fetchImage() async {
    final ImagePicker picker = ImagePicker();
    final XFile? image = await picker.pickImage(source: ImageSource.gallery);
    if (image == null) {
      return;
    }
    file = File(image.path);
    var imageName = basename(image.path);
    var refStorage = FirebaseStorage.instance.ref('profile_pics/$imageName');
    await refStorage.putFile(file!);
    url = await refStorage.getDownloadURL();
    await saveImageUrlToFirestore(url!); // Save the URL to Firestore
    setState(() {});
  }

  Future<void> saveImageUrlToFirestore(String url) async {
    final userDoc = FirebaseFirestore.instance.collection('users').doc(
        Backend.email.text); // Replace 'uniqueUserId' with the actual user ID
    await userDoc.set({
      'profilePicUrl': url,
    }, SetOptions(merge: true));
  }

  Future<void> fetchProfilePicUrl() async {
    final userDoc = FirebaseFirestore.instance.collection('users').doc(
        Backend.email.text); // Replace 'uniqueUserId' with the actual user ID
    final snapshot = await userDoc.get();
    if (snapshot.exists) {
      setState(() {
        url = snapshot.data()?['profilePicUrl'];
        Backend.image = url;
      });
    }
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
              url != null
                  ? Container(
                      height: 100,
                      width: 100,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(70),
                          image: DecorationImage(
                              image: NetworkImage(url!), fit: BoxFit.cover)),
                    )
                  : InkWell(
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
              const ProfileForm(),
              const SizedBox(height: 60),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
