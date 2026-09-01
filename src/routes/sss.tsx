import { createFileRoute, Link } from "@tanstack/react-router";
import { faq } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/sss")({
  head: () => ({
    meta: [
      { title: "Sık sorulan sorular — Kead" },
      {
        name: "description",
        content:
          "Ücretlendirme, kitap seçimi, veri güvenliği ve yaş bandı kararları hakkında en çok sorulan sorular.",
      },
      { property: "og:title", content: "Sık sorulan sorular — Kead" },
      { property: "og:description", content: "Kead hakkında en çok sorulan sorular ve yanıtları." },
      { property: "og:url", content: "/sss" },
    ],
    links: [{ rel: "canonical", href: "/sss" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1>Sık sorulan sorular</h1>
      <Accordion type="single" collapsible className="mt-8">
        {faq.map((f, i) => (
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
      <p className="mt-10 text-base text-mure/85">
        Cevabını bulamadığınız bir soru mu var?{" "}
        <Link to="/iletisim" className="font-bold text-petrol underline underline-offset-4">
          Bize yazın
        </Link>
        .
      </p>
    </div>
  );
}
