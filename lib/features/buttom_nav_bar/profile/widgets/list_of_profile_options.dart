import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';

class ListOfProfileOptions extends StatelessWidget {
  const ListOfProfileOptions({
    super.key,
    required this.iconData,
    required this.name,
    required this.fn,
  });
  final IconData iconData;
  final String name;
  final VoidCallback fn;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: fn,
      leading: Container(
        height: 40,
        width: 40,
        decoration: BoxDecoration(
          color: MainAssets.babyBlue.withOpacity(0.3),
          borderRadius: BorderRadius.circular(20),
        ),
        child: Center(
          child: Icon(
            iconData,
            size: 19,
            color: MainAssets.blue,
          ),
        ),
      ),
      trailing: const Icon(
        Icons.arrow_forward_ios,
        color: Colors.black,
        size: 17,
      ),
      title: Text(
        name,
        style: const TextStyle(
            fontWeight: FontWeight.w700, fontSize: 15, color: Colors.black),
      ),
    );
  }
}

class Dividerf extends StatelessWidget {
  const Dividerf({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size.width / 1.2,
      child: const Divider(
        color: Colors.grey,
      ),
    );
  }
}
