import { Clock, Award, DollarSign, Star, Shield, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
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

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best iPhone repair service
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
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
