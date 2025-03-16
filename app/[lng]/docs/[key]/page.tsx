import { CircleHelp, Rocket, Star } from "lucide-react";
import { useTranslation } from "../../../i18n";
import { fallbackLng, languages } from "../../../i18n/settings";
import { navListData } from "../../../lib/navListData";
import { Header } from "../../components/ui/Header";
import NavComponent from "../../components/ui/Nav";

export default async function Page({
  params,
}: {
  params: Promise<{ lng: string; key: string }>;
}) {
  let { lng, key } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return (
    <main>
      <Header
        path={"/docs/" + key}
        navData={[
          {
            icon: <Rocket size={20} />,
            // @ts-ignore
            title: t("nav.start"),
            link: "/#quick_start",
          },
          {
            icon: <Star size={20} />,
            title: t("nav.use"),
            link: "/#Commonly_used_functions",
          },
          {
            icon: <CircleHelp size={20} />,
            title: t("nav.FAQ"),
            link: "/#faq",
          },
        ]}
      />
      <section className="pt-16">
        <NavComponent
          data={[
            {
              title: t("quickTitle"),
              children: navListData.map((val) => ({
                ...val,
                title: t(`quickData.${val.key}.title`),
                description: t(`quickData.${val.key}.description`),
              })),
            },
            {
              title: t("CommonlyTitle"),
              children: t("function.content", { returnObjects: true })?.map(
                (val: any) => ({
                  title: val.category,
                  description: val.items,
                  key: val.key,
                })
              ),
            },
          ]}
          lng={lng}
        />
      </section>
    </main>
  );
}
