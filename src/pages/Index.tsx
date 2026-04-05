import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import HomeFAQ from "@/components/HomeFAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const homeSchemaData = [
  {
    "@context": "https://schema.org",
    "@type": "MobilePhoneRepair",
    "name": "iCuro Serwis iPhone Warszawa",
    "url": "https://www.icuro.pl",
    "telephone": "+48 791 473 583",
    "email": "serwis@icuro.pl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Warszawa"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile trwa naprawa iPhone'a?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Większość standardowych napraw, takich jak wymiana baterii czy ekranu, realizujemy od ręki, zazwyczaj w ciągu 1-2 godzin od dostarczenia urządzenia do naszego serwisu na warszawskim Mokotowie lub Pradze."
        }
      },
      {
        "@type": "Question",
        "name": "Czy używacie oryginalnych części Apple?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferujemy wybór. Posiadamy zarówno w 100% oryginalne podzespoły, jak i sprawdzone zamienniki najwyższej jakości (Premium). Przed naprawą zawsze ustalamy z klientem najlepsze rozwiązanie dopasowane do budżetu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy moje dane na telefonie będą bezpieczne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, podczas standardowych napraw sprzętowych (np. wymiana szybki, baterii, złącza) Twoje dane pozostają nienaruszone. Mimo to, zawsze zalecamy zrobienie kopii zapasowej (backupu) w iCloud przed oddaniem telefonu do serwisu."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo obowiązuje gwarancja na naprawę?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Na każdą wykonaną przez nas usługę serwisową oraz zamontowane części udzielamy gwarancji. Zapewniamy profesjonalne podejście i pełne wsparcie po naprawie."
        }
      }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Naprawa iPhone Warszawa - Wymiana Baterii i Wyświetlacza | iCuro Serwis iPhone"
        description="Profesjonalny serwis iPhone Warszawa. Wymiana baterii iPhone, wymiana wyświetlacza iPhone, naprawa iPhone. Szybko, tanio, gwarancja. Doświadczony serwis domowy z wysokiej jakości częściami."
        keywords="naprawa iPhone Warszawa, wymiana baterii iPhone, wymiana wyświetlacza iPhone, serwis iPhone, wymiana baterii iPhone Warszawa, wymiana wyświetlacza iPhone Warszawa, naprawa iPhone"
        canonicalUrl="/"
        schemaData={homeSchemaData}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <HomeFAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
