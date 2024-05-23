import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';

import '../homepage/widgets/all_details.dart';

class MonthlyTabs extends StatefulWidget {
  const MonthlyTabs({super.key});

  @override
  State<MonthlyTabs> createState() => _MonthlyTabsState();
}

class _MonthlyTabsState extends State<MonthlyTabs>
    with SingleTickerProviderStateMixin {
  TabController? _tabController;
  int currentHour = DateTime.now().hour.ceil();
  @override
  void initState() {
    _tabController = TabController(length: 12, vsync: this, initialIndex: 0);
    super.initState();
  }

  @override
  void dispose() {
    _tabController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 12,
      child: Scaffold(
        appBar: AppBar(
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(30),
            child: Container(
              margin: const EdgeInsets.symmetric(horizontal: 10),
              decoration: BoxDecoration(
                  color: MainAssets.babyBlue,
                  borderRadius: BorderRadius.circular(20)),
              child: TabBar(
                controller: _tabController,
                isScrollable: true,
                indicator: BoxDecoration(
                    color: MainAssets.blue.withOpacity(0.7),
                    borderRadius: BorderRadius.circular(50)),
                unselectedLabelColor: Colors.black,
                dividerColor: Colors.white,
                indicatorColor: Colors.black,
                indicatorSize: TabBarIndicatorSize.tab,
                labelColor: Colors.white,
                tabAlignment: TabAlignment.start,
                tabs: const [
                  Tab(child: Text("Jan")),
                  Tab(child: Text("Feb")),
                  Tab(child: Text("Mar")),
                  Tab(child: Text("Apr")),
                  Tab(child: Text("May")),
                  Tab(child: Text("Jun")),
                  Tab(child: Text("Jul")),
                  Tab(child: Text("Aug")),
                  Tab(child: Text("Sep")),
                  Tab(child: Text("Oct")),
                  Tab(child: Text("Nov")),
                  Tab(child: Text("Dec")),
                ],
              ),
            ),
          ),
        ),
        body: TabBarView(
          controller: _tabController,
          children: [
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 1,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 2,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 3,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 4,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 5,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 6,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 7,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 8,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 9,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 10,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 11,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 12,
            ),
          ],
        ),
      ),
    );
  }
}
