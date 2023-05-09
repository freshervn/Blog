import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0&appId=2477828602276902&autoLogAppEvents=1"
        nonce="yyKrYqmN"
      />
      <main className="container mx-auto">
        <br />
        <h1 className="text-3xl">Cài đặt đa ngôn ngữ với next-i18nnext</h1>
        <p>Áp dụng với dự án được code bằng nextjs</p>
        <br />
        <section>
          <h3 className="text-md">Công nghệ:</h3>
          <ul className="list-inside list-disc">
            <li className="">
              <Link
                href="https://nextjs.org/
          "
                className="underline text-blue-500"
              >
                nextjs
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="underline text-blue-500"
                href="https://www.npmjs.com/package/next-i18next
    "
              >
                {" "}
                next-i18next
              </Link>
            </li>
          </ul>
        </section>
        <br />

        <section>
          <h3 className="text-md">Mục lục:</h3>
          <ul className="list-inside list-disc">
            <li className="">
              <Link href="#1" className="underline text-blue-500">
                install next-i18next
              </Link>
            </li>
            <li>
              <Link className="underline text-blue-500" href="#2">
                config file next-i18next
              </Link>
            </li>
          </ul>
        </section>
        <br />
        <section id={"1"}>
          <h3 className="text-xl font-medium">
            Tạo file tên là: <code>next-i18next.config.js</code> ở trong thư mục
            gốc nextjs.
          </h3>
          <br />
          <figure>
            <figcaption>Thư mục gốc nên nhìn như thế này:</figcaption>
            <Image
              alt="example root code"
              src="/images/chuyen_ngu/exampleCode.png"
              width={315}
              height={412}
            />
          </figure>
        </section>
        <br />
        <section id={"2"}>
          <h3 className="text-xl font-medium">Nội dung file nên như này</h3>
          <pre className="bg-black text-green-500">
            {`
  const path = require('path')
  module.exports = {
    i18n: {
    defaultLocale: "vi",
    locales: ["en", "vi"],
    localePath: path.resolve("./public/locales"),
    localeDetection: false,
    },
  };
              `}
          </pre>
        </section>
        <br />
        <section id="3">
          <h3 className="text-xl font-medium">
            Thêm đoạn code này vào file next.config.js
          </h3>
          <pre className="bg-black text-green-500">
            {`
   i18n: {
    locales: ["en-US", "vi", "en"],
    defaultLocale: "vi",
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.vi",
        defaultLocale: "vi",
        http: true,
      },
    ],
  },
              `}
          </pre>
        </section>
        <br />
        <section id="4">
          <h3 className="text-xl font-medium">
            thêm đoạn code này vào cuối các pages
          </h3>
          <pre className="bg-black text-green-500">
            {`
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "vi", [
      "common",
      "english_for_carer_development",
    ])),
  },
});
              `}
          </pre>
          Hoặc nếu bạn sử dụng typescript
          <pre className="bg-black text-green-500">
            {`
export const getServerSideProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale || "vi", [
      "common",
      "english_for_carer_development",
    ])),
  },
});

              `}
          </pre>
        </section>
        <br />
        <footer>
          <div
            className="fb-comments"
            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width=""
            data-numposts="5"
          ></div>
        </footer>
      </main>
    </>
  );
}
