import 'package:flutter/material.dart';
import '../../../core/widgets/buttons.dart';
import '../../core/util/constant.dart';
import '../auth/signup/signuppage.dart';
import 'onboardingtwo.dart';
import 'onboardingthree.dart';
import 'onboardingone.dart';

class PageViewDemo extends StatefulWidget {
  const PageViewDemo({super.key});
  @override
  State<PageViewDemo> createState() => _PageViewDemoState();
  static const String routeName = "OnBoardingDemo";
}

class _PageViewDemoState extends State<PageViewDemo> {
  // declare and initizlize the page controller
  final PageController _pageController = PageController(initialPage: 0);
  // the index of the current page
  int _activePage = 0;
  final List<Widget> _pages = [
    const OnBoardingOne(),
    const OnBoardingTwo(),
    const OnBoardingThree(),
  ];
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Scaffold(
      body: Stack(
        children: [
          PageView.builder(
            controller: _pageController,
            onPageChanged: (int page) {
              setState(() {
                _activePage = page;
              });
            },
            itemCount: _pages.length,
            itemBuilder: (BuildContext context, int index) {
              return _pages[index % _pages.length];
            },
          ),
          Positioned(
              bottom: size.height / 8.5,
              left: 0,
              right: 0,
              height: 100,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: List<Widget>.generate(
                        _pages.length,
                        (index) => Padding(
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 2),
                              child: InkWell(
                                onTap: () {
                                  _pageController.animateToPage(index,
                                      duration:
                                          const Duration(milliseconds: 300),
                                      curve: Curves.easeIn);
                                },
                                child: CircleAvatar(
                                  radius: _activePage == index ? 5 : 3,
                                  backgroundColor: _activePage == index
                                      ? MainAssets.blue
                                      : MainAssets.babyBlue,
                                ),
                              ),
                            )),
                  ),
                  BlueButton(
                      buttonName: "Continue",
                      fn: () {
                        Navigator.pushNamed(context, SignUpScreen.routeName);
                      })
                ],
              )),
        ],
      ),
    );
  }
}
