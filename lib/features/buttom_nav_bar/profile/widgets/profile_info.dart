import 'package:flutter/material.dart';
import '../../../../core/widgets/textfield.dart';

class Dividerr extends StatelessWidget {
  const Dividerr({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Container(
      margin: const EdgeInsets.only(top: 10, bottom: 10),
      height: 5,
      width: size.width,
      child: const Divider(
        color: Colors.grey,
        thickness: 1,
        endIndent: 15,
      ),
    );
  }
}

// ignore: must_be_immutable
class RowOfEditProfile extends StatefulWidget {
  RowOfEditProfile({
    super.key,
    required this.focusNode,
    required this.label,
    required this.text,
  });
  final FocusNode focusNode;
  final String label;
  TextEditingController text;

  @override
  State<RowOfEditProfile> createState() => _RowOfEditProfileState();
}

class _RowOfEditProfileState extends State<RowOfEditProfile> {
  bool isEditable = false;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
            child: !isEditable
                ? Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [Text(widget.label), Text(widget.text.text)],
                  )
                : ProfileEditTextField(
                    label: widget.label,
                    // onFieldSubmitted: (value) {
                    //   setState(() {
                    //     isEditable = false;
                    //     widget.text = value as TextEditingController;
                    //   });
                    // },
                    initialValue: widget.text,
                    keyboard: TextInputType.text,
                    focusNode: widget.focusNode,
                  )),
        IconButton(
            onPressed: () {
              widget.focusNode.requestFocus();
              setState(() {
                isEditable = true;
              });
            },
            icon: const Icon(Icons.edit))
      ],
    );
  }
}
