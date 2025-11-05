import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const batteryPrices = [
  { model: "iPhone 7", original: "€45", replacement: "€35" },
  { model: "iPhone 8", original: "€50", replacement: "€40" },
  { model: "iPhone X", original: "€60", replacement: "€45" },
  { model: "iPhone 11", original: "€65", replacement: "€50" },
  { model: "iPhone 12", original: "€70", replacement: "€55" },
  { model: "iPhone 13", original: "€75", replacement: "€60" },
  { model: "iPhone 14", original: "€80", replacement: "€65" },
  { model: "iPhone 15", original: "€85", replacement: "€70" },
];

const screenPrices = [
  { model: "iPhone 7", original: "€90", replacement: "€60" },
  { model: "iPhone 8", original: "€95", replacement: "€65" },
  { model: "iPhone X", original: "€180", replacement: "€120" },
  { model: "iPhone 11", original: "€190", replacement: "€130" },
  { model: "iPhone 12", original: "€220", replacement: "€150" },
  { model: "iPhone 13", original: "€250", replacement: "€170" },
  { model: "iPhone 14", original: "€280", replacement: "€190" },
  { model: "iPhone 15", original: "€320", replacement: "€220" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Price List</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all iPhone models. Choose between original parts or high-quality replacements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          All prices include labor and warranty. Contact us for repairs not listed above.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
