import { useTranslation } from "../../i18n";
import FAQList from "./FAQList";
const FAQComponent = async ({ lng, path }: { lng: string; path?: string }) => {
  const { t } = await useTranslation(lng, "faq");
  // @ts-ignore
  return <FAQList data={t("content", { returnObjects: true }) || []} />;
};

export default FAQComponent;
