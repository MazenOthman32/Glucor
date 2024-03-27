import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import '../../../core/widgets/rowas.dart';
import '../../../core/widgets/texts.dart';
import '../widgets/notification_card.dart';
import 'package:flutter_slidable/flutter_slidable.dart';

class NotificationPageDetail extends StatefulWidget {
  const NotificationPageDetail({super.key});

  @override
  State<NotificationPageDetail> createState() => _NotificationPageDetailState();
}

class _NotificationPageDetailState extends State<NotificationPageDetail> {
  List<Widget> notificatin = [];
  @override
  void initState() {
    notificatin = [
      const NotificationItem(),
      const NotificationItem(),
      const NotificationItem(),
      const NotificationItem(),
      const NotificationItem(),
    ];
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;

    return RefreshIndicator(
      onRefresh: () async {
        await Future.delayed(const Duration(seconds: 3));
      },
      color: Colors.white,
      backgroundColor: MainAssets.blue,
      child: SingleChildScrollView(
        child: SafeArea(
          child: SizedBox(
            height: size.height,
            child: Column(
              
              children: [
                const MaianAppBar(
                  text: 'Notifications',
                ),
                const SizedBox(height: 40),
                notificatin.isEmpty
                    ? Container(
                        alignment: Alignment.center,
                        child: const Center(
                          child: DescriptionOnBoarding(
                            text: 'Notifications is empty',
                          ),
                        ),
                      )
                    : ListView.separated(
                        shrinkWrap: true,
                        physics: const BouncingScrollPhysics(),
                        scrollDirection: Axis.vertical,
                        itemBuilder: (context, index) => Slidable(
                            key: ValueKey(index),
                            endActionPane: ActionPane(
                              motion: const StretchMotion(),
                              children: [
                                SlidableAction(
                                  onPressed: (context) {
                                    setState(() {
                                      notificatin.removeAt(index);
                                      // ignore: avoid_print
                                      print(notificatin.length);
                                    });
                                  },
                                  backgroundColor: Colors.red,
                                  label: "Delete",
                                  icon: Icons.delete,
                                  foregroundColor: Colors.white,
                                )
                              ],
                            ),
                            child: notificatin[index]),
                        separatorBuilder: (context, index) =>
                            const SizedBox(height: 20),
                        itemCount: notificatin.length),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

//NotificationItem