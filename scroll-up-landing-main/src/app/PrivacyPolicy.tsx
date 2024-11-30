import Link from "next/link";
import Navbar from "./navbar";

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col font-archivo bg-white">
      <Navbar />
      <div className="flex flex-col mt-16 items-center w-full h-[300px] pt-[64px] pb-[0px] px-[3%] bg-[#246b49]">
        <div className="text-white flex justify-center text-center font-bold leading-5 text-[48px] font-sans mb-14">
          GİZLİLİK POLİTİKASI
        </div>
        <div className="text-white block w-[400px] justify-center text-center items-center font-sans text-[16px] leading-7">
          All graphical assets in this template are licensed for personal and
          commercial use. If you’d like to use a specific asset, please check
          the license below.
        </div>
      </div>
      <div className="w-full flex py-[64px] px-[17%]">
        <div className="flex flex-col  p-[24px] border border-[#e4e8f1]">
          <div className="font-archivo text-[32px] font-bold text-[#030407] leading-10 mb-2">
            KİŞİSEL VERİLERİN KORUNMASI KANUNU KAPSAMINDA GENEL BİLGİLENDİRME VE
            AYDINLATMA METNİ
          </div>
          <div className="mb-10 font-sans text-[16px] leading-10 text-[#3e404c]">
            İşbu bilgilendirme ve aydınlatma metni INFINIA’ nın, 24/3/2016
            tarihinde kabul edilen 6698 sayılı Kişisel Verilerin Korunması
            Kanunu ve ilgili sair mevzuat kapsamında, kişisel verilerin hukuka
            uygun olarak toplanması, elde edilmesi, saklanması, paylaşılması ve
            gizliliğinin korunması sırasında Veri Sahiplerinin bilgilendirilmesi
            ve aydınlatılması amacıyla hazırlanmıştır. Bu kapsamda aşağıda
            açıklanacak olan şart ve amaçlar ile hukuka uygun şekilde işlenecek
            veriler açısından ilgili kanunun 10. Maddesi gereği aydınlatma
            yükümlülüğümüzün yerine getirilmesi amacıyla bu bilgilendirme metni
            bilgi ve incelemenize sunulmaktadır.
          </div>
        </div>
      </div>
    </main>
  );
}
