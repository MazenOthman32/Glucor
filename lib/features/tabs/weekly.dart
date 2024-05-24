import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import '../homepage/widgets/all_details.dart';

class WeeklyTabs extends StatefulWidget {
  const WeeklyTabs({super.key});

  @override
  State<WeeklyTabs> createState() => _WeeklyTabsState();
}

class _WeeklyTabsState extends State<WeeklyTabs>
    with SingleTickerProviderStateMixin {
  TabController? _tabController;
  int currentHour = DateTime.now().hour.ceil();
  @override
  void initState() {
    _tabController = TabController(length: 7, vsync: this, initialIndex: 0);
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
      length: 7,
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
                  Tab(child: Text("Sat")),
                  Tab(child: Text("Sun")),
                  Tab(child: Text("Mon")),
                  Tab(child: Text("Tue")),
                  Tab(child: Text("Wed")),
                  Tab(child: Text("Thu")),
                  Tab(child: Text("Fri")),
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
          ],
        ),
      ),
    );
  }
}
