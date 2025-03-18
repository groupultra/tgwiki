1.  [Home](https://tgnav.github.io/tgwiki/)
2.  [Create a Bot](https://tgnav.github.io/tgwiki/createrobot.html)

## Create a Bot

* * *

## [Creating a Telegram Bot](#creating-a-telegram-bot)

Bots are one of the unique features of Telegram. Telegram provides an open API interface, allowing developers to create their own bots.

## [Create a Bot](#create-a-bot)

1.  Open Telegram
2.  Search for [@BotFather](https://t.me/botfather)
3.  Click `START`
4.  Click `Menu` -> Click `/newbot` BotFather replies: `Alright, a new bot. How are we going to call it? Please choose a name for your bot.`
5.  Enter the bot name (customized) BotFather replies: `Good. Now let's choose a username for your bot. It must end in "bot". Like this, for example: TetrisBot or tetris_bot.`
6.  Enter the bot username (must end with "bot", e.g., `abcbot`, the username cannot be changed after being set) BotFather replies (If you receive the following reply, it means the creation was successful): `Done! Congratulations on your new bot. You will find it at t.me/abcbot....`

Demonstration

![A-createrobot1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot1.jpg)

A-createrobot1.jpg

Warning

Please do not disclose your API Token (format: `12345:6789ABCDEF`), anyone who knows the API Token can control your bot!

## [Manage the Bot](#manage-the-bot)

1.  Click `Menu` -> Click `/mybots`
    
2.  Click on the bot username
    
    Interface Screenshot
    
    ![A-createrobot2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot2.jpg)
    
    A-createrobot2.jpg
    
    +   API Token (API token used to control the bot)
        
    +   Edit bot
        
        +   Edit Name
        +   Edit About (content displayed in the bot's profile)
        +   Edit Description (users will see this when enabling the bot "What can it do?")
        +   Edit Description Picture
        +   Edit Botpic (edit bot avatar)
        +   Edit Commands (add/edit commands such as `/help`, etc.)
    +   Bot settings
        
        +   Inline mode (enable inline functionality by typing @bot in the input box)
        +   Allow Groups? (can the bot be added to groups?)
        +   Group Privacy (group privacy, enabled by default, the bot won’t read group messages unless commanded)
        +   Group Admin Rights (group admin permissions, if enabled, must grant admin rights when added to a group)
        +   Channel Admin Rights (channel admin permissions, if enabled, must grant admin rights when added to a channel)
        +   Payments (payment methods, you can add methods here)
        +   Domain (you can bind a domain to the bot here)
        +   Menu Button (the button displayed below the bot input box)
        +   Back to bot
    +   Payments
        
    +   Transfer Ownership (you can transfer bot ownership to another Telegram user.) BotFather replies: `You can transfer bot ownership to another Telegram user.`
        
        1.  Click Choose recipient
            
            BotFather replies: `Please share the new owner's contact or their username.`
            
        2.  Send the recipient ID (the recipient must have previously sent at least one message to the bot)
            
            BotFather replies: `You are about to transfer ownership of the bot @abcbot to` recipient's name..... 
            
        3.  Click `Yes, I am sure, Proceed.` (If settings require, enter confirmation)
            
    +   Delete Bot (deleting the bot cannot be undone)
        
    +   « Back to Bots List
        

Tip

Looking for recommendations for Telegram bots? Please refer to [this page](https://tgnav.github.io/tgwiki/robot).

[

Previous Page

Create Sticker

](https://tgnav.github.io/tgwiki/createsticker.html)[

Next Page

Bot Recommendations

](https://tgnav.github.io/tgwiki/robot.html)