import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/features/auth/widgets/icon_buttons.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/profile_info/profile_info.dart';
import '../notificatins/notification_page.dart';

class RowOfIcons extends StatelessWidget {
  const RowOfIcons({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(horizontal: 40),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Col_icons(
            icon: Icons.alarm,
            text: "Reminder",
          ),
          Col_icons(
            icon: Icons.tips_and_updates_outlined,
            text: "Activty",
          ),
          Col_icons(
            icon: Icons.people_outlined,
            text: "Community",
          ),
        ],
      ),
    );
  }
}

//***********   Sugar Level Row ***************/

class SugarLevel extends StatelessWidget {
  const SugarLevel({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    //var size = MediaQuery.of(context).size;
    return Container(
      margin: const EdgeInsets.only(
        left: 15,
        right: 15,
      ),
      padding: const EdgeInsets.only(
        left: 10,
        right: 10,
      ),
      height: 50,
      width: double.infinity,
      decoration: BoxDecoration(
        color: MainAssets.babyBlue,
        borderRadius: BorderRadius.circular(10),
      ),
      child: const Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            "Sugar Level",
            style: TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          ),
          Row(
            children: [
              Icon(
                Icons.call_received_outlined,
                size: 20,
                color: Colors.green,
              ),
              SizedBox(width: 3),
              Text(
                "6",
                style: TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.w900,
                ),
              ),
              SizedBox(width: 3),
              Text(
                "Normal",
                style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                    color: Colors.green),
              ),
            ],
          ),
          Row(
            children: [
              Icon(
                Icons.arrow_outward,
                size: 20,
                color: Colors.red,
              ),
              SizedBox(width: 3),
              Text(
                "136",
                style: TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.w900,
                ),
              ),
              SizedBox(width: 3),
              Text(
                "Danger",
                style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                    color: Colors.red),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class FirstRowOfHomePage extends StatelessWidget {
  const FirstRowOfHomePage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        GestureDetector(
          onTap: () {
            Navigator.pushNamed(context, ProfileInfo.routeName);
          },
          child: CircleAvatar(
            radius: 22,
            backgroundColor: MainAssets.babyBlue,
            backgroundImage: const AssetImage("assets/images/profile.jpg"),
          ),
        ),
        const Text(
          "Hello, John",
          style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700),
        ),
        GestureDetector(
          onTap: () {
            Navigator.pushNamed(context, NotificationPage.routeName);
          },
          child: Container(
            height: 40,
            width: 40,
            decoration: BoxDecoration(
              color: MainAssets.babyBlue,
              borderRadius: BorderRadius.circular(10),
            ),
            child: const Center(
              child: Icon(
                FontAwesomeIcons.bell,
                size: 22,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
