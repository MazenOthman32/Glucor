import 'package:flutter/material.dart';
import 'package:gradution_project/core/widgets/textfield.dart';

class SiggnUpForm extends StatelessWidget {
  const SiggnUpForm({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Form(
      child: Column(
        children: [
          MainTextField(
            visibleFalse: null,
            visibleTrue: null,
            hint: 'example@gmail.com',
            label: 'Email Address',
            keyboard: TextInputType.emailAddress,
          ),
          SizedBox(height: 30),
          MainTextField(
            hint: '+20 01234567890',
            keyboard: TextInputType.text,
            label: '* Phone Number',
          ),
          SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Password',
            keyboard: TextInputType.emailAddress,
          ),
          SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Confirm Password',
            keyboard: TextInputType.emailAddress,
          ),
        ],
      ),
    );
  }
}

class LoginForm extends StatelessWidget {
  const LoginForm({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Form(
      child: Column(
        children: [
          MainTextField(
            visibleFalse: null,
            visibleTrue: null,
            hint: 'example@gmail.com',
            label: 'Email Address',
            keyboard: TextInputType.emailAddress,
          ),
          SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Password',
            keyboard: TextInputType.emailAddress,
          ),
          SizedBox(height: 30),
          MainTextField(
            visibleFalse: Icons.visibility,
            visibleTrue: Icons.visibility_off_sharp,
            hint: '',
            label: 'Confirm Password',
            keyboard: TextInputType.emailAddress,
          ),
        ],
      ),
    );
  }
}

class ProfileForm extends StatelessWidget {
  const ProfileForm({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Form(
      child: Column(
        children: [
          MainTextField(
            hint: 'John',
            keyboard: TextInputType.text,
            label: 'First Name',
          ),
          SizedBox(height: 10),
          MainTextField(
            hint: 'Smith',
            keyboard: TextInputType.text,
            label: 'Last Name',
          ),
          SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 30',
            keyboard: TextInputType.text,
            label: 'Age',
          ),
          SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 70 Kg',
            keyboard: TextInputType.text,
            label: 'Weight',
          ),
          SizedBox(height: 10),
          MainTextField(
            hint: 'ex: 177 Cm',
            keyboard: TextInputType.text,
            label: 'Height',
          ),
        ],
      ),
    );
  }
}
