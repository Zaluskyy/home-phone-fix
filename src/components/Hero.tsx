import { Button } from "@/components/ui/button";
import { Phone, ListOrdered } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-gradient-subtle z-0" />
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary">
            Profesjonalna Naprawa iPhone'ów
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Szybko, Niezawodnie, W rozsądnej cenie
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Naprawiamy iPhone’y z dbałością o każdy detal — ekrany, baterie,
            złącza, diagnostyka, a także bardziej skomplikowane usterki.
            Oferujemy wysoką jakość i szybkie terminy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={handleContact} className="shadow-glow">
              <Phone className="mr-2 h-5 w-5" />
              Contact Now
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/repairs-pricing")}
              className="border border-black"
            >
              <ListOrdered className="mr-2 h-5 w-5" />
              Cennik napraw
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
