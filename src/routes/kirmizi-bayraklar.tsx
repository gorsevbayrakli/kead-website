import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";
import { AlertTriangle, BookOpen, HeartCrack, Moon, Users } from "lucide-react";

export const Route = createFileRoute("/kirmizi-bayraklar")({
  head: () => ({
    meta: [
      { title: "Kırmızı Bayraklar — Kead" },
      {
        name: "description",
        content:
          "Çocuk kitaplarında dikkat edilmesi gereken kırmızı bayraklar: içerik, yaş uygunluğu ve duygusal güvenlik.",
      },
      { property: "og:title", content: "Kırmızı Bayraklar — Kead" },
      {
        property: "og:description",
        content: "Çocuk kitaplarında öne çıkan uyarı işaretleri.",
      },
      { property: "og:url", content: "/kirmizi-bayraklar" },
    ],
    links: [{ rel: "canonical", href: "/kirmizi-bayraklar" }],
  }),
  component: RedFlagsPage,
});

const flags = [
  {
    icon: Moon,
    title: "Kapanmayan tehdit",
    text: "Tehlike, korku veya kayıp hissi kitabın sonuna kadar çözümlenmezse okul öncesi ve küçük yaşlarda uyku öncesi kaygıyı besleyebilir.",
  },
  {
    icon: HeartCrack,
    title: "Örseleyici içerik",
    text: "Şiddet, dışlanma, ayrılık veya kayıp sahneleri çocuğun kendi yaşadığı deneyimleri tetikleyebilir. Bu kitaplar ebeveyn rehberliğiyle okunmalıdır.",
  },
  {
    icon: Users,
    title: "Yaşın altında sosyal meseleler",
    text: "Siber zorbalık, akran baskısı veya romantik ilişkiler gibi konular erken yaşta tek başına işlenince çocuk tarafından yanlış yorumlanabilir.",
  },
  {
    icon: BookOpen,
    title: "Metin–resim uyumsuzluğu",
    text: "Sakin görünen resimlerin altında ağır, karanlık veya umutsuz bir metin olabilir. Görsel ile sözel mesaj birlikte değerlendirilmelidir.",
  },
  {
    icon: AlertTriangle,
    title: "Yaş etiketine körü körüne güven",
    text: "Yayınevlerinin yaş aralıkları farklı ölçütlere dayanır. Kapaktaki etiket başlangıç noktasıdır, son söz değildir.",
  },
];

function RedFlagsPage() {
  return (
    <div>
      <section className="bg-petrol py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-white">Kırmızı Bayraklar</h1>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            Her kitap her yaşa uygun değildir. İşte çocuğunuz için seçim
            yaparken dikkat etmeniz gereken uyarı işaretleri.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[38rem] px-4 py-14 sm:px-6">
        <div className="space-y-5">
          {flags.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl bg-sis p-5 transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(1,61,74,.06)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sari text-petrol">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg">{f.title}</h2>
                  <p className="mt-1.5 text-base leading-relaxed text-mure/85">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl bg-sari p-6 sm:p-8">
          <h2 className="text-center">Kead bunu sizin yerinize değil, sizinle birlikte yapar.</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-mure/85">
            Her değerlendirmenin altında karar gerekçesi, uzman görüşü ve aynı
            kitabı okumuş ebeveynlerin deneyimi yer alır.
          </p>
          <div className="mt-6">
            <WaitlistForm id="redflags-email" />
          </div>
        </div>
      </section>
    </div>
  );
}
