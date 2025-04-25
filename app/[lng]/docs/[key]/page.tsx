import { useTranslation } from "../../../i18n";
import { fallbackLng, languages } from "../../../i18n/settings";
import { navListData } from "../../../lib/navListData";
import { readMk } from "../../../lib/readMk";
import MarkdownView from "../../components/MarkdownView";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import DocNavigation from "../../components/ui/DocNavigation";
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
  const mkContent = await readMk(lng, key);
  const slideData = [
    {
      // @ts-ignore
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
  ];
  return (
    <main className="w-screen h-screen overflow-hidden flex flex-col">
      <Header
        className="sticky top-0 z-50 left-0 self-start"
        path={"/docs/" + key}
        navData={[]}
      />
      <div className="flex overflow-hidden">
        <section>
          <NavComponent data={slideData} lng={lng} paramsKey={key} />
        </section>
        <section className="flex-1 overflow-y-auto p-4">
          <Breadcrumbs data={slideData} paramsKey={key} />
          <MarkdownView content={mkContent} />
          <DocNavigation data={slideData} currentKey={key} lng={lng} />
        </section>
      </div>
    </main>
  );
}
