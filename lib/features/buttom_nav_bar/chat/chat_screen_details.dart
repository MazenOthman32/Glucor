import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:gradution_project/core/util/constant.dart';

class ChatScreenDetails extends StatelessWidget {
  const ChatScreenDetails({super.key});

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Text(
            "Chat",
            style: TextStyle(fontWeight: FontWeight.w700),
          ),
        ),
        body: Padding(
          padding: const EdgeInsets.only(left: 15, right: 15),
          child: Column(
            children: [
              Center(
                child: Container(
                  decoration: BoxDecoration(
                      color: MainAssets.babyBlue.withOpacity(0.5),
                      borderRadius: BorderRadius.circular(50)),
                  height: 50,
                  width: size.width / 1.5,
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
                          "Private",
                          style: TextStyle(fontWeight: FontWeight.w700),
                        ),
                        Text("community"),
                      ]),
                ),
              ),
              SizedBox(height: 20),
              Row(
                children: [
                  CircleAvatar(
                    radius: 30,
                    backgroundColor: Colors.red,
                  ),
                  SizedBox(width: 10),
                  Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            "Dr.Mohammed Ahmed",
                            style: TextStyle(
                                fontSize: 17, fontWeight: FontWeight.w700),
                          ),
                          SizedBox(width: 50),
                          Text(
                            "09:13",
                            style: TextStyle(
                                fontSize: 17,
                                fontWeight: FontWeight.w700,
                                color: Colors.grey),
                          ),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          Text(
                            "Where are you ",
                            style: TextStyle(
                                fontSize: 17, fontWeight: FontWeight.w700),
                          ),
                          SizedBox(width: 50),
                          Icon(
                            FontAwesomeIcons.check,
                            color: Colors.grey,
                          )
                        ],
                      )
                    ],
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
