import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Naprawa iPhone Warszawa - Wymiana Baterii i Wyświetlacza | iCuro Serwis iPhone"
        description="Profesjonalny serwis iPhone Warszawa. Wymiana baterii iPhone, wymiana wyświetlacza iPhone, naprawa iPhone. Szybko, tanio, gwarancja. Doświadczony serwis domowy z wysokiej jakości częściami."
        keywords="naprawa iPhone Warszawa, wymiana baterii iPhone, wymiana wyświetlacza iPhone, serwis iPhone, wymiana baterii iPhone Warszawa, wymiana wyświetlacza iPhone Warszawa, naprawa iPhone"
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
