import 'package:flutter/material.dart';
import '../../../core/util/constant.dart';

class NotificationItem extends StatelessWidget {
  const NotificationItem({
    super.key,
    required this.title,
    required this.content,
    required this.hour,
    required this.minutes,
  });
  final String title;
  final String content;
  final String hour;
  final String minutes;

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return SizedBox(
      width: double.infinity,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          const CircleAvatar(
            radius: 30,
            backgroundColor: MainAssets.blue,
            child: Text(
              "S",
              style: TextStyle(color: Colors.white, fontSize: 20),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: const TextStyle(
                          fontWeight: FontWeight.w700, fontSize: 16),
                    ),
                    SizedBox(
                      width: size.width / 1.7,
                      child: Text(
                        content,

                        // overflow: TextOverflow.ellipsis,
                        maxLines: 3,
                        style:
                            const TextStyle(fontSize: 15, color: Colors.grey),
                      ),
                    ),
                  ],
                ),
                Text("$hour:$minutes"),
              ],
            ),
          )
        ],
      ),
    );
  }
}
