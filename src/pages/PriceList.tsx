import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const batteryPrices = [
  { model: "iPhone 7", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 8", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone X", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 11", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 12", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 13", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 14", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 15", original: "0 zł", replacement: "0 zł" },
];

const screenPrices = [
  { model: "iPhone 7", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 8", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone X", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 11", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 12", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 13", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 14", original: "0 zł", replacement: "0 zł" },
  { model: "iPhone 15", original: "0 zł", replacement: "0 zł" },
];

const additionalServices = [
  { service: "Speaker Replacement", price: "0 zł" },
  { service: "Charging Port Replacement", price: "0 zł" },
  { service: "Camera Glass Replacement", price: "0 zł" },
  { service: "Camera Replacement", price: "0 zł" },
  { service: "Power Button Repair", price: "0 zł" },
  { service: "Microphone Replacement", price: "0 zł" },
  { service: "Housing/Body Replacement", price: "0 zł" },
];

const PriceList = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Complete Price List</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for all iPhone models. Choose between original parts or high-quality replacements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {/* Battery Pricing */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Battery Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">iPhone Model</TableHead>
                        <TableHead className="font-semibold text-right">Original Battery</TableHead>
                        <TableHead className="font-semibold text-right">Quality Replacement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {batteryPrices.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.model}</TableCell>
                          <TableCell className="text-right">{item.original}</TableCell>
                          <TableCell className="text-right">{item.replacement}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Screen Pricing */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Screen Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">iPhone Model</TableHead>
                        <TableHead className="font-semibold text-right">Original Screen</TableHead>
                        <TableHead className="font-semibold text-right">Quality Replacement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {screenPrices.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.model}</TableCell>
                          <TableCell className="text-right">{item.original}</TableCell>
                          <TableCell className="text-right">{item.replacement}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <Card className="shadow-card max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Additional Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Service</TableHead>
                      <TableHead className="font-semibold text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {additionalServices.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell className="text-right">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            All prices include labor and warranty. Contact us for repairs not listed above.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PriceList;
