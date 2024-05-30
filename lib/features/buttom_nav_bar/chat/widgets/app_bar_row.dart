import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:gradution_project/features/testying/chat_model.dart';
import '../../../../core/widgets/texts.dart';

class ChatAppBarRow extends StatelessWidget {
  const ChatAppBarRow({
    super.key,
    required this.user,
  });
  final ChatUser user;
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        GestureDetector(
            onTap: () => Navigator.of(context).pop(),
            child: const Icon(Icons.arrow_back)),
        const SizedBox(width: 5),
        CachedNetworkImage(
          imageUrl: user.profilePicUrl,
          imageBuilder: (context, imageProvider) => Container(
            height: 50,
            width: 50,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              image: DecorationImage(
                  image: imageProvider,
                  fit: BoxFit.cover,
                  colorFilter:
                      const ColorFilter.mode(Colors.red, BlendMode.colorBurn)),
            ),
          ),
          placeholder: (context, url) => const CircularProgressIndicator(),
          errorWidget: (context, url, error) => const CircleAvatar(
            radius: 25,
            backgroundImage: NetworkImage(
                'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'),
          ),
        ),
        const SizedBox(width: 10),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            FontW20(
              text: ' ${user.firstName} ${user.lastName}  ',
            ),
            const Text(
              "Online",
              style: TextStyle(color: Colors.grey, fontSize: 15),
            )
          ],
        )
      ],
    );
  }
}
