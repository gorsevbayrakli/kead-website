import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/gizlilik")({
  head: () => ({
    meta: [
      { title: "Gizlilik politikası — Kead" },
      {
        name: "description",
        content: "Kead'de hangi verilerin toplandığı, nasıl kullanıldığı ve nasıl saklandığı.",
      },
      { property: "og:title", content: "Gizlilik politikası — Kead" },
      { property: "og:description", content: "Kead gizlilik politikası." },
      { property: "og:url", content: "/gizlilik" },
    ],
    links: [{ rel: "canonical", href: "/gizlilik" }],
  }),
  component: () => (
    <LegalPage
      title="Gizlilik politikası"
      updated="1 Eylül 2026"
      intro="Bu politika, Kead uygulamasını ve web sitesini kullandığınızda hangi verilerin toplandığını, bu verilerin neden işlendiğini ve ne kadar süreyle saklandığını açıklar."
      sections={[
        {
          heading: "Topladığımız veriler",
          paragraphs: [
            "Hesap oluştururken e-posta adresinizi topluyoruz. Çocuk profilinde yalnızca ad veya takma ad, doğum yılı ve seçtiğiniz ilgi alanları tutuluyor.",
            "Çocuk fotoğrafı istemiyoruz; avatarlar hazır bir setten seçiliyor.",
          ],
        },
        {
          heading: "Verileri neden işliyoruz",
          paragraphs: [
            "Verileri yalnızca size uygun kitap önerileri üretmek, kitaplığınızı saklamak ve talep ettiğiniz bildirimleri iletmek için kullanıyoruz.",
            "Reklam amaçlı profilleme yapmıyoruz ve verileri üçüncü taraflara satmıyoruz.",
          ],
        },
        {
          heading: "Saklama süresi",
          paragraphs: [
            "Hesabınızı sildiğinizde profil ve çocuk profili verileriniz kalıcı olarak siliniyor. Yayımlanmış yorumlarınız istemeniz hâlinde anonimleştiriliyor.",
          ],
        },
        {
          heading: "Haklarınız",
          paragraphs: [
            "Verilerinize erişme, düzeltme ve silinmesini talep etme hakkına sahipsiniz. Bu talepler için iletişim sayfamızdaki adresi kullanabilirsiniz.",
          ],
        },
      ]}
    />
  ),
});
