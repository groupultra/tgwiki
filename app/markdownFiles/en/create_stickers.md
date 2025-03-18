1.  [Home](https://tgnav.github.io/tgwiki/)
2.  [Create Stickers](https://tgnav.github.io/tgwiki/createsticker.html)

## Create Stickers

---

## [Creating Stickers in Telegram](#creating-stickers-in-telegram)

Stickers are similar to emoji packs in WeChat, and Telegram supports a variety of stickers.

**The sticker management bot in Telegram is [@Stickers](https://t.me/Stickers).**

## [Creating Static Stickers](#creating-static-stickers)

1.  Send the command `/newpack`, wait for the bot to respond, then send the name of the sticker collection you want to create (supports Chinese).
2.  Upload images

    Image format requirements: `512px`\*`512px` (one side must reach 512px, others can be smaller). Supports png and webp formats with a maximum size of `512px`.

    You can use Ps (Photoshop) to modify the format. If you have many images, you can utilize the batch processing tool in Ps: first record an action, then perform a batch process to solve the adaptation issues for all images at once, achieving efficiency.

    Attachment: Batch Processing Tutorial

    1.  Place all the images you want to modify in a local folder.
    2.  Open an image with Ps.
    3.  Click Window - Actions, create a new action, and set the action name.
    4.  Image -> Image Size, set to 512px by 512px, then click OK. If the image size is too large, you can lower the resolution while resizing the image to keep it under 512kb.
    5.  File - Automate - Batch, select the action you just recorded, choose the source folder, and select the folder where your images are stored. Click OK to start batch processing, waiting for all processes to finish.

3.  Send the images to the bot, using uncompressed images. Then send an emoji to associate the emoji with the image.

    Repeat the process until all images are uploaded. Send `/publish` to finish the upload.

    Operation Demonstration

    ![A-createsticker1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createsticker1.jpg)

    A-createsticker1.jpg

    ![A-createsticker2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createsticker2.jpg)

    A-createsticker2.jpg

4.  Set an icon for your sticker pack. The Telegram app will display it in the sticker panel's sticker list.

    To set an icon, send a 100x100 square image in PNG or WEBP format with a transparent layer.

    You can skip this step; the app will use the first sticker in the pack as its icon. To skip, send `/skip`.

5.  Create a sharing link for your stickers. Once set, you can share stickers with others through this link.

In summary: This bot can also modify stickers later, including adding, modifying, deleting, reordering, and checking daily usage statistics. All commands are detailed; you can explore them carefully.

## [Creating Animated Stickers](#creating-animated-stickers)

Creating animated stickers is more complex. Currently, you can only create animated video stickers using the command `/newvideo`.

- For the stickers, one side must be exactly 512 pixels—the other side can be 512 pixels or smaller.
- For the emoji, the video's size **must be exactly 100x100 pixels**.
- The video duration must not exceed **3 seconds**.
- The frame rate can be up to **30 FPS**.
- The video should loop for the best user experience.
- The video size must not exceed **256 KB**.
- The video must be in WEBM format encoded with the **VP9 codec**.
- The video must **not have an audio stream**.

Currently, you can use online websites to convert GIFs to WEBM format. If the GIF has a transparent background, the converted WEBM format emoji will also have a transparent background. Online website link: [GIF to WEBM](https://cdkm.com/cn/gif-to-webm)

When converting, set the conversion options - Video Size - Custom, setting it to 512px by 512px. After conversion is complete, download it.

The upload process is the same as described above. First, create the animated sticker name, upload, associate with the corresponding emoji, and once finished, set the sticker link for sharing.

## [Others](#others)

You can also use the following third-party Telegram bots to create sticker packs more conveniently:

- [@fStikBot](https://t.me/f