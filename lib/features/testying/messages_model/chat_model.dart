class ChatUser {
  ChatUser({
    required this.lastName,
    required this.gender,
    required this.weight,
    // required this.passwordResetToken,
    required this.diabeticType,
    //required this.passwordResetExpires,
    required this.firstName,
    //required this.resetPasswordToken,
    required this.password,
    //required this.resetPasswordExpires,
    required this.phoneNumber,
    required this.profilePicUrl,
    required this.diabeticTime,
    required this.email,
    required this.age,
    required this.height,
  });
  
  late final String lastName;
  late final String gender;
  late final String weight;
  //late final String passwordResetToken;
  late final String diabeticType;
  //late final int passwordResetExpires;
  late final String firstName;
  //late final String resetPasswordToken;
  late final String password;
  //late final int resetPasswordExpires;
  late final String phoneNumber;
  late final String profilePicUrl;
  late final String diabeticTime;
  late final String email;
  late final String age;
  late final String height;

  ChatUser.fromJson(Map<String, dynamic> json) {
    lastName = json['lastName'] ?? "";
    gender = json['gender'] ?? "";
    weight = json['weight'];
    // passwordResetToken = json['passwordResetToken']??"";
    diabeticType = json['diabetic_type'] ?? "";
    // passwordResetExpires = json['passwordResetExpires']??"";
    firstName = json['firstName'] ?? "";
    // resetPasswordToken = json['resetPasswordToken']??"";
    password = json['password'] ?? "";
    //  resetPasswordExpires = json['resetPasswordExpires']??"";
    phoneNumber = json['phoneNumber'] ?? "";
    profilePicUrl = json['profilePicUrl'];
    diabeticTime = json['diabetic_time'] ?? "";
    email = json['email'] ?? "";
    age = json['age'] ?? "";
    height = json['height'] ?? "";
  }

  Map<String, dynamic> toJson() {
    // ignore: no_leading_underscores_for_local_identifiers
    final _data = <String, dynamic>{};
    _data['lastName'] = lastName;
    _data['gender'] = gender;
    _data['weight'] = weight;
    //  _data['passwordResetToken'] = passwordResetToken;
    _data['diabetic_type'] = diabeticType;
    // _data['passwordResetExpires'] = passwordResetExpires;
    _data['firstName'] = firstName;
    // _data['resetPasswordToken'] = resetPasswordToken;
    //  _data['password'] = password;
    // _data['resetPasswordExpires'] = resetPasswordExpires;
    _data['phoneNumber'] = phoneNumber;
    _data['profilePicUrl'] = profilePicUrl;
    _data['diabetic_time'] = diabeticTime;
    _data['email'] = email;
    _data['age'] = age;
    _data['height'] = height;
    return _data;
  }
}
