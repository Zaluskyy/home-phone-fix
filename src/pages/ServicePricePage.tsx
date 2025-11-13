import { useParams, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

// --- Import Danych i Definicji Typów z pricingData.tsx ---
import { repairsPricingData } from "@/data/PricingData";

// Ponowne definicje typów z pliku pricingData.tsx (dla bezpiecznego dostępu)
interface TwoColumnPrices {
  original: string;
  replacement: string;
}

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

const serviceInfo: Record<string, { title: string; hasTwoColumns: boolean; seoTitle: string; seoDescription: string; seoKeywords: string }> = {
  screen: { 
    title: "Wymiana Wyświetlacza iPhone", 
    hasTwoColumns: true,
    seoTitle: "Wymiana Wyświetlacza iPhone Warszawa - Cennik | iCuro Serwis iPhone",
    seoDescription: "Profesjonalna wymiana wyświetlacza iPhone Warszawa. Cennik wymiany ekranu iPhone wszystkich modeli. Oryginalne części i zamienniki. Szybka realizacja, gwarancja.",
    seoKeywords: "wymiana wyświetlacza iPhone Warszawa, wymiana ekranu iPhone, cennik wymiany wyświetlacza iPhone, naprawa ekranu iPhone Warszawa"
  },
  battery: { 
    title: "Wymiana Baterii iPhone", 
    hasTwoColumns: true,
    seoTitle: "Wymiana Baterii iPhone Warszawa - Cennik | iCuro Serwis iPhone",
    seoDescription: "Wymiana baterii iPhone Warszawa - cennik dla wszystkich modeli. Oryginalne baterie Apple i zamienniki. Szybka wymiana, gwarancja, przystępne ceny.",
    seoKeywords: "wymiana baterii iPhone Warszawa, wymiana baterii iPhone, cennik wymiany baterii iPhone, serwis iPhone Warszawa"
  },
  speaker: { 
    title: "Wymiana Głośnika iPhone", 
    hasTwoColumns: false,
    seoTitle: "Wymiana Głośnika iPhone Warszawa - Cennik | iCuro Serwis",
    seoDescription: "Wymiana głośnika iPhone w Warszawie. Profesjonalna naprawa dźwięku iPhone. Cennik wymiany głośnika dla wszystkich modeli.",
    seoKeywords: "wymiana głośnika iPhone Warszawa, naprawa głośnika iPhone, serwis iPhone Warszawa"
  },
  chargingPort: { 
    title: "Wymiana Złącza Ładowania iPhone", 
    hasTwoColumns: false,
    seoTitle: "Wymiana Gniazda Ładowania iPhone Warszawa - Cennik | iCuro",
    seoDescription: "Wymiana złącza ładowania iPhone Warszawa. Naprawa gniazda ładowania iPhone wszystkich modeli. Szybka realizacja, gwarancja.",
    seoKeywords: "wymiana złącza ładowania iPhone Warszawa, naprawa gniazda iPhone, serwis iPhone Warszawa"
  },
  cameraGlass: { 
    title: "Wymiana Szybki Aparatu iPhone", 
    hasTwoColumns: false,
    seoTitle: "Wymiana Szybki Aparatu iPhone Warszawa - Cennik | iCuro",
    seoDescription: "Wymiana szybki aparatu iPhone w Warszawie. Naprawa szkiełka kamery iPhone. Cennik dla wszystkich modeli, szybka realizacja.",
    seoKeywords: "wymiana szybki aparatu iPhone Warszawa, naprawa aparatu iPhone, serwis iPhone Warszawa"
  },
  camera: { 
    title: "Wymiana Aparatu iPhone", 
    hasTwoColumns: false,
    seoTitle: "Wymiana Aparatu iPhone Warszawa - Cennik | iCuro Serwis",
    seoDescription: "Wymiana aparatu iPhone Warszawa - przedni i tylny aparat. Cennik wymiany kamery iPhone dla wszystkich modeli. Gwarancja jakości.",
    seoKeywords: "wymiana aparatu iPhone Warszawa, naprawa kamery iPhone, serwis iPhone Warszawa"
  },
  powerButton: { 
    title: "Naprawa Przycisku Zasilania iPhone", 
    hasTwoColumns: false,
    seoTitle: "Naprawa Przycisku Zasilania iPhone Warszawa - Cennik | iCuro",
    seoDescription: "Naprawa przycisku zasilania iPhone w Warszawie. Wymiana przycisku power iPhone. Cennik dla wszystkich modeli, szybka naprawa.",
    seoKeywords: "naprawa przycisku iPhone Warszawa, wymiana przycisku zasilania iPhone, serwis iPhone Warszawa"
  },
  microphone: { 
    title: "Wymiana Mikrofonu iPhone", 
    hasTwoColumns: false,
    seoTitle: "Wymiana Mikrofonu iPhone Warszawa - Cennik | iCuro Serwis",
    seoDescription: "Wymiana mikrofonu iPhone w Warszawie. Naprawa mikrofonu iPhone wszystkich modeli. Cennik, gwarancja, szybka realizacja.",
    seoKeywords: "wymiana mikrofonu iPhone Warszawa, naprawa mikrofonu iPhone, serwis iPhone Warszawa"
  },
  housing: { 
    title: "Wymiana Korpusu iPhone", 
    hasTwoColumns: false,
    seoTitle: "Wymiana Korpusu iPhone Warszawa - Cennik | iCuro Serwis",
    seoDescription: "Wymiana obudowy iPhone w Warszawie. Naprawa korpusu iPhone. Cennik wymiany obudowy dla wszystkich modeli iPhone.",
    seoKeywords: "wymiana korpusu iPhone Warszawa, wymiana obudowy iPhone, serwis iPhone Warszawa"
  },
};

const ServicePricePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const defaultPrice = "Zapytaj";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  // Sprawdzenie, czy usługa istnieje w definicji oraz w danych cenowych
  const service = serviceInfo[serviceSlug || ""];
  const servicePrices = repairsPricingData[serviceSlug || ""];

  if (!service || !servicePrices) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Usługa niedostępna
            </h1>
            <p className="mb-6 text-muted-foreground">
              Nie znaleziono szczegółów dla usługi: **{serviceSlug}**
            </p>
            <Button onClick={() => navigate("/cennik-napraw")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Wróć do pełnego cennika
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Użyj service.title dla nagłówków
  const { title, hasTwoColumns, seoTitle, seoDescription, seoKeywords } = service;

  return (
    <div className="min-h-screen">
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />
      <Header />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title} Warszawa - Cennik</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cennik {title.toLowerCase()} dla wszystkich modeli iPhone w Warszawie. 
              Profesjonalny serwis iPhone z gwarancją i szybką realizacją.
            </p>
          </div>

          <Card className="shadow-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ceny według modelu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">
                        Model iPhone
                      </TableHead>
                      {hasTwoColumns ? (
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
                      // Pobieranie danych cenowych dla danego modelu w ramach wybranej usługi
                      const priceData = servicePrices[model];

                      if (hasTwoColumns) {
                        // Obsługa usługi z dwiema kolumnami (Screen, Battery)
                        const prices = priceData as TwoColumnPrices;
                        const originalPrice = prices?.original ?? defaultPrice;
                        const replacementPrice =
                          prices?.replacement ?? defaultPrice;

                        return (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {model}
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              {originalPrice}
                            </TableCell>
                            <TableCell className="text-right">
                              {replacementPrice}
                            </TableCell>
                          </TableRow>
                        );
                      }

                      // Obsługa usługi z jedną kolumną
                      const singlePrice = (priceData as string) ?? defaultPrice;

                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{model}</TableCell>
                          <TableCell className="text-right font-bold ">
                            {singlePrice}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
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

export default ServicePricePage;
