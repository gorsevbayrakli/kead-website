import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getArticle } from "@/data/articles";

export default defineTool({
  name: "get_article",
  title: "Yazıyı getir",
  description: "Bir Kead yazısının tam metnini ve ilişkili kitaplarını döndürür.",
  inputSchema: { slug: z.string().describe("Yazının slug değeri, örn. cocuklarda-itiraz.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const article = getArticle(slug.trim());
    if (!article) {
      return {
        content: [{ type: "text", text: `Bu slug ile yazı bulunamadı: ${slug}` }],
        isError: true,
      };
    }
    const payload = { ...article, url: `/konular/${article.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: { article: payload },
    };
  },
});
