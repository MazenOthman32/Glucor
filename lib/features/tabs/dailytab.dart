import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import '../homepage/widgets/all_details.dart';

class DailyTabs extends StatefulWidget {
  const DailyTabs({super.key});

  @override
  State<DailyTabs> createState() => _DailyTabsState();
}

class _DailyTabsState extends State<DailyTabs>
    with SingleTickerProviderStateMixin {
  TabController? _tabController;
  int currentHour = DateTime.now().hour;
  @override
  void initState() {
    _tabController =
        TabController(length: 24, vsync: this, initialIndex: currentHour);
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
      length: 24,
      child: Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
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
                  Tab(child: Text("12 am")),
                  Tab(child: Text("1 am")),
                  Tab(child: Text("2 am")),
                  Tab(child: Text("3 am")),
                  Tab(child: Text("4 am")),
                  Tab(child: Text("5 am")),
                  Tab(child: Text("6 am")),
                  Tab(child: Text("7 am")),
                  Tab(child: Text("8 am")),
                  Tab(child: Text("9 am")),
                  Tab(child: Text("10 am")),
                  Tab(child: Text("11 am")),
                  Tab(child: Text("12 pm")),
                  Tab(child: Text("1 pm")),
                  Tab(child: Text("2 pm")),
                  Tab(child: Text("3 pm")),
                  Tab(child: Text("4 pm")),
                  Tab(child: Text("5 pm")),
                  Tab(child: Text("6 pm")),
                  Tab(child: Text("7 pm")),
                  Tab(child: Text("8 pm")),
                  Tab(child: Text("9 pm")),
                  Tab(child: Text("10 pm")),
                  Tab(child: Text("11 pm")),
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
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 13,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 14,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 15,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 16,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 17,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 18,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 19,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 20,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 21,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 22,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 23,
            ),
            All_Details(
              size: MediaQuery.of(context).size,
              oldreading: 24,
            ),
          ],
        ),
      ),
    );
  }
}
