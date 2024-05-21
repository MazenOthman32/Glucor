import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import '../../../core/widgets/textfield.dart';
import '../../../core/widgets/texts.dart';
import 'cahtbot/chatbot.dart';
import 'select_chat/chat.dart';
import 'widgets/allchats.dart';

class AllChatScreenDetails extends StatefulWidget {
  const AllChatScreenDetails({super.key});

  @override
  State<AllChatScreenDetails> createState() => _AllChatScreenDetailsState();
}

class _AllChatScreenDetailsState extends State<AllChatScreenDetails> {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        body: DefaultTabController(
          length: 2,
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
                            Text("Chatbot"),
                          ]),
                    ),
                  ),
                  const SizedBox(height: 20),
                  const Expanded(
                      child: TabBarView(children: [
                    Allchats(),
                    ChatScreen(),
                  ])),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class Allchats extends StatefulWidget {
  const Allchats({super.key});

  @override
  State<Allchats> createState() => _AllchatsState();
}

class _AllchatsState extends State<Allchats> {
  final TextEditingController phone = TextEditingController();

  final chatkey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
        floatingActionButton: FloatingActionButton(
          backgroundColor: MainAssets.blue,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(200)),
          onPressed: () {
            showDialog(
              // ignore: use_build_context_synchronously
              context: context,
              builder: (context) => AlertDialog(
                title: const Text(
                  'New Chat',
                  style: TextStyle(fontSize: 24),
                ),
                content: Form(
                  key: chatkey,
                  child: MainTextField(
                    hint: '+20 01234567890',
                    keyboard: TextInputType.phone,
                    label: 'Phone Number',
                    controller: phone,
                    // ignore: body_might_complete_normally_nullable
                    validator: (val) {
                      if (val!.isEmpty) {
                        return "This Field is empty";
                      } else if (val.length > 11 || val.length < 11)
                        // ignore: curly_braces_in_flow_control_structures
                        return "phone number should be 11 ";
                    },
                  ),
                ),
                actions: [
                  ElevatedButton(
                      style: ElevatedButton.styleFrom(
                          foregroundColor: MainAssets.blue),
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      child: const Text("Cancel")),
                  ElevatedButton(
                      style: ElevatedButton.styleFrom(
                          backgroundColor: MainAssets.blue,
                          foregroundColor: Colors.white),
                      onPressed: () {
                        if (chatkey.currentState!.validate()) {
                          phone.clear();
                          setState(() {});
                          Navigator.pop(context);
                        }
                      },
                      child: const Text("add")),
                ],
              ),
            );
          },
          child: const Icon(
            Icons.chat,
            color: Colors.white,
          ),
        ),
        body: ListView.separated(
            shrinkWrap: false,
            // physics: const NeverScrollableScrollPhysics(),
            scrollDirection: Axis.vertical,
            itemBuilder: (context, index) => InkWell(
                onTap: () =>
                    Navigator.of(context).pushNamed(ChatSelected.routeName),
                child: AllChatItem(size: size)),
            separatorBuilder: (context, index) => const SizedBox(height: 20),
            itemCount: 10));
  }
}
