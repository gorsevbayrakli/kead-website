export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Uygulama ücretli mi?",
    a: "Kitap değerlendirmelerini okumak, çocuk profili oluşturmak ve öneri listelerini görmek ücretsiz olacak. İleride kitaplık dışa aktarma gibi ek özellikler için ücretli bir plan düşünüyoruz, ancak temel kullanım ücretsiz kalacak.",
  },
  {
    q: "Kitap önerileri nasıl seçiliyor?",
    a: "Bir kitap önce yaş bandı, tema ve dil düzeyi açısından sınıflandırılıyor. Ardından üç eksende puanlanıyor: yaş uygunluğu, eğitici değer ve duygusal güvenlik. Çocuğunuzun profilinde yer alan yaş, gelişim dönemi ve ilgi alanları bu puanlarla eşleştiriliyor. Öneriler ne kadar çok kitap puanlarsanız o kadar isabetli hale geliyor.",
  },
  {
    q: "Değerlendirmeleri kim yapıyor?",
    a: "Her kitap önce editör ekibimiz tarafından baştan sona okunuyor. Tanıtım metnine veya arka kapak özetine güvenmeden, kitabın tamamı okunduktan sonra üç bağımsız eksende ve gerekçeli bir kararla değerlendiriliyor.",
  },
  {
    q: "Çocuğumun verileri ne oluyor?",
    a: "Çocuk profilinde yalnızca ad (veya takma ad), doğum yılı ve ilgi alanları tutuluyor. Çocuğun fotoğrafını istemiyoruz, avatarlar hazır setten seçiliyor. Bu veriler öneri üretmek dışında hiçbir amaçla kullanılmıyor ve üçüncü taraflarla paylaşılmıyor.",
  },
  {
    q: "Yorumlar denetleniyor mu?",
    a: "Evet. Yorumlar yayımlanmadan önce otomatik bir filtreden, gerektiğinde de insan denetiminden geçiyor. Hakaret, kişisel veri paylaşımı ve reklam içeren yorumlar yayımlanmıyor. Kitabı beğenmediğinizi söylemek serbest, yazarı hedef almak değil.",
  },
  {
    q: "Hangi yayınevleriyle çalışıyorsunuz?",
    a: "Değerlendirme için yayıneviyle anlaşma yapmıyoruz. Kitaplar piyasadan temin ediliyor ve bağımsız olarak değerlendiriliyor. Yayınevleri kataloglarını bize iletebilir ancak bu, kitabın puanını veya öneri sırasını etkilemiyor.",
  },
  {
    q: "Yaş bandı nasıl belirleniyor?",
    a: "Yayınevinin kapağa yazdığı yaş etiketini başlangıç noktası olarak alıyoruz ama bağlayıcı saymıyoruz. Metnin kelime düzeyi, cümle uzunluğu, soyut kavram yoğunluğu ve temaların duygusal ağırlığı birlikte değerlendiriliyor. Bu yüzden bazı kitaplarda bizim bandımız kapaktakinden farklı çıkıyor.",
  },
  {
    q: "Bir kitabı 'önerilmez' olarak işaretlemeniz ne demek?",
    a: "Kitabın kötü olduğu anlamına gelmiyor. Yalnızca o yaş bandı için uygun bulunmadığı anlamına geliyor. Çoğu durumda aynı kitap daha büyük bir yaş bandında tavsiye ediliyor; kararın gerekçesini her zaman açıkça yazıyoruz.",
  },
  {
    q: "Aynı hesapta kaç çocuk profili oluşturabilirim?",
    a: "Sınır koymuyoruz. Her çocuğun kendi önerileri, kendi kitaplığı ve kendi okuma geçmişi oluyor. Profiller arasında tek dokunuşla geçiş yapabiliyorsunuz.",
  },
  {
    q: "Uygulama ne zaman yayında olacak?",
    a: "iOS ve Android sürümleri üzerinde çalışıyoruz. Kesin bir tarih vermek istemiyoruz; erken erişim listesine katılırsanız yayına girdiğimiz gün ilk siz haberdar olursunuz.",
  },
];
