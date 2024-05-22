import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'homepage_details.dart';

class HomePageScreen extends StatelessWidget {
  const HomePageScreen({super.key});
  static const String routeName = " HomePage";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          print(Backend.type.text);
        },
        child: Text("tupe"),
      ),
      body: HomePageDetails(),
    );
  }
}
