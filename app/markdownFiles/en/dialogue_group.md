# Introduction to Telegram Conversation Grouping Feature

Telegram offers a conversation grouping feature to help users manage their chat list more clearly and efficiently.

## Client Requirements

This feature is available for the following client versions and above:

- **iOS / Android / macOS**: Version ≥ 6.0
- **Windows / macOS / Linux Desktop**: Version ≥ 2.0

## Grouping Settings Description

Users can freely choose:

- The types of conversations to include (such as groups, channels, etc.)
- Exclude certain types of conversations
- Customize combinations to filter specific conversations

**Note**: Archived conversations cannot be included in any groups.

**Limits**:

- Each group can include a maximum of **100 conversations**
- Conversations can be pinned within each group, with no limit on the number
- A total of up to **10 groups** can be created

📄 Click to view the [official Telegram blog introduction](https://telegram.org/blog/folders)

## Examples of Grouping

- If only "groups" is checked, the group will include all group chats you have joined (including archived ones).
- If "channels" is selected and "archived" is excluded, the group will only contain active channels.
- You can further exclude specific groups for more precise management.

## Group Sharing Feature

After creating a group, you can generate a shareable link (only applicable to public channels, groups, etc.; **not for contacts, private groups, or private channels**).

Other users can click the link to directly import the group's settings.

## Group Operation Methods

**iOS / Android / macOS**: Long press or right-click on any conversation, or go through **Settings → Groups** to enter the configuration interface.

## Usage Tips

### Mobile Gesture Operations

**iOS/Android**:

- Long press the group name to edit, reorder, or delete
- Swipe left or right in the conversation list to switch between different groups
- Pull down the chat list to access "Archived" content (but archived conversations will not appear in the groups)

**iOS Exclusive Gestures**:

- Swipe right on the conversation avatar: Quickly mark as read/pin
- Swipe left on the message on the right: Enable notifications, delete, archive operations

**Android**:

- Long press on the conversation → Select "Archive"

![Telegram Group Operation Illustration](/markdown/img-4.jpeg)

### Desktop Operations

**macOS**:

- Use the shortcut Command + Number key (e.g., Command + 1/2/3...) to switch groups
- Right-click on the group name to perform edit, reorder or delete operations

**Windows/Linux Desktop**:

- Use the shortcut Ctrl + Number key (e.g., Ctrl + 1/2/3...) to switch
- Supports dragging groups for sorting
- Right-click can edit or delete groups

## Additional Reminder

The number displayed on the right side of the group name indicates the "**number of updated conversations**," and **not the total number of unread messages**.