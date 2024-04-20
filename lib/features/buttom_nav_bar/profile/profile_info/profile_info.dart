import 'package:flutter/material.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/profile_info/profile_info_details.dart';

class ProfileInfo extends StatelessWidget {
  static const routeName = 'Profile Info';
  const ProfileInfo({super.key});

  @override
  Widget build(BuildContext context) {
    return  const Scaffold(
      body: ProfileInfoDetails(),
    );
  }
}
