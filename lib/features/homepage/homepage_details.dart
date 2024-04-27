// ignore_for_file: unnecessary_const
import 'package:flutter/material.dart';
import 'package:gradution_project/features/homepage/widgets/rows.dart';
import 'package:gradution_project/features/tabs/dailytab.dart';
import '../../core/util/constant.dart';
import '../tabs/monthly.dart';
import '../tabs/weekly.dart';

class HomePageDetails extends StatefulWidget {
  const HomePageDetails({super.key});

  @override
  State<HomePageDetails> createState() => _HomePageDetailsState();
}

class _HomePageDetailsState extends State<HomePageDetails> {
  ReportModel reportModel=ReportModel();
  @override
  void initState() {
    reportModel.fetchDataAndPrint();
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 3,
      child: CustomScrollView(slivers: [
        const SliverToBoxAdapter(
          child: SafeArea(
            child: Padding(
              padding: EdgeInsets.only(left: 15, right: 15, top: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  FirstRowOfHomePage(),
                  SizedBox(height: 30),
                  Text(
                    "Daily Overview",
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                    textAlign: TextAlign.start,
                  ),
                  SizedBox(height: 20),
                ],
              ),
            ),
          ),
        ),
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15),
            child: Center(
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
          ),
        ),
        SliverFillRemaining(
          hasScrollBody: false,
          child: Container(
            padding: const EdgeInsets.only(left: 15, right: 15),
            height: 100,
            child: TabBarView(physics: const ScrollPhysics(), children: [
              DailyTab(size: size),
              WeeklyTab(
                size: size,
              ),
              MonthlyTab(
                size: size, 
              ),
            ]),
          ),
        ),
      ]),
    );
  }
}
