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
];

const services = [
  { id: "screen", title: "Screen Replacement", hasTwoColumns: true },
  { id: "battery", title: "Battery Replacement", hasTwoColumns: true },
  { id: "speaker", title: "Speaker Replacement", hasTwoColumns: false },
  { id: "chargingPort", title: "Charging Port Replacement", hasTwoColumns: false },
  { id: "cameraGlass", title: "Camera Glass Replacement", hasTwoColumns: false },
  { id: "camera", title: "Camera Replacement", hasTwoColumns: false },
  { id: "powerButton", title: "Power Button Repair", hasTwoColumns: false },
  { id: "microphone", title: "Microphone Replacement", hasTwoColumns: false },
  { id: "housing", title: "Housing/Body Replacement", hasTwoColumns: false },
];

const RepairsPricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Cennik napraw</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any service to view detailed pricing for all iPhone models
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
                              <TableHead className="font-semibold">iPhone Model</TableHead>
                              {service.hasTwoColumns ? (
                                <>
                                  <TableHead className="font-semibold text-right">Original Part</TableHead>
                                  <TableHead className="font-semibold text-right">Replacement Part</TableHead>
                                </>
                              ) : (
                                <TableHead className="font-semibold text-right">Price</TableHead>
                              )}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {iphoneModels.map((model, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{model}</TableCell>
                                {service.hasTwoColumns ? (
                                  <>
                                    <TableCell className="text-right">0 zł</TableCell>
                                    <TableCell className="text-right">0 zł</TableCell>
                                  </>
                                ) : (
                                  <TableCell className="text-right">0 zł</TableCell>
                                )}
                              </TableRow>
                            ))}
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
            All prices include labor and warranty. Contact us for more information.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RepairsPricing;
