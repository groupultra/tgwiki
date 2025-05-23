## 创建贴纸

---

## [Telegram 创建贴纸](#telegram创建贴纸)

贴纸类似于微信中的表情包，Telegram 支持多种多样的贴纸。

**Telegram 的贴纸管理机器人是 [@Stickers](https://t.me/Stickers) 。**

## [创建静态贴纸](#创建静态贴纸)

1.  发送 `/newpack` 命令，等待机器人回应后发送你想要的贴纸名称，创建一个贴纸集合的名字（支持中文）。
2.  上传图片

    图片格式要求：`512px`\*`512px`（一边达到 512px 即可） 支持 png 和 webp 格式 最大支持`512px`

    可使用 Ps（Photoshop）修改格式，如果图片过多，可以使用 ps 的批处理工具，先录制动作，再进行批处理一次解决全部图片的适配问题，事半功倍。

    附：批处理教程

    1.  将想要修改的图片全部放在一个本地文件夹里面
    2.  使用 Ps 打开图片
    3.  点击窗口-动作，创建新的动作，设置动作名称
    4.  图选->图选大小，设置 512px 512px，点击确定。如果图片内存过大，可以在调整图像大小的时候降低分辨率，控制在 512kb 以下
    5.  文件-自动-批处理，动作选择你刚刚录制的动作 源 选择文件夹 选择你存放图片的文件夹。点击确定，开始进行批量处理 等待全部处理过程，结束。

3.  发送图片给机器人，未压缩图片。 然后发送 emoji 表情，将表情和图片进行关联。

    重复进行操作，直至上传完成所有的。 发送 `/publish` 结束上传。

    操作演示

    ![A-createsticker1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createsticker1.jpg)

    A-createsticker1.jpg

    ![A-createsticker2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createsticker2.jpg)

    A-createsticker2.jpg

4.  为贴图集设置图标。Telegram 应用程序会将其显示在贴纸面板的贴纸列表中。

    要设置图标，请发送带有透明层的 PNG 或 WEBP 格式的 100x100 方形图像。

    您可以/跳过此步骤，应用将使用包的第一个贴纸作为其图标。跳过发送 `/skip`

5.  为你的贴纸创建分享地址。设置成功后你可以通过此地址将贴纸分享给别人。

总结：此机器人还可以在后续对贴纸进行修改，可以添加，修改，删除，排序，还可以查看贴纸的每日使用人数，命令都有详细说明，可以认真探索以下。

## [创建动态贴纸](#创建动态贴纸)

动态贴纸的创作比较复杂，目前只给出了通过命令 `/newvideo` 创建的动态视频贴纸

- 对于贴纸，一面的大小必须正好是 512 像素——另一面可以是 512 像素或更小。
- 对于表情符号，视频的大小**必须正好是 100x100 像素**
- 视频时长不得超过 **3 秒**。
- 帧速率最高可达 **30 FPS**。
- 视频应循环播放以获得最佳用户体验。
- 视频大小不应超过 **256 KB**。
- 视频必须位于 中。使用 **VP9 编解码器**编码的 WEBM 格式。
- 视频必须**没有音频流**。

目前通过在线网站可以将 gif 转成 webm 格式，如果 gif 是透明背景，那么转换城的 webm 格式的表情也是透明背景，在线网站地址：[GIF 转 WEBM](https://cdkm.com/cn/gif-to-webm)

在转换的时候设置转换项-视频尺寸-自定义，设置成 512px 512px 进行转换完成后，下载下来。

上传过程同上描述。先创建动态贴纸名称，上传，对应 emoji 表情，上传完成设置贴纸地址即可分享使用。

## [其他](#其他)

您也可以使用下面的第三方 Telegram 机器人，更方便地创建贴纸包：

- [@fStikBot](https://t.me/fStikBot)
- [@WuMingv2Bot](https://t.me/WuMingv2Bot)
- [@KyStkrBot](https://t.me/KyStkrBot)
