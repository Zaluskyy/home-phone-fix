import { Clock, Award, DollarSign, Star, Shield, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits2 = [
  {
    icon: Clock,
    title: "Fast Repair Time",
    description: "Most repairs completed within 1-2 hours",
  },
  {
    icon: Award,
    title: "High-Quality Parts",
    description: "Original and premium replacement options",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Competitive pricing without compromising quality",
  },
  {
    icon: Star,
    title: "Professional Service",
    description: "Years of experience in iPhone repairs",
  },
  {
    icon: Shield,
    title: "Warranty Included",
    description: "All repairs come with warranty coverage",
  },
  {
    icon: Search,
    title: "Free Diagnostics",
    description: "Complimentary device diagnostics",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Szybki czas naprawy",
    description: "Większość napraw wykonywana w ciągu 1–2 godzin",
  },
  {
    icon: Award,
    title: "Wysokiej jakości części",
    description: "Oryginalne i premium zamienniki do wyboru",
  },
  {
    icon: DollarSign,
    title: "Przystępne ceny",
    description: "Konkurencyjne ceny bez utraty jakości",
  },
  {
    icon: Star,
    title: "Profesjonalna obsługa",
    description: "Lata doświadczenia w naprawach iPhone’ów",
  },
  {
    icon: Shield,
    title: "Gwarancja w cenie",
    description: "Wszystkie naprawy objęte są gwarancją",
  },
  {
    icon: Search,
    title: "Darmowa diagnostyka",
    description: "Bezpłatna diagnostyka urządzenia",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dlaczego My?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zapewniamy najwyższej jakości serwis naprawy iPhone’ów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
