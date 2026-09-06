import { createFileRoute } from "@tanstack/react-router";
import RepairsPricing from "@/pages/RepairsPricing";

const title = "Cennik Napraw iPhone Warszawa | iCuro Serwis iPhone";
const description =
  "Aktualny cennik napraw iPhone w Warszawie: wymiana baterii, wyświetlacza, głośnika, złącza ładowania i aparatu. Sprawdź ceny dla swojego modelu iPhone.";

export const Route = createFileRoute("/cennik-napraw")({
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
  component: RepairsPricing,
});
