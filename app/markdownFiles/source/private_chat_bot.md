## 私聊机器人搭建

---

## [Telegram 搭建私聊机器人](#telegram搭建私聊机器人)

部分账号可能会有双向限制，无法直接发起私聊，这时候可能就需要一个私聊机器人。同时，私聊机器人还可以用作投稿，防止垃圾信息骚扰。

## [步骤](#步骤)

1.  首先，请先 [按照教程](tgwiki/createrobot.html) 创建一个机器人。
2.  私聊 [@LivegramBot](https://t.me/LivegramBot) ，并选择一个语言。
3.  点击`Add Bot`，机器人提示：`To connect a bot, you should follow these two steps...`
4.  将您的 Token 发送给机器人（格式：`12345:6789ABCDEF`）。

    机器人提示：`Success! @xxxbot has been connected. The bot will forward any (including your own) messages sent to it...`

5.  接下来，私聊你的机器人。所有发给私聊机器人的消息（包括你自己的）都会转发给你。

操作演示

![A-livegram1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/livegram1.jpg)

A-livegram1.jpg

![A-livegram2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/livegram2.jpg)

A-livegram2.jpg

## [使用技巧](#使用技巧)

- 回复私聊机器人的消息，机器人会自动将您的消息转发给对方
- 您可以使用`/ban`或`/unban`命令回复消息，来封禁或解封账号
- 你可以在 [@LivegramBot](https://t.me/LivegramBot) ->`My Bots` 中管理机器人：
  - Localizations：设置多语言欢迎信息
  - Groups：将私聊消息转发到群组
  - Broadcast：向所有使用者发送广播
  - Statistics：查看机器人统计信息
  - Anonymous Mode：尚不清楚具体功能，慎重使用，开启后不可关闭
  - Disconnect Bot：取消连接机器人

界面截图

![A-livegram3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/livegram3.jpg)

A-livegram3.jpg
