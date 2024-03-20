import 'package:flutter/material.dart';

class NextMedican extends StatefulWidget {
  const NextMedican({
    super.key,
    required this.size,
  });

  final Size size;

  @override
  State<NextMedican> createState() => _NextMedicanState();
}

class _NextMedicanState extends State<NextMedican> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => MenuBar(
          children: [ElevatedButton(onPressed: () {}, child: Text("asdasd"))]),
      child: Container(
        alignment: Alignment.center,
        height: 50,
        width: widget.size.width / 1.2,
        decoration: BoxDecoration(
            color: Colors.orangeAccent.withOpacity(0.5),
            borderRadius: BorderRadius.circular(10)),
        child: const Text(
          "Last Check :  95",
          style: TextStyle(fontWeight: FontWeight.w700),
        ),
      ),
    );
  }
}
