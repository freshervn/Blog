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
      <article>
        <h1>Mình chuẩn bị phỏng vấn như thế nào (cấp độ 2 năm kinh nhiệm)</h1>
        <p>
          mình đang nghĩ họ mong câu trả lời là gì mà để cái JD yêu cầu 2 năm
          kinh nhiệm.
        </p>
        <p>
          mình sẽ trả lời câu hỏi đấy thế nào mình nghĩ là mình sẽ kể quá trình
          2 năm kinh nhiệm đấy ra. để họ xem nó có khớp với dự án của họ không.
          okeasdasda 
        </p>
        <p>
          trả lời 2 năm kinh nhiệm nào và cố gắng match nó với những yêu cầu của
          JD em bắt đầu code từ 10/2020 ngôn ngữ đầu tiên em sử dụng là
          javascrit thuần để làm các nút bấm tương tác trên web, rồi trong lúc
          làm các dự án chủ yếu là cắt ghép html thì em có học thêm bootrap sass
          và jquery để tăng hiệu năng code.
          <ul>
            <li>
              Bootrap dùng rất nhanh và tiện, cái em dùng nhiều nhất là cái
              container của bootrap, tiếp đến là mất cái thẻ margin padding.
              bootrap có các component sẵn như input, select nhưng mà ít khi em
              sử dụng vì các design không vẽ giống với style bootrap. bootrap
              cũng khá dễ học, các class có quy tắc, chỉ cần biết quy tắc và vài
              từ khoá là sử dụng ok.
            </li>
            <li>
              Sass giúp code nhìn gọn hơn không phải viết hàng dài các class, dễ
              quan sát liên hệ giữa các element trong code hơn ngoài ra nó sinh
              ra thêm các hàm min, rồi extend nhưng mà em thấy những chức năng
              này không thật sự hiểu quả khi áp dụng vào code vì nó mất nhiều
              thời gian để xem xét cái nào có thể dùng lại cái nào không, mà vì
              em làm cho các dự án khác nhau không cùng một kiểu mẫu nên các
              thiết kế đều riêng biệt. trong thời gian này em cũng có đọc thêm
              chút về thiết kế nữa, chủ yếu về phân chia bố cục, chọn kiểu chữ.
              lựa chọn hình ảnh hợp với nội dung.
            </li>
            <li>
              Jquery thì tối ưu được đâu đó 50% thời gian viết code javascript
              thuần nhưng mà để viết các function phức tạp như form nhiều cấp
              hay thì vẫn rất tốn sức query. Thế nên em học thêm về reactjs
            </li>
            <li>
              Reactjs giúp em quả lý quan hệ giữa các component. các trạng thái
              của nó. và có đễ dàng kết hợp thêm nhiều thư viện khác để code
              nhanh hơn như AntDesign, MUI, nextjs. Và tuỳ theo dự án mà em có
              thể làm phải sử dụng thêm các api của bên thứ 3 như google map.
            </li>
            <li>
              Redux thì gần đấy nhất em có sử dụng là làm tiếp một dự án cũ có
              sử dụng class component thay vì function component, phần state với
              props vẫn giống nhau, nhưng mà sử lý nhiều cấp trồng nhau của
              class component không giống như function component, thí dụ như
              thôn tin user thay ở function component thì em sẽ lưu vào cookies,
              còn ở classComponent thì sẽ lưu vào global state. ở Reddux nếu quá
              lạm dụng thì cái file global state sẽ rất to và nó làm nhiều chức
              năng dẫn đến khi code mất thời gian đi tìm function. Nhưng vì
              class component ko thể sử dụng với hook như function component nên
              để sử lý những phần call api mà kết quả ảnh hưởng thới 2-3
              component thì cần sử dụng redux. và khi sử dụng thì nên viết
              readme để sau này dễ tìm.
            </li>
            <li>
              RestAPI thì em có sử dụng post man và Swagger khi vào việc với
              backend. bản thân em thích swagger hơn, vì khi đang làm mà backend
              có thay đổi gì đó, thì em có thể check trực tiếp trên swagger luôn
              và vì backend đc đẩy lên swwagger nên dữ liệu test ở frontend đồng
              nhất với backend nên trade bug dễ hơn
            </li>
            <li>
              Về Deploy thì trước đấy em có làm một dự án solo một mình em làm,
              và phải đẩy lên cho khách. ban đầu thì em dùng nginx xong sau đó
              vì không có SSl nên phải chuyển qua sử dụng fire base. fire base
              thì sử dụng rất đơn gian, chỉ cần embet code vào là chạy mình còn
              có thể điều hướng về domain
            </li>
          </ul>
        </p>
        <p></p>
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
