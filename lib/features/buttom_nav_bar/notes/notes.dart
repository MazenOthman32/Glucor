import 'package:flutter/material.dart';
import 'package:gradution_project/features/buttom_nav_bar/notes/notes_details.dart';

class Notes extends StatelessWidget {
  static const String routeName = " NotesScreen";
  const Notes({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: NotesDetails(),
    );
  }
}