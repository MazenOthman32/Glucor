import 'package:flutter/material.dart';
import 'package:gradution_project/features/buttom_nav_bar/notes/notes_details.dart';

import '../../../core/util/constant.dart';
import 'add_note.dart';

class Notes extends StatelessWidget {
  static const String routeName = " NotesScreen";
  const Notes({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        backgroundColor: MainAssets.blue,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(200)),
        onPressed: () {
          Navigator.of(context).pushNamed(AddNote.routeName);
        },
        child: const Icon(
          Icons.add,
          color: Colors.white,
        ),
      ),
      body: const NotesDetails(),
    );
  }
}
