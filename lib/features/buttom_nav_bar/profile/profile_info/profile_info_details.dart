// ignore_for_file: no_leading_underscores_for_local_identifiers
import 'dart:convert';
import 'dart:io';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/buttons.dart';
import 'package:gradution_project/features/buttom_nav_bar/buttom_nav_bar.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path/path.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../../core/widgets/circle_indecator.dart';
import '../../../../core/widgets/rowas.dart';
import '../widgets/profile_info.dart';
import 'package:http/http.dart' as http;

class ProfileInfoDetails extends StatefulWidget {
  const ProfileInfoDetails({super.key});

  @override
  State<ProfileInfoDetails> createState() => _ProfileInfoDetailsState();
}

class _ProfileInfoDetailsState extends State<ProfileInfoDetails> {
  final ImagePicker picker = ImagePicker();

  final TextEditingController time = TextEditingController();
  final personalKey = GlobalKey<FormState>();
  bool isEditable = false;

  FocusNode fnameNode = FocusNode();
  FocusNode lnameNode = FocusNode();
  FocusNode genderNode = FocusNode();
  FocusNode phoneNode = FocusNode();
  FocusNode heightNode = FocusNode();
  FocusNode weightNode = FocusNode();
  FocusNode typeNode = FocusNode();

  Map<String, dynamic>? tokenData;
  late SharedPreferences _prefs;
  String? _token;
  Backend backend = Backend();
  bool isLoading = false;

  @override
  void initState() {
    _getToken();

    super.initState();
  }

  File? file;
  String? url;
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
      });
    }
  }

  Future<void> _getToken() async {
    _prefs = await SharedPreferences.getInstance();
    _token = _prefs.getString('token');

    if (_token != null) {
      Map<String, dynamic> decodedToken = parseJwt(_token!);
      // ignore: avoid_print

      setState(() {
        tokenData = decodedToken;
        Backend.fname.text = '${tokenData?['data'][1]}';
        Backend.lname.text = '${tokenData?['data'][2]}';
        Backend.genderrr.text = '${tokenData?['data'][3]}';
        Backend.phone.text = '${tokenData?['data'][4]}';
        Backend.height.text = '${tokenData?['data'][6]}';
        Backend.weight.text = '${tokenData?['data'][5]}';
        Backend.type.text = '${tokenData?['data'][8]}';
        Backend.type.text = '${tokenData?['data'][8]}';
        time.text = '${tokenData?['data'][9]}';
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

  Future<void> _submit() async {
    final String fnamee = Backend.fname.text.trim();
    final String lnamee = Backend.lname.text.trim();
    final String gender = Backend.genderrr.text.trim();
    final String weightt = Backend.weight.text.trim();
    final String heightt = Backend.height.text.trim();
    final String phonee = Backend.phone.text.trim();
    final String typee = Backend.type.text.trim();
    // refresh token

    try {
      final response = await http.patch(
        Uri.parse('https://adc-8aar.onrender.com/updateinfo'),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'firstName': fnamee,
          'lastName': lnamee,
          'gender': gender,
          'phoneNumber': phonee,
          'weight': weightt,
          'height': heightt,
          'diabetic_type': typee,
          'token': _token
        }),
      );
      if (response.statusCode == 200) {
        isLoading = false;
        setState(() {});
        final responseData = jsonDecode(response.body);
        final token = responseData['token'];

        // Save token to shared preferences
        await _prefs.setString('token', token);
        // ignore: avoid_print
        print('Token: $_token');
        // ignore: avoid_print
        print('update successful');
        // ignore: avoid_print

        // Show success message or perform further actions
      } else {
        isLoading = false;
        setState(() {});
        // Update failed
        // ignore: avoid_print
        print('Update failed. Status code: ${response.statusCode}');
        // Show error message or handle the failure accordingly
      }
    } catch (e) {
      // Handle connection error
      // ignore: avoid_print
      print('Failed to connect to the server: $e');
      // Show error message to the user
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.only(left: 15, right: 15, top: 20),
          child: Stack(
            children: [
              Column(
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
                          url != null
                              ? Container(
                                  height: 100,
                                  width: 100,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(70),
                                    image: DecorationImage(
                                      image: NetworkImage(url!),
                                      fit: BoxFit.cover,
                                    ),
                                  ),
                                )
                              : CircleAvatar(
                                  radius: 50,
                                  backgroundColor: MainAssets.blue,
                                  backgroundImage: NetworkImage(Backend.image ??
                                      'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'),
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
                      style:
                          TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                      textAlign: TextAlign.start,
                    ),
                  ),
                  const SizedBox(height: 20),
                  ProfileEditForm(
                    fnameNode: fnameNode,
                    personalKey: personalKey,
                    
                    fname: Backend.fname,
                    lname: Backend.lname,
                    genderrr: Backend.genderrr,
                    phone: Backend.phone,
                    height: Backend.height,
                    weight: Backend.weight,
                    type: Backend.type, lnameNode: lnameNode, genderNode: genderNode, phoneNode: phoneNode, weightNode: weightNode, heightNode: heightNode, typeNode: typeNode,
                  ),
                  const SizedBox(height: 100),
                  BlueButton(
                    buttonName: "Save changes",
                    fontSize: 15,
                    fn: () async {
                      isLoading = true;
                      setState(() {});
                      await _submit();
                      setState(() {
                        backend.getToken();
                        const sBar = SnackBar(
                          content: Text("Data Changed Successfully"),
                        );
                        ScaffoldMessenger.of(context).showSnackBar(sBar);
                      });
                      // ignore: use_build_context_synchronously
                      Navigator.of(context)
                          .pushReplacementNamed(BottomNavBarScreen.routeName);
                    },
                  ),
                  const SizedBox(height: 50),
                ],
              ),
              isLoading == true ? const CircleIndicator() : const SizedBox()
            ],
          ),
        ),
      ),
    );
  }
}

class ProfileEditForm extends StatelessWidget {
  const ProfileEditForm({
    super.key,
    required this.personalKey,
    required this.fname,
    required this.lname,
    required this.genderrr,
    required this.phone,
    required this.height,
    required this.weight,
    required this.type,
    required this.fnameNode,
    required this.lnameNode,
    required this.genderNode,
    required this.phoneNode,
    required this.weightNode,
    required this.heightNode,
    required this.typeNode,
  });

  final GlobalKey<FormState> personalKey;
  final FocusNode lnameNode;
  final FocusNode fnameNode;
  final FocusNode genderNode;
  final FocusNode phoneNode;
  final FocusNode weightNode;
  final FocusNode heightNode;
  final FocusNode typeNode;

  final TextEditingController fname;
  final TextEditingController lname;
  final TextEditingController genderrr;
  final TextEditingController phone;
  final TextEditingController height;
  final TextEditingController weight;
  final TextEditingController type;

  @override
  Widget build(BuildContext context) {
    return Form(
        key: personalKey,
        child: Column(
          children: [
            RowOfEditProfile(
              focusNode: fnameNode,
              label: "First Name ",
              text: fname,
            ),
            const Dividerr(),
            RowOfEditProfile(
                focusNode: lnameNode, label: "Last Name ", text: lname),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: genderNode,
              label: "Gender ",
              text: genderrr,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: phoneNode,
              label: "Phone ",
              text: phone,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: heightNode,
              label: "Height ",
              text: height,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: weightNode,
              label: "Weight ",
              text: weight,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: typeNode,
              label: "Type of Glucose Level",
              text: type,
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
              focusNode: typeNode,
              label: "First contact ",
              text: weight,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: typeNode,
              label: "Second contact ",
              text: weight,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: typeNode,
              label: "Ambulance",
              text: weight,
            ),
          ],
        ));
  }
}
