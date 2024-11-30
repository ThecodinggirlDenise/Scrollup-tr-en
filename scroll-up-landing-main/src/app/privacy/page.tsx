"use client";
import Link from "next/link";
import Navbar from "../navbar";

export default function Privacy() {
  return (
    
    <main className="flex min-h-screen flex-col font-archivo bg-white">
      <Navbar />
      <div className="flex flex-col mt-16 items-center w-full h-auto pt-16 pb-4 px-4 bg-[#246b49]">
        <div className="text-white text-center font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
          GİZLİLİK POLİTİKASI
        </div>
        <div className="text-white max-w-md text-center font-sans text-sm sm:text-base md:text-lg leading-relaxed">
          All graphical assets in this template are licensed for personal and
          commercial use. If you’d like to use a specific asset, please check
          the license below.
        </div>
      </div>
      <div className="w-full flex justify-center py-16  md:px-16">
        {/* Added center alignment and padding */}
        <div className="flex flex-col  max-w-3xl p-6 border border-[#e4e8f1]">
          <div className="font-archivo text-2xl sm:text-3xl md:text-4xl font-bold text-[#030407] leading-snug mb-4">
            KİŞİSEL VERİLERİN KORUNMASI KANUNU KAPSAMINDA GENEL BİLGİLENDİRME VE
            AYDINLATMA METNİ
          </div>
          <div className="mb-10 font-sans text-base sm:text-lg md:text-xl leading-8 text-[#3e404c]">
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
          <div className="font-archivo text-xl sm:text-2xl font-bold text-[#030407] leading-snug mb-4">
            VERİ SORUMLUSU TANIMI ve VERİ SORUMLUSU KİMLİĞİ
          </div>
          <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
            6698 Sayılı Kanun’un 3. Maddesinde tanımlandığı hali ile veri
            sorumlusu, “Kişisel verilerin işleme amaçlarını ve vasıtalarını
            belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden
            sorumlu olan gerçek veya tüzel kişi” olarak tanımlanmıştır.
            <br />
            <br />
            Bu kapsamda INFINIA’nın da kişisel verilerin işlenmesine ilişkin
            Veri Sorumlusu sıfatı ile sorumluluğu bulunmakla, bilgilendirme ve
            aydınlatma yükümlülüğünün yerine getirilmesi bu aydınlatma metni ile
            sağlanmaktadır.
            <br />
            <br />
            Veri Sorumlusu, INFINIA Mühendislik A.Ş. Üniversiteler Mah.
            Cyberpark Tepe Binası Kat -1 No:B01 Çankaya/ANKARA
          </div>
          <div className="font-archivo text-xl sm:text-2xl font-bold text-[#030407] leading-snug mb-4">
            KİŞİSEL VERİLERİN İŞLENMESİNİN HUKUKİ DAYANAK VE SEBEPLERİ
          </div>
          <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
            6698 Sayılı Kişisel Verilerin Korunması Hakkında Kanun’da açıkça
            tanımlanmış bulunan kişisel verilerin elde edilmesi halinde bu
            veriler yine ilgili Kanun’un 5. Ve 6. Maddesi kapsamında
            işlenmektedir. Bu kapsamda kişisel verileriniz aşağıdaki hukuki
            sebeplere dayanılarak işlenecek olup, belirtilen hukuki sebepler
            dışındaki durumlarda Kişisel Verilerinizin işlenmesi için açık
            rızanız talep edilecektir. Kanungereği bu hukuki amaçlar;
            <br />
            <div>
              <ul className="list-disc mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
                <li className="pl-4">
                  Bir hakkın tesisi, kullanılması veya korunması için verilerin
                  işlenmesinin zorunlu olması halleridirYetkili kamu kurum ve
                  kuruluşlarından bilgi istendiğinde verilebilmesi amacıyla,
                  özellikle Mahkeme ve yetkili kamu görevlilerinin talep etmesi,
                </li>
                <li className="pl-4">
                  Yasal yükümlülüklerin yerine getirilebilmesi ve yürürlükteki
                  mevzuattan doğan hakların kullanılabilmesi,
                </li>
                <li className="pl-4">
                  Sözleşme kurulması, ifası ve sonuçlanması süreçlerinden
                  kaynaklanan yükümlülüklerin yerine getirilmesi amacıyla
                  gerekli görülmesi,
                </li>
                <li className="pl-4">
                  Kişisel verilerin INFINIA tarafından işlenmesinin tarafımızın
                  veya sizlerin veya üçüncü kişilerin haklarının tesisi,
                  kullanılması veya korunması için zorunlu olması,
                </li>
                <li className="pl-4">
                  Kişi temel hak ve özgürlükleri korunmak kaydıyla, INFINIA’ nın
                  meşru menfaatleri için verilerin işlenmesinin zorunlu olması,
                  (mevcut müşterilerin memnuniyet değerlendirme faaliyetlerinin
                  yürütülmesi, organizasyon ve etkinlik yönetimi, ürün/hizmet
                  hakkında bilgilendirme süreci yürütülmesi, finans-muhasebe
                  işlemlerinin gerçekleştirilmesi, denetim süreçlerinin
                  yürütülmesi, iş sağlığı ve güvenliği faaliyetlerinin
                  yürütülmesi, Mahkeme vb. yetkili kamu kuruluşlarına bildirim
                  yükümlülüğünün yerine getirilmesi vb. işlemler gereği)
                </li>
                <li className="pl-4">
                  Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda
                  bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin
                  kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün
                  korunması için zorunlu olması,
                </li>
                <li className="pl-4">
                  Kişisel Verilerin ilgilisi tarafından halihazırda
                  alenileştirilmiş olması,
                </li>
                <li className="pl-4">
                  Bir hakkın tesisi, kullanılması veya korunması için verilerin
                  işlenmesinin zorunlu olması halleridir. <br />
                </li>
              </ul>
            </div>
            <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
              Yukarıda sıralamış olduğumuz amaçlar dışında kalan Kişisel
              Veriler, veri ilgilisinin kişinin açık rızasının alınması
              suretiyle işlenecektir. Kanun Çerçevesinde edinilen ve işlenecek
              kişisel veriler INFINIA ile veri ilgilisi arasında oluşacak hukuki
              ilişkiye bağlı olarak farklılık gösterebilecektir. Kişisel veriler
              INFINIA tarafınca hukuka uygun şekilde farklı platformlar (manuel
              yollar, sözlü/yazılı beyanlar, elektronik kanallar, INIFNIA
              internet sitesindeki formlar veya ad, soyad, iş veya özel e-posta
              adresi, telefon numarası gibi bilgiler girilerek veya kullanıcı
              adı ve şifre kullanılarak giriş yapılan sayfalar aracılığıyla
              websitesi ziyaret ve kullanımı, INFINIA nezdinde yapılan etkinlik
              ve faaliyetler kapsamında) kanalıyla toplanabilecektir. INFINIA
              tarafından edinilen Kişisel Veriler, yukarıdaki şartları taşımak
              ve/veya açık rızanın mevcut olduğu sürece elde edinilebilecek,
              depolanabilecek, güncellenebilecek ve işlenebilecektir.
            </div>
            <div className="font-archivo text-xl sm:text-2xl font-bold text-[#030407] leading-snug mb-4">
              KİŞİSEL VERİLERİN TOPLANMASI, İŞLENMESİNİN AMACI
            </div>
            <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
              Web sitemiz aracılığıyla ya da yukarıda bahsi geçen diğer yollar
              ile tarafımızca edinilen Kişisel Verileriniz niteliğine göre
              aşağıdaki amaçlarla tarafımızca işlenecektir; <br />
            </div>
            <div>
              <ul className="list-disc mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
                <li className="pl-4">
                  INFINIA olarak sunduğumuz ürün ve hizmetlerimizden ve internet
                  sitemizden müşterilerimizi/ziyaretçilerimizi faydalandırmak
                  için gerekli planlama, değerlendirme ve çalışmaların iş
                  birimlerimiz tarafından yapılması;
                </li>
                <li className="pl-4">
                  Sunduğumuz hizmetlere yönelik reklam ve pazarlama
                  faaliyetlerinin yürütülerek benzeri konularda bilgilendirme
                  yapılması, kurumsal iletişim faaliyetlerinin yürütülmesi;
                </li>
                <li className="pl-4">
                  Pazarlama ve Müşteri İlişkileri Yönetimi çalışmalarının
                  yürütülmesi;
                </li>
                <li className="pl-4">
                  Kurumsal İletişim ve bu kapsamda sair etkinlik, kampanya ve
                  davetlerin düzenlenmesi ve bunlar hakkında bilgilendirme
                  yapılması;
                </li>

                <li className="pl-4">
                  Pazar araştırma çalışmalarının yürütülmesi;
                </li>
                <li className="pl-4">
                  Müşterilerimizin/ziyaretçilerimizin kullanımına sunduğumuz
                  dijital platformların iyileştirilmesi, kişiselleştirilmesi,
                  gerekirse bu amaçla çerez kullanılması;
                </li>
                <li className="pl-4">
                  İlgili kişilerden gelen talep, öneri ve şikayetlerin takibi,
                  değerlendirilmesi, müşteri yönetimi ve bu kapsamda planlama,
                  her alanda değerlendirme çalışması yapılması,
                </li>
                <li className="pl-4">
                  INFINIA kapsamında yürütülen her türlü faaliyetin
                  sürdürülebilirliğini, iyileştirmelerin yapılmasını sağlamak ve
                  sözleşmesel ilişki kurduğumuz kişi ve firmaların denetimi;
                </li>
                <li className="pl-4">
                  INFINIA’ nın iş-hizmet ilişkisi içerisinde olduğu kişilerin
                  hukuki ve ticari güvenliğinin sağlanması,
                </li>
                <li className="pl-4">
                  İş sağlığı ve güvenliği süreçlerinin planlanması ve icrası;
                </li>
                <li className="pl-4">
                  Söz konusu bilgiler kullanılarak yasal hakların kullanılması,
                  ilgili kişi/kurum ile mevcut hukuki ilişkilerin sona
                  ermesinden sonra işlem geçmişine ilişkin bilgilerin uyuşmazlık
                  halinde delil olarak kullanılması;
                </li>
                <li className="pl-4">
                  Faaliyetleri kapsamında planlama, raporlama, ziyaretçi/müşteri
                  istatistikleri ve benzeri incelemelerin yapılması ve/veya
                  Yurtiçi ilgili mevzuata uyum sağlanması, kamu kurum ve
                  kuruluşları tarafından talep edilen bilgilerin temini,
                  raporlama yükümlülüklerinin yerine getirilmesi.
                </li>
                <li className="pl-4">
                  Web sitesi/mobil uygulamalar üzerinden işlem yapan ya da adına
                  işlem yapılan kişilerin, ziyaretçilerin kimlik bilgilerinin
                  teyit edilmesi ve iletişim için gerekli adres ve diğer gerekli
                  bilgilendirmelerin kaydedilmesi,
                </li>
                <li className="pl-4">
                  INFINIA tarafından kurulan internet sitesi ve diğer elektronik
                  sistemlerin ve fiziki ortamların güvenliğinin sağlanması
                </li>
              </ul>
            </div>
            <div className="font-archivo text-xl sm:text-2xl font-bold text-[#030407] leading-snug mb-4">
              VERİ SAHİBİNİN HAKLARI
            </div>
            <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
              Kişisel verisi işlenen gerçek/tüzelkişilerin KVKK’ nın 11. Maddesi
              uyarınca sahip olduğu haklar aşağıdaki gibidir; <br />
            </div>
            <ul className="list-disc mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
              <li className="pl-4">
                Kişisel veri işlenip işlenmediğini öğrenme,
              </li>
              <li className="pl-4">
                Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
              </li>
              <li className="pl-4">
                Kişisel verilerin işlenme amacını ve bunların amacına uygun
                kullanılıp kullanılmadığını öğrenme,
              </li>
              <li className="pl-4">
                Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı
                üçüncü kişileri bilme,
              </li>
              <li className="pl-4">
                Kişisel verilerin eksik veya yanlış işlenmiş olması halinde
                bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin
                kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini
                isteme,
              </li>
              <li className="pl-4">
                KVKK ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş
                olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan
                kalkması halinde kişisel verilerin silinmesini veya yok
                edilmesini isteme ve bu kapsamda yapılan işlemin kişisel
                verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
              </li>
              <li className="pl-4">
                İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
                analiz edilmesi suretiyle kişinin kendisine aleyhine bir sonucun
                ortaya çıkmasına itiraz etme,
              </li>
            </ul>
          </div>
          <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
            Yukarıda belirtilen hakların kullanılması için ayırt edici
            kimlik/kayıt bilgilerin ve kullanılmak istenilen hakkın ve bu hususa
            yönelik açıklamaların veri sorumlusuna başvuru formu vasıtasıyla
            yazılı talep olarak, 6698 Sayılı KVK Kanunu’nun 11. Maddesinde
            uyarınca INFINIA’ nın merkez adresi olan “Üniversiteler Mahallesi
            Cyberpark Tepe Binası Kat - 1 B01 Çankaya/ANKARA” adresine iadeli
            taahhütlü mektup yoluyla iletilmesi halinde veya{" "}
            <span className="text-[#443fde]">
              <Link href="https://infinia.com.tr/" target="_blank">
                info@infinia.com.tr
              </Link>
            </span>{" "}
            adresine “Kişisel Verileri Koruma Kanunu Kapsamında Bilgi Talebi”
            başlığı ile iletilmesi halinde işleme alınacaktır.
          </div>
          <div className="font-archivo text-xl sm:text-2xl font-bold text-[#030407] leading-snug mb-4">
            VERİ SAHİBİNİN TALEPLERİNİN DEĞERLENDİRİLMESİ
          </div>
          <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
            6698 Sayılı KVK Kanunu’nun 13.Maddesinin 1. Fıkrası gereğince,
            yukarıda belirtilen hakların kullanılması ile ilgili iletilen
            talepler, yazılı veya Kişisel Verileri Koruma Kurulu’nun belirlediği
            diğer yöntemlerle INFINIA’ ya iletildikten sonra başvurunuz en kısa
            süre içerisinde ücretsiz olarak (Ancak, işlemin ayrıca bir maliyeti
            gerektirmesi halinde, Kurulca belirlenen tarifedeki ücret
            alınabilir.)sonuçlandırılacak ve bize ilettiğiniz iletişim bilginiz
            üzerinden geri dönüş sağlanacaktır.
          </div>
          <div className="font-archivo text-xl sm:text-2xl font-bold text-[#030407] leading-snug mb-4">
            ÜÇÜNCÜ TARAF WEB SİTELERİNE LİNKLER(BAĞLANTILAR)
          </div>
          <div className="mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
            INFINIA Mühendislik A.Ş. (“INFINIA”)olarak 6698 sayılı Kişisel
            Verilerin Korunması Kanunu (“Kanun”) kapsamında “veri sorumlusu”
            sıfatına sahiptir. İşbu Açık Rıza Metni ile Kanun’da yer alan
            kişisel veri işleme şartlarının karşılanamadığı aşağıdaki durumlar
            için INFINIA müşterilerin/ziyaretçilerin (“web sitesi-mobil uygulama
            vb. platform kullanıcıları”) açık rızalarının temin amaçlanmaktadır.{" "}
            <br />
            Açık rıza gerektirmeyen durumlarda ise Aydınlatma Metni kapsamında
            işleme faaliyetleri sürdürülmekte olup Açık Rıza gerektiren
            durumlarda da Aydınlatma Metni’nde belirtilen temel ilkelere uygun
            veri işlenmektedir. Buna göre kişisel veriler, INFINIA tarafından;
          </div>
          <div className="font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
            <ul className="list-disc mb-10 font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
              <li className="pl-4">
                Daha verimli ve iyi hizmet alabilmek adına beğenilerime,
                hobilerime, kişisel zevklerime, ziyaret ettiğim sayfalara,
                siparişlerime ve şikayetlerime ilişkin profilleme yapılmasına ve
                raporlamaların oluşturulması,
              </li>
              <li className="pl-4">Pazarlama faaliyetlerinde bulunulması,</li>
              <li className="pl-4">Üyelik işlemlerimin tesis edilmesi,</li>
              <li className="pl-4">
                Üyelik ve tanıtım/reklam amaçlı basılı materyallerin iletilmesi,
              </li>
              <li className="pl-4">
                Ürün, hizmet, mağaza ve kampanyalarla ilgili olarak satış,
                pazarlama ve tanıtım amaçlı tarafıma iletişim mesajları ve
                e-posta gönderilmesi,
              </li>
              <li className="pl-4">
                Ürün ve hizmetlere ilişkin görüş ve şikayetlerimin tespit
                edilmesi amaçlarıyla işlenebilecek ve bu amaçlara yönelik olarak
                Aydınlatma Metni’nde belirtilen taraflarla paylaşılabilecektir.
              </li>
            </ul>
            <div className="font-sans text-base sm:text-lg leading-8 font-light text-[#3e404c]">
              <br /> Kişisel veri talep formu için {""}
              <span className="text-[#443fde]">
                <Link
                  href="https://infinia.com.tr/kvkk_form.pdf"
                  target="_blank"
                >
                  tıklayınız
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
