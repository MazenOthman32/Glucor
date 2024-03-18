// ignore_for_file: file_names
import 'package:flutter/material.dart';

class RealTimeDataBaseView extends StatefulWidget {
  const RealTimeDataBaseView({super.key});

  @override
  State<RealTimeDataBaseView> createState() => _RealTimeDataBaseViewState();
}

class _RealTimeDataBaseViewState extends State<RealTimeDataBaseView> {
  @override
  Widget build(BuildContext context) {
    return  const Scaffold(
      body: SafeArea(child:Text("Display Data"),
      ),
    );
  }
}
