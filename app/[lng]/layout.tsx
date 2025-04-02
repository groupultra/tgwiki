import { dir } from "i18next";
import { ThemeProvider } from "next-themes";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { useTranslation } from "../i18n";
import { fallbackLng, languages } from "../i18n/settings";
import "./global.css";
const poppins = Poppins({
  weight: ["400", "700"], // 选择需要的字重
  subsets: ["latin"], // 选择字符集
  variable: "--font-Poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // 选择需要的字重
  variable: "--font-inter", // 定义 CSS 变量
});
const Josefinsans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // 选择需要的字重
  variable: "--font-Josefin_Sans", // 定义 CSS 变量
});
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return {
    // @ts-ignore
    title: t("title"),
    content: t("content"),
    icons: {
      icon: "/favicon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${poppins.variable} ${Josefinsans.variable} bg-white`}
      >
        <GoogleAnalytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
