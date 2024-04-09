import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/buttons.dart';
import '../../../core/database/notes_sqlite/sqlite.dart';
import '../../../core/widgets/rowas.dart';
import '../buttom_nav_bar.dart';
import 'add_note.dart';

class UpdateNote extends StatefulWidget {
  static const String routeName = "UpdateNotesScreen";
  final String content;
  final String title;
  final int id;
  const UpdateNote({super.key,required this.content,required this.title,required this.id});

  @override
  State<UpdateNote> createState() => _UpdateNoteState();
}

class _UpdateNoteState extends State<UpdateNote> {
  SqlData sqldata = SqlData();
  final addnotekey = GlobalKey<FormState>();
  final TextEditingController title = TextEditingController();

  final TextEditingController content = TextEditingController();
  @override
  void initState() {
    title.text = widget.title;
    content.text = widget.content;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: SafeArea(
            child: Padding(
          padding: const EdgeInsets.only(top: 20.0, right: 15, left: 15),
          child: Column(
            children: [
              const MaianAppBar(
                text: 'Update Note',
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
                    ),
                  ],
                ),
              ),
              const SizedBox(
                height: 50,
              ),
              BlueButton(
                buttonName: 'update note',
                fn: () async {
                  int response = await sqldata.updateData('''
                            UPDATE notes SET 
                            content = "${content.text}" ,
                            title = "${title.text}"
                            WHERE id = ${widget.id}
                      ''');
                  
                  // ignore: unnecessary_brace_in_string_interps, avoid_print
                  print("${response}");
                  setState(() {});
                  // ignore: use_build_context_synchronously
                  Navigator.pushNamedAndRemoveUntil(
                      // ignore: use_build_context_synchronously
                      context, BottomNavBarScreen.routeName, (route) => false);
                },
              ),
            ],
          ),
        )),
      ),
    );
  }
}
