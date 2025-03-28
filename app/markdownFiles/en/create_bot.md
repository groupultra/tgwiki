## Create a Bot

---

## [Create a Telegram Bot](#create-a-telegram-bot)

Bots are one of Telegram's special features. Telegram provides an open API that allows developers to create their own bots.

## [Create a Bot](#create-a-bot)

1.  Open Telegram
2.  Search for [@BotFather](https://t.me/botfather)
3.  Click `START`
4.  Click `Menu` -> Click `/newbot` BotFather replies: `Alright, a new bot. How are we going to call it? Please choose a name for your bot.`
5.  Enter the bot name (custom) BotFather replies: `Good. Now let's choose a username for your bot. It must end in 'bot'. Like this, for example: TetrisBot or tetris_bot.`
6.  Enter the bot username (must end with "bot", e.g., `abcbot`, username cannot be changed after setting) BotFather replies (receiving the following reply indicates successful creation): `Done! Congratulations on your new bot. You will find it at t.me/abcbot....`

Operation demonstration

![A-createrobot1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot1.jpg)

A-createrobot1.jpg

Warning

Do not disclose the API Token (format: `12345:6789ABCDEF`); anyone who knows the API Token can control your bot!

## [Manage the Bot](#manage-the-bot)

1.  Click `Menu` -> Click `/mybots`
2.  Click the bot username

    Interface Screenshot

    ![A-createrobot2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot2.jpg)

    A-createrobot2.jpg

    - API Token (API token used to control the bot)
    - Edit bot

      - Edit Name
      - Edit About (content displayed in the bot's profile)
      - Edit Description (users will see this in "What it can do" before enabling the bot)
      - Edit Description Picture
      - Edit Botpic (edit the bot's profile picture)
      - Edit Commands (you can add/modify commands here, such as `/help`, etc.)

    - Bot settings

      - Inline mode (enable inline feature by typing @bot in the input box)
      - Allow Groups? (allow the bot to be added to groups?)
      - Group Privacy (default enabled, bot won't read group message content unless it receives a command)
      - Group Admin Rights (grant admin rights when added to a group)
      - Channel Admin Rights (grant admin rights when added to a channel)
      - Payments (payment method, you can add a payment method here)
      - Domain (bind a domain to the bot here)
      - Menu Button (display below the bot's input box)
      - Back to bot

    - Payments
    - Transfer Ownership (BotFather replies: `You can transfer bot ownership to another Telegram user.`)

      1.  Click Choose recipient

          BotFather replies: `Please share the new owner's contact or their username.`

      2.  Send the recipient ID (the recipient must have previously sent at least one message to the bot)

          BotFather replies: `You are about to transfer ownership of the bot @abcbot to` recipient name.....

      3.  Click `Yes, I am sure, Proceed.` (if set, must input)

    - Delete Bot (this action cannot be undone)
    - « Back to Bots List

Tip

Looking for Telegram bot recommendations? Please refer to [here](tgwiki/robot).