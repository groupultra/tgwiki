### [](#secret-chats)Secret Chats

#### [](#q-how-are-secret-chats-different)Q: How are secret chats different?

Secret chats are meant for people who want more secrecy than the average fella. All messages in secret chats use end-to-end encryption. This means only you and the recipient can read those messages — nobody else can decipher them, including us here at Telegram ([more on this here](#q-can-telegram-protect-me-against-everything)). On top of this, Messages cannot be forwarded from secret chats. And when you delete messages on your side of the conversation, the app on the other side of the secret chat will be ordered to delete them as well.

You can order your messages, photos, videos and files to [self-destruct](#q-how-do-self-destructing-messages-work) in a set amount of time after they have been read or opened by the recipient. The message will then disappear from both your and your friend's devices.

All secret chats in Telegram are device-specific and are not part of the Telegram cloud. This means you can only access messages in a secret chat from their device of origin. They are safe for as long as your device is safe in your pocket.

#### [](#q-how-do-i-start-a-secret-chat)Q: How do I start a secret chat?

Open the profile of the user you want to contact. Tap on ‘…’, then ‘Start Secret Chat’.

Remember that Telegram secret chats are device-specific. If you start a secret chat with a friend on one of your devices, this chat will only be available on that device. If you log out, you will lose all your secret chats. You can create as many different secret chats with the same contact as you like.

#### [](#q-how-do-self-destructing-messages-work)Q: How do self-destructing messages work?

The Self-Destruct Timer is available for **all messages** in Secret Chats and for **media** in private cloud chats.

To set the timer, simply tap the clock icon (in the input field on iOS, top bar on Android), and then choose the desired time limit. The clock starts ticking the moment the message is displayed on the recipient's screen (gets two check marks). As soon as the time runs out, the message disappears from **both** devices. We will try to send a notification if a screenshot is taken.

Please note that the timer in Secret Chats only applies to messages that were sent **after** the timer was set. It has no effect on earlier messages.

#### [](#q-can-i-be-certain-that-my-conversation-partner-doesn-39t-take-a)Q: Can I be certain that my conversation partner doesn't take a screenshot?

Unfortunately, there is no bulletproof way of detecting screenshots on certain systems (most notably, some Android and Windows Phone devices). We will make every effort to alert you about screenshots taken in your Secret Chats, but it may still be possible to bypass such notifications and take screenshots silently. We advise to share sensitive information only with people you trust. After all, nobody can stop a person from taking a picture of their screen with a different device or an old school camera.

#### [](#q-what-is-this-39encryption-key-39-thing)Q: What is this 'Encryption Key' thing?

When a secret chat is created, the participating devices exchange encryption keys using the so-called [Diffie-Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange). After the secure end-to-end connection has been established, we generate a picture that visualizes the encryption key for your chat. You can then compare this image with the one your friend has — if the two images are the same, you can be sure that the secret chat is secure, and no [man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) can succeed.

Newer versions of Telegram apps will show a larger picture along with a textual representation of the key (this is not the key itself, of course!) when both participants are using an updated app.

Always compare visualizations using a channel that is known to be secure — it's safest if you do this in person, in an offline meeting with the conversation partner.

#### [](#q-why-not-just-make-all-chats-39secret-39)Q: Why not just make all chats 'secret'?

All Telegram messages are always securely encrypted. Messages in Secret Chats use **client-client** encryption, while Cloud Chats use **client-server/server-client** encryption and are stored encrypted in the Telegram Cloud (more [here](https://telegram.org/privacy#4-1-storing-data)). This enables your cloud messages to be both [secure](#q-do-you-process-data-requests) and immediately accessible from any of your devices – even if you lose your device altogether.

The problem of restoring access to your chat history on a newly connected device (e.g. when you lose your phone) does not have an elegant solution in the end-to-end encryption paradigm. At the same time, reliable backups are an essential feature for any mass-market messenger. To solve this problem, some applications (like Whatsapp and Viber) allow [decryptable backups](https://www.eff.org/deeplinks/2016/10/where-whatsapp-went-wrong-effs-four-biggest-security-concerns) that put their users' privacy at risk – even if they do not enable backups themselves. Other apps ignore the need for backups altogether and leave their users vulnerable to data loss.

We opted for a third approach by offering two distinct types of chats. Telegram disables default system backups and provides all users with an integrated security-focused backup solution in the form of Cloud Chats. Meanwhile, the separate entity of Secret Chats gives you full control over the data you do not want to be stored.

This allows Telegram to be widely adopted in broad circles, not just by activists and dissidents, so that the simple fact of using Telegram does not mark users as targets for heightened surveillance in certain countries. We are convinced that the separation of conversations into Cloud and Secret chats represents the most secure solution currently possible for a massively popular messaging application.

> See also: [Why Telegram isn't End-to-End Encrypted “by Default”](https://telegra.ph/Why-Isnt-Telegram-End-to-End-Encrypted-by-Default-08-14)
