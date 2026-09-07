import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";

const title = "Blog iCuro — Porady o naprawie iPhone | Serwis iPhone Warszawa";
const description =
  "Praktyczne porady o naprawie iPhone: bateria, wyświetlacz, zalanie i konserwacja. Wiedza z serwisu iPhone w Warszawie.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});
