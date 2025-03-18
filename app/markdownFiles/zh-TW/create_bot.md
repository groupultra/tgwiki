1.  [首頁](https://tgnav.github.io/tgwiki/)
2.  [創建機器人](https://tgnav.github.io/tgwiki/createrobot.html)

## 創建機器人

* * *

## [Telegram創建機器人](#telegram創建機器人)

機器人是Telegram的特色功能之一。Telegram提供開放的api接口，允許開發者製作自己的機器人。

## [創建機器人](#創建機器人)

1.  打開Telegram
2.  搜索 [@BotFather](https://t.me/botfather)
3.  點擊`START`（開始）
4.  點擊`Menu`（菜單）-> 點擊`/newbot`（新機器人） BotFather 回覆：`Alright, a new bot. How are we going to call it? Please choose a name for your bot.`
5.  輸入機器人名稱（自訂） BotFather 回覆：`Good. Now let's choose a username for your bot. It must end in` bot`. Like this, for example: TetrisBot or tetris_bot.`
6.  輸入機器人用戶名（bot為結尾，例：`abcbot`，用戶名設置後不可更改） BotFather 回覆（得到以下回覆說明創建成功）：`Done! Congratulations on your new bot. You will find it at t.me/abcbot....`（`完畢！ 恭喜您的新機器人。 您可以在 t.me/abcbot 找到它。`）

操作演示

![A-createrobot1.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot1.jpg)

A-createrobot1.jpg

警告

請勿洩露API Token（格式：`12345:6789ABCDEF`），所有知道API Token的人都可以控制你的機器人！

## [管理機器人](#管理機器人)

1.  點擊`Menu`（菜單）-> 點擊 `/mybots`（我的機器人）
    
2.  點擊機器人用戶名
    
    界面截圖
    
    ![A-createrobot2.jpg](https://cdn.jsdelivr.net/gh/tgwiki/images/A/createrobot2.jpg)
    
    A-createrobot2.jpg
    
    +   API Token（API令牌，用於控制機器人）
        
    +   Edit bot（編輯bot）
        
        +   Edit Name（編輯名稱）
        +   Edit About（編輯關於，內容顯示在機器人簡介處）
        +   Edit Description（編輯說明，用戶會在啟用機器人前“它能做什麼”中看到）
        +   Edit Description Pecture（編輯描述圖片）
        +   Edit Botpic（編輯機器人頭像）
        +   Edit Commands（編輯命令，可以在此處添加/修改命令，如`/help`等）
    +   Bot settings（bot設置）
        
        +   Inline mode（內聯模式，開啟後在輸入框@機器人可以使用內聯功能）
        +   Allow Groups?（允許將機器人拉入群組嗎？）
        +   Group Privacy（群組隱私，預設開啟，機器人未收到命令不會讀取群組消息內容）
        +   Group Admin Rights（群組管理員權限，開啟後拉入群組時需要授予管理員權限）
        +   Channel Admin Rights（頻道管理員權限，開啟後拉入頻道時需要授予管理員權限）
        +   Payments（付款方式，您可以在此處添加付款方式）
        +   Domain（域名，您可以在此處將域名綁定至機器人）
        +   Menu Button（菜單按鈕，顯示在機器人輸入框下方）
        +   Back to bot（返回機器人）
    +   Payments（付款方式）
        
    +   Transfer Ownership（轉讓所有權） BotFather 回覆：`You can transfer bot ownership to another Telegram user.`（`您可以將機器人所有權轉讓給其他Telegram用戶。`）
        
        1.  點擊 Choose recipient（選擇收件人）
            
            BotFather 回覆