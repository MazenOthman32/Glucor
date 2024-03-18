import 'package:flutter/material.dart';
import 'package:gradution_project/features/homepage/widgets/all_details.dart';
import '../../core/util/constant.dart';

class MonthlyTab extends StatelessWidget {
  const MonthlyTab({super.key});

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 6,
      child: Column(
        children: [
          SizedBox(
            height: 50,
            width: double.infinity,
            child: TabBar(
                unselectedLabelColor: MainAssets.babyBlue,
                indicatorColor: MainAssets.blue,
                indicatorSize: TabBarIndicatorSize.label,
                labelColor: MainAssets.blue,
                tabs: const [
                  Text("jan"),
                  Text("feb"),
                  Text("mar"),
                  Text("apr"),
                  Text("may"),
                  Text("jun"),
                ]),
          ),
          Expanded(
              child: TabBarView(children: [
            All_Details(size: size),
            All_Details(size: size),
            All_Details(size: size),
            All_Details(size: size),
            All_Details(size: size),
            All_Details(size: size),
            
          ])),
        ],
      ),
    );
  }
}
