import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className=" flex items-center justify-center min-h-screen w-screen">
      <div className="home  w-[90%] md:w-[70%] flex md:flex-col">
        <div className="info md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{t("welcome")}</h1>
        </div>
        <div className="img md:w-1/2">

        </div>
      </div>
    </main>
  );
}
