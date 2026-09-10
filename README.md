# Kead Kitap Rehberi

Kead Web Sitesi — Lovable Promptu

Aşağıdaki 1. Bölüm'ün tamamını tek seferde Lovable'a yapıştır. Site ayağa kalktıktan sonra 2. Bölüm'deki takip promptlarını sırayla, tek tek gönder. (Lovable tek dev promptta ilk %70'i iyi yapar, geri kalanı iterasyonla düzelir.)

1. BÖLÜM — ANA PROMPT

Kead adlı bir mobil uygulamanın Türkçe tanıtım (marketing) web sitesini sıfırdan kur. Bu bir landing page değil, 9 sayfalık bütün bir site olacak. Aşağıdaki her detaya uy.

Ürün ne?

Kead, ebeveynler için çocuk kitabı keşif ve değerlendirme uygulaması. Ebeveyn çocuğunun yaşını ve profilini giriyor; uygulama o çocuğa uygun kitapları öneriyor. Her kitabın altında hem uzman psikolog/pedagog görüşü hem de diğer ebeveynlerin puan ve yorumları var. Ebeveyn kitapları "Kitaplığım"a ekliyor, okuduğu kitapları puanlıyor, ayrıca çocuk gelişimi üzerine "Konular" adlı yazıları okuyor.

Sitenin işi: uygulamayı anlatmak, güveni inşa etmek ve erken erişim listesine e-posta toplamak. Ziyaretçi kitlesi 28–45 yaş arası, çoğunlukla anne, mobil trafiği ağırlıklı, Türkiye.

Teknik kurulum

React + TypeScript + Vite + Tailwind + shadcn/ui + react-router-dom.

İkonlar: lucide-react. Başka ikon seti kullanma.

Tüm içerik Türkçe. Türkçe karakterler doğru olsun (ğ, ş, ı, İ, ç, ö, ü).

Tüm mock veri src/data/ altında ayrı TypeScript dosyalarında dursun: books.ts, articles.ts, experts.ts, faq.ts. Bileşenlerin içine gömme.

Tasarım token'larını tailwind.config.ts + index.css içinde tanımla; bileşenlerde çıplak hex kullanma.

Backend'e şu an gerek yok. E-posta formu submit edilince veriyi local state'e alsın ve başarı durumu göstersin; kodda // TODO: Supabase waitlist tablosuna bağla notu bırak.

Marka sistemi (bunlara birebir uy)

Renkler:

petrol #026175 — birincil marka rengi, koyu bölümlerin zemini, başlıklar

mure #013D4A — en koyu ton, gövde metni ve footer

sari #FFCF00 — ana vurgu, birincil butonlar, hero zemini

sari-soft #FFF0A8 — rozetler, etiket arkaplanı

kagit #FFFFFF ve sis #F1F5F6 — açık zeminler

Konu (blog) kartları için pastel akzan seti: pembe #FBD0FE, nane #D9F5E6, şeftali #FFE4C7, gök #D6ECF5. Bunlar sadece konu görselleri ve yaş bandı etiketlerinde kullanılır, butonlarda kullanılmaz.

Kritik renk kuralı: sarı zemin üzerine daima petrol/müre metin. Sarı üzerine beyaz metin asla kullanma (kontrast yetersiz). Petrol zemin üzerine beyaz veya sarı metin serbest.

Tipografi:

Başlıklar ve arayüz: Poppins (600 ve 700). Uygulamanın logosu ve arayüzü yuvarlak geometrik bir sans; bu ailenin dışına çıkma.

Uzun okuma metni (Konular yazı sayfaları): Lora, 400, satır yüksekliği 1.75, satır uzunluğu 68 karakteri geçmesin.

Tip skalası: h1 clamp(2.4rem, 5vw, 4rem) / h2 2.25rem / h3 1.375rem / gövde 1.0625rem. Başlıklarda letter-spacing -0.02em.

Cümle düzeni: sentence case. Büyük harfle yazılmış (ALL CAPS) eyebrow etiketi kullanma. Başlık içinde tek bir kelimeyi renkli/italik vurgulama numarası yapma.

Form dili:

Buton ve etiketlerde tam yuvarlak (pill, rounded-full) form. Kartlarda 20–24px köşe. Fotoğraf/görsel bloklarında 24px.

Gölge çok hafif: 0 2px 12px rgba(1,61,74,.07). Her karta aynı gölgeyi verme, sadece yükseltmek istediklerine ver.

Butonlar: birincil = sarı zemin + petrol metin + rounded-full + kalın; ikincil = şeffaf zemin + 1.5px petrol kenarlık + petrol metin. Buton metnine ok işareti (→) ekleme.

Filtre/kategori çipleri uygulamadaki gibi: seçili olan dolu petrol + beyaz metin, diğerleri beyaz zemin + petrol kenarlık.

Görsel dil:

Gerçek kitap kapağı görseli, stok fotoğraf veya çocuk fotoğrafı kullanma. Telif ve mahremiyet riski var.

Kitap kapakları yerine: yaş bandı paletinden renkli, CSS ile üretilen kapak blokları (kitabın baş harfi + basit geometrik desen + kitap adı) yap. Tüm katalogda tutarlı görünsünler.

Konu kartlarının görselleri: pastel zeminli, sade, düz renk SVG illüstrasyonlar (kalın konturlu, yüz detayı minimum). İnline SVG olarak üret.

Dekoratif gradient blob, mesh gradient, glassmorphism kullanma.

Hareket:

Sayfa yükünde sadece hero için tek orkestre giriş animasyonu (logo → başlık → alt metin → form, 80ms arayla). Her section'a scroll-reveal ekleme, bu yapay duruyor.

Kullanıcı eylemine cevap veren animasyonlar serbest: akordeon açılışı, filtre geçişi, modal, hover'da kart yükselmesi (2px, 150ms).

prefers-reduced-motion desteği zorunlu.

Sayfa haritası (react-router)

/ Ana sayfa

/nasil-calisir Nasıl çalışır

/kitaplar Örnek kitap kataloğu (filtreli)

/kitaplar/:slug Kitap değerlendirme detayı

/konular Yazılar listesi

/konular/:slug Yazı detayı

/hakkimizda Hakkımızda + uzman ekibi

/sss Sık sorulanlar

/iletisim İletişim

/gizlilik, /kvkk, /kullanim-kosullari — sade metin sayfaları (placeholder metinle, başlık hiyerarşisi düzgün)

404 sayfası: "Bu sayfa raftan düşmüş." + ana sayfaya dönüş butonu

Navigasyon

Üstte sticky, beyaz zemin, scroll'da hafif gölge kazanan bar. Solda yatay Kead logosu (logo yoksa: sarı yuvarlak içinde petrol "k" harfi + "kead" wordmark). Ortada linkler: Nasıl çalışır · Kitaplar · Konular · Hakkımızda. Sağda birincil buton: "Erken erişime katıl". Mobilde tam ekran açılan menü (hamburger), menü açıkken body scroll kilitli.

ANA SAYFA — bölüm bölüm

1) Hero

İki kolonlu, mobilde tek kolon. Zemin sarı (#FFCF00), altta beyaz gövdeye 32px yuvarlak geçişle bağlanıyor (uygulamadaki kartlı geçişin aynısı).

Sol kolon:

H1: "Çocuğunuzun eline geçen kitabı önce biz okuyoruz."

Alt metin: "Kead, her çocuk kitabını yaşa uygunluk, eğitici değer ve duygusal güvenlik açısından değerlendirir. Uzman görüşü ve gerçek ebeveyn deneyimi bir arada."

E-posta formu: tek satır input + "Erken erişime katıl" butonu. Input placeholder "E-posta adresiniz". Boş/geçersiz e-postada input altında kırmızı değil, petrol renkli net hata metni: "Geçerli bir e-posta adresi girin." Başarıda formun yerine geçen kısa mesaj: "Listedesiniz. Uygulama yayına girdiğinde ilk siz haberdar olacaksınız."

Formun altında küçük not: "Yalnızca lansman duyurusu için kullanılır, spam yok."

Sağ kolon:

CSS/HTML ile çizilmiş bir telefon çerçevesi ve içinde uygulamanın "Keşfet" ekranının sadeleştirilmiş hali: sarı üst alan, "Keşfet" başlığı, filtre çipleri (Sana özel / Popüler / Yeniler), yan yana iki renkli kitap kartı + yıldız puanı, altta beyaz kartta "Haftanın konusu" satırı. Ekran görüntüsü resmi kullanma, gerçek DOM ile kur.

2) Güven şeridi

Hero'nun hemen altında, ince, beyaz zeminde dört kısa madde: uzman psikolog ve pedagog değerlendirmesi · yaş bandına göre öneri · ebeveyn yorumları · her çocuk için ayrı profil. İkon + tek satır metin. Buraya uydurma istatistik (10.000 kullanıcı vb.) yazma.

3) Problem bölümü

Başlık: "Kitapçıda 20 dakika, elinizde hâlâ karar yok." Üç kısa kart: "Arka kapak yazısı kitabın içeriğini anlatmıyor." / "Yaş etiketi her yayınevinde başka anlama geliyor." / "Korkutucu ya da örseleyici bölümleri okumadan fark edemiyorsunuz." Kartlar sade, sis zeminli, ikonsuz veya tek ince ikonlu.

4) Nasıl çalışır — üç adım

Burada numaralandırma doğru, çünkü gerçek bir sıra var. 01/02/03 yerine büyük sarı daire içinde rakam.

"Çocuklarınızın profilini oluşturun." — Ad, doğum tarihi ve ilgi alanları. Birden fazla çocuk ekleyebilirsiniz.

"Size özel önerileri görün." — Her çocuğun yaşına ve gelişim dönemine göre ayrı liste.

"Okuyun, puanlayın, kütüphanenizi büyütün." — Değerlendirmeniz diğer ebeveynlere yol gösterir.

5) Değerlendirme sistemi — sayfanın imza bölümü

Petrol zeminli geniş bir bölüm. Başlık: "Her kitap üç eksende değerlendirilir."

Sol tarafta üç eksen açıklaması: Yaş uygunluğu, Eğitici değer, Duygusal güvenlik — her birinin bir cümlelik açıklaması ve sarı yıldızlarla örnek puanı.

Sağ tarafta etkileşimli örnek kart: gerçek bir değerlendirme kartının canlı hali. Üstünde üç sekme (Genel bakış / Uzman görüşü / Ebeveyn yorumları) — tıklanınca kartın içeriği değişsin. Kartın altında renk kodlu karar şeridi. Üç karar tipi ve renkleri:

yeşil "Kesinlikle tavsiye edilir"

sarı "Ebeveyn rehberliğiyle önerilir"

kırmızımsı/mercan "Bu yaş için önerilmez" Bölümün altında üç karar tipini açıklayan küçük bir lejant.

6) Çocuk profilleri

İki kolon. Metin: "İki çocuk, iki ayrı raf." Açıklama: aynı hesapta her çocuğun kendi profili, kendi önerileri ve kendi kitaplığı olduğunu anlatan 2–3 cümle. Görsel tarafta: "Ela için" ve "Ege için" yazan iki profil çipi ve altlarında farklı kitap dizilimi; çipe tıklanınca alttaki kitaplar değişsin (küçük ama gerçek bir etkileşim).

7) Konular önizlemesi

Başlık: "Sadece kitap değil, çocuğunuzu da anlatıyoruz." Üç yazı kartı (pastel görsel bloğu + yaş/kategori etiketi + başlık + iki satır özet). articles.ts içinden ilk üç yazı. Sağ üstte "Tümü" bağlantısı → /konular.

8) Uzman görüşü

Kısa bölüm: değerlendirmelerin çocuk psikologları ve pediatri uzmanlarının katkısıyla hazırlandığını anlatan 3 cümle + 3 uzman kartı (baş harflerden oluşan monogram avatar, ad, unvan, tek satır uzmanlık). Uydurma diploma/kurum adı yazma; unvanları jenerik tut (Uzman Klinik Psikolog, Çocuk Gelişimi Uzmanı, Pediatri Uzmanı).

9) SSS önizlemesi

Dört soruluk akordeon + "Tüm sorular" bağlantısı.

10) Kapanış CTA

Sarı zeminli geniş blok. "Bir sonraki kitabı seçerken yalnız değilsiniz." + e-posta formu (hero'daki bileşenin aynısı, tekrar yazma, aynı bileşeni kullan) + "iOS ve Android'de yakında" notu. Sahte App Store/Google Play indirme linki koyma; rozetleri pasif ve "yakında" etiketiyle göster.

Footer

Petrol zemin, dört kolon: logo + tek cümle tanım / Ürün (Nasıl çalışır, Kitaplar, Konular) / Kurumsal (Hakkımızda, İletişim, SSS) / Yasal (Gizlilik politikası, KVKK aydınlatma metni, Kullanım koşulları). Altta ince ayraç, telif satırı ve sosyal ikonlar (Instagram, X, LinkedIn — placeholder #).

Diğer sayfaların içerikleri

/kitaplar — Üstte başlık ve arama kutusu. Filtreler: yaş bandı çipleri (0–3, 3–6, 6–9, 9–12, 12–15) ve karar tipi çipleri. Filtreler URL query string'e yazılsın. Altında responsive grid'de kitap kartları (CSS kapak + ad + yazar + yıldız + karar rozeti). Sonuç yoksa: "Bu filtrelerle kitap bulunamadı. Yaş aralığını genişletmeyi deneyin." + filtreleri temizle butonu.

/kitaplar/:slug — Uygulamadaki değerlendirme ekranının web hali. Sırayla: kapak + ad + yazar + yayınevi + yaş bandı, üç eksenli yıldız puanı, etiketler, "Kitabın konusu", yüzdeli değerlendirme çubukları (Görsellik, Pozitif mesaj, Öğretici içerik), uzman görüşü kartı (avatar + ad + unvan + paragraf), karar şeridi, ebeveyn yorumları listesi (ad, tarih, yıldız, metin, beğeni sayısı, yanıtlar), en altta "Bunlar da sevebilirsiniz" bölümü. Yorum yazma alanı görünsün ama pasif olsun, üzerinde "Yorum yazmak için uygulamayı kullanın" notu.

/konular ve /konular/:slug — Liste sayfasında kategori çipleri (Tümü, Gelişim, Yeni doğan, Okul çağı, +12). Yazı sayfasında: geniş pastel başlık bloğu, okuma süresi, Lora ile dizilmiş gövde metni, ara başlıklar, alıntı bloğu, sonda "İlgili kitaplar" olarak 3 kitap kartı. Her yazı için 600–800 kelimelik gerçekçi Türkçe placeholder metin yaz — "Lorem ipsum" kullanma.

/hakkimizda — Kead'in neden kurulduğunu anlatan 3 paragraf, değerlendirme metodolojisinin 4 maddesi, uzman ekibi kartları, kapanış CTA.

/sss — 10 soruluk akordeon. Gerçekçi sorular: uygulama ücretli mi, kitap önerileri nasıl seçiliyor, çocuğumun verileri ne oluyor, yorumlar denetleniyor mu, hangi yayınevleriyle çalışıyorsunuz, yaş bandı nasıl belirleniyor vb.

/iletisim — Ad, e-posta, konu (select), mesaj alanları olan form + doğrulama + başarı durumu. Yanında e-posta adresi ve "Yayıneviyseniz" başlıklı kısa bir kutu.

Mock veri

books.ts içinde 12 kitap: slug, title, author, publisher, ageBand, ratings {ageFit, educational, emotionalSafety}, verdict ('recommended'|'guided'|'restricted'), tags[], summary, expertOpinion, meters {visual, positiveMessage, educational}, comments[]. Kitaplar tüm yaş bantlarına dağılsın, en az ikisi 'guided', biri 'restricted' olsun (gerçekçi bir gerekçeyle, örneğin korkutucu içerik nedeniyle daha büyük yaşa işaret eden). Yazar ve kitap adları gerçek olabilir ama kapak görseli kullanma.

articles.ts içinde 6 yazı, experts.ts içinde 3 uzman, faq.ts içinde 10 soru.

Kalite eşiği

360px genişliğe kadar sorunsuz. Yatay scroll olmayacak.

Klavye ile gezilebilir, görünür focus halkası (sarı zeminde petrol, petrol zeminde sarı).

Her sayfada doğru <title> ve meta description, tek <h1>, anlamlı heading sırası, resimlerde alt metni.

Türkçe içerik için <html lang="tr">.

Sahte sayısal iddia yok (kullanıcı sayısı, indirme sayısı, "1 numara" gibi).

Yapma listesi

Krem zemin + serif başlık + terracotta aksan klişesine gitme. Her bölümü aynı ölçüde yuvarlatılmış özdeş kartlara bölme. Ortalanmış ALL CAPS eyebrow etiketi koyma. Emoji ile başlık süsleme. Dark mode ekleme. Sayfaya 4'ten fazla farklı buton stili sokma.

2. BÖLÜM — SIRAYLA GÖNDERİLECEK TAKİP PROMPTLARI

Takip 1 — Hero'yu sıkılaştır

Hero bölümünü gözden geçir. Sağdaki telefon mockup'ı gerçek uygulama ekranına daha çok benzesin: sarı üst alan içinde küçük Kead logosu, bildirim ve arama ikonu, "Keşfet" başlığı, yatay kaydırılabilir filtre çipleri, iki kitap kartı ve altta beyaz yuvarlak köşeli panelde "Haftanın konusu" satırı. Telefon çerçevesi ince ve nötr olsun, gölge abartısız. Mobilde telefon mockup'ı %70 ölçekte ve metnin altında dursun.

Takip 2 — Değerlendirme kartını canlandır

Ana sayfadaki "Her kitap üç eksende değerlendirilir" bölümündeki örnek kartın üç sekmesini gerçek içerikle doldur ve sekme geçişinde 150ms'lik yumuşak bir yükseklik/opaklık geçişi ver. Kart içindeki yüzde çubukları görünür olduğunda bir kez 0'dan hedef değere animasyonla dolsun; prefers-reduced-motion açıksa doğrudan hedef değerde başlasın.

Takip 3 — Katalog filtreleri

/kitaplar sayfasında filtreleri URL query parametresine bağla (?yas=6-9&karar=guided), sayfa yenilendiğinde filtreler korunsun. Arama kutusu Türkçe karakter duyarsız çalışsın (ı/i, ş/s, ğ/g normalizasyonu). Sonuç sayısını başlığın altında göster: "9 kitap".

Takip 4 — İçerik geçişi

Tüm placeholder metinleri gözden geçir. Pazarlama dili abartılı olan yerleri sadeleştir: iddia yerine ne yaptığımızı anlatan cümleler kur. "Devrim niteliğinde", "hayatınızı değiştirecek", "yapay zeka destekli" gibi ifadeler varsa kaldır. Konular sayfasındaki 6 yazının her biri en az 600 kelime, ara başlıklı ve gerçekten okunabilir olsun.

Takip 5 — Erişilebilirlik ve mobil

Tüm sayfaları 360px, 768px ve 1440px'te kontrol et ve taşan yerleri düzelt. Odak halkalarını her zemin için görünür yap. Akordeon, sekme ve mobil menüye doğru ARIA özniteliklerini ekle. Mobil menü açıkken arka plan scroll'unu kilitle ve Escape ile kapanmasını sağla.

Takip 6 — Bekleme listesi (Supabase istersen)

Supabase bağla ve waitlist tablosu oluştur (id, email, created_at, source). Hero ve kapanış CTA'sındaki formlar bu tabloya yazsın. Aynı e-posta ikinci kez gönderilirse hata değil, "Zaten listedesiniz." mesajı görünsün. RLS politikası yalnızca insert'e izin versin.

Takip 7 — SEO ve paylaşım

Her sayfaya react-helmet ile benzersiz title ve description ekle. Open Graph ve Twitter card etiketlerini doldur. Marka renkleriyle basit bir OG görseli üret (petrol zemin, sarı wordmark, tek cümle). robots.txt ve sitemap.xml ekle. Favicon'u logo işaretinden üret.

bu ekranların görsel dilini web'e taşı

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://young-readers-path.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/11e5bcaa-677b-49ef-8366-1914653eb877).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
