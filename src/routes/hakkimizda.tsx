import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda — Kead" },
      {
        name: "description",
        content:
          "Kead neden kuruldu, kitapları hangi yöntemle değerlendiriyoruz ve arkasında kimler var?",
      },
      { property: "og:title", content: "Hakkımızda — Kead" },
      { property: "og:description", content: "Kead'in kuruluş nedeni ve değerlendirme metodolojisi." },
      { property: "og:url", content: "/hakkimizda" },
    ],
    links: [{ rel: "canonical", href: "/hakkimizda" }],
  }),
  component: AboutPage,
});

const method = [
  {
    title: "Kitap baştan sona okunur.",
    text: "Tanıtım metni, arka kapak ya da yayınevi özeti üzerinden değerlendirme yapmıyoruz. Değerlendirme yazılmadan önce kitabın tamamı okunur.",
  },
  {
    title: "Yaş bandı yeniden belirlenir.",
    text: "Kapaktaki yaş etiketi başlangıç noktasıdır, bağlayıcı değildir. Kelime düzeyi, cümle uzunluğu, soyut kavram yoğunluğu ve temaların duygusal ağırlığı birlikte değerlendirilir.",
  },
  {
    title: "Karar gerekçesiyle yazılır.",
    text: "Bir kitabı 'bu yaş için önerilmez' olarak işaretlediğimizde nedenini açıkça yazarız. Çoğu durumda aynı kitap daha büyük bir yaş bandında tavsiye edilir.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="on-yellow bg-sari">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h1>Hakkımızda</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[38rem] px-4 py-14 sm:px-6">
        <p className="text-base leading-relaxed text-mure/90">
          Kead, kitapçıda geçirilen kararsız yirmi dakikadan doğdu. Elimizde iki kitap vardı,
          ikisinin de kapağında aynı yaş aralığı yazıyordu ve içlerinden birinin çocuğumuz için
          uygun olmadığını ancak eve gelip okuduktan sonra fark ettik.
        </p>
        <p className="mt-4 text-base leading-relaxed text-mure/90">
          Sorun kitapların kötü olması değildi. Sorun, bir kitabın hangi çocuğa, hangi dönemde
          uygun olduğunu anlatan ortak bir dilin olmamasıydı. Yayınevlerinin yaş etiketleri
          birbirinden farklı ölçütlere dayanıyor, arka kapak yazıları içeriği değil satışı
          düşünüyordu.
        </p>
        <p className="mt-4 text-base leading-relaxed text-mure/90">
          Kead bu boşluğu doldurmak için var. Kitapları okuyoruz, üç eksende değerlendiriyoruz ve
          kararımızı gerekçesiyle yazıyoruz. Yanına da aynı kitabı çocuğuna okumuş
          ebeveynlerin deneyimini koyuyoruz. Amacımız sizin yerinize karar vermek değil; kararınızı
          bilerek verebilmenizi sağlamak.
        </p>
      </section>

      <section className="bg-sis py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2>Değerlendirme yöntemimiz</h2>
          <ol className="mt-7 space-y-6">
            {method.map((m, i) => (
              <li key={m.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sari text-base font-bold text-petrol">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg">{m.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-mure/85">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-yellow bg-sari py-14">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <h2 className="text-center">Erken erişime katılın.</h2>
          <div className="mt-6">
            <WaitlistForm id="about-email" />
          </div>
        </div>
      </section>
    </div>
  );
}
