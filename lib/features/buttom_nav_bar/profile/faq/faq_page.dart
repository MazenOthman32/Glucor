import 'package:flutter/material.dart';
import '../../../../core/database/faq_data/faq_data.dart';
import '../../../../core/widgets/rowas.dart';

class FaqDetails extends StatelessWidget {
  const FaqDetails({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: SafeArea(
          child: Container(
        margin: const EdgeInsets.only(right: 20, left: 15, top: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const MaianAppBar(
              text: 'FAQ',
            ),
            const SizedBox(height: 40),
            ListView.separated(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemBuilder: (context, index) => FaqItems(
                answer: faqList[index].answer,
                id: faqList[index].id,
                question: faqList[index].question,
              ),
              itemCount: faqList.length,
              separatorBuilder: (context, index) => const SizedBox(height: 20),
            ),
          ],
        ),
      )),
    );
  }
}

class FaqItems extends StatelessWidget {
  const FaqItems({
    super.key,
    required this.id,
    required this.answer,
    required this.question,
  });
  final String id;
  final String answer;
  final String question;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          question,
          style: const TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 20,
          ),
        ),
        const SizedBox(height: 7),
        Text(
          answer,
          style: const TextStyle(
              fontWeight: FontWeight.w500, fontSize: 18, color: Colors.grey),
        ),
      ],
    );
  }
}
