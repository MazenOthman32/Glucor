// ignore_for_file: unnecessary_brace_in_string_interps

import 'package:flutter/material.dart';
import 'package:gradution_project/core/util/constant.dart';
import 'package:gradution_project/core/widgets/buttons.dart';

import '../../../core/database/notes_sqlite/sqlite.dart';
import '../../../core/widgets/rowas.dart';
import '../buttom_nav_bar.dart';

class AddNote extends StatefulWidget {
  static const String routeName = "AddNotesScreen";
  const AddNote({super.key});

  @override
  State<AddNote> createState() => _AddNoteState();
}

class _AddNoteState extends State<AddNote> {
  SqlData sqldata = SqlData();
  final addnotekey = GlobalKey<FormState>();
  final TextEditingController title = TextEditingController();

  final TextEditingController content = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Padding(
        padding: const EdgeInsets.only(top: 20.0, right: 15, left: 15),
        child: ListView(
          children: [
            const MaianAppBar(
              text: 'Add New Note',
            ),
            const SizedBox(height: 50),
            Form(
              key: addnotekey,
              child: Column(
                children: [
                  NotestextFormField(
                    controller: title,
                    content: 'Enter your title',
                    label: 'title',
                    lines: 1,
                  ),
                  const SizedBox(height: 40),
                  NotestextFormField(
                    controller: content,
                    content: 'Enter your content',
                    label: 'content',
                    lines: 20,
                  )
                ],
              ),
            ),
            const SizedBox(height: 50),
            BlueButton(
              buttonName: 'Add note',
              fn: () async {
                int response = await sqldata.insertData('''
            INSERT INTO notes (`title`,`content`) VALUES ("${title.text}","${content.text}")
            
            ''');
                // ignore: avoid_print
                print("${response}");
                setState(() {});
                // ignore: use_build_context_synchronously
                Navigator.pushNamedAndRemoveUntil(
                    // ignore: use_build_context_synchronously
                    context, BottomNavBarScreen.routeName, (route) => false);
              },
            ),
            BlueButton(
              buttonName: 'Delete all notes',
              fn: () async {
                int response = await sqldata.deleteData("Delete FROM notes");
                // ignore: avoid_print
                print(response);
              },
            )
          ],
        ),
      )),
    );
  }
}

class NotestextFormField extends StatelessWidget {
  const NotestextFormField({
    super.key,
    required this.controller,
    required this.label,
    required this.content,
    required this.lines,
  });
  final TextEditingController controller;
  final String label;
  final String content;
  final int lines;
  @override
  Widget build(BuildContext context) {
    return TextFormField(
        minLines: lines,
        maxLines: null,
        controller: controller,
        decoration: InputDecoration(
          filled: true,
          labelStyle: const TextStyle(color: Colors.grey, fontSize: 20),
          fillColor: MainAssets.babyBlue,
          labelText: label,
          hintText: content,
          enabledBorder: OutlineInputBorder(
              borderSide: const BorderSide(color: MainAssets.blue),
              borderRadius: BorderRadius.circular(30)),
          focusedBorder: OutlineInputBorder(
              borderSide: const BorderSide(color: MainAssets.blue),
              borderRadius: BorderRadius.circular(30)),
        ));
  }
}
