import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/kullanim-kosullari")({
  head: () => ({
    meta: [
      { title: "Kullanım koşulları — Kead" },
      {
        name: "description",
        content: "Kead uygulamasını ve web sitesini kullanırken geçerli olan koşullar.",
      },
      { property: "og:title", content: "Kullanım koşulları — Kead" },
      { property: "og:description", content: "Kead kullanım koşulları." },
      { property: "og:url", content: "/kullanim-kosullari" },
    ],
    links: [{ rel: "canonical", href: "/kullanim-kosullari" }],
  }),
  component: () => (
    <LegalPage
      title="Kullanım koşulları"
      updated="1 Eylül 2026"
      intro="Kead'i kullanarak aşağıdaki koşulları kabul etmiş olursunuz. Koşullarda değişiklik olduğunda kullanıcıları önceden bilgilendiririz."
      sections={[
        {
          heading: "Hizmetin kapsamı",
          paragraphs: [
            "Kead, çocuk kitaplarına ilişkin değerlendirme ve öneri sunan bir bilgi hizmetidir. Değerlendirmeler tavsiye niteliğindedir ve tıbbi ya da pedagojik teşhis yerine geçmez.",
          ],
        },
        {
          heading: "Kullanıcı içeriği",
          paragraphs: [
            "Yazdığınız yorumlardan siz sorumlusunuz. Hakaret, kişisel veri paylaşımı ve reklam içeren yorumlar yayımlanmaz veya kaldırılır.",
            "Yorumunuzu yayımlayarak, içeriğin uygulama içinde gösterilmesine izin vermiş olursunuz.",
          ],
        },
        {
          heading: "Fikri mülkiyet",
          paragraphs: [
            "Uygulamadaki değerlendirme metinleri, yazılar ve görsel tasarım Kead'e aittir ve izinsiz çoğaltılamaz. Kitap adları ve yazar isimleri ilgili hak sahiplerine aittir.",
          ],
        },
        {
          heading: "Sorumluluk sınırı",
          paragraphs: [
            "Hizmet 'olduğu gibi' sunulur. Kesintisiz veya hatasız çalışacağı garanti edilmez; ancak sorunları en kısa sürede gidermek için gerekli özeni gösteririz.",
          ],
        },
      ]}
    />
  ),
});
