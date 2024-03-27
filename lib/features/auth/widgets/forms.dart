// ignore_for_file: curly_braces_in_flow_control_structures, body_might_complete_normally_nullable, avoid_print, use_build_context_synchronously
import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/textfield.dart';

class SiggnUpForm extends StatelessWidget {
  const SiggnUpForm({
    super.key,
    required this.signUpKey, required this.email, required this.phone, required this.pass, required this.passwordConfirm, 
  });
  final Key signUpKey;
  final TextEditingController email ;

  final TextEditingController phone ;

  final TextEditingController pass ;

  final TextEditingController passwordConfirm ;

  @override
  Widget build(BuildContext context) {
    return Form(
      key: signUpKey,
      child: Column(
        children: [
          MainTextField(
            visibleFalse: null,
            visibleTrue: null,
            hint: 'example@gmail.com',
            label: 'Email Address',
            keyboard: TextInputType.emailAddress,
            controller:email,
            vaidator: (val) {
              print(val);
              if (val!.isEmpty) {
                return "This Field is empty";
              
              } else if (!val.contains("@")) return "wrong email";
            },
          ),
          const SizedBox(height: 30),
          MainTextField(
            hint: '+20 01234567890',
            keyboard: TextInputType.phone,
            label: '* Phone Number',
            controller:phone,
            vaidator: (val) {
              if (val!.isEmpty) return "This Field is empty";
              else if (val.length>11 || val.length<11)return "phone number should be 11 ";
            },
          ),
          const SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Password',
            keyboard: TextInputType.emailAddress,
            controller:pass,
            vaidator: (val) {
              if (val!.isEmpty) return "This Field is empty";
              else if ( val.length<6)return "password should be longer than 6";
            },
          ),
          const SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Confirm Password',
            keyboard: TextInputType.emailAddress,
            controller:passwordConfirm,
            vaidator: (val) {
              if (val!.isEmpty) return "This Field is empty";
              else if ( val != pass.text)return "confirm password is wrong ";
            },
          ),
        ],
      ),
    );
  }
}

class LoginForm extends StatelessWidget {
  const LoginForm({
    super.key, required this.loginkey, required this.email, required this.password,
  });
  final Key loginkey ;
  
   final TextEditingController email ;

  final TextEditingController password ;
  

  @override
  Widget build(BuildContext context) {
    return Form(
      key: loginkey,
      child: Column(
        children: [
          MainTextField(
            visibleFalse: null,
            visibleTrue: null,
            hint: 'example@gmail.com',
            label: 'Email Address',
            keyboard: TextInputType.emailAddress,
            controller: email,
            vaidator: (value) {
              if (value!.isEmpty) {
                return "This Field is empty";
              } else if (!value.contains("@")) return "wrong email";
            },
          ),
          const SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Password',
            keyboard: TextInputType.emailAddress,
            controller: password,
            vaidator: (val) {
              if (val!.isEmpty) {
                return "This Field is empty";
              } else if ( val.length<6)return "password should be longer than 6";
            },
          ),
          const SizedBox(height: 30),
        ],
      ),
    );
  }
}

class ProfileForm extends StatefulWidget {
  const ProfileForm({
    super.key, required this.profilekey,
  });
  final Key profilekey  ;

  @override
  State<ProfileForm> createState() => _ProfileFormState();
}

class _ProfileFormState extends State<ProfileForm> {
  final TextEditingController fname = TextEditingController();

  final TextEditingController lname = TextEditingController();

  final TextEditingController age = TextEditingController();

  final TextEditingController weight = TextEditingController();

  final TextEditingController height = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: widget.profilekey,
      child: Column(
        children: [
          MainTextField(
            hint: 'John',
            keyboard: TextInputType.text,
            label: 'First Name',
            controller: fname,
            vaidator: (val) {
              if (val!.isEmpty) return "First Name is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'Smith',
            keyboard: TextInputType.text,
            label: 'Last Name',
            controller: lname,
            vaidator: (val) {
              if (val!.isEmpty) return "Last Name is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 30',
            keyboard: TextInputType.phone,
            label: 'Age',
            controller: age,
            vaidator: (val) {
              if (val!.isEmpty) return "Age is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 70 Kg',
            keyboard: TextInputType.phone,
            label: 'Weight',
            controller: weight,
            vaidator: (val) {
              if (val!.isEmpty) return "Weight is Empty";
            },
          ),
          const SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 177 Cm',
            keyboard: TextInputType.phone,
            label: 'Height',
            controller: height,
            vaidator: (val) {
              if (val!.isEmpty) return "Height is Empty";
            },
          ),
        ],
      ),
    );
  }
  @override
  void dispose() {
    fname.dispose();
    lname.dispose();
    age.dispose();
    weight.dispose();
    height.dispose();
    super.dispose();
  }
}
