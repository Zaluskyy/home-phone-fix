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
import { ArrowLeft } from "lucide-react";

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

const serviceInfo: Record<string, { title: string; hasTwoColumns: boolean }> = {
  screen: { title: "Screen Replacement", hasTwoColumns: true },
  battery: { title: "Battery Replacement", hasTwoColumns: true },
  speaker: { title: "Speaker Replacement", hasTwoColumns: false },
  chargingPort: { title: "Charging Port Replacement", hasTwoColumns: false },
  cameraGlass: { title: "Camera Glass Replacement", hasTwoColumns: false },
  camera: { title: "Camera Replacement", hasTwoColumns: false },
  powerButton: { title: "Power Button Repair", hasTwoColumns: false },
  microphone: { title: "Microphone Replacement", hasTwoColumns: false },
  housing: { title: "Housing/Body Replacement", hasTwoColumns: false },
};

const ServicePricePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();

  const service = serviceInfo[serviceSlug || ""];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Service Not Found</h1>
            <Button onClick={() => navigate("/")}>Return Home</Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pricing for all iPhone models
            </p>
          </div>

          <Card className="shadow-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">{service.title} Prices</CardTitle>
            </CardHeader>
            <CardContent>
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

export default ServicePricePage;
