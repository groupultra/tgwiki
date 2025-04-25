# 创建机器人

## Telegram 创建机器人

机器人是 Telegram 的特色功能之一。Telegram 提供开放的 API 接口，允许开发者制作自己的机器人。

## 创建步骤

1. 打开 Telegram
2. 搜索 [@BotFather](https://t.me/botfather)
3. 点击 `START`（开始）
4. 点击 `Menu`（菜单）-> 点击 `/newbot`（新机器人）
   - BotFather 回复：`Alright, a new bot. How are we going to call it? Please choose a name for your bot.`
5. 输入机器人名称（自定义）
   - BotFather 回复：`Good. Now let's choose a username for your bot. It must end in 'bot'. Like this, for example: TetrisBot or tetris_bot.`
6. 输入机器人用户名（bot 为结尾，例：`abcbot`，用户名设置后不可更改）
   - BotFather 回复：`Done! Congratulations on your new bot. You will find it at t.me/abcbot....`（`完毕！恭喜您的新机器人。您可以在 t.me/abcbot 找到它。`）

### 操作演示

![A-createrobot1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot1.jpg)

> ⚠️ **警告**：请勿泄露 API Token（格式：`12345:6789ABCDEF`），所有知道 API Token 的人都可以控制你的机器人！

## 管理机器人

1. 点击 `Menu`（菜单）-> 点击 `/mybots`（我的机器人）
2. 点击机器人用户名

### 界面截图

![A-createrobot2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot2.jpg)

### 管理选项

#### API Token
- API 令牌，用于控制机器人

#### Edit Bot（编辑 bot）
- Edit Name（编辑名称）
- Edit About（编辑关于，内容显示在机器人简介处）
- Edit Description（编辑说明，用户会在启用机器人前"它能做什么"中看到）
- Edit Description Picture（编辑描述图片）
- Edit Botpic（编辑机器人头像）
- Edit Commands（编辑命令，可以在此处添加/修改命令，如 `/help` 等）

#### Bot Settings（bot 设置）
- Inline Mode（内联模式，开启后在输入框 @ 机器人可以使用内联功能）
- Allow Groups?（允许将机器人拉入群组吗？）
- Group Privacy（群组隐私，默认开启，机器人未收到命令不会读取群组消息内容）
- Group Admin Rights（群组管理员权限，开启后拉入群组时需要授予管理员权限）
- Channel Admin Rights（频道管理员权限，开启后拉入频道时需要授予管理员权限）
- Payments（付款方式，您可以在此处添加付款方式）
- Domain（域名，您可以在此处将域名绑定至机器人）
- Menu Button（菜单按钮，显示在机器人输入框下方）
- Back to Bot（返回机器人）

#### Transfer Ownership（转让所有权）
BotFather 回复：`You can transfer bot ownership to another Telegram user.`（`您可以将机器人所有权转让给其他 Telegram 用户。`）

1. 点击 Choose Recipient（选择收件人）
   - BotFather 回复：`Please share the new owner's contact or their username.`
2. 发送收件人 ID（收件人必须先前给机器人发送过 1 条消息）
   - BotFather 回复：`You are about to transfer ownership of the bot @abcbot to` 收件人名称
3. 点击 `Yes, I am sure, Proceed.`（`是的，我确定，继续。`）

#### 其他选项
- Delete Bot（删除机器人，该操作无法撤销）
- « Back to Bots List（返回机器人列表）

> 💡 **提示**：在找 Telegram 机器人推荐？请参阅 [此处](tgwiki/robot)。
