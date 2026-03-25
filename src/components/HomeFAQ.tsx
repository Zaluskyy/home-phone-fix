import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Ile trwa naprawa iPhone'a?",
    answer:
      "Większość standardowych napraw, takich jak wymiana baterii czy ekranu, realizujemy od ręki, zazwyczaj w ciągu 1-2 godzin od dostarczenia urządzenia do naszego serwisu na warszawskim Mokotowie lub Pradze.",
  },
  {
    question: "Czy używacie oryginalnych części Apple?",
    answer:
      "Oferujemy wybór. Posiadamy zarówno w 100% oryginalne podzespoły, jak i sprawdzone zamienniki najwyższej jakości (Premium). Przed naprawą zawsze ustalamy z klientem najlepsze rozwiązanie dopasowane do budżetu.",
  },
  {
    question: "Czy moje dane na telefonie będą bezpieczne?",
    answer:
      "Tak, podczas standardowych napraw sprzętowych (np. wymiana szybki, baterii, złącza) Twoje dane pozostają nienaruszone. Mimo to, zawsze zalecamy zrobienie kopii zapasowej (backupu) w iCloud przed oddaniem telefonu do serwisu.",
  },
  {
    question: "Jak długo obowiązuje gwarancja na naprawę?",
    answer:
      "Na każdą wykonaną przez nas usługę serwisową oraz zamontowane części udzielamy gwarancji. Zapewniamy profesjonalne podejście i pełne wsparcie po naprawie.",
  },
];

const HomeFAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najczęściej zadawane pytania (FAQ) - Serwis iPhone Warszawa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odpowiedzi na najczęstsze pytania dotyczące naprawy iPhone w Warszawie
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
