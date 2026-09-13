export type Verdict = "recommended" | "guided" | "restricted";
export type AgeBand = "0-3" | "3-6" | "6-9" | "9-12" | "12-15";

export interface BookComment {
  author: string;
  date: string;
  stars: number;
  text: string;
  likes: number;
  replies?: { author: string; date: string; text: string }[] | undefined;
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  publisher: string;
  ageBand: AgeBand;
  ratings: { ageFit: number; educational: number; emotionalSafety: number };
  verdict: Verdict;
  tags: string[];
  summary: string;
  expertOpinion: { expert: string; title: string; text: string };
  meters: { visual: number; positiveMessage: number; educational: number };
  comments: BookComment[];
  palette: "pembe" | "nane" | "seftali" | "gok" | "sari-soft";
}

export const verdictLabels: Record<Verdict, string> = {
  recommended: "Kesinlikle tavsiye edilir",
  guided: "Ebeveyn rehberliğiyle önerilir",
  restricted: "Bu yaş için önerilmez",
};

export const ageBands: AgeBand[] = ["0-3", "3-6", "6-9", "9-12", "12-15"];

const c = (
  author: string,
  date: string,
  stars: number,
  text: string,
  likes: number,
  replies?: BookComment["replies"],
): BookComment => ({ author, date, stars, text, likes, replies });

export const books: Book[] = [
  {
    slug: "kirmizi-kitap",
    title: "Kırmızı Kitap",
    author: "Sedef Duman",
    publisher: "Bulut Çocuk",
    ageBand: "0-3",
    ratings: { ageFit: 5, educational: 4, emotionalSafety: 5 },
    verdict: "recommended",
    tags: ["Renkler", "İlk kelimeler", "Kalın sayfa"],
    summary:
      "Tek renk üzerinden kurulmuş, her sayfada aynı rengin farklı nesnelerini gösteren sade bir ilk kavram kitabı. Metin çok kısa, ritmi tekrar üzerine kurulu.",
    expertOpinion: {
      expert: "Dr. Aylin Öztoprak",
      title: "Uzman Klinik Psikolog",
      text: "Bu yaş grubunda kitap, hikâyeden çok bir ortak dikkat aracıdır. Sayfa başına tek nesne düşmesi bebeğin bakışını yönlendirmesini kolaylaştırıyor. Ebeveynin nesneyi adlandırıp beklemesi, kelime dağarcığından çok daha fazlasını besliyor.",
    },
    meters: { visual: 88, positiveMessage: 74, educational: 66 },
    comments: [
      c("Zehra", "Nis 2024", 5, "On aylık oğlum sayfaları kendi çeviriyor. Kalın sayfa olması çok iyi düşünülmüş.", 12),
      c("Merve", "Mar 2024", 4, "Metin bence fazla kısa ama o yaşta zaten kimse dinlemiyor, doğru karar.", 4),
    ],
    palette: "seftali",
  },
  {
    slug: "uyku-vakti-geldi",
    title: "Uyku Vakti Geldi",
    author: "Nazlı Ergin",
    publisher: "Küçük Fener",
    ageBand: "0-3",
    ratings: { ageFit: 5, educational: 3, emotionalSafety: 5 },
    verdict: "recommended",
    tags: ["Rutin", "Uyku", "Tekrar"],
    summary:
      "Bir ailenin akşam rutinini adım adım izleyen, sondan başa doğru sakinleşen bir kitap. Cümleler kısalıyor, renkler koyulaşıyor.",
    expertOpinion: {
      expert: "Dr. Aylin Öztoprak",
      title: "Uzman Klinik Psikolog",
      text: "Uyku direncinin en sık nedeni belirsizliktir. Sırayı önceden gösteren kitaplar çocuğa ne olacağını haber verdiği için geçiş anını yumuşatır. Kitabın renk ve cümle uzunluğunu birlikte kısaltması iyi bir tasarım kararı.",
    },
    meters: { visual: 79, positiveMessage: 91, educational: 58 },
    comments: [
      c("Ayşe", "Şub 2024", 5, "Akşam rutinimizin parçası oldu. Kitap bitince ışığı kapatıyoruz, tartışma bitti.", 31, [
        { author: "Gülcan", date: "Şub 2024", text: "Bizde de aynı işe yaradı, ikinci kopyayı anneannede tutuyoruz." },
      ]),
    ],
    palette: "gok",
  },
  {
    slug: "orman-arkadaslarim",
    title: "Orman Arkadaşlarım",
    author: "Can Yalçın",
    publisher: "Bulut Çocuk",
    ageBand: "3-6",
    ratings: { ageFit: 4, educational: 4, emotionalSafety: 5 },
    verdict: "recommended",
    tags: ["Doğa", "Arkadaşlık", "Hayvanlar"],
    summary:
      "Ormanda yaşayan hayvanların birbirine yardım ettiği, bölüm bölüm ilerleyen bir hikâye. Her bölüm bağımsız okunabiliyor.",
    expertOpinion: {
      expert: "Elif Sarıkaya",
      title: "Çocuk Gelişimi Uzmanı",
      text: "Bölümlerin bağımsız olması dikkat süresi kısa çocuklar için avantaj. Yardımlaşma sahnelerinde kimsenin küçük düşürülmemesi önemli; çocuk yardım istemenin utanılacak bir şey olmadığını buradan öğreniyor.",
    },
    meters: { visual: 82, positiveMessage: 87, educational: 71 },
    comments: [
      c("Fahriye", "Oca 2024", 4, "Dört yaşındaki kızım tilki bölümünü ezberledi. Resimler sakin, göz yormuyor.", 9),
      c("Okan", "Ara 2023", 5, "Her akşam bir bölüm okuyoruz, tam kıvamında uzunluk.", 6),
    ],
    palette: "nane",
  },
  {
    slug: "ben-kizmadim-ki",
    title: "Ben Kızmadım ki",
    author: "Deniz Akbulut",
    publisher: "Mavi Kalem",
    ageBand: "3-6",
    ratings: { ageFit: 5, educational: 5, emotionalSafety: 4 },
    verdict: "recommended",
    tags: ["Duygular", "Öfke", "Özdüzenleme"],
    summary:
      "Öfkelenen bir çocuğun bedeninde neler olduğunu anlatan, duyguyu yargılamadan tarif eden bir kitap. Sonunda çözüm dayatmıyor, sadece adlandırıyor.",
    expertOpinion: {
      expert: "Dr. Aylin Öztoprak",
      title: "Uzman Klinik Psikolog",
      text: "Duygu kitaplarının çoğu hatayı 'sakinleşme tekniği' öğretmeye çalışarak yapar. Bu kitap önce duyguyu tanımlıyor, çözümü sonraya bırakıyor. Kriz anında değil, sakin anda okumanızı öneririm.",
    },
    meters: { visual: 74, positiveMessage: 84, educational: 89 },
    comments: [
      c("Serra", "May 2024", 5, "Oğlum artık 'karnım sıkışıyor' diyebiliyor. Bunu bu kitaptan öğrendi.", 27),
      c("Hakan", "Nis 2024", 4, "Güzel ama son sayfa biraz aceleye gelmiş gibi.", 3),
    ],
    palette: "pembe",
  },
  {
    slug: "sayilar-mutfakta",
    title: "Sayılar Mutfakta",
    author: "Pelin Doğan",
    publisher: "Küçük Fener",
    ageBand: "3-6",
    ratings: { ageFit: 4, educational: 5, emotionalSafety: 5 },
    verdict: "recommended",
    tags: ["Sayılar", "Günlük hayat", "Etkinlik"],
    summary:
      "Bir tarif üzerinden sayma, ölçme ve sıralama kavramlarını geçiren etkileşimli bir kitap. Her sayfada yapılabilecek küçük bir iş var.",
    expertOpinion: {
      expert: "Elif Sarıkaya",
      title: "Çocuk Gelişimi Uzmanı",
      text: "Matematiği bağlamdan koparmadan veren kitaplar okul öncesinde daha iyi tutunuyor. Ebeveynin gerçekten mutfağa girmesi gerekiyor; kitap tek başına okunduğunda etkisinin yarısını kaybediyor.",
    },
    meters: { visual: 70, positiveMessage: 76, educational: 93 },
    comments: [c("Nihan", "Mar 2024", 4, "Kitapla birlikte kurabiye yaptık, oğlum bir hafta bundan bahsetti.", 15)],
    palette: "sari-soft",
  },
  {
    slug: "gece-bekcisi",
    title: "Gece Bekçisi",
    author: "Tolga Erkan",
    publisher: "Mavi Kalem",
    ageBand: "3-6",
    ratings: { ageFit: 2, educational: 3, emotionalSafety: 2 },
    verdict: "restricted",
    tags: ["Karanlık", "Gerilim", "Yalnızlık"],
    summary:
      "Geceleri kasabayı bekleyen bir figürün etrafında kurulmuş, atmosferi ağır bir hikâye. Metin güzel ama bazı sahneler uzun süre tekinsiz kalıyor ve tehlike açıkça çözülmüyor.",
    expertOpinion: {
      expert: "Dr. Aylin Öztoprak",
      title: "Uzman Klinik Psikolog",
      text: "Kitabın edebi kalitesi yüksek, sorun yaş eşleşmesinde. Okul öncesi dönemde çocuk hayal ile gerçeği ayırt etmekte zorlanır; kapanmayan bir tehdit sahnesi uyku öncesi kaygıyı besleyebilir. Aynı metin 9 yaş ve üzeri için rahatlıkla önerilir.",
    },
    meters: { visual: 86, positiveMessage: 41, educational: 55 },
    comments: [
      c("Gizem", "Şub 2024", 2, "Beş yaşındaki kızıma okuduğuma pişman oldum, iki gece lamba açık uyudu.", 44, [
        { author: "Burak", date: "Şub 2024", text: "Biz dokuz yaşındaki oğluma okuduk, bayıldı. Gerçekten yaş meselesi." },
      ]),
    ],
    palette: "gok",
  },
  {
    slug: "kayip-anahtar",
    title: "Kayıp Anahtar",
    author: "Işıl Kaya",
    publisher: "Bulut Çocuk",
    ageBand: "6-9",
    ratings: { ageFit: 5, educational: 4, emotionalSafety: 4 },
    verdict: "recommended",
    tags: ["Macera", "Problem çözme", "İlk okuma"],
    summary:
      "Apartmanda kaybolan bir anahtarın peşine düşen iki komşu çocuğun hikâyesi. Kısa bölümler, büyük punto, bol diyalog.",
    expertOpinion: {
      expert: "Elif Sarıkaya",
      title: "Çocuk Gelişimi Uzmanı",
      text: "İlk bağımsız okuma döneminde bölüm uzunluğu her şeyden önemli. Çocuğun bir oturuşta bir bölümü bitirebilmesi, okuma öz yeterliliğini doğrudan besliyor.",
    },
    meters: { visual: 65, positiveMessage: 80, educational: 78 },
    comments: [
      c("Zeynep", "Haz 2024", 5, "Kendi kendine bitirdiği ilk kitap oldu. O gururu görmek paha biçilmez.", 38),
      c("Emre", "May 2024", 4, "Sondaki çözüm biraz kolay ama çocuk için sorun değil.", 7),
    ],
    palette: "nane",
  },
  {
    slug: "sinifin-yeni-cocugu",
    title: "Sınıfın Yeni Çocuğu",
    author: "Berk Aydın",
    publisher: "Mavi Kalem",
    ageBand: "6-9",
    ratings: { ageFit: 4, educational: 4, emotionalSafety: 3 },
    verdict: "guided",
    tags: ["Okul", "Dışlanma", "Arkadaşlık"],
    summary:
      "Okula sonradan katılan bir çocuğun dışlanma deneyimini anlatıyor. Dışlama sahneleri gerçekçi ve rahatsız edici; kitap bunu bilerek yapıyor.",
    expertOpinion: {
      expert: "Dr. Aylin Öztoprak",
      title: "Uzman Klinik Psikolog",
      text: "Kitap dışlanmayı yumuşatmadan anlatıyor, bu değerli. Ancak benzer bir deneyim yaşayan çocuk için tek başına okumak zor olabilir. Okuduktan sonra 'sen olsan ne yapardın' sorusunu sormanızı öneririm.",
    },
    meters: { visual: 62, positiveMessage: 68, educational: 85 },
    comments: [
      c("Selin", "Nis 2024", 4, "Kızım okurken sustu, sonra kendi sınıfından bahsetti. Konuşma kapısı açtı.", 22),
    ],
    palette: "seftali",
  },
  {
    slug: "gezegenler-defteri",
    title: "Gezegenler Defteri",
    author: "Murat Şen",
    publisher: "Küçük Fener",
    ageBand: "6-9",
    ratings: { ageFit: 5, educational: 5, emotionalSafety: 5 },
    verdict: "recommended",
    tags: ["Uzay", "Bilgi kitabı", "Merak"],
    summary:
      "Güneş sistemini gezegen gezegen ele alan, her sayfada bir ölçek karşılaştırması sunan bilgi kitabı. Bilgiler güncel ve kaynaklı.",
    expertOpinion: {
      expert: "Prof. Dr. Kerem Bilgin",
      title: "Pediatri Uzmanı",
      text: "Bilgi kitaplarında en sık gördüğüm sorun, bilginin doğrulanabilir olmaması. Bu kitap ölçek karşılaştırmalarını somut nesnelerle veriyor; soyut sayıların çocukta karşılığı olmadığı için bu doğru bir tercih.",
    },
    meters: { visual: 90, positiveMessage: 72, educational: 95 },
    comments: [c("Cem", "Tem 2024", 5, "Oğlum artık gezegenlerin sırasını benden iyi biliyor.", 19)],
    palette: "gok",
  },
  {
    slug: "bisiklet-yazi",
    title: "Bisiklet Yazı",
    author: "Aslı Tuncer",
    publisher: "Bulut Çocuk",
    ageBand: "9-12",
    ratings: { ageFit: 5, educational: 4, emotionalSafety: 4 },
    verdict: "recommended",
    tags: ["Büyüme", "Dostluk", "Yaz"],
    summary:
      "Bir yaz boyunca mahallede geçen, üç arkadaşın değişen ilişkisini izleyen roman. Kayıp ve büyüme temaları var ama umut korunuyor.",
    expertOpinion: {
      expert: "Elif Sarıkaya",
      title: "Çocuk Gelişimi Uzmanı",
      text: "Ön ergenlikte arkadaşlık ilişkileri aile ilişkilerinin önüne geçer. Bu kitap arkadaşlıktaki mesafelenmeyi ihanet olarak değil, doğal bir değişim olarak kuruyor; çocuğun kendi deneyimini normalleştirmesine yardımcı oluyor.",
    },
    meters: { visual: 58, positiveMessage: 83, educational: 74 },
    comments: [
      c("Duygu", "Ağu 2024", 5, "On yaşındaki kızım iki günde bitirdi. Sonra bana en iyi arkadaşını anlattı.", 41),
      c("Levent", "Tem 2024", 4, "Roman geçişinde iyi bir kitap, ne çok kolay ne çok ağır.", 11),
    ],
    palette: "nane",
  },
  {
    slug: "ekranin-arkasi",
    title: "Ekranın Arkası",
    author: "Ozan Demirci",
    publisher: "Mavi Kalem",
    ageBand: "9-12",
    ratings: { ageFit: 4, educational: 5, emotionalSafety: 3 },
    verdict: "guided",
    tags: ["Dijital okuryazarlık", "Sosyal medya", "Akran baskısı"],
    summary:
      "Bir sınıfın sosyal medya üzerinden yaşadığı krizi anlatıyor. Siber zorbalık sahneleri açık ve detaylı; kitap sonunda çözüm üretiyor ama yol boyunca sert.",
    expertOpinion: {
      expert: "Dr. Aylin Öztoprak",
      title: "Uzman Klinik Psikolog",
      text: "İçeriğin sertliği kasıtlı ve işlevsel; çocuklar yumuşatılmış anlatıları ciddiye almıyor. Yine de zorbalık deneyimi olan bir çocuk için tetikleyici olabilir. Ebeveynin kitabı önce kendisinin okuması en sağlıklısı.",
    },
    meters: { visual: 55, positiveMessage: 64, educational: 92 },
    comments: [
      c("Pınar", "Eyl 2024", 5, "Kitabı önce ben okudum, sonra birlikte konuştuk. Bu şekilde çok değerli.", 33),
      c("Tuna", "Ağu 2024", 3, "Bazı bölümler on yaş için ağır geldi bize.", 8),
    ],
    palette: "pembe",
  },
  {
    slug: "kucuk-deniz-kizi",
    title: "Küçük Deniz Kızı",
    author: "Hans Christian Andersen",
    publisher: "Ardıç Çocuk",
    ageBand: "9-12",
    ratings: { ageFit: 5, educational: 5, emotionalSafety: 3 },
    verdict: "guided",
    tags: ["Klasik masal", "Fedakarlık", "Aşk", "Özveri", "Hüzün"],
    summary:
      "Hans Christian Andersen'in 1837'de yayımladığı bu masalda, derinlerin prensesi küçük deniz kızı insanların dünyasına duyduğu hayranlık ve bir prense olan aşkı uğruna sesini büyücüye verip bacak sahibi olur. Prens onu seçmeyince ne ölümsüz hayata geri döner ne de insan olur; deniz köpüğüne dönüşür. Andersen'in masal dünyasının en hüzün verici ve derin eseri; arzu, fedakarlık ve karşılıksız aşkın trajik güzelliği üzerine.",
    expertOpinion: {
      expert: "Dr. Aylin Öztoprak",
      title: "Uzman Klinik Psikolog",
      text: "İstekler, fedakarlık ve değerlerin ağır bedelini çocuklara dokunaklı biçimde sunar. Deniz kızının trajik sonu çocukları arzuların sınırları ve özverinin gerçek anlamı üzerine düşündürür.",
    },
    meters: { visual: 85, positiveMessage: 72, educational: 88 },
    comments: [
      c("Ece", "Eyl 2024", 5, "On yaşındaki kızım sonunu okuyunca ağladı, sonra uzun uzun nedenini konuştuk.", 19),
      c("Murat", "Ağu 2024", 4, "Güzel ama küçük çocuklar için biraz ağır, biz dokuzunda okuduk.", 8),
    ],
    palette: "gok",
  },
  {
    slug: "yarim-kalan-mektup",
    title: "Yarım Kalan Mektup",
    author: "Ceren Alp",
    publisher: "Küçük Fener",
    ageBand: "12-15",
    ratings: { ageFit: 5, educational: 4, emotionalSafety: 4 },
    verdict: "recommended",
    tags: ["Kimlik", "Aile", "Tarih"],
    summary:
      "Büyükannesinin eski mektuplarını bulan bir gencin, ailesinin geçmişini ve kendi kimliğini keşfetme hikâyesi.",
    expertOpinion: {
      expert: "Elif Sarıkaya",
      title: "Çocuk Gelişimi Uzmanı",
      text: "Ergenlikte kimlik kurma süreci aile hikâyesiyle doğrudan ilişkili. Kuşaklar arası anlatı sunan kitaplar, gencin kendini bir devamlılık içinde konumlandırmasını kolaylaştırıyor.",
    },
    meters: { visual: 52, positiveMessage: 81, educational: 79 },
    comments: [c("Ebru", "Eki 2024", 5, "On üç yaşındaki oğlum okuduktan sonra dedesini aradı. Yeter bu bana.", 52)],
    palette: "seftali",
  },
  {
    slug: "kucuk-cadi-seroks",
    title: "Küçük Cadı Şeroks",
    author: "Aslı Der",
    publisher: "Günışığı Kitaplığı",
    ageBand: "6-9",
    ratings: { ageFit: 5, educational: 4, emotionalSafety: 5 },
    verdict: "recommended",
    tags: ["İlk okuma", "Mizah", "Cadı", "Macera"],
    summary:
      "Büyümekte olan küçük bir cadının ters giden büyülerini, kendine özgü çözümlerini ve minik maceralarını mizahi bir dille anlatan bir ilk okuma kitabı. Kısa bölümleri, bol diyaloğu ve sıcak çizgileriyle bağımsız okumaya yeni geçen çocuklar için akıcı bir başlangıç.",
    expertOpinion: {
      expert: "Kead Editör Ekibi",
      title: "Değerlendirme",
      text: "İlk okuma dönemindeki çocuklar için kısa bölümler ve mizah, okuma isteğini canlı tutuyor. Karakterin hatalarından ders çıkarması, çocuğa güvenli bir örnek sunuyor.",
    },
    meters: { visual: 82, positiveMessage: 80, educational: 70 },
    comments: [
      c("Selin", "Kas 2024", 5, "Yedi yaşındaki kızım tek oturuşta bitirdi, ilk kez bir kitabı kendi okudu.", 14),
      c("Deniz", "Eki 2024", 4, "Mizahı çocuğun çok hoşuna gitti, hemen serinin diğerlerini sordu.", 6),
    ],
    palette: "nane",
  },
];

export const getBook = (slug: string) => books.find((b) => b.slug === slug);
