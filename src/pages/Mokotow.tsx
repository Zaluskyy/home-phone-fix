import Header from "@/components/Header";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import HomeFAQ from "@/components/HomeFAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, ListOrdered } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";
import { useNavigate } from "react-router-dom";

const Mokotow = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Serwis iPhone Mokotów Warszawa - Naprawa iPhone na Mokotowie | iCuro"
        description="Profesjonalny serwis iPhone na Mokotowie w Warszawie. Wymiana baterii, wyświetlacza i naprawa iPhone. Szybka realizacja, gwarancja jakości. Lokalny serwis domowy na Mokotowie."
        keywords="serwis iPhone Mokotów, naprawa iPhone Mokotów, wymiana baterii iPhone Mokotów, wymiana wyświetlacza iPhone Mokotów, serwis Apple Mokotów Warszawa"
      />
      <Header />

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
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
              Serwis iPhone Warszawa Mokotów
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Profesjonalna naprawa iPhone na Mokotowie
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lokalny serwis iPhone na warszawskim Mokotowie. Naprawiamy ekrany, baterie,
              złącza ładowania i inne usterki — szybko, profesjonalnie i w przystępnych cenach.
              Twój iPhone w dobrych rękach, blisko Ciebie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={handleContact} className="shadow-glow">
                <Phone className="mr-2 h-5 w-5" />
                Kontakt
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

      {/* About - Mokotów */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serwis iPhone na Mokotowie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Działamy na warszawskim Mokotowie, oferując mieszkańcom dzielnicy wygodny dostęp
              do profesjonalnego serwisu iPhone. Wykonujemy naprawy z użyciem oryginalnych części
              oraz wysokiej klasy zamienników. Dzięki lokalizacji w sercu Mokotowa oszczędzasz
              czas — szybka naprawa blisko domu, bez konieczności podróżowania przez całe miasto.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <WhyChoose />
      <HomeFAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Mokotow;
