### [](#troubleshooting)Troubleshooting

#### [](#login-and-sms)Login and SMS

Please make sure you are entering your mobile phone number in the international format.  
I.e.: `+(country code)(city or carrier code)(your number)`

If you are having registration or login problems, please contact us using [this form](https://telegram.org/support).

#### [](#getting-a-code-via-a-phone-call)Getting a code via a phone call

For security reasons, login codes dictated via a phone call are only available for accounts that have **two-step verification** enabled (Settings > Privacy & Security > Two-Step Verification).

Please also note that Telegram accounts can only be connected to a mobile number. We currently don't support landline numbers.

#### [](#getting-a-code-via-telegram)Getting a code via Telegram

If you have recently used one of our apps on **another device** (it could also be a different app on the same device), we may send the login code **via Telegram** instead of SMS.

To receive such a code, just check Telegram from any of your connected devices. You will find it in the chat with Telegram, a verified profile with a blue check:

[![](https://telegram.org/file/811140682/1a34/C6cNb93Sl4w.36331/8d856ce132fda22ee0 "Login via Telegram")](https://telegram.org/file/811140682/1a34/C6cNb93Sl4w.36331/8d856ce132fda22ee0)

Login code sent via Telegram

**WARNING!** Please note that getting codes via Telegram should not be considered an alternative to using an **up-to-date phone number**. In case of a change in numbers, always make sure [Telegram is connected](#q-how-do-i-change-my-phone-number) to a phone number **you control**, otherwise you risk losing access to your account forever.

#### [](#notification-problems)Notification problems

> If the tips below don't help, check out this detailed guide on [**Troubleshooting Notification Issues**](https://telegra.ph/Notifications-FIX).

**ANDROID**

1.  Go to Telegram Settings — Notifications and Sounds, make sure that notifications are **ON** and Importance is set to **“High”** or greater.
2.  Check whether contact or group is _muted_.
3.  Make sure [Google Play Services](https://play.google.com/store/apps/details?id=com.google.android.gms) are installed on your phone.
4.  Check **notification priority** for Telegram in **Android settings**, it can be called _Importance_ or _Behaviour_ depending on your device.
5.  If your phone uses some **battery saving software**, make sure that Telegram is whitelisted in that application.

> NOTE: **Huawei** and **Xiaomi** devices have evil task killer services that interfere with the Telegram notification service. For our notifications to work, you need to add Telegram to allowed apps in those devices' security settings. Huawei: Phone Manager App > Protected Apps > Add Telegram to the list. Xiaomi: Services > Security > Permissions > Autostart, find Telegram and enable autostart.

**iOS**

1.  Go to Telegram Settings — Notifications and Sounds, make sure that notifications are ON in Telegram.
2.  Check that notifications are **ON** in phone Settings.
3.  Check, whether contact or group is _muted_.
4.  Shut down Telegram (go to home screen, double tap home button, swipe upwards on Telegram), then go to phone settings, set the alert style for Telegram to NONE. Relaunch Telegram, go to phone settings, set alert style back to banners.

#### [](#problems-with-contacts)Problems with contacts

If you know your friends have Telegram, but you can't see them — or they appear as numbers instead of names.

_Android:_

1.  Make sure you are using the latest version of the app.
2.  Relaunch the app (by terminating it from processes list and launching again).
3.  Temporarily change the name of the contact in phone contacts (add a few symbols, then change back again).
4.  If that didn't help, re-login. Remember that logging out kills your Secret Chats.

_iOS:_

1.  Force quit the app (double tap home button, then swipe up on Telegram), then relaunch and check if it helped.
2.  If that doesn't help, temporarily change the name of the contact in phone contacts (add a few symbols, then change back again).
3.  If that doesn’t work, re-login: Settings > Edit > Log Out. Remember that logging out kills all your Secret Chats. Then log in again.

#### [](#deleting-contacts-on-android)Deleting contacts on Android

To delete a contact, open a chat with the person, tap the title in the top area of the chat screen to open their profile, then tap on (⋮) in the top right corner > 'Delete contact'.

If you want to delete the contact completely, make sure you also delete them from your phone contacts. Telegram stays in sync and will add the contact back if you don't.

#### [](#where-did-my-secret-chat-messages-go)Where did my Secret Chat messages go?

Secret Chats are established between the two devices they were created on. This means that all those messages are not available in the cloud and cannot be accessed on other devices.

Moreover, Secret Chats are also tied to your current login session on the device. If you log out and in again, you will lose all your Secret Chats.

#### [](#can-39t-send-messages-to-non-contacts)Can't send messages to non-contacts

When users report unwanted messages from a Telegram account, we apply a limit: Reported accounts can only send messages to people who have their number saved as a contact.

This means that if you randomly contact people you don't know and send them annoying messages, you may lose the ability to do so in the future.

If you think that this limit was applied to your account wrongly, please visit [this page](https://telegram.org/faq_spam).

#### [](#telegram-uses-the-camera-or-microphone-in-the-background)Telegram uses the camera or microphone in the background!

Telegram can use the **microphone** in the background if you minimize the app when making a call, recording a video, or recording a voice/video message.

Permission monitors on Samsung and Xiaomi can inadvertently flag and notify you that Telegram requested access to **camera** in the background. This happens when the app requests info about the camera — it isn’t using the camera. Unfortunately it may look the same to the Samsung and Xiaomi permission monitors.

Camera info is requested by the app when you tap on the attachment button, or start recording a video or a video message. If you do this and quickly close the app, the already initiated request may try to run asynchronously when the app is already in the background, or be sent when the system wakes up the app to show a notification about a new message. In any case, these requests are only for the camera info, the app _never_ uses the camera itself in the background.

Anyone can check Telegram’s [open source code](https://telegram.org/apps#source-code) and confirm that the app is not doing anything behind their back. We also offer [reproducible builds](https://telegram.org/blog/verifiable-apps-and-more) that can help you prove that the version you downloaded from App Store or Google Play is built from the exact same source code we publish.

---
