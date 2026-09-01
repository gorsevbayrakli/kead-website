export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export function LegalPage({
  title,
  intro,
  sections,
  updated,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  updated: string;
}) {
  return (
    <div className="mx-auto max-w-[42rem] px-4 py-14 sm:px-6">
      <h1 className="text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">Son güncelleme: {updated}</p>
      <p className="mt-6 text-base leading-relaxed text-mure/90">{intro}</p>
      {sections.map((s) => (
        <section key={s.heading} className="mt-9">
          <h2 className="text-xl">{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 text-base leading-relaxed text-mure/90">
              {p}
            </p>
          ))}
        </section>
      ))}
      <p className="mt-12 rounded-2xl bg-sis p-5 text-sm text-mure/80">
        Bu metin örnek içeriktir. Uygulama yayına girmeden önce hukuki inceleme sonrası nihai hâline
        getirilecektir.
      </p>
    </div>
  );
}
