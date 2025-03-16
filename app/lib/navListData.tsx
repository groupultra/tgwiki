import {
  BookMinus,
  Cookie,
  Download,
  Languages,
  Lightbulb,
  Send,
} from "lucide-react";

export const navListData = [
  {
    key: "document_guide",
    icon: <Lightbulb size={30} />,
    isActive: true,
    hasSubmenu: true,
  },
  {
    key: "privacy_settings",
    icon: <Cookie size={30} />,
    isActive: false,
    hasSubmenu: false,
  },
  {
    key: "term_explanation",
    icon: <BookMinus size={30} />,
    isActive: false,
    hasSubmenu: false,
  },
  {
    key: "cache_and_download",
    icon: <Download size={30} />,
    isActive: false,
    hasSubmenu: false,
  },
  {
    key: "chinese_language_pack",
    icon: <Languages size={30} />,
    isActive: false,
    hasSubmenu: false,
  },
  {
    key: "dc_explanation",
    icon: <Send size={30} />,
    isActive: false,
    hasSubmenu: false,
  },
];
