// // ignore_for_file: unnecessary_const
// import 'package:flutter/material.dart';
// import 'package:gradution_project/features/homepage/widgets/rows.dart';
// import 'package:gradution_project/features/tabs/dailytab.dart';
// import 'package:gradution_project/features/tabs/monthly.dart';
// import 'package:gradution_project/tt3.dart';
// import '../../core/util/constant.dart';
// import 'features/tabs/weekly.dart';

// class HH extends StatefulWidget {
//   const HH({super.key});

//   @override
//   State<HH> createState() => _HHState();
// }

// class _HHState extends State<HH> {
//   ReportModel reportModel = ReportModel();
//   @override
//   void initState() {
//     reportModel.fetchDataAndPrint();
//     super.initState();
//   }

//   @override
//   Widget build(BuildContext context) {
//     var size = MediaQuery.of(context).size;
//     return DefaultTabController(
//       length: 3,
//       child: Scaffold(
//         appBar: AppBar(
//           title: FirstRowOfHomePage(),
//           bottom: PreferredSize(
//             preferredSize: Size.fromHeight(kToolbarHeight + 20.0),
//             child: TabBar(
//               indicator: BoxDecoration(
//                   color: MainAssets.blue.withOpacity(0.7),
//                   borderRadius: BorderRadius.circular(50)),
//               unselectedLabelColor: Colors.black,
//               indicatorColor: Colors.black,
//               indicatorSize: TabBarIndicatorSize.tab,
//               dividerColor: Colors.white,
//               labelColor: Colors.white,
//               tabs:const [
//                 Tab(
//                   child: Text(
//                     "Daily",
//                     style: TextStyle(fontWeight: FontWeight.w700),
//                   ),
//                 ),
//                 Tab(child: Text("Weekly")),
//                 Tab(child: Text("Monthly")),
//               ],
//             ),
//           ),
//         ),
//         body: TabBarView(
//           children: [DailyTabs(), WeeklyTabs(), MonthlyTabs()],
//         ),
//       ),
//     );
//   }
// }
