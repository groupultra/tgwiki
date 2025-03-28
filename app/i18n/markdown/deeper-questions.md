### [](#deeper-questions)Deeper questions

#### [](#q-can-i-get-telegram-39s-server-side-code)Q: Can I get Telegram's server-side code?

All Telegram client apps are fully open source. We offer [verifiable builds both for iOS and Android](https://core.telegram.org/reproducible-builds) – this technology allows to independently verify that the application you download from the app stores was built using the **exact same code** that we publish.

By contrast, publishing the server code doesn’t provide security guarantees neither for Secret Chats nor for Cloud Chats. This is because – unlike with the client-side code – there’s no way to verify that the **same code** is run on the servers.

As for Secret Chats, you don’t need the server-side code to check their integrity – the point of end-to-end encryption is that it must be solid regardless of how the servers function.

> In a [post on his channel](https://t.me/durov/146), Pavel Durov explained why Telegram hasn't published the server code, even as a publicity stunt.

The [encryption](https://core.telegram.org/mtproto) and [API](https://core.telegram.org/) used on Telegram's servers are fully documented and open for review by security experts. We welcome any comments at *security@telegram.org*

#### [](#q-can-i-run-telegram-using-my-own-server)Q: Can I run Telegram using my own server?

Our architecture does not support federation yet. Telegram is a unified cloud service, so creating forks where two users might end up on two different Telegram clouds is unacceptable. To enable you to run your own Telegram server while retaining both speed and security is a task in itself. At the moment, we are undecided on whether or not Telegram should go in this direction.

#### [](#q-can-i-use-the-telegram-api)Q: Can I use the Telegram API?

Yes. Developers for all platforms are welcome to use our [protocol](https://core.telegram.org/mtproto), [API](https://core.telegram.org/api) and even [source code](https://telegram.org/apps#source-code). Check out the [Getting started](https://core.telegram.org/api#getting-started) section of the docs.

> Don't forget about our [Bot API](https://core.telegram.org/bots) that lets you build cool stuff on our platform.

#### [](#q-do-you-have-a-privacy-policy)Q: Do you have a Privacy Policy?

Sure. Check [this](https://telegram.org/privacy) out.

#### [](#q-what-does-the-ios-privacy-sheet-mean)Q: What does the iOS privacy sheet mean?

Apple created privacy sheets to inform users about what data apps may collect, but information there is vague and can be misleading. You can see a detailed explanation of Telegram's sheet [here](https://telegram.org/apple_privacy).

#### [](#q-why-do-you-have-two-apps-in-the-mac-app-store)Q: Why do you have two apps in the Mac App Store?

One is our [app for macOS](https://macos.telegram.org/), the other is Telegram Lite, the macOS version of our [multi-platform client](https://desktop.telegram.org/). Both apps are official. Both started out as unofficial applications by two different developers and vary in design and functionality.

[Telegram for macOS](https://macos.telegram.org/) supports many platform-specific features, such as the MacBook Pro Touch Bar, gesture navigation, integration with the Mac's Share menu and more. It has every feature from the iOS version of the app including Secret Chats.

[Telegram Lite](https://desktop.telegram.org/) is a lightning-fast app, optimized for work-related tasks and handling large communities. It offers a three-column interface, perfect for multitasking and quick access to media, files and links shared in your chats. This app can also be used to [export your Telegram data and chats](https://telegram.org/blog/export-and-more).

#### [](#q-can-i-translate-telegram)Q: Can I translate Telegram?

Telegram is officially available in English, Spanish, German, Dutch, Italian, French, Arabic, Portuguese, Korean, Malay, Russian and Ukrainian on most platforms, and we are gradually expanding the list of languages built into the apps.

If you don’t like how a specific element in Telegram's interface is translated in your language, or would like to help us maintain the translation, check out our [localization platform](https://translations.telegram.org/). Everyone can suggest translations and vote for the best ones, making Telegram localization a community-driven effort.

If you're looking to go beyond suggestions for individual phrases and would like to help us maintain the official translation to your language on a continuous basis, you can contact [@TelegramAuditions](https://t.me/telegramauditions). Please include a hashtag with the English name of your language (e.g. #Albanian) and a few links to phrases on this platform with your **translation suggestions** or **comments**. Be sure to read the [**Style Guide**](https://translations.telegram.org/#style-guide) carefully before you apply.

#### [](#q-can-i-help)Q: Can I help?

Yes, we are always looking for volunteers to help us with user support. If you would be interested in answering questions about Telegram to users from your country, contact our auditions account.

Before you apply, please check out the [Telegram Support Initiative](https://core.telegram.org/tsi).
