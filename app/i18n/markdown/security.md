### [](#security)Security

> If you are an advanced user, you may find our [FAQ for the Technically Inclined](https://core.telegram.org/techfaq) useful as well.

#### [](#q-how-secure-is-telegram)Q: How secure is Telegram?

Telegram is more secure than mass market messengers like WhatsApp and Line. We are based on the MTProto protocol (see [description](https://core.telegram.org/mtproto) and [advanced FAQ](https://core.telegram.org/techfaq)), built upon time-tested algorithms to make security compatible with high-speed delivery and reliability on weak connections. We are continuously working with the community to improve the security of our protocol and clients.

#### [](#q-what-if-im-more-paranoid-than-your-regular-user)Q: What if I’m more paranoid than your regular user?

We've got you covered. Telegram’s special [secret chats](#secret-chats) use end-to-end encryption, leave no trace on our servers, support self-destructing messages and don’t allow forwarding. On top of this, secret chats are not part of the Telegram cloud and can only be accessed on their devices of origin.

#### [](#q-so-how-do-you-encrypt-data)Q: So how do you encrypt data?

We support two layers of secure encryption. [Server-client encryption](https://core.telegram.org/mtproto) is used in Cloud Chats (private and group chats), Secret Chats use an additional layer of [client-client encryption](https://core.telegram.org/api/end-to-end). All data, regardless of type, is encrypted in the same way — be it text, media or files.

Our encryption is based on 256-bit symmetric AES encryption, 2048-bit RSA encryption, and Diffie–Hellman secure key exchange. You can find more info in the [Advanced FAQ](https://core.telegram.org/techfaq).

> See also: [Do you process data requests?](https://telegram.org/faq#q-do-you-process-data-requests)

#### [](#q-why-should-i-trust-you)Q: Why should I trust you?

Telegram is open, anyone can check our [source code](https://telegram.org/apps#source-code), [protocol](https://core.telegram.org/mtproto) and [API](https://core.telegram.org/api), see how everything works and make an informed decision. Telegram supports [verifiable builds](https://telegram.org/blog/verifiable-apps-and-more), which allow experts to independently verify that our code published on GitHub is the **exact same code** that is used to build the apps you download from App Store or Google Play.

We welcome security experts to audit our system and appreciate any feedback at [security@telegram.org](mailto:security@telegram.org).

On top of that, Telegram's primary focus is not to [bring a profit](#q-how-are-you-going-to-make-money-out-of-this), so commercial interests will never interfere with our mission.

> See also: [articles about Telegram](https://telegram.org/press)

#### [](#q-do-i-need-to-trust-telegram-for-this-to-be-secure)Q: Do I need to trust Telegram for this to be secure?

When it comes to [secret chats](#secret-chats), you don't — just make sure that the visualized key of your secret chat matches the one in your friend's secret chat settings. [More about this below](https://telegram.org/faq#q-what-is-this-39encryption-key-39-thing).

#### [](#q-what-if-my-hacker-friend-says-they-could-decipher-telegram-mes)Q: What if my hacker friend says they could decipher Telegram messages?

> See [this page](https://core.telegram.org/bug-bounty) for the latest details about the [Telegram Bug Bounty Program](https://core.telegram.org/bug-bounty).

Anyone who claims that Telegram messages can be deciphered is welcome to prove that claim in our competition and [win $300,000](https://telegram.org/blog/cryptocontest). You can check out the [Cracking Contest Description](https://core.telegram.org/contest300K) to learn more.

Any comments on Telegram's security are welcome at [security@telegram.org](mailto:security@telegram.org). All submissions which result in a change of code or configuration are eligible for bounties, ranging from **$100** to [**$100,000**](https://telegram.org/blog/crowdsourcing-a-more-secure-future) or more, depending on the severity of the issue. Please note that we can not offer bounties for issues that are disclosed to the public before they are fixed.

#### [](#q-can-telegram-protect-me-against-everything)Q: Can Telegram protect me against everything?

Telegram can help when it comes to data transfer and secure communication. This means that all data (including media and files) that you send and receive via Telegram cannot be deciphered when intercepted by your internet service provider, owners of Wi-Fi routers you connect to, or other third parties.

But please remember that we cannot protect you from your own mother if she takes your unlocked phone without a passcode. Or from your IT-department if they access your computer at work. Or from any other people that get physical or [root](https://en.wikipedia.org/wiki/Superuser) access to your phones or computers running Telegram.

If you have reasons to worry about your personal security, we strongly recommend using only [Secret Chats](#secret-chats) in official or at least verifiable open-source apps for sensitive information, preferably with a [self-destruct timer](#q-how-do-self-destructing-messages-work). We also recommend enabling 2-Step Verification and setting up a strong passcode to lock your app, you will find both options in Settings > Privacy and Security.

#### [](#q-how-does-2-step-verification-work)Q: How does 2-Step Verification work?

Logging in with an SMS code is an industry standard in messaging, but if you're looking for more security or have reasons to doubt your mobile carrier or government, we recommend protecting your cloud chats with an additional password.

You can do this in **Settings > Privacy and Security > 2-Step Verification**. Once enabled, you will need both an SMS code and a password to log in. You can also set up a recovery email address that will help regain access, should you forget your password. If you do so, please remember that it's important that the recovery email account is also protected with a strong password and 2-Step Verification when possible.

[Check this out](https://xkcd.com/936/) for tips on creating a strong password that is easy to remember.

#### [](#q-why-can-jailbroken-and-rooted-devices-be-dangerous)Q: Why can jailbroken and rooted devices be dangerous?

Using a rooted or jailbroken device makes it easier for a potential attacker to gain full administrative control over your device — [root access](https://en.wikipedia.org/wiki/Superuser).

A user with root access can easily bypass security features built into the operating system, read process memory or access restricted areas, such as the [internal storage](https://developer.android.com/training/data-storage#filesInternal). Once an attacker has root access, any efforts to mitigate threats become futile. No application can be called safe under these circumstances, no matter how strong the encryption.
