## Private Chat Bot Setup

---

## [Setting Up a Private Chat Bot on Telegram](#setting-up-a-private-chat-bot-on-telegram)

Some accounts may have bidirectional restrictions and cannot initiate direct chats. In this case, a private chat bot may be needed. Additionally, private chat bots can be used for submissions to prevent spam and harassment.

## [Steps](#steps)

1. First, please [follow this tutorial](tgwiki/createrobot.html) to create a bot.
2. Start a private chat with [@LivegramBot](https://t.me/LivegramBot) and choose a language.
3. Click `Add Bot`, and the bot will prompt: `To connect a bot, you should follow these two steps...`
4. Send your Token to the bot (format: `12345:6789ABCDEF`).

    The bot will respond: `Success! @xxxbot has been connected. The bot will forward any (including your own) messages sent to it...`

5. Next, chat with your bot privately. All messages sent to the private chat bot (including your own) will be forwarded to you.

Operation demonstration

![A-livegram1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/livegram1.jpg)

A-livegram1.jpg

![A-livegram2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/livegram2.jpg)

A-livegram2.jpg

## [Usage Tips](#usage-tips)

- Reply to messages from the private chat bot, and the bot will automatically forward your message to the other party.
- You can use the `/ban` or `/unban` command in response to messages to block or unblock an account.
- You can manage the bot in [@LivegramBot](https://t.me/LivegramBot) -> `My Bots`:
  - Localizations: Set multilingual welcome messages
  - Groups: Forward private messages to groups
  - Broadcast: Send broadcasts to all users
  - Statistics: View bot statistics
  - Anonymous Mode: The specific function is unclear, use with caution as it cannot be turned off after activation
  - Disconnect Bot: Disconnect the bot

Interface screenshots

![A-livegram3.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/livegram3.jpg)

A-livegram3.jpg