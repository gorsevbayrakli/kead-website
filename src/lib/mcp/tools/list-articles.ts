import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { articles } from "@/data/articles";

export default defineTool({
  name: "list_articles",
  title: "Yazıları listele",
  description: "Kead'in ebeveynlere yönelik yazılarını listeler. Kategori ve arama metniyle filtrelenebilir.",
  inputSchema: {
    query: z.string().optional().describe("Başlık veya özette aranacak metin."),
    category: z
      .enum(["Gelişim", "Yeni doğan", "Okul çağı", "+12"])
      .optional()
      .describe("Kategori filtresi."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, category }) => {
    const q = query?.trim().toLocaleLowerCase("tr");
    const results = articles
      .filter((a) => (category ? a.category === category : true))
      .filter((a) =>
        q ? `${a.title} ${a.excerpt}`.toLocaleLowerCase("tr").includes(q) : true,
      )
      .map((a) => ({
        slug: a.slug,
        title: a.title,
        category: a.category,
        ageTag: a.ageTag,
        excerpt: a.excerpt,
        readingMinutes: a.readingMinutes,
        url: `/konular/${a.slug}`,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { count: results.length, articles: results },
    };
  },
});
