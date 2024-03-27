import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/features/homepage/widgets/all_details.dart';

class DailyTab extends StatefulWidget {
  const DailyTab({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  State<DailyTab> createState() => _DailyTabState();
}

class _DailyTabState extends State<DailyTab> {
  int day = 0;
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      physics: const NeverScrollableScrollPhysics(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 20),
          SizedBox(
            width: double.infinity,
            height: 40,
            child: ListView.separated(
                shrinkWrap: true,
                scrollDirection: Axis.horizontal,
                itemBuilder: (context, index) => Column(
                      children: [
                        GestureDetector(
                          onTap: () {
                            day = index;
                            setState(() {
                              // ignore: avoid_print
                              print(day);
                            });
                          },
                          child: Container(
                            alignment: Alignment.center,
                            height: 40,
                            width: 40,
                            decoration: BoxDecoration(
                              color: day == index
                                  ? MainAssets.blue
                                  : MainAssets.babyBlue,
                              borderRadius: BorderRadius.circular(40),
                            ),
                            child: Text(
                              "${index + 1}",
                              style: TextStyle(
                                color: day == index
                                    ? Colors.white
                                    : Colors.black,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                separatorBuilder: (context, index) => const SizedBox(
                      width: 5,
                    ),
                itemCount: 24),
          ),
          const SizedBox(height: 10),
          All_Details(size: widget.size)
        ],
      ),
    );
  }
}
