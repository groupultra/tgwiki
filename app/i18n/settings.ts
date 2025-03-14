export const fallbackLng = "en";
export const languages = [fallbackLng, "zh-TW", "ja", "hi", "id", "vi"];
export const languagesText = [
  "English",
  "繁體中文",
  "日本語",
  "हिन्दी",
  "Bahasa Indonesia",
  "Tiếng Việt",
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
