import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ReviewShowcase } from "@/components/ReviewShowcase";
import { KidShelves } from "@/components/KidShelves";

export const Route = createFileRoute("/nasil-calisir")({
  head: () => ({
    meta: [
      { title: "Nasıl çalışır — Kead" },
      {
        name: "description",
        content:
          "Profil oluşturmadan öneri listesine, üç eksenli değerlendirmeden karar şeridine: Kead adım adım nasıl çalışıyor?",
      },
      { property: "og:title", content: "Nasıl çalışır — Kead" },
      { property: "og:description", content: "Kead'in değerlendirme ve öneri süreci adım adım." },
      { property: "og:url", content: "/nasil-calisir" },
    ],
    links: [{ rel: "canonical", href: "/nasil-calisir" }],
  }),
  component: HowPage,
});

const steps = [
  {
    title: "Çocuklarınızın profilini oluşturun.",
    text: "Ad ya da takma ad, doğum tarihi ve ilgi alanları. Fotoğraf istemiyoruz; avatarlar hazır setten seçiliyor. Birden fazla çocuk ekleyebilirsiniz.",
  },
  {
    title: "Size özel önerileri görün.",
    text: "Her çocuğun yaşına ve gelişim dönemine göre ayrı bir liste oluşur. Listeyi yaş bandı, tema ve karar tipiyle daraltabilirsiniz.",
  },
  {
    title: "Kitabın değerlendirmesini okuyun.",
    text: "Üç eksenli puan, kitabın konusu ve diğer ebeveynlerin yorumları tek ekranda. Kararı en altta net bir şeritle görürsünüz.",
  },
  {
    title: "Okuyun, puanlayın, kitaplığınızı büyütün.",
    text: "Okuduğunuz kitabı puanladıkça öneriler isabetlenir. Değerlendirmeniz aynı yaştaki çocukların ebeveynlerine de yol gösterir.",
  },
];

function HowPage() {
  return (
    <div>
      <section className="on-yellow bg-sari">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h1>Nasıl çalışır?</h1>
          <p className="mt-4 text-lg leading-relaxed text-mure">
            Kead'de bir kitabın yolculuğu okumakla başlar, karar şeridiyle biter. Aradaki her adımı
            görebilirsiniz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ol className="space-y-10">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sari text-xl font-bold text-petrol">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-mure/85">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="on-dark bg-petrol py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-white">Değerlendirme kartı böyle görünüyor</h2>
          <p className="mt-3 text-base text-white/85">
            Sekmeler arasında geçiş yapın: aynı kitabın genel bakışını ve ebeveyn
            yorumlarını görebilirsiniz.
          </p>
          <div className="mt-7">
            <ReviewShowcase />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2>Her çocuğun kendi rafı</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-mure/85">
          Profiller arasında geçiş yaptığınızda öneriler, kitaplık ve okuma geçmişi de değişir.
        </p>
        <div className="mt-7">
          <KidShelves />
        </div>
      </section>

      <section className="on-yellow bg-sari py-14">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <h2 className="text-center">Yayına girdiğimizde haber verelim.</h2>
          <div className="mt-6">
            <WaitlistForm id="how-email" />
          </div>
        </div>
      </section>
    </div>
  );
}
