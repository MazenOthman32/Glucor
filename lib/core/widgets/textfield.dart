import 'package:flutter/material.dart';
import '../util/constant.dart';

class MainTextField extends StatefulWidget {
  const MainTextField({
    super.key,
    required this.label,
    required this.hint,
    this.visibleTrue,
    this.visibleFalse,
    required this.keyboard,
    required this.controller,
    required this.validator,
  });
  final String label;
  final String hint;
  final IconData? visibleTrue;
  final IconData? visibleFalse;
  final TextInputType keyboard;
  final TextEditingController controller;
  final String? Function(String?) validator;

  @override
  State<MainTextField> createState() => _MainTextFieldState();
}

class _MainTextFieldState extends State<MainTextField> {
  bool isVisble = false;
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: widget.controller,
      validator: widget.validator,
      cursorColor: MainAssets.blue,
      obscureText: isVisble,
      keyboardType: widget.keyboard,
      decoration: InputDecoration(
          focusedBorder: const UnderlineInputBorder(
              borderSide: BorderSide(color: MainAssets.blue)),
          labelText: widget.label,
          labelStyle: const TextStyle(
            color: Colors.grey,
          ),
          hintText: widget.hint,
          hintStyle: const TextStyle(color: Colors.grey),
          suffixIcon: IconButton(
            icon:
                isVisble ? Icon(widget.visibleTrue) : Icon(widget.visibleFalse),
            onPressed: () {
              setState(() {
                isVisble = !isVisble;
              });
            },
          ),
          suffixIconColor: Colors.grey),
    );
  }
}

class ProfileEditTextField extends StatefulWidget {
  const ProfileEditTextField({
    super.key,
    required this.label,
    required this.initialValue,
    required this.keyboard,
    //this.onFieldSubmitted,
    required this.focusNode,
  });
  final String label;
  final TextEditingController initialValue;
  final TextInputType keyboard;
  //final Function(String)? onFieldSubmitted;
  final FocusNode focusNode;
  @override
  State<ProfileEditTextField> createState() => _ProfileEditTextFieldState();
}

class _ProfileEditTextFieldState extends State<ProfileEditTextField> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: widget.initialValue,
      focusNode: widget.focusNode,
      autofocus: true,
      //onFieldSubmitted: widget.onFieldSubmitted,
      cursorColor: MainAssets.blue,
      keyboardType: widget.keyboard,
      decoration: InputDecoration(
          border: const UnderlineInputBorder(borderSide: BorderSide.none),
          labelText: widget.label,
          labelStyle: const TextStyle(
            color: Colors.grey,
          ),
          hintStyle: const TextStyle(color: Colors.grey),
          suffixIconColor: Colors.grey),
    );
  }
}

class SendMessageTextField extends StatefulWidget {
  const SendMessageTextField({
    super.key,
    required this.hint,
    required this.controller,
    required this.validator,
  });
  final String hint;
  final TextEditingController controller;
  final String? Function(String?) validator;

  @override
  State<SendMessageTextField> createState() => _SendMessageTextFieldState();
}

class _SendMessageTextFieldState extends State<SendMessageTextField> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: widget.controller,
      validator: widget.validator,
      cursorColor: MainAssets.blue,
      keyboardType: TextInputType.text,
      decoration: InputDecoration(
          enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(20),
              borderSide: const BorderSide(color: MainAssets.blue)),
          focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(20),
              borderSide: const BorderSide(color: MainAssets.blue)),
          labelStyle: const TextStyle(
            color: Colors.grey,
          ),
          hintText: widget.hint,
          hintStyle: const TextStyle(color: Colors.grey),
          suffixIconColor: Colors.grey),
    );
  }
}