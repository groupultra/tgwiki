import { BookMinus, Languages, Lightbulb } from "lucide-react";

/**
 * 文档指南
Telegram限制
名词解释
DC说明
中文语言包（这个markdown下载不了最后处理一下）
 */
export const navListData = [
  {
    key: "document_guide",
    icon: <Lightbulb size={30} />,
    isActive: true,
    hasSubmenu: true,
  },
  {
    key: "telegram_limit",
    icon: <Lightbulb size={30} />,
    isActive: true,
    hasSubmenu: true,
  },
  // {
  //   key: "privacy_settings",
  //   icon: <Cookie size={30} />,
  //   isActive: false,
  //   hasSubmenu: false,
  // },
  {
    key: "term_explanation",
    icon: <BookMinus size={30} />,
    isActive: false,
    hasSubmenu: false,
  },
  // {
  //   key: "dc_explanation",
  //   icon: <Send size={30} />,
  //   isActive: false,
  //   hasSubmenu: false,
  // },

  // {
  //   key: "cache_and_download",
  //   icon: <Download size={30} />,
  //   isActive: false,
  //   hasSubmenu: false,
  // },
  {
    key: "chinese_language_pack",
    icon: <Languages size={30} />,
    isActive: false,
    hasSubmenu: false,
  },
];
