import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
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
        body: SingleChildScrollView(
          child: SafeArea(
            child: Padding(
              padding: const EdgeInsets.only(left: 15, right: 15),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Chat",
                    style: TextStyle(fontWeight: FontWeight.w700, fontSize: 25),
                  ),
                  SizedBox(height: 20),
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
                  const SizedBox(height: 20),
                  ListView.separated(
                      shrinkWrap: true,
                      physics: NeverScrollableScrollPhysics(),
                      scrollDirection: Axis.vertical,
                      itemBuilder: (context, index) => ChatItem(size: size),
                      separatorBuilder: (context, index) =>
                          SizedBox(height: 20),
                      itemCount: 10)
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class ChatItem extends StatelessWidget {
  const ChatItem({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          CircleAvatar(
            radius: 30,
            backgroundColor: Colors.grey,
            backgroundImage: AssetImage(
              "assets/images/ff.png",
            ),
          ),
          SizedBox(width: 10),
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Dr. Mohammed Ahmed",
                      style:
                          TextStyle(fontWeight: FontWeight.w700, fontSize: 16),
                    ),
                    Container(
                      width: size.width / 1.7,
                      child: Text(
                        "Hello Doctor , i need Your help ,need Your help",
                        overflow: TextOverflow.ellipsis,
                        maxLines: 1,
                        style: TextStyle(fontSize: 15, color: Colors.grey),
                      ),
                    ),
                  ],
                ),
                Column(
                  children: [
                    Text("09:56"),
                    Icon(
                      FontAwesomeIcons.check,
                      size: 18,
                      color: Colors.grey,
                    ),
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
