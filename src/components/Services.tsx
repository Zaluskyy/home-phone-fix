import { Battery, Smartphone, Plug, Volume2, Camera, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Quick battery replacement with original or high-quality parts. Get your iPhone running like new.",
  },
  {
    icon: Smartphone,
    title: "Screen Replacement",
    description: "Cracked or damaged screen? We replace it with precision using quality displays.",
  },
  {
    icon: Plug,
    title: "Charging Port Repair",
    description: "Fix charging issues with professional port cleaning or replacement service.",
  },
  {
    icon: Volume2,
    title: "Speaker & Microphone",
    description: "Restore clear audio with speaker and microphone repair or replacement.",
  },
  {
    icon: Camera,
    title: "Camera Replacement",
    description: "Front or back camera issues? We'll replace it to restore perfect photo quality.",
  },
  {
    icon: Wrench,
    title: "Diagnostics",
    description: "Free diagnostics to identify any issues with your iPhone quickly and accurately.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional iPhone repair services with attention to detail and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
