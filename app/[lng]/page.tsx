import { CircleHelp, Rocket, Star } from "lucide-react";
import { useTranslation } from "../i18n";
import { fallbackLng, languages } from "../i18n/settings";
import HoverMe from "./components/animation/HoverMe";

import VariableProximity from "./components/VariableProximity";
import { Header } from "./components/ui/Header";
export default async function Page({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);

  return (
    <>
      <main>
        <Header
          navData={[
            {
              icon: <Rocket size={20} />,
              title: t("nav.start"),
              link: "",
            },
            { icon: <Star size={20} />, title: t("nav.use"), link: "" },
            { icon: <CircleHelp size={20} />, title: t("nav.FAQ"), link: "" },
          ]}
        />
        <section className="w-full text-[var(--text-title)] py-30 animated-bg">
          <div className="flex gap-6 relative container mx-auto justify-center items-center md:flex-row flex-col font-bold text-6xl md:text-8xl pb-20">
            <h1 className="fall-animate fall-animate-1">{t("TG")}</h1>
            <h1 className="fall-animate fall-animate-2">{t("Wiki")}</h1>
            <h1 className="fall-animate fall-animate-3">{t("Telegram")}</h1>
            <HoverMe>
              <div className="w-6 h-6 bg-[#f09475] rounded-full fall-animate fall-animate-4"></div>
            </HoverMe>
          </div>
          <VariableProximity label={t("subtitle")} />
          <VariableProximity label={t("description")} />
          <div className="flex items-center justify-center pt-10">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl bg-[#3d86c6] text-white border-0 font-normal px-10">
              {t("start")}
            </button>
          </div>
        </section>
      </main>
      {/* <Footer lng={lng} /> */}
    </>
  );
}
