import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/kvkk")({
  head: () => ({
    meta: [
      { title: "KVKK aydınlatma metni — Kead" },
      {
        name: "description",
        content:
          "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Kead kullanıcılarına yönelik aydınlatma metni.",
      },
      { property: "og:title", content: "KVKK aydınlatma metni — Kead" },
      { property: "og:description", content: "Kead KVKK aydınlatma metni." },
      { property: "og:url", content: "/kvkk" },
    ],
    links: [{ rel: "canonical", href: "/kvkk" }],
  }),
  component: () => (
    <LegalPage
      title="KVKK aydınlatma metni"
      updated="1 Eylül 2026"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, veri sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin olarak sizi bilgilendirmek isteriz."
      sections={[
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            "Kişisel verileriniz, Kead uygulamasını işleten şirket tarafından veri sorumlusu sıfatıyla işlenmektedir.",
          ],
        },
        {
          heading: "İşleme amacı ve hukuki sebep",
          paragraphs: [
            "Kişisel verileriniz; hizmetin sunulması, hesabınızın yönetilmesi ve talep ettiğiniz bildirimlerin iletilmesi amacıyla, sözleşmenin ifası ve açık rızanız hukuki sebeplerine dayanarak işlenmektedir.",
          ],
        },
        {
          heading: "Aktarım",
          paragraphs: [
            "Verileriniz, yalnızca barındırma ve e-posta gönderim hizmeti aldığımız tedarikçilerle, hizmetin gerektirdiği ölçüde paylaşılmaktadır. Yurt dışına aktarım söz konusu olduğunda gerekli güvenlik tedbirleri uygulanır.",
          ],
        },
        {
          heading: "İlgili kişinin hakları",
          paragraphs: [
            "Kanun'un 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini isteme ve işleme faaliyetine itiraz etme haklarına sahipsiniz.",
            "Taleplerinizi iletişim sayfamızda yer alan adres üzerinden bize iletebilirsiniz.",
          ],
        },
      ]}
    />
  ),
});
