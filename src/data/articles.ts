export type Block = { type: "h2" | "p" | "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  category: "Gelişim" | "Yeni doğan" | "Okul çağı" | "+12";
  ageTag: string;
  excerpt: string;
  readingMinutes: number;
  palette: "pembe" | "nane" | "seftali" | "gok";
  illustration: "kitap" | "uyku" | "konusma" | "ekran" | "okul" | "kalp";
  relatedBooks: string[];
  body: Block[];
}

const p = (text: string): Block => ({ type: "p", text });
const h = (text: string): Block => ({ type: "h2", text });
const q = (text: string): Block => ({ type: "quote", text });

export const articles: Article[] = [
  {
    slug: "cocuklarda-itiraz",
    title: "Çocuklarda itiraz: hayır demeyi öğrenen çocuk ne anlatıyor?",
    category: "Gelişim",
    ageTag: "3-6 yaş",
    excerpt:
      "Dört yaşındaki bir çocuğun her cümleye itiraz etmesi inatçılık değil, sınır arayışıdır. Bu arayışı nasıl karşıladığınız, çocuğun ileride kendi sınırını nasıl kuracağını belirliyor.",
    readingMinutes: 6,
    palette: "pembe",
    illustration: "konusma",
    relatedBooks: ["ben-kizmadim-ki", "orman-arkadaslarim", "sinifin-yeni-cocugu"],
    body: [
      p(
        "Üç yaşından itibaren çoğu ailede aynı sahne tekrar eder: söylediğiniz her cümlenin karşısına bir 'hayır' dikilir. Ceketini giymek istemez, ayakkabısını kendi seçmek ister, dün sevdiği yemeği bugün reddeder. Ebeveynler bu dönemi çoğunlukla inatçılık olarak adlandırır. Oysa gelişim açısından bakıldığında olan biten çok daha ilginçtir: çocuk ilk defa kendisinin ayrı bir kişi olduğunu fark etmiştir ve bunu test etmektedir.",
      ),
      p(
        "İtiraz, çocuğun sizden ayrı bir iradesi olduğunu keşfetmesinin dışa vurumudur. Bu keşif tek başına yeterli değildir; çocuğun bu iradenin dünyada bir karşılığı olup olmadığını görmesi gerekir. Her 'hayır', aslında sessiz bir soru taşır: benim isteğim burada bir şeyi değiştiriyor mu?",
      ),
      h("İtiraz nedir, ne değildir?"),
      p(
        "İtiraz, bir düşünceyi ya da kararı benimsemeyerek karşı çıkmaktır. Söylenecek sözün, karşı sözün doğduğu yerdir. Çocuk açısından bu bir saldırı değil, bir sınama biçimidir. Onu saldırı olarak okuduğumuz anda verdiğimiz tepki de savunmacı olur ve karşımızda gerçekten bir çatışma belirir.",
      ),
      p(
        "İtiraz olmayan şeyler de vardır. Yorgunluktan doğan dağılma, açlıktan doğan huysuzluk ya da aşırı uyarandan doğan taşkınlık itiraz değildir. Bu durumlarda çocuk bir şey talep etmiyordur, sadece düzenleyemediği bir bedensel durumu dışa vuruyordur. İkisini ayırt etmek, doğru tepkiyi verebilmenin ilk şartıdır.",
      ),
      h("Dikkat edilmesi gerekenler"),
      p(
        "Yüksek sesle konuşmamak ilk kuraldır. Sesinizi yükselttiğinizde çocuk içeriği değil tonu duyar; söylediğiniz cümle ne kadar makul olursa olsun karşılığı kaygı olur. İkincisi, tane tane anlatmaktır. Uzun gerekçe zincirleri okul öncesi çocuğun çalışma belleğini aşar; iki cümleyle söylenen bir sınır, on cümleyle söylenenden daha iyi tutar. Üçüncüsü, ebeveynlerin ortak dili yakalamasıdır. İki yetişkinin farklı sınır çizdiği evde çocuk kuralı değil, kuralı esnetebileceği kişiyi öğrenir.",
      ),
      p(
        "Merak duygusunun ilk oluştuğu kişi çoğunlukla birincil bakım verendir. Dolayısıyla öğrenme de bu ilişki üzerinden başlar. Bakım veren, çocuğun ilgi alanlarını keşfetmesini takip eder ve onu yönlendirir. Ancak yetişkin her şeyin en doğrusunu onun adına bildiği yanılgısına kapılır ve 'onun iyiliği için' onun yerine karar vermeye başlarsa, öğrenme merakı zamanla azalır.",
      ),
      p(
        "Bunun somut karşılığı gündelik hayatta görünür. Kişisel sorumluluğu almayan, büyüse dahi yemeği önüne getirilen, altı temizlenen çocuğun özgüveni azalır. Özgüven söylenen övgülerden değil, yapılıp başarılan işlerden birikir. İtiraz anları da bu yüzden değerlidir: çocuğa kendi başına karar verebileceği, sonuçlarına katlanabileceği küçük alanlar açmanın kapısıdır.",
      ),
      h("Kaç seçenek sunmalı?"),
      p(
        "İki seçenek çoğu durumda yeterlidir. 'Ne giymek istersin' sorusu okul öncesi bir çocuk için yönetilemeyecek kadar açıktır ve çoğunlukla çatışmayı büyütür. 'Mavi mi kırmızı mı' sorusu ise iradeyi tanır ama çerçeveyi korur. Çocuk seçtiğini hisseder, siz de gitmeniz gereken saate yetişirsiniz.",
      ),
      p(
        "Pazarlığa açık olan ile olmayanı önceden ayırmak da işi kolaylaştırır. Araç koltuğunda kemer takmak pazarlığa açık değildir ve bunu tartışmaya açmak çocuğa hangi sınırların gerçek olduğu konusunda karışık bir mesaj verir. Buna karşılık akşam yemeğinden önce hangi oyunun oynanacağı tamamen pazarlığa açıktır.",
      ),
      h("Diğer bakım verenlerin rolü"),
      p(
        "Annenin, babanın ve diğer bakım verenlerin çocuğun hayatında alan açması önemlidir. Birincil bakım verenin diğerleriyle ilişkiyi sağlıklı tutması, çocuğa karşı tavırlarında fazla koruyucu bir rol almaması çocuğun sınırlarını genişletir. Gelişimine olanak tanıyan bu alan, çocuğun kendi sınırını bilmesini ve davranışını düzenleyebilmesini kolaylaştırır.",
      ),
      q(
        "Çocuğunuz bir konuda size karşı çıkıyorsa öncelikle dinleyin. İtirazın içeriği çoğu zaman önemsizdir; önemli olan itirazın duyulduğunu görmesidir.",
      ),
      p(
        "Kitaplar bu dönemde beklenmedik biçimde işe yarar. Bir hikâye kahramanının itiraz etmesi, çocuğa kendi deneyimini dışarıdan izleme imkânı verir. Kriz anında değil sakin bir anda okunan bir duygu kitabı, ertesi gün öfke anında kullanılacak kelimeyi hazırlar. 'Karnım sıkışıyor' diyebilen bir çocuk, bağırmak zorunda kalmaz.",
      ),
      p(
        "Son olarak: itiraz dönemi geçicidir ama bıraktığı iz kalıcıdır. Bu dönemde iradesi tanınan çocuk, ileride kendi sınırını savunabilen bir yetişkin olur. Her seferinde bastırılan çocuk ise ya sınır koymayı hiç öğrenemez ya da sınırı yalnızca çatışarak koyabileceğini öğrenir. Bugün mutfakta yaşadığınız küçük tartışmanın büyük karşılığı budur.",
      ),
    ],
  },
  {
    slug: "ilk-alti-ay-kitap",
    title: "İlk altı ayda kitap: bebeğe okumak neden erken değil?",
    category: "Yeni doğan",
    ageTag: "0-1 yaş",
    excerpt:
      "Henüz oturamayan bir bebeğe kitap okumak boşuna gibi görünür. Oysa bu dönemde okunan şey hikâye değil, sestir; ve bebek onu duyar.",
    readingMinutes: 5,
    palette: "gok",
    illustration: "kitap",
    relatedBooks: ["kirmizi-kitap", "uyku-vakti-geldi", "orman-arkadaslarim"],
    body: [
      p(
        "Yeni doğan bir bebeğe kitap okuma fikri çoğu ebeveyne gereksiz görünür. Bebek sayfayı göremez, kelimeleri anlamaz, kitabı tutamaz. Bütün bunlar doğrudur. Yine de ilk aylarda okunan kitabın bir işlevi vardır ve bu işlev metnin içeriğiyle değil, okuma anının kendisiyle ilgilidir.",
      ),
      h("Bebeğin duyduğu şey ne?"),
      p(
        "Doğumdan itibaren bebek, tanıdık sesleri diğerlerinden ayırt eder. Okuma sırasında sesiniz gündelik konuşmadan farklı bir ritim kazanır: daha yavaş, daha vurgulu, daha öngörülebilir. Bu ritim bebeğin dikkatini toplamasını kolaylaştırır. Aynı kitabın tekrar tekrar okunması bu öngörülebilirliği pekiştirir; bebek sonraki cümlenin tonunu beklemeye başlar.",
      ),
      p(
        "İkinci işlev bedenseldir. Okuma çoğunlukla kucakta, sabit bir pozisyonda, birkaç dakika süren bir etkinliktir. Bebek için bu, günün içinde kestirilebilir ve sakin bir ada demektir. Gün boyu değişen uyaranların arasında bu tür adacıklar, uyku düzeninin oturmasına dolaylı olarak katkı sağlar.",
      ),
      h("Hangi kitap?"),
      p(
        "İlk aylarda içerik neredeyse önemsizdir; istediğiniz her metni okuyabilirsiniz. Altıncı aydan itibaren ise görsel tercihler belirginleşir. Yüksek kontrastlı, sayfa başına tek nesne düşen, kalın sayfalı kitaplar bu dönemde en çok tutulanlardır. Kalabalık sahneler bebeğin bakışını dağıtır; tek nesne ise ortak dikkat için bir zemin oluşturur.",
      ),
      p(
        "Ortak dikkat, bu dönemin en kritik kavramıdır. Siz nesneyi gösterip adlandırdığınızda ve bebek önce nesneye sonra size baktığında, dil gelişiminin temeli atılmış olur. Bu döngü kitap dışında da kurulabilir, ancak kitap sayfası bunun için hazır ve sabit bir sahne sunar.",
      ),
      q("Bu yaşta kitap bir metin değil, bir buluşma noktasıdır. Adlandırın ve bekleyin; asıl iş bekleme anında oluyor.",),
      h("Ne kadar sürmeli?"),
      p(
        "İki dakika yeterlidir. Bebek başını çevirdiğinde, huzursuzlandığında ya da elini kitaptan çektiğinde etkinlik bitmiştir. Israr etmek okumayı zorunlu bir işe dönüştürür ve ilerideki isteksizliğin tohumunu atar. Kısa ama düzenli okuma, uzun ama zorlanan okumadan her zaman daha etkilidir.",
      ),
      p(
        "Kitabın ağza götürülmesi, ısırılması, sayfasının yırtılması bu dönemde beklenen davranışlardır ve engellenmeleri gerekmez. Bebek nesneyi ağzıyla tanır; kitap da onun için önce bir nesnedir. Bu nedenle ilk kitaplıkta kumaş ve kalın karton kitapların bulunması, kâğıt kitapların ise erişilebilir bir rafta durmaması makul bir düzenlemedir.",
      ),
      h("Ebeveynin dili"),
      p(
        "Kitabı birebir okumak zorunda değilsiniz. Sayfada gördüğünüzü kendi cümlelerinizle anlatmak, hatta bebeğin adını cümlenin içine katmak etkiyi artırır. Kendi ana dilinizde okumanız, akıcı olmadığınız bir dilde okumanızdan çok daha değerlidir; bebek akıcılığı ve duyguyu duyar.",
      ),
      p(
        "Sonuç olarak ilk altı ayda okumanın amacı bebeğe bir şey öğretmek değildir. Amaç, kitabı hayatın olağan bir parçası haline getirmektir. İki yaşında kitap seven bir çocuk, iki yaşında kitapla tanışmış bir çocuk değildir; kitabı hep evde görmüş bir çocuktur.",
      ),
    ],
  },
  {
    slug: "okuma-aliskanligi-okul-cagi",
    title: "Okuma alışkanlığı okul çağında nasıl korunur?",
    category: "Okul çağı",
    ageTag: "6-9 yaş",
    excerpt:
      "Okumayı söken çocukların önemli bir kısmı ikinci sınıfta kitaptan uzaklaşır. Sebep çoğunlukla kitap değil, okumanın ödevle özdeşleşmesidir.",
    readingMinutes: 6,
    palette: "nane",
    illustration: "okul",
    relatedBooks: ["kayip-anahtar", "gezegenler-defteri", "bisiklet-yazi"],
    body: [
      p(
        "Okumayı öğrenmek ile okumayı sevmek birbirinden bağımsız iki süreçtir. Birinci sınıfta harfleri söken bir çocuk teknik olarak okuyabiliyordur; ancak okuma onun için hâlâ zahmetli bir iştir. Bu zahmetin karşılığını alamazsa, ikinci sınıfta kitaptan sessizce uzaklaşır.",
      ),
      h("Akıcılık eşiği"),
      p(
        "Okumanın keyifli hale gelmesi için önce akıcılık eşiğinin geçilmesi gerekir. Çocuk kelimeleri tek tek çözmeye enerji harcadığı sürece hikâyeyi takip edecek zihinsel alan kalmaz. Bu yüzden ilk dönemde metnin kolay olması, ilginç olmasından daha önemlidir. Zorlanmadan bitirilen kolay bir kitap, yarım kalan iyi bir kitaptan daha çok işe yarar.",
      ),
      p(
        "Bölüm uzunluğu bu dönemde belirleyicidir. Bir oturuşta bitirilebilen bölümler çocuğa 'bitirdim' hissi verir ve bu his okuma öz yeterliliğini doğrudan besler. Uzun bölümlü kitaplar, çocuk her seferinde ortada bıraktığı için başarısızlık hissi biriktirir.",
      ),
      h("Ödev tuzağı"),
      p(
        "Okumanın ödevle özdeşleşmesi, alışkanlığı kaybetmenin en yaygın nedenidir. Okuma günlüğü doldurulan, sayfa sayısı takip edilen, sonunda özet istenen bir etkinlik çocuğun zihninde matematik ödevinden farklı bir yere yerleşmez. Evde yapılabilecek en etkili müdahale, okumanın bir kısmını tamamen ölçümsüz bırakmaktır.",
      ),
      q("Bitirdiği kitabı anlatmasını istemeyin. Anlatmak isterse dinleyin. Aradaki fark, alışkanlığın kurulup kurulmamasını belirliyor.",),
      p(
        "Kitap seçiminde çocuğun kararına alan bırakmak da aynı işlevi görür. Seçtiği kitap sizin ölçünüzde 'basit' olabilir; bu dönemde önemli olan metnin niteliği değil, seçme deneyiminin kendisidir. Nitelikli kitaplar kitaplıkta durur ve zamanla sıraya girer.",
      ),
      h("Sesli okumayı erken bırakmayın"),
      p(
        "Çocuk kendi okumaya başladığında ebeveynler genellikle sesli okumayı bırakır. Oysa çocuğun dinleyerek anlayabildiği metin düzeyi, kendi okuyabildiğinden uzun süre daha ileridedir. Akşam okumaya devam etmek, hem daha zengin bir dile maruz kalmasını sağlar hem de okumayı ilişki kurma anı olarak tutar.",
      ),
      p(
        "Sırayla okuma iyi bir ara formüldür: bir sayfa siz, bir sayfa çocuk. Çocuk yorulmadan katılır, siz metnin ritmini korursunuz. Bu yöntem özellikle roman geçişinde işe yarar.",
      ),
      h("Bilgi kitaplarını küçümsemeyin"),
      p(
        "Kurmaca okumak istemeyen çocukların önemli bir kısmı bilgi kitaplarına ilgi duyar. Gezegenler, dinozorlar, futbol tarihi ya da hayvanlar üzerine bir kitap, okuma alışkanlığı açısından romandan daha az değerli değildir. Aksine, merakla okunan bir metin okuma hızını en hızlı geliştiren şeydir.",
      ),
      p(
        "Evde görünür bir kitap rafı, düzenli kütüphane ziyaretleri ve ebeveynin kendi okurken görülmesi; bu üç şey birlikte, herhangi bir okuma programından daha etkilidir. Çocuk söylediğinizi değil yaptığınızı taklit eder.",
      ),
    ],
  },
  {
    slug: "ekran-ve-kitap",
    title: "Ekran ile kitap arasında denge kurmak",
    category: "Okul çağı",
    ageTag: "6-12 yaş",
    excerpt:
      "Ekran süresini kısaltmak tek başına okuma süresini uzatmaz. Boşluğun neyle dolacağını önceden planlamak gerekiyor.",
    readingMinutes: 5,
    palette: "seftali",
    illustration: "ekran",
    relatedBooks: ["ekranin-arkasi", "kayip-anahtar", "gezegenler-defteri"],
    body: [
      p(
        "Ekran ve kitap tartışması çoğunlukla yanlış kurulur. Soru 'ekran mı kitap mı' değildir; soru, çocuğun gününde boş zamanın nasıl dağıldığıdır. Ekran süresini yarıya indiren pek çok ailede kitap süresi değişmez, çünkü açılan boşluk sıkıntıyla dolar ve sıkıntı da çoğunlukla ekrana geri döner.",
      ),
      h("Ekranın kolaylığı"),
      p(
        "Ekran içerikleri dikkati zahmetsizce toplar; kesme hızı, ses ve renk değişimi çocuğun çaba göstermesini gerektirmez. Kitap ise dikkati çocuğun kendisinin toplamasını ister. İki etkinlik aynı anda seçenek olarak sunulduğunda kitabın kazanma ihtimali düşüktür. Bu bir karakter meselesi değil, tasarım meselesidir.",
      ),
      p(
        "Bu nedenle en işe yarar müdahale yasak değil, sıralamadır. Kitabın ekrandan önce geldiği bir düzen, ikisinin eşit seçenek olarak sunulduğu bir düzenden çok daha iyi çalışır. Akşam yemeğinden sonraki ilk yarım saatin ekransız olması gibi basit ve tekrar eden bir kural, uzun listeler halinde yazılmış kurallardan daha kalıcıdır.",
      ),
      h("İçerik türü fark eder"),
      p(
        "Ekranda geçen sürenin tamamı aynı değildir. Birlikte izlenen ve üzerine konuşulan bir belgesel ile tek başına izlenen kısa video akışı, aynı dakika sayısına rağmen farklı şeylerdir. Ölçmek istiyorsanız süreden çok içerik türünü ve yalnız mı birlikte mi olduğunu ölçün.",
      ),
      q("Ekran süresini tartışmadan önce ekranda ne olduğuna bakın. Otuz dakikanın içi, otuz sayısından daha çok şey anlatıyor.",),
      h("Geçiş anları"),
      p(
        "Çatışmaların çoğu ekran açıldığında değil, kapandığında çıkar. Bunun nedeni geçişin ani olmasıdır. Önceden haber vermek, süreyi çocuğun görebileceği bir yere koymak ve bitişte ne yapılacağının belli olması geçişi kolaylaştırır. 'Beş dakika sonra kapatıyoruz, sonra masayı birlikte kuruyoruz' cümlesi, 'kapat artık' cümlesinden çok farklı bir sonuç üretir.",
      ),
      p(
        "Ön ergenlik döneminde ekran aynı zamanda sosyal bir alandır. Bu yaşta ekranı tamamen kesmek, çocuğu akran grubunun dışına itebilir. Burada hedef kesmek değil, çocuğun kendi kullanımını fark etmesini sağlamaktır. Haftalık kullanım ekranını birlikte açıp konuşmak, dışarıdan konulan her sınırdan daha kalıcı bir farkındalık yaratır.",
      ),
      p(
        "Dijital okuryazarlığı anlatan kitaplar bu konuşmayı başlatmak için iyi bir zemin sunar. Doğrudan uyarı içeren metinler ergenlerde savunma tepkisi yaratırken, bir kurgu kahramanının başına gelenler mesafeli ve güvenli bir tartışma alanı açar.",
      ),
    ],
  },
  {
    slug: "kardes-gelisi",
    title: "Kardeş gelirken: büyük çocuğun sessiz soruları",
    category: "Gelişim",
    ageTag: "2-6 yaş",
    excerpt:
      "Kardeş kıskançlığı çoğunlukla bebek geldiğinde değil, ilgi rutini değiştiğinde başlar. Değişimi önceden konuşmak, sonradan telafi etmekten kolaydır.",
    readingMinutes: 5,
    palette: "pembe",
    illustration: "kalp",
    relatedBooks: ["ben-kizmadim-ki", "uyku-vakti-geldi", "orman-arkadaslarim"],
    body: [
      p(
        "İkinci çocuk beklenirken büyük çocuğa söylenen ilk cümle genellikle 'abla olacaksın' ya da 'abi olacaksın' olur. Çocuk bu cümleyi çoğunlukla bir müjde olarak değil, bir görev bildirimi olarak duyar. Kendisinden ne isteneceğini bilmediği bir rolün içine yerleştirilmiştir.",
      ),
      h("Asıl kaygı ne?"),
      p(
        "Küçük çocukların kardeşe dair kaygısı soyut değildir. Yatağın kime ait olacağı, akşam kitabını kimin okuyacağı, sabah kimin kucağa alınacağı gibi somut sorular etrafında döner. Bu soruları önceden ve gerçekçi biçimde yanıtlamak, genel güvence cümlelerinden çok daha etkilidir. 'Seni her zaman seveceğiz' cümlesi doğrudur ama çocuğun sorduğu soruya cevap vermez.",
      ),
      p(
        "Doğum sonrası ilk haftalarda değişen şey sevgi değil, zamandır. Bunu açıkça söylemek çocuğu rahatlatır: bebek çok uyuyacak, çok ağlayacak ve annenin bazı günler yorgun olacağı doğrudur. Gerçeği söylenen çocuk, kendi gözlemiyle söylenenler arasında çelişki bulmaz.",
      ),
      h("Geri adımlar normaldir"),
      p(
        "Tuvalet alışkanlığını kazanmış bir çocuğun geri dönmesi, konuşurken bebeksi bir tona kayması ya da kucakta taşınmak istemesi bu dönemde sık görülür. Bunlar bilinçli bir manipülasyon değil, işe yaradığı gözlemlenen bir davranışa dönüştür. Cezalandırmak yerine geçici olarak karşılamak, davranışın daha hızlı sönmesini sağlar.",
      ),
      q("Büyük çocuğa 'artık büyüdün' demek, aslında ondan bebekliğini bir günde bırakmasını istemektir.",),
      h("Ayrı zaman"),
      p(
        "Günde on beş dakikalık, bölünmeyen ve tamamen büyük çocuğa ait bir zaman, uzun ortak etkinliklerden daha çok işe yarar. Bu zamanın kısa olması sorun değildir; öngörülebilir olması önemlidir. Çocuk sırasının geleceğini bilirse beklemeyi öğrenir.",
      ),
      p(
        "Kitaplar bu dönemde konuşmayı başlatmanın en zahmetsiz yoludur. Kardeş konulu bir hikâye, çocuğun kendi duygusunu doğrudan itiraf etmeden konuşmasına imkân verir. 'Sence o şimdi ne hissediyor' sorusu, 'sen kıskanıyor musun' sorusundan çok daha fazla cevap alır.",
      ),
      p(
        "Son olarak, kardeşler arasındaki ilişkinin ilk aylarda kurulmadığını hatırlamak gerekir. İlişki yıllar içinde kurulur ve büyük çocuğun ilk aylarda hissettiği rahatsızlık, ileride kötü bir kardeşlik ilişkisi kuracağı anlamına gelmez. Bu dönemde ölçülmesi gereken şey çocuğun kardeşe karşı tavrı değil, kendini hâlâ görülmüş hissedip hissetmediğidir.",
      ),
    ],
  },
  {
    slug: "ergenlikte-okuma",
    title: "On iki yaşından sonra okumak: kitap neden zorlaşıyor?",
    category: "+12",
    ageTag: "12-15 yaş",
    excerpt:
      "Ergenlikte okuma azalmasının nedeni ilgisizlik değil, zamanın ve kimliğin yeniden düzenlenmesi. Bu dönemde kitap seçimi artık ebeveynin işi değil.",
    readingMinutes: 5,
    palette: "gok",
    illustration: "kitap",
    relatedBooks: ["yarim-kalan-mektup", "ekranin-arkasi", "bisiklet-yazi"],
    body: [
      p(
        "On iki yaşından sonra okuma süresinde belirgin bir düşüş görülür. Ebeveynler bunu genellikle ekranlara ya da ilgisizliğe bağlar. Oysa bu dönemde değişen şey çocuğun kitaba ilgisi değil, gününün ve kendine dair algısının yapısıdır.",
      ),
      h("Zaman gerçekten azalıyor"),
      p(
        "Ortaokulla birlikte ödev yükü, sınav hazırlığı ve sosyal hayat aynı anda büyür. Boş zaman gerçekten azalır ve azalan zaman öncelikle sosyal ilişkilere ayrılır. Bu, gelişimsel olarak beklenen bir dağılımdır; akran ilişkileri bu yaşta kimlik kurmanın ana aracıdır.",
      ),
      p(
        "Bu nedenle 'daha çok oku' baskısı çoğunlukla ters teper. Okuma, çocuğun zaten kısıtlı olan özerk alanına dışarıdan giren bir zorunluluk haline gelir ve reddedilir. Bu yaşta okumayı yeniden çekici kılan tek şey, seçimin tamamen gence ait olmasıdır.",
      ),
      h("Kimlik ve metin"),
      p(
        "Ergenler kendilerini anlatan metinlere yönelir. Kimlik, aidiyet, adalet, dışlanma ve ilk aşk temaları bu yaşta okunanların büyük kısmını oluşturur. Bir yetişkinin 'sığ' bulduğu bir kitap, gencin kendini ilk defa bir metinde gördüğü kitap olabilir. Bu deneyim, sonradan gelecek daha zorlu okumaların kapısını açar.",
      ),
      q("Bu yaşta iyi kitap, gencin bitirdiği kitaptır. Sıra sizin önerdiklerinize sonra gelir.",),
      h("Yarım bırakma hakkı"),
      p(
        "Başlanan her kitabın bitirilmesi gerektiği fikri, okumayı bir yükümlülüğe çevirir. Yarım bırakmak serbest olduğunda genç daha çok kitap başlar ve istatistiksel olarak daha çok kitap bitirir. Kitapla kurulan ilişkinin gönüllü kalması, bu dönemde en çok korunması gereken şeydir.",
      ),
      p(
        "Sesli kitap ve çizgi roman da okuma sayılır. Metin türü konusundaki katılık, okumaya yeniden yaklaşmakta olan bir genci kolayca uzaklaştırır. Sesli kitapla roman dinleyen bir genç, dil ve anlatı yapısıyla temas etmeye devam ediyordur.",
      ),
      p(
        "Ebeveynin bu dönemdeki en etkili rolü öneri yapmak değil, ortam kurmaktır: evde kitap bulunması, birlikte kitapçıya gidilmesi, okunan bir kitabın sohbette geçmesi. Genç, kitabı size rağmen değil, sizinle aynı odada bulunduğu için seçtiğinde ilişki kurulmuş olur.",
      ),
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
