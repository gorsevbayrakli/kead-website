import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getBook, verdictLabels } from "@/data/books";

export default defineTool({
  name: "get_book",
  title: "Kitap değerlendirmesini getir",
  description:
    "Bir kitabın tam Kead değerlendirmesini döndürür: özet, üç eksenli puanlar, uzman görüşü ve ebeveyn yorumları.",
  inputSchema: { slug: z.string().describe("Kitabın slug değeri, örn. kucuk-deniz-kizi.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const book = getBook(slug.trim());
    if (!book) {
      return {
        content: [{ type: "text", text: `Bu slug ile kitap bulunamadı: ${slug}` }],
        isError: true,
      };
    }
    const payload = { ...book, verdictLabel: verdictLabels[book.verdict], url: `/kitaplar/${book.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: JSON.parse(JSON.stringify({ book: payload })),
    };
  },
});
