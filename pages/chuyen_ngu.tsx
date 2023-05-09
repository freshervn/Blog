import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
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
        <ol className="list-decimal list-inside">
          <li>
            <p>
              tạo file tên là: <code>next-i18next.config.js</code> ở trong thư
              mục gốc nextjs.
            </p>
            <figure>
              <Image
                alt="example root code"
                src="/images/english_for_carer_development/exampleCode.png"
                fill={false}
              />
              <figcaption>thư mục gốc nên nhìn như thế này</figcaption>
            </figure>
          </li>
        </ol>
        <code>yarn add next-i18next react-i18next i18next</code>
      </section>
      <br />
      <section id={"1"}>
        <code>yarn add next-i18next react-i18next i18next</code>
      </section>
    </main>
  );
}
