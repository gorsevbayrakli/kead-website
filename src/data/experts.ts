export interface Expert {
  name: string;
  title: string;
  focus: string;
}

export const experts: Expert[] = [
  {
    name: "Dr. Aylin Öztoprak",
    title: "Uzman Klinik Psikolog",
    focus: "Erken çocukluk kaygısı ve duygu düzenleme",
  },
  {
    name: "Elif Sarıkaya",
    title: "Çocuk Gelişimi Uzmanı",
    focus: "Okul öncesi dil gelişimi ve okuma alışkanlığı",
  },
  {
    name: "Prof. Dr. Kerem Bilgin",
    title: "Pediatri Uzmanı",
    focus: "Gelişim dönemleri ve ekran kullanımı",
  },
];

export const initials = (name: string) =>
  name
    .replace(/^(Dr\.|Prof\.|Uzm\.)\s*/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toLocaleUpperCase("tr-TR"))
    .join("");
