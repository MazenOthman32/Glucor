import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';

import '../../../core/database/notes_sqlite/sqlite.dart';
import '../../../core/util/constant.dart';
import '../../../core/widgets/texts.dart';
import 'update_note.dart';

class NotesDetails extends StatefulWidget {
  const NotesDetails({super.key});

  @override
  State<NotesDetails> createState() => _NotesDetailsState();
}

class _NotesDetailsState extends State<NotesDetails> {
  SqlData sqldata = SqlData();
  List notes = [];
  
  bool isEmpty = true;
  Future readData() async {
    List<Map> response = await sqldata.selectData("SELECT * FROM notes");
    notes.addAll(response);
    isEmpty = false;
    // ignore: unnecessary_this
    if (this.mounted) {
      setState(() {});
    }
  }

  @override
  void initState() {
    readData();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.only(left: 15, right: 15, top: 20),
        child: ListView(
          children: [
            const FontW25(text: "Notes"),
            const SizedBox(height: 20),
            notes.isEmpty
                ? Container(
                    alignment: Alignment.center,
                    height: size.height - 200,
                    child: const Center(
                      child: DescriptionOnBoarding(
                        text: 'Notes is empty',
                        textAlign: TextAlign.center,
                      ),
                    ),
                  )
                : ListView.separated(
                    physics: const NeverScrollableScrollPhysics(),
                    shrinkWrap: true,
                    itemBuilder: (context, index) => Slidable(
                          key: ValueKey(notes[index]['id']),
                          endActionPane: ActionPane(
                            motion: const StretchMotion(),
                            children: [
                              SlidableAction(
                                onPressed: (context) async {
                                  showDialog(
                                      context: context,
                                      builder: (context) => AlertDialog(
                                            alignment: Alignment.center,
                                            actions: [
                                              ElevatedButton(
                                                  style:
                                                      ElevatedButton.styleFrom(
                                                          foregroundColor:
                                                              MainAssets.blue),
                                                  onPressed: () {
                                                    Navigator.pop(context);
                                                  },
                                                  child: const Text("Cancel")),
                                              ElevatedButton(
                                                  style:
                                                      ElevatedButton.styleFrom(
                                                          backgroundColor:
                                                              MainAssets.blue,
                                                          foregroundColor:
                                                              Colors.white),
                                                  onPressed: () async {
                                                    int response = await sqldata
                                                        .deleteData(
                                                            "Delete FROM notes WHERE `id` = '${notes[index]['id']}'");
                                                    setState(() {
                                                      if (response > 0) {
                                                        notes.removeWhere((e) =>
                                                            e['id'] ==
                                                            notes[index]['id']);
                                                        Navigator.pop(context);
                                                      }
                                                      const sBar = SnackBar(
                                                        content: Text(
                                                            "Note Deleted"),
                                                      );
                                                      ScaffoldMessenger.of(
                                                              context)
                                                          .showSnackBar(sBar);
                                                    });
                                                    // ignore: avoid_print
                                                    print(response);
                                                  },
                                                  child: const Text("Delete")),
                                            ],
                                            title: Text(
                                                "Delete ${notes[index]['title']}"),
                                            content: const Text(
                                                "Are you Sure you want to Delete this Note? "),
                                          ));
                                },
                                backgroundColor: Colors.red,
                                label: "Delete",
                                icon: Icons.delete,
                                foregroundColor: Colors.white,
                              )
                            ],
                          ),
                          child: Card(
                            child: ListTile(
                              title: Text("${notes[index]['title']}"),
                              subtitle: Text("${notes[index]['content']}"),
                              trailing: IconButton(
                                icon: const Icon(Icons.edit),
                                onPressed: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: (context) => UpdateNote(
                                            content: notes[index]['content'],
                                            title: notes[index]['title'],
                                            id: notes[index]['id'],
                                          )));
                                },
                              ),
                            ),
                          ),
                        ),
                    separatorBuilder: (context, index) => const SizedBox(
                          height: 10,
                        ),
                    itemCount: notes.length),
          ],
        ),
      ),
    );
  }
}
