import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// --- Import danych i definicji typów z pricingData.tsx ---
// Pamiętaj, aby ścieżka do importu była poprawna. Zakładam, że jest to plik obok.
import { repairsPricingData } from "@/data/PricingData";

// Ponowne definicje typów dla bezpieczeństwa (lub import z osobnego pliku z typami)
interface TwoColumnPrices {
  original: string;
  replacement: string;
}

type ServicePrices = {
  [model: string]: string | TwoColumnPrices;
};

type PricingData = {
  [serviceId: string]: ServicePrices;
};
// ----------------------------------------------------------------------

const iphoneModels = [
  "iPhone 8",
  "iPhone 8 Plus",
  "iPhone X",
  "iPhone XR",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 12",
  "iPhone 12 Mini",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13",
  "iPhone 13 Mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
];

const services = [
  { id: "screen", title: "Wymiana Wyświetlacza", hasTwoColumns: true },
  { id: "battery", title: "Wymiana Baterii", hasTwoColumns: true },
  { id: "speaker", title: "Wymiana Głośnika", hasTwoColumns: false },
  {
    id: "chargingPort",
    title: "Wymiana Gniazda Ładowania",
    hasTwoColumns: false,
  },
  {
    id: "cameraGlass",
    title: "Wymiana Szybki Aparatu",
    hasTwoColumns: false,
  },
  { id: "camera", title: "Wymiana Aparatu", hasTwoColumns: false },
  {
    id: "powerButton",
    title: "Naprawa Przycisku Zasilania",
    hasTwoColumns: false,
  },
  { id: "microphone", title: "Wymiana Mikrofonu", hasTwoColumns: false },
  { id: "housing", title: "Wymiana Korpusu", hasTwoColumns: false },
];

const RepairsPricing = () => {
  const defaultPrice = "Zapytaj"; // Domyślny komunikat, gdy brakuje ceny

  return (
    <div className="min-h-screen">
      <SEO 
        title="Cennik Napraw iPhone Warszawa - Wymiana Baterii i Wyświetlacza | iCuro"
        description="Pełny cennik napraw iPhone w Warszawie. Wymiana baterii iPhone, wymiana wyświetlacza iPhone, naprawa iPhone wszystkich modeli. Przejrzyste ceny, oryginalne części, gwarancja."
        keywords="cennik napraw iPhone Warszawa, cena wymiany baterii iPhone, cena wymiany wyświetlacza iPhone, naprawa iPhone Warszawa ceny, serwis iPhone Warszawa cennik"
      />
      <Header />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Cennik Napraw iPhone Warszawa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kompleksowy cennik napraw iPhone. Wymiana baterii iPhone, wymiana wyświetlacza iPhone 
              i wszystkie inne usługi serwisowe. Kliknij usługę, aby zobaczyć szczegółowy cennik.
            </p>
          </div>

          <Card className="shadow-card max-w-5xl mx-auto">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {services.map((service) => (
                  <AccordionItem key={service.id} value={service.id}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="font-semibold">
                                iPhone Model
                              </TableHead>
                              {service.hasTwoColumns ? (
                                <>
                                  <TableHead className="font-semibold text-right">
                                    Oryginalna Część
                                  </TableHead>
                                  <TableHead className="font-semibold text-right">
                                    Zamiennik
                                  </TableHead>
                                </>
                              ) : (
                                <TableHead className="font-semibold text-right">
                                  Cena
                                </TableHead>
                              )}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {iphoneModels.map((model, index) => {
                              // Pobieranie danych cenowych
                              const priceData =
                                repairsPricingData[service.id]?.[model];

                              if (service.hasTwoColumns) {
                                // Obsługa usługi z dwiema kolumnami (Screen, Battery)
                                const prices = priceData as TwoColumnPrices;
                                const originalPrice =
                                  prices?.original ?? defaultPrice;
                                const replacementPrice =
                                  prices?.replacement ?? defaultPrice;

                                return (
                                  <TableRow key={index}>
                                    <TableCell className="font-medium">
                                      {model}
                                    </TableCell>
                                    <TableCell className="text-right font-bold ">
                                      {originalPrice}
                                    </TableCell>
                                    <TableCell className="text-right">
                                      {replacementPrice}
                                    </TableCell>
                                  </TableRow>
                                );
                              }

                              // Obsługa usługi z jedną kolumną
                              const singlePrice =
                                (priceData as string) ?? defaultPrice;

                              return (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">
                                    {model}
                                  </TableCell>
                                  <TableCell className="text-right font-bold">
                                    {singlePrice}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Wszystkie ceny zawierają robociznę i gwarancję. Skontaktuj się z
            nami, aby uzyskać więcej informacji.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RepairsPricing;
