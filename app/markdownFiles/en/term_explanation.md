## [Telegram Glossary](#telegram-glossary)

## [UID](#uid)

A unique identifier; every user/group/channel/bot has a unique numerical identification which **cannot be changed**. If you deactivate and re-register a new account, a new UID will be generated.

### [How to find your UID?](#how-to-find-your-uid)

1. The TG official client does not display the UID.
2. You can use a bot to check, such as: [@getidsbot](https://t.me/getidsbot) [@Sean_Bot](https://t.me/Sean_Bot) [@userinfobot](https://t.me/userinfobot) [@username_to_id_bot](https://t.me/username_to_id_bot).

    Operation demonstration

    ![A-id.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/id.jpg)

    A-id.jpg

3. Use a third-party client to check.

### [What is the purpose of UID?](#what-is-the-purpose-of-uid)

1. You cannot directly search for someone using UID, but some clients allow you to find someone via link format: `tg://user?id=UID`.
2. Certain bots or userbots can use UID to mute or ban users.

## [Username](#username)

An English identifier, unique and cannot be duplicated; every person, group, channel, and bot has a distinct username. Format: `@username` or `https://t.me/username`.

It can be empty, and you may choose not to set a username, but setting one makes it easier for others to find you in global Telegram searches.

## [Registration Time](#registration-time)

TG does not display the account registration time by default, but you can approximate it through the following methods, which may not be accurate:

- Check via bots such as: [@creationdatebot](https://t.me/creationdatebot) [@getidsbot](https://t.me/getidsbot).
- View using third-party clients. For information on third-party clients, please refer to [here](tgwiki/thirdparty).

## [Contacts](#contacts)

Tip

Telegram does not have the concept or functionality of "friends," so there is no "add friend" option; Telegram has "groups/channels/contacts."

Telegram has "contacts," including one-way and two-way contacts.

- Click on the other person's profile -> add contact; the one added at this point is a one-way contact.
- If the other party also adds you to their contact list, then it becomes a two-way contact.
- When adding a contact, make sure to uncheck "Share My Phone Number" so that the other party cannot see your phone number.
- If you have already added someone as a contact and checked `Share My Phone Number`, you can unshare your phone number in `Settings` -> `Privacy` -> `Phone Number`; please refer to [Telegram Privacy Settings](tgwiki/privacy).
- For convenience in finding people later, you can add commonly contacted individuals as contacts. You can also modify the person's name or add notes when adding a contact.
- The other party will not receive any notifications about being added as a contact; they will not know you have added them.

## [Private Chats, Groups, Channels](#private-chats-groups-channels)

Telegram offers several communication options: Private Chat, Groups, Channels, Bots.

1.  Private Chat: One-on-one chats with a specific account, which can be normal private chats or secret chats.

    - You can directly send messages in private chats or secret chats without needing to add the contact (currently, users are not prevented from sending you messages).
    - Click on the other person's profile -> send message to directly send a private message.
    - If you see the prompt "Currently, you can only send messages to two-way contacts," you may be restricted by the official settings.
    - You can send a private message using someone else's link or search for their username.

    Please refer to [Telegram Encrypted Chats](tgwiki/encrypt).

2.  Groups: A chat involving multiple participants—the group owner creates a group, and users can join to participate in discussions. Previously there were "Regular Groups" and "Super Groups"; however, now all created groups are Super Groups, which can accommodate up to 200,000 members. Groups can be categorized into: Private groups and Public groups; the type of group can be selected while creating it (public group or private group).

    - Public Groups: A public username must be custom-set to create a public link for the group (format: `@username` or `https://t.me/username`), making it possible to view and join the group using this link. The public link will be directly displayed in the group description, allowing anyone to see the group messages and member lists even without joining.
    - Private Groups: No custom public link can be set; only the group owner and administrators can create and share private group invitation links (format: `https://t.me/+xxxx`), which require joining the group to see messages and members. Public groups can also create such private invitation links.

    Tip

    How to distinguish between public and private groups:

    - The group owner can check in group settings.
    - View the group description to see if there is a public link.

    Please refer to [Creating Groups on Telegram](tgwiki/creategroup).

3.  Channels: Similar to WeChat official accounts, where one can only follow or unfollow channels. Only the channel owner and channel management can publish content in the channel; members can only view and forward content from the channel. The channel owner can also set restrictions on forwarding and copying channel content. Channels are divided into private and public channels, similar to groups, but members cannot view the list of channel members; only the channel owner and administrators can.

    Please refer to [Creating Channels on Telegram](tgwiki/createchannel).

4.  Channel Comments Feature: This is a feature associated with groups linked to channels.

    Please refer to [Adding "Comment" Feature to Telegram Channel Messages](tgwiki/comment).

## [Banning, Blocking, Muting](#banning-blocking-muting)

1.  Ban

    There are 2 scenarios for banning:

    - The phone number and TG account are banned; this means login is prohibited, resulting in an account ban, which will prompt "is banned" at the login screen.
    - Banned from a group or channel, which means the same as the second point regarding "ban."

2.  Ban

    Also known as blocking or banning.

    - Group or channel administrators (or bots with admin permissions) can ban members.
    - If banned from a group or channel, you have been blacklisted by the group or channel administrator, preventing you from rejoining. Only the administrator can unban (unblock) you for rejoining the group or channel.
    - If you are using a channel identity to speak in a group, the group administrator can ban your channel so that you can no longer communicate with that channel in the group. However, this only bans your channel and does not affect your personal account.

3.  Mute/Restrict

    - Group administrators (or bots with admin permissions) can mute members.
    - If muted, you remain in the group and can see other messages, but you cannot send messages—your presence remains, and you are not kicked out.
    - Mute can be set for a certain duration: x hours/x days/custom/permanent; if set for a certain time, you will be automatically unmuted once the time expires. If set permanently, you will need to contact the group administrator to lift the mute.

4.  Full Mute

    Group administrators (or bots with admin permissions) can disable members' "send message" permissions in group settings, preventing all members from sending messages with only group administrators authorized to send messages.

Tip

When banned, muted, or when the whole group is muted, corresponding messages will be displayed in the TG client interface.