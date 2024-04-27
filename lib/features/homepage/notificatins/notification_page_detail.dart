import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import '../../../core/database/notes_sqlite/sqlite.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/texts.dart';
import '../widgets/notification_card.dart';
import 'package:flutter_slidable/flutter_slidable.dart';

import 'widgets/shimmer.dart';

class NotificationPageDetail extends StatefulWidget {
  const NotificationPageDetail({super.key});

  @override
  State<NotificationPageDetail> createState() => _NotificationPageDetailState();
}

class _NotificationPageDetailState extends State<NotificationPageDetail> {
  bool isLoading = true;
  SqlData sqldata = SqlData();
  List notificatin = [];
  List notifications = [];

  bool isEmpty = true;
  Future readData() async {
    List<Map> response = await sqldata.selectData("SELECT * FROM notification");

    notificatin.addAll(response);
    notifications = notificatin.reversed.toList();

    isEmpty = false;
    // ignore: unnecessary_this
    if (this.mounted) {
      setState(() {});
    }
  }


  @override
  // ignore: must_call_super
  void initState() {
    readData();
    MainAssets.notificationIsOpend = true;
    // ignore: avoid_print
    print(MainAssets.notificationIsOpend);

    Future.delayed(const Duration(seconds: 2), () {
      setState(() {
        isLoading = false;
      });
    });
  }
  

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;

    return RefreshIndicator(
      onRefresh: () async {
        await Future.delayed(const Duration(seconds: 3), () {});
        setState(() {});
        initState();
      },
      color: Colors.white,
      backgroundColor: MainAssets.blue,
      child: SingleChildScrollView(
        child: SafeArea(
          child: Container(
            padding: const EdgeInsets.only(top: 20, right: 15, left: 15),
            child: Column(
              children: [
                const MaianAppBar(
                  text: 'Notifications',
                ),
                const SizedBox(height: 40),
                isLoading
                    ? ListView.separated(
                        shrinkWrap: true,
                        physics: const BouncingScrollPhysics(),
                        scrollDirection: Axis.vertical,
                        itemBuilder: (context, index) => const ShimmerLoading(),
                        itemCount: 5,
                        separatorBuilder: (context, index) => const SizedBox(
                          height: 20,
                        ),
                      )
                    : notifications.isEmpty
                        ? Container(
                            alignment: Alignment.center,
                            height: size.height - 200,
                            child: const Center(
                              child: DescriptionOnBoarding(
                                text: 'Notifications is empty',
                                textAlign: TextAlign.center,
                              ),
                            ),
                          )
                        : ListView.separated(
                            shrinkWrap: true,
                            physics: const BouncingScrollPhysics(),
                            scrollDirection: Axis.vertical,
                            itemBuilder: (context, index) => Slidable(
                                key: ValueKey(notifications[index]['id']),
                                endActionPane: ActionPane(
                                  motion: const StretchMotion(),
                                  children: [
                                    SlidableAction(
                                      onPressed: (context) async {
                                        int response = await sqldata.deleteData(
                                            "Delete FROM notification WHERE `id` = '${notifications[index]['id']}'");
                                        setState(() {
                                          if (response > 0) {
                                            notifications.removeWhere((e) =>
                                                e['id'] ==
                                                notifications[index]['id']);
                                          }
                                        });

                                        final sBar = SnackBar(
                                          content: const Text(
                                              "Notification Deleted"),
                                          duration: const Duration(seconds: 2),
                                          shape: RoundedRectangleBorder(
                                              borderRadius:
                                                  BorderRadius.circular(20)),
                                        );
                                        // ignore: use_build_context_synchronously
                                        ScaffoldMessenger.of(context)
                                            .showSnackBar(sBar);
                                      },
                                      backgroundColor: Colors.red,
                                      label: "Delete",
                                      icon: Icons.delete,
                                      foregroundColor: Colors.white,
                                    )
                                  ],
                                ),
                                child: NotificationItem(
                                  title: notifications[index]['title'],
                                  content: notifications[index]['content'],
                                  hour: notifications[index]['hour'],
                                  minutes: notifications[index]['minutes'],
                                )),
                            separatorBuilder: (context, index) =>
                                const SizedBox(height: 20),
                            itemCount: notifications.length),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
