import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { books, verdictLabels } from "@/data/books";

export default defineTool({
  name: "list_books",
  title: "Kitapları listele",
  description:
    "Kead'de değerlendirilmiş çocuk kitaplarını listeler. Yaş bandı, karar (tavsiye durumu) ve serbest metin aramasıyla filtrelenebilir.",
  inputSchema: {
    query: z.string().optional().describe("Başlık, yazar, yayınevi veya etikette aranacak metin."),
    ageBand: z
      .enum(["0-3", "3-6", "6-9", "9-12", "12-15"])
      .optional()
      .describe("Yaş bandı filtresi."),
    verdict: z
      .enum(["recommended", "guided", "restricted"])
      .optional()
      .describe("Kead kararına göre filtre."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, ageBand, verdict }) => {
    const q = query?.trim().toLocaleLowerCase("tr");
    const results = books
      .filter((b) => (ageBand ? b.ageBand === ageBand : true))
      .filter((b) => (verdict ? b.verdict === verdict : true))
      .filter((b) =>
        q
          ? [b.title, b.author, b.publisher, ...b.tags]
              .join(" ")
              .toLocaleLowerCase("tr")
              .includes(q)
          : true,
      )
      .map((b) => ({
        slug: b.slug,
        title: b.title,
        author: b.author,
        publisher: b.publisher,
        ageBand: b.ageBand,
        verdict: b.verdict,
        verdictLabel: verdictLabels[b.verdict],
        tags: b.tags,
        ratings: b.ratings,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { count: results.length, books: results },
    };
  },
});
