import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpenCheck,
  CalendarRange,
  MessagesSquare,
  Users,
  BookX,
  Tags,
  EyeOff,
} from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PhoneMock } from "@/components/PhoneMock";
import { ReviewShowcase } from "@/components/ReviewShowcase";
import { KidShelves } from "@/components/KidShelves";
import { ArticleCard } from "@/components/ArticleCard";
import { Stars } from "@/components/Stars";
import { Reveal } from "@/components/Reveal";
import { CoverMarquee } from "@/components/CoverMarquee";
import { articles } from "@/data/articles";
import { faq } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kead — Çocuğunuzun eline geçen kitabı önce biz okuyoruz" },
      {
        name: "description",
        content:
          "Kead, her çocuk kitabını yaşa uygunluk, eğitici değer ve duygusal güvenlik açısından değerlendirir. Gerçek ebeveyn deneyimiyle bir arada.",
      },
      { property: "og:title", content: "Kead — Çocuk kitaplarını önce biz okuyoruz" },
      {
        property: "og:description",
        content: "Yaşa uygunluk, eğitici değer ve duygusal güvenlik ekseninde kitap değerlendirmeleri.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trust = [
  { icon: BookOpenCheck, text: "Kitabın tamamı okunarak değerlendirme" },
  { icon: CalendarRange, text: "Yaş bandına göre öneri" },
  { icon: MessagesSquare, text: "Gerçek ebeveyn yorumları" },
  { icon: Users, text: "Her çocuk için ayrı profil" },
];

const problems = [
  { icon: BookX, text: "Arka kapak yazısı kitabın içeriğini anlatmıyor." },
  { icon: Tags, text: "Yaş etiketi her yayınevinde başka anlama geliyor." },
  { icon: EyeOff, text: "Korkutucu ya da örseleyici bölümleri okumadan fark edemiyorsunuz." },
];

const steps = [
  {
    title: "Çocuklarınızın profilini oluşturun.",
    text: "Ad, doğum tarihi ve ilgi alanları. Birden fazla çocuk ekleyebilirsiniz.",
  },
  {
    title: "Size özel önerileri görün.",
    text: "Her çocuğun yaşına ve gelişim dönemine göre ayrı liste.",
  },
  {
    title: "Okuyun, puanlayın, kütüphanenizi büyütün.",
    text: "Değerlendirmeniz diğer ebeveynlere yol gösterir.",
  },
];

const axes = [
  {
    title: "Yaş uygunluğu",
    text: "Kelime düzeyi, cümle uzunluğu ve soyut kavram yoğunluğu birlikte değerlendirilir.",
    score: 5,
  },
  {
    title: "Eğitici değer",
    text: "Kitabın çocuğa ne kazandırdığı; bilgi, kelime ya da bakış açısı.",
    score: 4,
  },
  {
    title: "Duygusal güvenlik",
    text: "Korku, kayıp ve şiddet temalarının o yaşta nasıl karşılık bulduğu.",
    score: 4,
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-yellow relative overflow-hidden bg-sari pb-0 lg:pb-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-0 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pt-16 lg:pb-6">
          <div>
            <h1 className="kead-in text-petrol" style={{ animationDelay: "80ms" }}>
              Çocuğunuzun eline geçen kitabı önce biz okuyoruz.
            </h1>
            <p
              className="kead-in mt-5 max-w-xl text-lg leading-relaxed text-mure"
              style={{ animationDelay: "160ms" }}
            >
              Kead, her çocuk kitabını yaşa uygunluk, eğitici değer ve duygusal güvenlik açısından
              değerlendirir. Gerçek ebeveyn deneyimiyle bir arada.
            </p>
            <div className="kead-in mt-7 max-w-lg" style={{ animationDelay: "240ms" }} id="katil">
              <WaitlistForm />
              <p className="mt-3 text-sm text-mure/75">
                Yalnızca lansman duyurusu için kullanılır, spam yok.
              </p>
            </div>
          </div>
          <div
            className="kead-in relative z-10 order-last -mb-8 flex items-end justify-center self-end lg:kead-float lg:mb-0"
            style={{ animationDelay: "320ms" }}
          >
            <PhoneMock />
          </div>

        </div>
      </section>
      <div className="-mt-8 h-8 rounded-t-[2rem] bg-white" />

      {/* Güven şeridi */}
      <section className="bg-white" aria-label="Kead ne sunuyor">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal key={t.text} delay={i * 80} className="flex items-start gap-3">
              <t.icon className="mt-0.5 shrink-0 text-petrol" size={20} aria-hidden="true" />
              <p className="min-w-0 text-sm font-semibold text-mure">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal as="h2" className="max-w-2xl">
            Kitapçıda 20 dakika, elinizde hâlâ karar yok.
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.text} delay={i * 100} className="hover-lift rounded-2xl bg-sis p-6">
                <p.icon className="text-petrol" size={22} aria-hidden="true" />
                <p className="mt-4 text-base leading-relaxed font-semibold text-mure">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl çalışır */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal as="h2">Nasıl çalışır?</Reveal>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120}>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sari text-xl font-bold text-petrol">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-mure/85">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Değerlendirme sistemi */}
      <section className="on-dark bg-petrol py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal as="h2" className="text-white">
            Her kitap üç eksende değerlendirilir.
          </Reveal>
          <div className="mt-9 grid gap-10 lg:grid-cols-2">
            <div className="space-y-7">
              {axes.map((a, i) => (
                <Reveal key={a.title} variant="left" delay={i * 120}>
                  <h3 className="text-sari">{a.title}</h3>
                  <p className="mt-1.5 max-w-md text-base leading-relaxed text-white/85">{a.text}</p>
                  <div className="mt-2">
                    <Stars value={a.score} label={`Örnek puan: 5 üzerinden ${a.score}`} />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="right" delay={120}>
              <ReviewShowcase />
            </Reveal>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-nane" aria-hidden="true" /> Kesinlikle tavsiye
              edilir — yaş bandına tam uyuyor.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sari" aria-hidden="true" /> Ebeveyn
              rehberliğiyle önerilir — birlikte okunmalı.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-mercan" aria-hidden="true" /> Bu yaş için
              önerilmez — daha büyük yaşta uygun.
            </li>
          </ul>
        </div>
      </section>

      {/* Çocuk profilleri */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal variant="left">
            <h2>İki çocuk, iki ayrı raf.</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-mure/85">
              Aynı hesapta her çocuğun kendi profili olur. Beş yaşındaki çocuğunuza duygu kitapları
              önerilirken, dokuz yaşındaki çocuğunuz bilgi kitapları ve ilk romanlarla karşılaşır.
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-mure/85">
              Kitaplıklar, okuma geçmişi ve puanlamalar da ayrı tutulur. Profiller arasında tek
              dokunuşla geçersiniz.
            </p>
          </Reveal>
          <Reveal variant="right">
            <KidShelves />
          </Reveal>
        </div>
      </section>

      {/* Kitap şeridi */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal as="h2" className="max-w-2xl">
            Rafımızda okunmuş, puanlanmış yüzlerce kitap var.
          </Reveal>
        </div>
        <div className="mt-8">
          <CoverMarquee />
        </div>
      </section>

      {/* Konular */}
      <section className="bg-sis py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl">Sadece kitap değil, çocuğunuzu da anlatıyoruz.</h2>
            <Link to="/konular" className="text-sm font-bold text-petrol underline underline-offset-4">
              Tümü
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 110} className="h-full">
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2>Sık sorulanlar</h2>
            <Link to="/sss" className="text-sm font-bold text-petrol underline underline-offset-4">
              Tüm sorular
            </Link>
          </div>
          <Accordion type="single" collapsible className="mt-6">
            {faq.slice(0, 4).map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="text-left text-base font-bold text-petrol">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-mure/85">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Kapanış CTA */}
      <section className="on-yellow bg-sari py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2>Bir sonraki kitabı seçerken yalnız değilsiniz.</h2>
          <div className="mx-auto mt-7 max-w-lg text-left">
            <WaitlistForm id="cta-email" />
          </div>
          <p className="mt-5 text-sm font-semibold text-mure">iOS ve Android'de yakında</p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {["App Store", "Google Play"].map((s) => (
              <span
                key={s}
                aria-disabled="true"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-petrol/30 px-4 py-2 text-sm font-semibold text-petrol/60"
              >
                {s}
                <span className="rounded-full bg-petrol/10 px-2 py-0.5 text-xs">yakında</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
