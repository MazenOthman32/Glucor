// import 'package:flutter/material.dart';
// import 'package:gradution_project/core/util/constant.dart';
// import 'package:gradution_project/features/tabs/dailytab.dart';

// import 'features/homepage/widgets/all_details.dart';

// class DailyTabs extends StatefulWidget {
//   const DailyTabs({super.key});

//   @override
//   State<DailyTabs> createState() => _DailyTabsState();
// }

// class _DailyTabsState extends State<DailyTabs>
//     with SingleTickerProviderStateMixin {
//   TabController? _tabController;
//   int currentHour = DateTime.now().hour.ceil();
//   @override
//   void initState() {
//     _tabController =
//         TabController(length: 24, vsync: this, initialIndex: currentHour);
//     super.initState();
//   }

//   @override
//   void dispose() {
//     _tabController?.dispose();
//     super.dispose();
//   }

//   @override
//   Widget build(BuildContext context) {
//     return DefaultTabController(
//       length: 24,
//       child: Scaffold(
//         appBar: AppBar(
//           bottom: PreferredSize(
//             preferredSize: Size.fromHeight(30),
//             child: Container(
//               margin: EdgeInsets.symmetric(horizontal: 10),
//               decoration: BoxDecoration(
//                   color: MainAssets.babyBlue,
//                   borderRadius: BorderRadius.circular(20)),
//               child: TabBar(
//                 controller: _tabController,
//                 isScrollable: true,
//                 indicator: BoxDecoration(
//                     color: MainAssets.blue.withOpacity(0.7),
//                     borderRadius: BorderRadius.circular(50)),
//                 unselectedLabelColor: Colors.black,
//                 dividerColor: Colors.white,
//                 indicatorColor: Colors.black,
//                 indicatorSize: TabBarIndicatorSize.tab,
//                 labelColor: Colors.white,
//                 tabAlignment: TabAlignment.start,
//                 tabs: [
//                   Tab(child: Text("1")),
//                   Tab(child: Text("2")),
//                   Tab(child: Text("3")),
//                   Tab(child: Text("4")),
//                   Tab(child: Text("5")),
//                   Tab(child: Text("6")),
//                   Tab(child: Text("7")),
//                   Tab(child: Text("8")),
//                   Tab(child: Text("9")),
//                   Tab(child: Text("10")),
//                   Tab(child: Text("11")),
//                   Tab(child: Text("12")),
//                   Tab(child: Text("13")),
//                   Tab(child: Text("14")),
//                   Tab(child: Text("15")),
//                   Tab(child: Text("16")),
//                   Tab(child: Text("17")),
//                   Tab(child: Text("18")),
//                   Tab(child: Text("19")),
//                   Tab(child: Text("20")),
//                   Tab(child: Text("21")),
//                   Tab(child: Text("22")),
//                   Tab(child: Text("23")),
//                   Tab(child: Text("24")),
//                 ],
//               ),
//             ),
//           ),
//         ),
//         body: TabBarView(
//           controller: _tabController,
//           children: [
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 1,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 2,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 3,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 4,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 5,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 6,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 7,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 8,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 9,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 10,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 11,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 12,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 13,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 14,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 15,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 16,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 17,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 18,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 19,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 20,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 21,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 22,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 23,
//             ),
//             All_Details(
//               size: MediaQuery.of(context).size,
//               oldreading: 24,
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }
