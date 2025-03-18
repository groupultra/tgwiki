1.  [Home](https://tgnav.github.io/tgwiki/)
2.  [DC Explanation](https://tgnav.github.io/tgwiki/dc.html)

## DC Explanation

* * *

## [Telegram DC Explanation](#telegram-dc-explanation)

DC: Data Centers, Telegram has deployed 5 data centers around the world:

+   DC1: USA - Miami
+   DC2: Netherlands - Amsterdam
+   DC3: USA - Miami
+   DC4: Netherlands - Amsterdam
+   DC5: Singapore

## [How to know which DC your account belongs to?](#how-to-know-which-dc-your-account-belongs-to)

1.  According to the [Telegram official documentation](https://core.telegram.org/api/datacenter), the DC your account belongs to is determined by the IP used during registration.
2.  However, in reality, your account's DC is actually determined by the country/region selected at registration. For example, phone numbers with +86 are mostly on DC5, while those with +1 are mostly on DC1.
3.  The DC is determined at the time of registration and cannot be changed; switching your phone number will not change your DC. To change DC, you must deactivate your account and register a new one.
4.  You can use bots to check which DC your account belongs to: [@nmnmfunBot](https://t.me/nmnmfunBot) [@KinhRoBot](https://t.me/KinhRoBot) [@Sean_Bot](https://t.me/Sean_Bot) [@WooMaiBot](https://t.me/WooMaiBot)

Note: Corresponding Telegram DC for registered phone number area codes

![image.png](https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png)

image.png

## [Is it useful to set a proxy policy group specifically for Telegram?](#is-it-useful-to-set-a-proxy-policy-group-specifically-for-telegram)

1.  The DC your account belongs to is where your data (messages, images, files, etc.) is stored. When you send media to private chats or groups, others download it from the DC your account is located in.
2.  For example, if your account is in DC5, no matter where the other person’s account is, they will download the media you sent from DC5. Similarly, if you check a file sent by someone whose account is in DC1 while yours is in DC5, you will download that media from DC1.
3.  Understanding the above two points, it becomes clear that setting a separate proxy policy for Telegram is meaningless. This is because people in a group, some might be in DC1 while others in DC5. If you set the Telegram policy to SG, seeing media sent from DC1 will involve going through SG, although the difference might not be very noticeable.

## [Other](#other)

Telegram's data centers utilize potato servers, which might occasionally crash. If everyone can't send messages, then the Telegram server has crashed.

[

Previous Page

Telegram Limits

](https://tgnav.github.io/tgwiki/limit.html)[

Chinese Language Pack

](https://tgnav.github.io/tgwiki/language.html)