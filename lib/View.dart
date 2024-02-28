import 'package:flutter/material.dart';
class RealTimeDataBaseView extends StatefulWidget {
  const RealTimeDataBaseView({Key? key}) : super(key: key);

  @override
  State<RealTimeDataBaseView> createState() => _RealTimeDataBaseViewState();
}

class _RealTimeDataBaseViewState extends State<RealTimeDataBaseView> {
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      body: SafeArea(child:Text("Display Data"),
      ),
    );
  }
}
