import 'package:flutter/material.dart';
import '../../../core/util/constant.dart';

class NotificationItem extends StatelessWidget {
  const NotificationItem({
    super.key,
    
  });

  

  @override
  Widget build(BuildContext context) {
      var size = MediaQuery.of(context). size;
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
                    const Text(
                      "Gloucose Level is high",
                      style:
                          TextStyle(fontWeight: FontWeight.w700, fontSize: 16),
                    ),
                    SizedBox(
                      width: size.width / 1.7,
                      child: const Text(
                        "Be careful ,your Sugar Level is high ",
                        overflow: TextOverflow.ellipsis,
                        maxLines: 1,
                        style: TextStyle(fontSize: 15, color: Colors.grey),
                      ),
                    ),
                  ],
                ),
                const Text("09:56"),
              ],
            ),
          )
        ],
      ),
    );
  }
}
