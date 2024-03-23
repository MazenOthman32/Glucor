import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:gradution_project/features/tabs/dailytab.dart';
import '../../core/util/constant.dart';
import '../buttom_nav_bar/profile/profile_info/profile_info.dart';
import '../tabs/monthly.dart';
import '../tabs/weekly.dart';

class HomePageDetails extends StatelessWidget {
  const HomePageDetails({super.key});

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 3,
      child: Padding(
        padding: const EdgeInsets.only(left: 15, right: 15, top: 50),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                GestureDetector(
                  onTap: () {
                    Navigator.pushNamed(context, ProfileInfo.routeName);
                  },
                  child: const CircleAvatar(
                    radius: 22,
                    backgroundColor: Colors.black,
                    backgroundImage: AssetImage("assets/images/profile.jpg"),
                  ),
                ),
                const Text(
                  "Hello, John",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700),
                ),
                Container(
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
              ],
            ),
            const SizedBox(height: 30),
            const Text(
              "Daily Overview",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              textAlign: TextAlign.start,
            ),
            const SizedBox(height: 20),
            Center(
              child: Container(
                decoration: BoxDecoration(
                    color: MainAssets.babyBlue.withOpacity(0.5),
                    borderRadius: BorderRadius.circular(50)),
                height: 50,
                width: size.width / 1.2,
                child: TabBar(
                    indicator: BoxDecoration(
                        color: MainAssets.blue.withOpacity(0.7),
                        borderRadius: BorderRadius.circular(50)),
                    unselectedLabelColor: Colors.black,
                    indicatorColor: Colors.black,
                    indicatorSize: TabBarIndicatorSize.tab,
                    labelColor: Colors.white,
                    tabs: const [
                      Text(
                        "Daily",
                        style: TextStyle(fontWeight: FontWeight.w700),
                      ),
                      Text("Weekly"),
                      Text("Monthly"),
                    ]),
              ),
            ),
            Expanded(
                child: TabBarView(children: [
              DailyTab(size: size),
              const WeeklyTab(),
              const MonthlyTab(),
            ])),
          ],
        ),
      ),
    );
  }
}
