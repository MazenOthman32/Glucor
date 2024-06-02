import 'package:flutter/material.dart';

import '../../../../auth/update_password/update_password.dart';
import '../../widgets/profile_info.dart';

class ProfileEditForm extends StatelessWidget {
  const ProfileEditForm({
    super.key,
    required this.personalKey,
    required this.fname,
    required this.lname,
    required this.genderrr,
    required this.phone,
    required this.height,
    required this.weight,
    required this.type,
    required this.fnameNode,
    required this.lnameNode,
    required this.genderNode,
    required this.phoneNode,
    required this.weightNode,
    required this.heightNode,
    required this.typeNode,
    // ignore: non_constant_identifier_names
    required this.SecondContactNode,
    required this.firstContactNode,
    // ignore: non_constant_identifier_names
    required this.SecondContact,
    required this.firstContact,
  });

  final GlobalKey<FormState> personalKey;
  final FocusNode lnameNode;
  final FocusNode fnameNode;
  final FocusNode genderNode;
  final FocusNode phoneNode;
  final FocusNode weightNode;
  final FocusNode heightNode;
  final FocusNode typeNode;
  // ignore: non_constant_identifier_names
  final FocusNode SecondContactNode;
  final FocusNode firstContactNode;

  final TextEditingController fname;
  final TextEditingController lname;
  final TextEditingController genderrr;
  final TextEditingController phone;
  final TextEditingController height;
  final TextEditingController weight;
  final TextEditingController type;
  // ignore: non_constant_identifier_names
  final TextEditingController SecondContact;
  final TextEditingController firstContact;

  @override
  Widget build(BuildContext context) {
    return Form(
        key: personalKey,
        child: Column(
          children: [
            RowOfEditProfile(
              focusNode: fnameNode,
              label: "First Name ",
              text: fname,
            ),
            const Dividerr(),
            RowOfEditProfile(
                focusNode: lnameNode, label: "Last Name ", text: lname),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: genderNode,
              label: "Gender ",
              text: genderrr,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: phoneNode,
              label: "Phone ",
              text: phone,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: heightNode,
              label: "Height ",
              text: height,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: weightNode,
              label: "Weight ",
              text: weight,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: typeNode,
              label: "Type of Glucose Level",
              text: type,
            ),
            const SizedBox(height: 50),
            const Align(
              alignment: Alignment.topLeft,
              child: Text(
                "Important Contacts",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                textAlign: TextAlign.start,
              ),
            ),
            const SizedBox(height: 20),
            RowOfEditProfile(
              focusNode: firstContactNode,
              label: "First contact ",
              text: firstContact,
            ),
            const Dividerr(),
            RowOfEditProfile(
              focusNode: SecondContactNode,
              label: "Second contact ",
              text: SecondContact,
            ),
            const SizedBox(height: 50),
            GestureDetector(
              onTap: () {
                Navigator.of(context).pushNamed(UpdatePasswordScreen.routeName);
              },
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text("Update password"),
                  Icon(Icons.arrow_forward_ios)
                ],
              ),
            )
          ],
        ));
  }
}
