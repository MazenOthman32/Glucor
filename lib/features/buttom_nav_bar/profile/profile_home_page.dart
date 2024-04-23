import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/features/auth/login/loginpage.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/faq/faq.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/profile_info/profile_info.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/report/report.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/subscription/subscription.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/widgets/list_of_profile_options.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ProfileHomePage extends StatelessWidget {
  const ProfileHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: MainAssets.blue,
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(top: 20.0),
          child: Column(
            children: [
              SizedBox(
                height: size.height / 2,
                child: const Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    CircleAvatar(
                      radius: 50,
                      backgroundImage: AssetImage("assets/images/profile.jpg"),
                    ),
                    SizedBox(height: 20),
                    Text(
                      "John Mac",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: 20,
                      ),
                    ),
                    SizedBox(height: 30),
                    // DetailsRow()
                  ],
                ),
              ),
              Container(
                height: size.height / 2,
                padding: const EdgeInsets.only(top: 30),
                decoration: const BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(50),
                    topRight: Radius.circular(50),
                  ),
                ),
                child: Column(
                  children: [
                    ListOfProfileOptions(
                      iconData: FontAwesomeIcons.solidUser,
                      name: 'Profile Info',
                      fn: () {
                        Navigator.pushNamed(context, ProfileInfo.routeName);
                      },
                    ),
                    const Divider(),
                    ListOfProfileOptions(
                      iconData: FontAwesomeIcons.notesMedical,
                      name: 'Report',
                      fn: () {
                        Navigator.pushNamed(context, Report.routeName);
                      },
                    ),
                    const Divider(),
                    ListOfProfileOptions(
                      iconData: FontAwesomeIcons.wallet,
                      name: 'Subscription',
                      fn: () {
                        Navigator.pushNamed(context, Subscription.routeName);
                      },
                    ),
                    const Divider(),
                    ListOfProfileOptions(
                      iconData: FontAwesomeIcons.commentMedical,
                      name: 'FAQ',
                      fn: () {
                        Navigator.pushNamed(context, Faq.routeName);
                      },
                    ),
                    const Divider(),
                    ListOfProfileOptions(
                      iconData: FontAwesomeIcons.arrowRightFromBracket,
                      name: 'Logout',
                      fn: () async {
                        SharedPreferences prefs =
                            await SharedPreferences.getInstance();
                        await prefs.remove('token');
                        // ignore: avoid_print
                        print('logout Successfully!');
                        // ignore: use_build_context_synchronously
                        Navigator.of(context)
                            .pushReplacementNamed(LoginScreen.routeName);
                      },
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}