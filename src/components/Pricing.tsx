import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all iPhone models and repair services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Services</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Battery Replacement</h3>
                  <p className="text-muted-foreground text-sm">Original and replacement options available</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Screen Replacement</h3>
                  <p className="text-muted-foreground text-sm">High-quality screens for all iPhone models</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Component Repairs</h3>
                  <p className="text-muted-foreground text-sm">Speaker, camera, charging port, and more</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Other Services</h3>
                  <p className="text-muted-foreground text-sm">Power button, microphone, housing replacement</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                onClick={() => navigate('/price-list')}
                className="shadow-glow"
              >
                View Complete Price List
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                All prices include labor and warranty
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
