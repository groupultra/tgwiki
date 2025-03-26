export const fallbackLng = "en";
export const languages = ["en", "zh-TW", "ja", "hi", "id", "vi"];
export const languagesText = [
  "English", // 英语
  "繁體中文", // 中文繁体
  "日本語", // 日语
  "हिन्दी", // 印度语
  "Bahasa Indonesia", // 印尼语
  "Tiếng Việt", // 越南语
];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
