import 'package:flutter/material.dart';
import 'package:gradution_project/features/auth/login/loginpage.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/set_profile.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/verfication.dart';
import 'package:gradution_project/features/auth/signup/signuppage.dart';
import 'package:gradution_project/features/auth/update_password/update_password.dart';
import 'package:gradution_project/features/buttom_nav_bar/buttom_nav_bar.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/faq/faq.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/subscription/subscription.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/profile_info/profile_info.dart';
import 'package:gradution_project/features/buttom_nav_bar/profile/report/report.dart';
import 'package:gradution_project/features/homepage/homepage.dart';
import 'package:gradution_project/features/onboarding/page_view.dart';
import 'package:gradution_project/features/auth/profileupdate.dart/qf2.dart';
import 'package:gradution_project/features/start_screen/start_screen.dart';
import '../../features/auth/forget_password/forgot_password.dart';
import '../../features/auth/reset_password/reset_password.dart';
import '../../features/buttom_nav_bar/chat/cahtbot/chatbot.dart';
import '../../features/buttom_nav_bar/chat/select_chat/chat.dart';
import '../../features/buttom_nav_bar/notes/add_note.dart';
import '../../features/buttom_nav_bar/notes/notes.dart';
import '../../features/buttom_nav_bar/profile/subscription/payment/payment.dart';
import '../../features/homepage/heart_rate/heart_rate.dart';
import '../../features/homepage/notificatins/notification_page.dart';
import '../../features/start_screen/splash_screen.dart';

class Routes {
  static Map<String, Widget Function(BuildContext)> allRoutes = {
    '/': (context) => const SplashScreen(), //BottomNavBarScreen(),
    PageViewDemo.routeName: (context) => const PageViewDemo(),
    StartScreen.routeName: (context) => const StartScreen(),
    LoginScreen.routeName: (context) => const LoginScreen(),
    SignUpScreen.routeName: (context) => const SignUpScreen(),
    SetProfile.routeName: (context) => const SetProfile(),
    ProfileInfo.routeName: (context) => const ProfileInfo(),
    Notes.routeName: (context) => const Notes(),
    BottomNavBarScreen.routeName: (context) => const BottomNavBarScreen(),
    Faq.routeName: (context) => const Faq(),
    Report.routeName: (context) => const Report(),
    VerifyPhoneNumber.routeName: (context) => const VerifyPhoneNumber(),
    HomePageScreen.routeName: (context) => const HomePageScreen(),
    Qf2.routeName: (context) => const Qf2(),
    HeartRatePage.routeName: (context) => const HeartRatePage(),
    NotificationPage.routeName: (context) => const NotificationPage(),
    AddNote.routeName: (context) => const AddNote(),
    Subscription.routeName: (context) => const Subscription(),
    Payment.routeName: (context) => const Payment(),
    ChatSelected.routeName: (context) => const ChatSelected(),
    ChatScreen.routeName: (context) => const ChatScreen(),
    ForgotPassword.routeName: (context) => const ForgotPassword(),
    ResetPasswordScreen.routeName: (context) => const ResetPasswordScreen(),
    UpdatePasswordScreen.routeName: (context) => const UpdatePasswordScreen()
  };
}
