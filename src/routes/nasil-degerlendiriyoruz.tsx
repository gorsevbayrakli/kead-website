import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Meter } from "@/components/Meter";

export const Route = createFileRoute("/nasil-degerlendiriyoruz")({
  head: () => ({
    meta: [
      { title: "Nasıl Değerlendiriyoruz — Kead" },
      {
        name: "description",
        content:
          "Kead'de bir kitabı üç eksende nasıl değerlendiriyoruz: görsel, olumlu mesaj ve eğitsel değer.",
      },
      { property: "og:title", content: "Nasıl Değerlendiriyoruz — Kead" },
      {
        property: "og:description",
        content: "Üç eksenli değerlendirme metodolojimizi keşfedin.",
      },
      { property: "og:url", content: "/nasil-degerlendiriyoruz" },
    ],
    links: [{ rel: "canonical", href: "/nasil-degerlendiriyoruz" }],
  }),
  component: EvaluationPage,
});

const axes = [
  {
    title: "Görsel Uygunluk",
    score: 88,
    text: "Sayfa düzeni, resim yoğunluğu, karakter ifadeleri ve renk paleti çocuğun yaşına uygun mu? Okul öncesi dönemde görsel karmaşa dikkati dağıtır; ergenlikte ise daha sade tasarım tercih edilir.",
  },
  {
    title: "Olumlu Mesaj",
    score: 84,
    text: "Kitap çocuğa kendisi ve dünya hakkında ne anlatıyor? Empati, dayanıklılık, merak ve saygı gibi değerler güçlü bir olumlu mesajın işaretleridir.",
  },
  {
    title: "Eğitsel Değer",
    score: 79,
    text: "Dil gelişimi, kavram öğrenimi, eleştirel düşünme veya günlük hayat becerileri açısından kitap ne katıyor? Eğitsellik yaşa uygun zorlukla dengelenmeli.",
  },
];

const process = [
  {
    title: "Kitap tamamen okunur.",
    text: "Tanıtım metni veya arka kapak özetine güvenmeyiz. Değerlendirme yazılmadan önce kitabın tamamı okunur.",
  },
  {
    title: "Yaş bandı yeniden belirlenir.
    text: "Kapaktaki yaş etiketi başlangıç noktasıdır. Kelime düzeyi, cümle uzunluğu, soyut kavram yoğunluğu ve temaların duygusal ağırlığı birlikte değerlendirilir.",
  },
  {
    title: "Uzman görüşü alınır.
    text: "Korku, kayıp, şiddet veya örseleyici içerik barındıran kitaplar danışman psikolog ve çocuk gelişimi uzmanlarımıza yönlendirilir.",
  },
  {
    title: "Karar gerekçesiyle yazılır.
    text: "Bir kitabı 'bu yaş için önerilmez' olarak işaretlediğimizde nedenini açıkça yazarız. Çoğu durumda aynı kitap daha büyük bir yaş bandında tavsiye edilir.",
  },
];

function EvaluationPage() {
  return (
    <div>
      <section className="on-yellow bg-sari">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h1>Nasıl Değerlendiriyoruz?</h1>
          <p className="mt-4 text-lg leading-relaxed text-mure">
            Her kitabı tek bir fikre indirgemeden, üç bağımsız eksende ve
            gerekçeli bir karar şeridiyle inceliyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[38rem] px-4 py-14 sm:px-6">
        <h2 className="text-center">Üç eksenli değerlendirme</h2>
        <div className="mt-8 space-y-8">
          {axes.map((a) => (
            <div key={a.title} className="rounded-2xl bg-sis p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg">{a.title}</h3>
                <span className="text-2xl font-bold text-petrol">{a.score}</span>
              </div>
              <div className="mt-3">
                <Meter value={a.score} variant="petrol" />
              </div>
              <p className="mt-4 text-base leading-relaxed text-mure/85">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-petrol py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-white">Değerlendirme süreci</h2>
          <ol className="mt-7 space-y-6">
            {process.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sari text-base font-bold text-petrol">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg text-white">{p.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-white/85">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-yellow bg-sari py-14">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <h2 className="text-center">Yayına girdiğimizde haber verelim.</h2>
          <div className="mt-6">
            <WaitlistForm id="evaluation-email" />
          </div>
        </div>
      </section>
    </div>
  );
}
