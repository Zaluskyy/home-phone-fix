import {
  Battery,
  Smartphone,
  Plug,
  Volume2,
  Camera,
  Wrench,
  CameraOff,
  Power,
  Package,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const services2 = [
  {
    icon: Smartphone,
    title: "Screen Replacement",
    description:
      "Cracked or damaged screen? We replace it with precision using quality displays.",
    slug: "screen",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description:
      "Quick battery replacement with original or high-quality parts. Get your iPhone running like new.",
    slug: "battery",
  },
  {
    icon: Volume2,
    title: "Speaker Replacement",
    description: "Restore clear audio with professional speaker replacement.",
    slug: "speaker",
  },
  {
    icon: Plug,
    title: "Charging Port Replacement",
    description:
      "Fix charging issues with professional port replacement service.",
    slug: "chargingPort",
  },
  {
    icon: CameraOff,
    title: "Camera Glass Replacement",
    description:
      "Replace broken camera glass to protect your lens and restore clarity.",
    slug: "cameraGlass",
  },
  {
    icon: Camera,
    title: "Camera Replacement",
    description:
      "Front or back camera issues? We'll replace it to restore perfect photo quality.",
    slug: "camera",
  },
  {
    icon: Power,
    title: "Power Button Repair",
    description:
      "Fix unresponsive power buttons with professional repair service.",
    slug: "powerButton",
  },
  {
    icon: Volume2,
    title: "Microphone Replacement",
    description: "Restore clear voice quality with microphone replacement.",
    slug: "microphone",
  },
  {
    icon: Package,
    title: "Housing/Body Replacement",
    description: "Replace damaged housing to make your iPhone look brand new.",
    slug: "housing",
  },
];

const services = [
  {
    icon: Smartphone,
    title: "Wymiana wyświetlacza",
    description:
      "Pęknięty lub uszkodzony ekran? Wymienimy go precyzyjnie, używając wysokiej jakości wyświetlaczy.",
    slug: "screen",
  },
  {
    icon: Battery,
    title: "Wymiana baterii",
    description:
      "Szybka wymiana baterii z użyciem oryginalnych lub wysokiej jakości części zamiennych. Twój iPhone znów będzie działał jak nowy.",
    slug: "battery",
  },
  {
    icon: Volume2,
    title: "Wymiana głośnika",
    description:
      "Przywracamy czysty dźwięk dzięki profesjonalnej wymianie głośnika.",
    slug: "speaker",
  },
  {
    icon: Plug,
    title: "Wymiana złącza ładowania",
    description:
      "Naprawimy problemy z ładowaniem, wykonując profesjonalną wymianę portu ładowania.",
    slug: "chargingPort",
  },
  {
    icon: CameraOff,
    title: "Wymiana szkiełka aparatu",
    description:
      "Wymienimy pęknięte szkiełko aparatu, aby chronić obiektyw i przywrócić pełną jakość zdjęć.",
    slug: "cameraGlass",
  },
  {
    icon: Camera,
    title: "Wymiana aparatu",
    description:
      "Masz problemy z tylnym aparatem? Wymienimy go, aby Twoje zdjęcia znów były perfekcyjne.",
    slug: "camera",
  },
  {
    icon: Power,
    title: "Naprawa przycisku zasilania",
    description:
      "Naprawimy niesprawny przycisk zasilania dzięki profesjonalnej usłudze serwisowej.",
    slug: "powerButton",
  },
  {
    icon: Volume2,
    title: "Wymiana mikrofonu",
    description:
      "Przywrócimy czysty i wyraźny dźwięk dzięki wymianie mikrofonu.",
    slug: "microphone",
  },
  {
    icon: Package,
    title: "Wymiana korpusu",
    description:
      "Wymienimy uszkodzony korpus, dzięki czemu Twój iPhone będzie wyglądał jak nowy.",
    slug: "housing",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze Usługi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/price/${service.slug}`)}
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
