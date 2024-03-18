import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/features/auth/login/loginpage.dart';
import 'package:gradution_project/features/buttom_nav_bar/chat/chat.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/profile.dart';
import 'package:gradution_project/features/homepage/homepage.dart';

// ignore: camel_case_types
class BottomNavBarScreen extends StatefulWidget {
  static const routeName = 'navBarScreen';

  const BottomNavBarScreen({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _bottomNavBarScreenState createState() => _bottomNavBarScreenState();
}

// ignore: camel_case_types
class _bottomNavBarScreenState extends State<BottomNavBarScreen> {
  final List pages = <Widget>[
    const HomePageScreen(),
    const ChatScreen(),
    const LoginScreen(),
    const Profile()
  ];

  int selectedItem = 0;

  void selectedPage(int val) {
    setState(() {
      selectedItem = val;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: pages[selectedItem],
      floatingActionButtonLocation:
          FloatingActionButtonLocation.miniCenterDocked,
      bottomNavigationBar: BottomNavigationBar(
        onTap: selectedPage,
        type: BottomNavigationBarType.fixed,
        selectedItemColor: MainAssets.blue,
        unselectedItemColor: Colors.grey,
        showSelectedLabels: true,
        showUnselectedLabels: true,
        currentIndex: selectedItem,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.houseMedical),
            label: "Home",
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.solidMessage),
            label: "chat",
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.calendarDays),
            label: "Schedule",
          ),
          BottomNavigationBarItem(
            icon: Icon(FontAwesomeIcons.solidUser),
            label: "Profile",
          ),
        ],
      ),
    );
  }
}
