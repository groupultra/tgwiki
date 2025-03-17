1.  [首頁](https://tgnav.github.io/tgwiki/)
2.  [DC說明](https://tgnav.github.io/tgwiki/dc.html)

## DC說明

* * *

## [Telegram DC說明](#telegram-dc說明)

DC：Data Centers，資料中心，Telegram在世界各地部署有5個資料中心：

+   DC1：美國-邁阿密
+   DC2：荷蘭-阿姆斯特丹
+   DC3：美國-邁阿密
+   DC4：荷蘭-阿姆斯特丹
+   DC5：新加坡

## [如何知道自己帳號屬於哪個DC?](#如何知道自己帳號屬於哪個dc)

1.  根據 [Telegram 官方文件說明](https://core.telegram.org/api/datacenter) ，帳號屬於哪個DC是由註冊時的IP決定的
2.  但實際上並非如此，帳號屬於哪個DC實際上是由註冊帳號時選擇的國家/地區決定的，比如+86的號碼大都是在DC5，+1的號碼大都是在DC1。
3.  DC是註冊時候就決定了，無法更換，更換手機號也不能更換DC，如果想要更換DC，只有註銷重新註冊新帳號。
4.  可以用機器人Bot查詢自己帳號屬於哪個DC： [@nmnmfunBot](https://t.me/nmnmfunBot) [@KinhRoBot](https://t.me/KinhRoBot) [@Sean\_Bot](https://t.me/Sean_Bot) [@WooMaiBot](https://t.me/WooMaiBot)

附：註冊手機號區號對應的Telegram DC

![image.png](https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png)

image.png

## [代理單獨為 Telegram 設置策略組有用嗎?](#代理單獨為-telegram-設置策略組有用嗎)

1.  你的帳號屬於哪個DC，你的數據（消息、圖片、文件等）也就存放在哪個DC，你給別人私聊和群裡發送媒體，則別人是從你的帳號所在的DC下載在客戶端上才能看到的。
2.  假如你的帳號在DC5，不管別人的帳號在DC幾，查看你發送的媒體都是從DC5上下載。你去查看別人發的文件也是如此，別人的帳號在DC1，你的帳號在DC5，那你查看他發送的媒體也是從DC1下載的。
3.  理解了以上兩點，你就會發現單獨為Telegram設置策略組是沒有意義的，因為群裡的人，有的在DC1，有的在DC5，你把Telegram策略設為SG，那查看DC1發送的媒體也就要從SG繞一下，不過感知差別不明顯。

## [其他](#其他)

Telegram的資料中心都是土豆伺服器，時不時會炸，如果大家都發不出去消息那就是Telegram伺服器炸了。

[
上一頁
](https://tgnav.github.io/tgwiki/limit.html)[
中文語言包
](https://tgnav.github.io/tgwiki/language.html)