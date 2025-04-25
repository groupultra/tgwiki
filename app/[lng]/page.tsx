import { ArrowRight, CircleHelp, Rocket, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { fallbackLng, languages } from "../i18n/settings";
import HoverMe from "./components/animation/HoverMe";
import SpotlightCard from "./components/animation/SpotlightCard";
import FAQComponent from "./components/FAQ";
import QuickBlock from "./components/QuickBlock";
import { Header } from "./components/ui/Header";
import VariableProximity from "./components/VariableProximity";
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
    <main className="overflow-x-hidden">
      <Header
        path={"/"}
        navData={[
          {
            icon: <Rocket size={20} />,
            // @ts-ignore
            title: t("nav.start"),
            link: "#quick_start",
          },
          {
            icon: <Star size={20} />,
            title: t("nav.use"),
            link: "#Commonly_used_functions",
          },
          { icon: <CircleHelp size={20} />, title: t("nav.FAQ"), link: "#faq" },
        ]}
      />
      <section className="w-screen text-black pt-48 pb-30 animated-bg !overflow-hidden">
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
          <Link href={`/${lng}/docs/document_guide`}>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl bg-[#3d86c6] text-white border-0 font-normal px-10">
            {t("start")}
          </button>
          </Link>
        </div>
      </section>

      <section className="w-full py-20" id="quick_start">
        <h2 className="customers_title">{t("quickTitle")}</h2>
        <QuickBlock t={t} lng={lng} />
      </section>
      <section className="w-full py-20" id="Commonly_used_functions">
        <h2 className="customers_title">{t("CommonlyTitle")}</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-30 sm:px-10">
          {(t("function.content", { returnObjects: true }) as any)?.map(
            (val: any) => {
              return (
                <SpotlightCard
                  className="relative bg-[#212121] border border-[#222] cursor-pointer"
                  spotlightColor="rgba(255, 255, 255, 0.3)"
                  key={val.key}
                >
                  <Link
                    className="flex justify-center items-center"
                    href={`/${lng}/docs/${val.key}`}
                  >
                    <div className="text-white flex flex-col gap-2 flex-1">
                      <div className="pb-3">
                        <Sparkles fill="#fff" size={30} />
                      </div>
                      <h3 className="font-bold text-2xl">{val.category}</h3>
                      <h4 className="opacity-75">{val.items}</h4>
                    </div>
                    <span className="text-white opacity-75">
                      <ArrowRight />
                    </span>
                  </Link>
                </SpotlightCard>
              );
            }
          )}
        </div>
      </section>

      <section className="w-full py-20" id="faq">
        <h2 className="customers_title">{t("FAQ")}</h2>
        <FAQComponent lng={lng} />
      </section>
    </main>
  );
}
