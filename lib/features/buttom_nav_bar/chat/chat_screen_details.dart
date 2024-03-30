import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import '../../../core/widgets/texts.dart';
import 'widgets/chat_widgets.dart';

class ChatScreenDetails extends StatelessWidget {
  const ChatScreenDetails({super.key});

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        floatingActionButton: FloatingActionButton(
          backgroundColor: MainAssets.blue,
          
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(200)),
          onPressed: () {},
          child: const Icon(
            Icons.chat,
            color: Colors.white,
          ),
        ),
        body: SingleChildScrollView(
          child: SafeArea(
            child: Padding(
              padding: const EdgeInsets.only(left: 15, right: 15, top: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const FontW25(text: "Chat"),
                  const SizedBox(height: 20),
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
                      physics: const NeverScrollableScrollPhysics(),
                      scrollDirection: Axis.vertical,
                      itemBuilder: (context, index) => ChatItem(size: size),
                      separatorBuilder: (context, index) =>
                          const SizedBox(height: 20),
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
