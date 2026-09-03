import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ageBands, type AgeBand } from "@/data/books";

export const Route = createFileRoute("/yas-bantlari")({
  head: () => ({
    meta: [
      { title: "Yaş Bantları — Kead" },
      {
        name: "description",
        content:
          "Kead yaş bantlarına göre çocuk kitaplarını nasıl sınıflandırıyor? Her dönemin okuma özelliklerini keşfedin.",
      },
      { property: "og:title", content: "Yaş Bantları — Kead" },
      {
        property: "og:description",
        content: "Çocuk gelişim dönemlerine göre kitap seçimi rehberi.",
      },
      { property: "og:url", content: "/yas-bantlari" },
    ],
    links: [{ rel: "canonical", href: "/yas-bantlari" }],
  }),
  component: AgeBandsPage,
});

const descriptions: Record<AgeBand, { title: string; traits: string[]; focus: string }> = {
  "0-3": {
    title: "İlk Kelimeler ve Ortak Dikkat",
    traits: ["Kalın sayfalar", "Tekrar ve ritim", "Az metin, çok resim", "Günlük rutinler"],
    focus: "Bu dönemde kitap, hikâyeden çok bir ortak dikkat aracıdır. Sayfa başına tek nesne, kısa cümleler ve tekrar eden ritimler en iyisidir.",
  },
  "3-6": {
    title: "Duygular ve İlk Kavramlar",
    traits: ["Basit hikâye yapısı", "Günlük hayat konuları", "Duygu adlandırma", "Etkinlik içeren kitaplar"],
    focus: "Okul öncesi dönemde çocuk hayal ile gerçeği ayırt etmekte zorlanır. Kapanmayan tehditler veya ağır duygusal sahneler uyku öncesi kaygıyı besleyebilir.",
  },
  "6-9": {
    title: "İlk Bağımsız Okuma",
    traits: ["Kısa bölümler", "Büyük punto", "Bol diyalog", "Arkadaşlık ve okul temaları"],
    focus: "İlk bağımsız okuma döneminde bölüm uzunluğu her şeyden önemlidir. Çocuğun bir oturuşta bir bölümü bitirebilmesi, okuma öz yeterliliğini doğrudan besler.",
  },
  "9-12": {
    title: "Karmaşık Dünyalar",
    traits: ["Daha uzun metinler", "Sosyal konular", "Bilgi kitapları", "Akran ilişkileri"],
    focus: "Ön ergenlikte arkadaşlık ilişkileri aile ilişkilerinin önüne geçer. Kitaplar çocuğun kendi deneyimini normalleştirmesine yardımcı olmalıdır.",
  },
  "12-15": {
    title: "Kimlik ve Sorgulama",
    traits: ["Derin tema ve karakterler", "Tarih ve toplumsal konular", "Farklı bakış açıları", "Eleştirel düşünmeyi destekleyen metinler"],
    focus: "Ergenlikte kimlik kurma süreci aile hikâyesiyle ilişkilidir. Kuşaklar arası anlatı sunan kitaplar, gencin kendini bir devamlılık içinde konumlandırmasını kolaylaştırır.",
  },
};

function AgeBandsPage() {
  return (
    <div>
      <section className="on-yellow bg-sari">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h1>Yaş Bantları</h1>
          <p className="mt-4 text-lg leading-relaxed text-mure">
            Yaş sadece rakam değil. Her gelişim döneminin kendi dikkat süresi,
            duygusal hassasiyeti ve merakı vardır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[42rem] px-4 py-14 sm:px-6">
        <div className="space-y-6">
          {ageBands.map((band) => {
            const d = descriptions[band];
            return (
              <div
                key={band}
                className="rounded-2xl bg-sis p-6 transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(1,61,74,.06)]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-petrol">{band}</span>
                  <h2 className="text-xl">{d.title}</h2>
                </div>
                <p className="mt-3 text-base leading-relaxed text-mure/85">{d.focus}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.traits.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-petrol"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="on-yellow bg-sari py-14">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <h2 className="text-center">Size uygun öneriler yayına girdiğinde haber verelim.</h2>
          <div className="mt-6">
            <WaitlistForm id="agebands-email" />
          </div>
        </div>
      </section>
    </div>
  );
}
