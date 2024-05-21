// ignore_for_file: unnecessary_nullable_for_final_variable_declarations, avoid_print

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:gradution_project/core/util/constant.dart';

import '../profileupdate.dart/set_profile.dart';

class GoogleButton extends StatefulWidget {
  const GoogleButton({
    super.key,
  });

  @override
  State<GoogleButton> createState() => _GoogleButtonState();
}

class _GoogleButtonState extends State<GoogleButton> {
  Backend backend = Backend();

  Future signInWithGoogle() async {
    final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();
    if (googleUser == null) {
      return;
    }
    final GoogleSignInAuthentication? googleAuth =
        await googleUser.authentication;

    final credential = GoogleAuthProvider.credential(
      accessToken: googleAuth?.accessToken,
      idToken: googleAuth?.idToken,
    );

    // Once signed in, return the UserCredential
    await FirebaseAuth.instance.signInWithCredential(credential);
    Backend.fname.text = googleUser.displayName!.split(' ').first.toString();
    Backend.lname.text = googleUser.displayName!.split(' ').last.toString();
    Backend.email.text = googleUser.email;
    print(googleUser.photoUrl);

    Navigator.pushReplacement(
      // ignore: use_build_context_synchronously
      context,
      MaterialPageRoute(builder: (context) => const SetProfile()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: 250,
        child: Card(
          child: TextButton(
              style: TextButton.styleFrom(
                foregroundColor: Colors.black,
              ),
              onPressed: () {
                signInWithGoogle();
              },
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CircleAvatar(
                    backgroundColor: Colors.white,
                    radius: 15,
                    foregroundImage: AssetImage(
                      "assets/images/icons/google.png",
                    ),
                  ),
                  SizedBox(width: 15),
                  Text(
                    "Continue with Google",
                    style: TextStyle(fontSize: 12),
                  )
                ],
              )),
        ),
      ),
    );
  }
}
