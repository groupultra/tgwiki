1.  [ホーム](https://tgnav.github.io/tgwiki/)
2.  [ボットの作成](https://tgnav.github.io/tgwiki/createrobot.html)

## ボットの作成

---

## [Telegram ボットの作成](#telegram-ボットの作成)

ボットは Telegram の特徴的な機能の 1 つです。Telegram はオープン API インターフェースを提供しており、開発者が独自のボットを作成できます。

## [ボットを作成する](#ボットを作成する)

1.  Telegram を開く
2.  [@BotFather](https://t.me/botfather) を検索
3.  `START` をクリック
4.  `Menu`（メニュー） -> `/newbot` をクリック  
    BotFather の返信：  
    `Alright, a new bot. How are we going to call it? Please choose a name for your bot.`
5.  ボットの名前を入力（自由に設定可能）  
    BotFather の返信：  
    `Good. Now let's choose a username for your bot. It must end in 'bot'. Like this, for example: TetrisBot or tetris_bot.`
6.  ボットのユーザー名を入力（`bot` で終わる必要があります。例: `abcbot`。設定後の変更は不可）  
    BotFather の返信（作成成功時）：  
    `Done! Congratulations on your new bot. You will find it at t.me/abcbot....`

### 操作例:

![A-createrobot1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot1.jpg)

A-createrobot1.jpg

### ⚠ 警告

API トークン（形式: `12345:6789ABCDEF`）を公開しないでください。API トークンを知っている人は誰でもボットを制御できます！

## [ボットの管理](#ボットの管理)

1.  `Menu`（メニュー） -> `/mybots` をクリック
2.  ボットのユーザー名をクリック

### 画面例:

![A-createrobot2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot2.jpg)

A-createrobot2.jpg

- API トークン（ボットの制御に使用）
- ボットの編集
  - 名前の編集
  - 「概要」の編集（ボットのプロフィールに表示）
  - 「説明」の編集（ユーザーがボットを有効にする前に表示される）
  - 説明画像の編集
  - ボットのプロフィール画像の編集
  - コマンドの編集（`/help` などのコマンドを追加・編集）
- ボットの設定
  - インラインモード（入力時に `@ボット名` でインライン機能を使用可能）
  - グループ追加を許可するか
  - グループプライバシー（デフォルトでは、ボットはメッセージを読み取りません）
  - グループ管理者権限（グループに追加する際、管理者権限が必要）
  - チャンネル管理者権限（チャンネルに追加する際、管理者権限が必要）
  - 支払い設定（ボットでの支払いを設定）
  - ドメイン設定（ボットにドメインを紐付け）
  - メニューボタン（ボットの入力欄下にボタンを表示）
  - ボットに戻る
- 支払い設定
- 所有権の譲渡  
  BotFather の返信：  
  `You can transfer bot ownership to another Telegram user.`

  1. `Choose recipient`（受信者を選択）をクリック  
     BotFather の返信：  
     `Please share the new owner's contact or their username.`
  2. 受信者の ID を送信（受信者はボットに少なくとも 1 回メッセージを送る必要がある）  
     BotFather の返信：  
     `You are about to transfer ownership of the bot @abcbot to` 受信者...
  3. `Yes, I am sure, Proceed.`（はい、確認しました）をクリック

- ボットの削除（この操作は取り消せません）
- « ボットリストに戻る

### 💡 ヒント

おすすめの Telegram ボットを探していますか？[こちら](https://tgnav.github.io/tgwiki/robot) をご覧ください。
