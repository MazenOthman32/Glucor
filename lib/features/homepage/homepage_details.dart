// ignore_for_file: unnecessary_const, unused_local_variable
import 'package:flutter/material.dart';
import 'package:gradution_project/features/homepage/widgets/rows.dart';
import 'package:gradution_project/features/tabs/dailytab.dart';
import 'package:gradution_project/features/tabs/monthly.dart';
import '../../core/util/constant.dart';
import '../tabs/weekly.dart';

class HomePageDetails extends StatefulWidget {
  const HomePageDetails({super.key});

  @override
  State<HomePageDetails> createState() => _HomePageDetailsState();
}

class _HomePageDetailsState extends State<HomePageDetails> {
  ReportModel reportModel = ReportModel();
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
      child: Scaffold(
        appBar: AppBar(
          title: const FirstRowOfHomePage(),
          bottom: PreferredSize(
            preferredSize:const Size.fromHeight(kToolbarHeight + 20.0),
            child: TabBar(
              indicator: BoxDecoration(
                  color: MainAssets.blue.withOpacity(0.7),
                  borderRadius: BorderRadius.circular(50)),
              unselectedLabelColor: Colors.black,
              indicatorColor: Colors.black,
              indicatorSize: TabBarIndicatorSize.tab,
              dividerColor: Colors.white,
              labelColor: Colors.white,
              tabs:const [
                Tab(
                  child: Text(
                    "Daily",
                    style: TextStyle(fontWeight: FontWeight.w700),
                  ),
                ),
                Tab(child: Text("Weekly")),
                Tab(child: Text("Monthly")),
              ],
            ),
          ),
        ),
        body: const TabBarView(
          children: [DailyTabs(), WeeklyTabs(), MonthlyTabs()],
        ),
      ),
    );
  }
}
