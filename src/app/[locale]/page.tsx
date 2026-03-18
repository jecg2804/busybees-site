import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-display text-4xl font-bold text-dark">
          {t("heroHeadline")}
        </h1>
        <p className="text-lg text-body-soft">{t("heroSubtitle")}</p>
      </div>
    </main>
  );
}
