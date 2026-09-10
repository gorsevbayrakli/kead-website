import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listBooks from "./tools/list-books";
import getBookTool from "./tools/get-book";
import listArticles from "./tools/list-articles";
import getArticleTool from "./tools/get-article";

// The OAuth issuer must be the direct Supabase host; the project ref is inlined at build time.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "kead-kitap-rehberi",
  title: "Kead Kitap Rehberi",
  version: "0.1.0",
  instructions:
    "Kead'in çocuk kitabı değerlendirmelerine ve ebeveyn yazılarına erişim sağlar. Kitapları listelemek veya aramak için list_books, bir kitabın tam değerlendirmesi için get_book, yazılar için list_articles ve get_article araçlarını kullanın.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listBooks, getBookTool, listArticles, getArticleTool],
});
