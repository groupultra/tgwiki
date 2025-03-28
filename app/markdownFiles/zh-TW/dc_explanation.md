## DC 說明

---

## [Telegram DC 說明](#telegram-dc說明)

DC：Data Centers，數據中心，Telegram 在世界各地部署有 5 個數據中心：

- DC1：美國-邁阿密
- DC2：荷蘭-阿姆斯特丹
- DC3：美國-邁阿密
- DC4：荷蘭-阿姆斯特丹
- DC5：新加坡

## [如何知道自己帳號屬於哪個 DC?](#如何知道自己帳號屬於哪個dc)

1.  根據 [Telegram 官方文檔說明](https://core.telegram.org/api/datacenter)，帳號屬於哪個 DC 是由註冊時的 IP 決定的
2.  但實際上並非如此，帳號屬於哪個 DC 實際上是由註冊帳號時選擇的國家/地區決定的，比如 +86 的號碼大都是在 DC5，+1 的號碼大都是在 DC1。
3.  DC 是註冊時候就決定了，無法更換，更換手機號也不能更換 DC，如果想要更換 DC，只有註銷重新註冊新帳號。
4.  可以用機器人 Bot 查詢自己帳號屬於哪個 DC： [@nmnmfunBot](https://t.me/nmnmfunBot) [@KinhRoBot](https://t.me/KinhRoBot) [@Sean_Bot](https://t.me/Sean_Bot) [@WooMaiBot](https://t.me/WooMaiBot)

附：註冊手機號區號對應的 Telegram DC

![image.png](https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png)

image.png

## [代理單獨為 Telegram 設置策略組有用嗎?](#代理單獨為-telegram-設置策略組有用嗎)

1.  你的帳號屬於哪個 DC，你的數據（消息、圖片、文件等）也就存放在哪個 DC，你給別人私聊和群裡發送媒體，則別人是從你的帳號所在的 DC 下載在客戶端上才能看到的。
2.  假如你的帳號在 DC5，不管別人的帳號在 DC 幾，查看你發送的媒體都是從 DC5 上下載。你去查看別人發的文件也是如此，別人的帳號在 DC1，你的帳號在 DC5，那你查看他發送的媒體也是從 DC1 下載的。
3.  理解了以上兩點，你就會發現單獨為 Telegram 設置策略組是沒有意義的，因為群裡的人，有的在 DC1，有的在 DC5，你把 Telegram 策略設為 SG，那查看 DC1 發送的媒體也就要從 SG 繞一下，不過感知差別不明顯。

## [其他](#其他)

Telegram 的數據中心都是土豆伺服器，時不時會炸，如果大家都發不出去消息那就是 Telegram 伺服器炸了。