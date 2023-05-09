import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageContext } from "next";
import { useTranslation } from "react-i18next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("english_for_carer_development");
  return (
    <main>
      <Link locale={"en"} href={"./english_for_carer_development"}>
        {t("title")}
      </Link>
      <article className="container mx-auto">
        <h1 className="text-3xl ">
          Mình học kiếm chứng chỉ để đi làm ở singapore
        </h1>
        <h2>
          {" "}
          English for career development
          <a
            className="text-blue-500"
            href="https://elsaspeak.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (by elsa)
          </a>          
        </h2>
        <details>
          <summary></summary>
        </details>
      </article>
    </main>
  );
}

export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale || "vi", [
      "common",
      "english_for_carer_development",
    ])),
  },
});
