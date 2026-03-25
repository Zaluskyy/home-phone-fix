export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSeoContent {
  intro: string;
  whyUs: string[];
  processSteps: { title: string; description: string }[];
  faqs: ServiceFAQ[];
}

export const serviceSeoContent: Record<string, ServiceSeoContent> = {
  screen: {
    intro:
      "Pęknięty lub uszkodzony wyświetlacz iPhone to jeden z najczęstszych problemów, z którymi zgłaszają się do nas klienci w Warszawie. Nawet drobne rysy mogą z czasem prowadzić do poważniejszych uszkodzeń — od problemów z dotykiem po całkowitą utratę obrazu. W naszym serwisie iPhone w Warszawie oferujemy profesjonalną wymianę wyświetlacza iPhone z wykorzystaniem oryginalnych części Apple oraz wysokiej jakości zamienników. Naprawa ekranu iPhone trwa zazwyczaj od 30 do 60 minut, a Twoje dane pozostają nienaruszone.",
    whyUs: [
      "Ekspresowa wymiana wyświetlacza iPhone — najczęściej w ciągu 30–60 minut",
      "Oryginalne ekrany Apple oraz certyfikowane zamienniki najwyższej jakości",
      "Gwarancja na każdą naprawę ekranu iPhone — nawet do 12 miesięcy",
      "Profesjonalny serwis Apple w Warszawie z wieloletnim doświadczeniem",
    ],
    processSteps: [
      { title: "Diagnoza", description: "Dokładna ocena uszkodzenia wyświetlacza i bezpłatna wycena naprawy iPhone." },
      { title: "Wymiana ekranu", description: "Precyzyjna wymiana wyświetlacza iPhone na oryginalną część lub wysokiej jakości zamiennik." },
      { title: "Testy jakości", description: "Kompleksowe testy dotyku, kolorów i jasności ekranu przed oddaniem urządzenia." },
    ],
    faqs: [
      { question: "Czy wymiana wyświetlacza iPhone jest bezpieczna dla moich danych?", answer: "Tak, wymiana ekranu iPhone nie wpływa na dane zapisane w telefonie. Twoje zdjęcia, kontakty i aplikacje pozostaną nienaruszone." },
      { question: "Ile trwa wymiana wyświetlacza iPhone w Warszawie?", answer: "W naszym serwisie iPhone w Warszawie wymiana wyświetlacza trwa zazwyczaj od 30 do 60 minut, w zależności od modelu." },
      { question: "Jaka jest różnica między oryginalnym ekranem a zamiennikiem?", answer: "Oryginalny wyświetlacz Apple zapewnia najwyższą jakość kolorów i dotyku. Zamienniki premium oferują bardzo zbliżoną jakość w niższej cenie." },
    ],
  },

  battery: {
    intro:
      "Słaba bateria w iPhone to problem, który dotyka praktycznie każdego użytkownika po 2–3 latach użytkowania. Jeśli Twój iPhone wyłącza się przy 20% naładowania, szybko się rozładowuje lub przegrzewa, to znak, że pora na wymianę baterii iPhone. W naszym serwisie iPhone w Warszawie wymieniamy baterie na oryginalne ogniwa Apple oraz certyfikowane zamienniki, przywracając Twojemu telefonowi pełną wydajność i żywotność.",
    whyUs: [
      "Szybka wymiana baterii iPhone — zazwyczaj w ciągu 30 minut",
      "Oryginalne baterie Apple i certyfikowane zamienniki o pełnej pojemności",
      "Gwarancja na wymianę baterii iPhone — spokój na wiele miesięcy",
      "Profesjonalna naprawa iPhone Warszawa bez utraty danych",
    ],
    processSteps: [
      { title: "Diagnoza baterii", description: "Sprawdzenie kondycji baterii iPhone i potwierdzenie konieczności wymiany." },
      { title: "Wymiana baterii", description: "Bezpieczna wymiana baterii iPhone na nowe, oryginalne ogniwo lub certyfikowany zamiennik." },
      { title: "Kalibracja i testy", description: "Kalibracja nowej baterii i testy wydajności, aby zapewnić optymalną żywotność." },
    ],
    faqs: [
      { question: "Czy stracę dane podczas wymiany baterii iPhone?", answer: "Nie, wymiana baterii iPhone nie wpływa na Twoje dane. Wszystkie pliki, zdjęcia i ustawienia pozostaną na miejscu." },
      { question: "Jak często trzeba wymieniać baterię w iPhone?", answer: "Apple zaleca wymianę baterii, gdy jej kondycja spada poniżej 80%. Zazwyczaj następuje to po 2–3 latach intensywnego użytkowania." },
      { question: "Ile kosztuje wymiana baterii iPhone w Warszawie?", answer: "Ceny wymiany baterii iPhone w naszym serwisie w Warszawie zależą od modelu — szczegółowy cennik znajdziesz w tabeli powyżej." },
    ],
  },

  speaker: {
    intro:
      "Problemy z dźwiękiem w iPhone — przyciszony głośnik, trzeszczenie podczas rozmów czy brak dźwięku przy odtwarzaniu muzyki — mogą skutecznie utrudnić codzienne korzystanie z telefonu. W naszym serwisie iPhone w Warszawie oferujemy profesjonalną wymianę głośnika iPhone, zarówno głośnika rozmów (słuchawkowego), jak i głośnika multimedialnego. Naprawa przywraca pełną jakość dźwięku w Twoim iPhonie.",
    whyUs: [
      "Profesjonalna wymiana głośnika iPhone w Warszawie — szybko i skutecznie",
      "Części najwyższej jakości zapewniające krystalicznie czysty dźwięk",
      "Gwarancja na naprawę głośnika iPhone",
      "Doświadczony serwis Apple Warszawa z setkami zadowolonych klientów",
    ],
    processSteps: [
      { title: "Diagnoza dźwięku", description: "Precyzyjna diagnostyka problemu z głośnikiem iPhone — identyfikacja uszkodzonego komponentu." },
      { title: "Wymiana głośnika", description: "Wymiana wadliwego głośnika iPhone na nowy, w pełni kompatybilny komponent." },
      { title: "Test dźwięku", description: "Kompleksowe testy jakości dźwięku — rozmowy, multimedia i dzwonki." },
    ],
    faqs: [
      { question: "Dlaczego głośnik w moim iPhone jest cichy?", answer: "Przyciszony dźwięk może wynikać z zużycia głośnika, zanieczyszczenia siatki ochronnej lub uszkodzenia wewnętrznego. Diagnoza w naszym serwisie pozwoli ustalić przyczynę." },
      { question: "Ile trwa wymiana głośnika iPhone?", answer: "Wymiana głośnika iPhone w naszym serwisie w Warszawie trwa zazwyczaj około 30–45 minut." },
    ],
  },

  chargingPort: {
    intro:
      "Uszkodzone złącze ładowania iPhone to problem, który uniemożliwia prawidłowe ładowanie telefonu i przesyłanie danych przez kabel. Jeśli kabel Lightning lub USB-C nie trzyma się stabilnie, ładowanie jest przerywane lub telefon w ogóle się nie ładuje, konieczna może być wymiana złącza ładowania iPhone. W naszym serwisie iPhone w Warszawie przeprowadzamy tę naprawę szybko i profesjonalnie.",
    whyUs: [
      "Szybka wymiana złącza ładowania iPhone — nawet w ciągu 45 minut",
      "Oryginalne i certyfikowane porty ładowania najwyższej jakości",
      "Gwarancja na naprawę gniazda ładowania iPhone",
      "Profesjonalny serwis iPhone Warszawa — naprawa bez utraty danych",
    ],
    processSteps: [
      { title: "Diagnoza portu", description: "Sprawdzenie stanu złącza ładowania iPhone i wykluczenie innych przyczyn problemu." },
      { title: "Wymiana złącza", description: "Precyzyjna wymiana uszkodzonego portu ładowania na nowy komponent." },
      { title: "Testy ładowania", description: "Weryfikacja poprawności ładowania, transmisji danych i stabilności połączenia." },
    ],
    faqs: [
      { question: "Skąd wiem, że to złącze ładowania jest uszkodzone?", answer: "Typowe objawy to: kabel nie trzyma się w gnieździe, przerywane ładowanie, brak reakcji na podłączenie kabla lub problemy z transferem danych." },
      { question: "Czy wymiana złącza ładowania wpływa na wodoodporność iPhone?", answer: "Nasz serwis dba o zachowanie jak najwyższego poziomu uszczelnienia po naprawie, jednak pełna wodoodporność fabryczna nie może być w 100% zagwarantowana po każdej naprawie." },
    ],
  },

  cameraGlass: {
    intro:
      "Pęknięta szybka aparatu iPhone to nie tylko kwestia estetyczna — uszkodzone szkiełko kamery wpływa negatywnie na jakość zdjęć i filmów, powodując rozmycie, flary i smugi na fotografiach. W naszym serwisie iPhone w Warszawie oferujemy szybką wymianę szybki aparatu iPhone, przywracając pełną ostrość i klarowność Twojego aparatu.",
    whyUs: [
      "Ekspresowa wymiana szybki aparatu iPhone — zazwyczaj do 30 minut",
      "Szybki z hartowanego szkła identyczne z oryginalnymi",
      "Gwarancja na wymianę szkiełka kamery iPhone",
      "Serwis iPhone Warszawa z precyzyjnym montażem i dbałością o detale",
    ],
    processSteps: [
      { title: "Ocena uszkodzenia", description: "Dokładna ocena pęknięcia szybki aparatu i sprawdzenie stanu samego obiektywu kamery." },
      { title: "Wymiana szybki", description: "Precyzyjna wymiana uszkodzonego szkiełka aparatu iPhone na nowe." },
      { title: "Test aparatu", description: "Weryfikacja jakości zdjęć i filmów po wymianie szybki kamery." },
    ],
    faqs: [
      { question: "Czy pęknięta szybka aparatu wpływa na jakość zdjęć?", answer: "Tak, nawet drobne pęknięcie szybki kamery iPhone może powodować rozmycie zdjęć, flary świetlne i smugi na fotografiach." },
      { question: "Czy wymiana szybki aparatu jest skomplikowana?", answer: "W profesjonalnym serwisie iPhone jest to stosunkowo szybka naprawa, trwająca zazwyczaj do 30 minut." },
    ],
  },

  camera: {
    intro:
      "Aparat to jedna z najważniejszych funkcji iPhone'a. Jeśli Twój aparat przedni lub tylny przestał działać, robi rozmyte zdjęcia, ma problem z autofokusem lub wyświetla czarny ekran, konieczna może być wymiana aparatu iPhone. Nasz serwis iPhone w Warszawie specjalizuje się w profesjonalnej wymianie kamer iPhone — zarówno przednich (FaceTime), jak i tylnych — przywracając pełną funkcjonalność aparatu.",
    whyUs: [
      "Profesjonalna wymiana aparatu iPhone — przednia i tylna kamera",
      "Wysokiej jakości moduły kamer zapewniające ostrość i naturalne kolory",
      "Gwarancja na wymianę kamery iPhone",
      "Doświadczony serwis Apple w Warszawie — naprawa iPhone szybko i skutecznie",
    ],
    processSteps: [
      { title: "Diagnostyka kamery", description: "Precyzyjna diagnostyka modułu aparatu iPhone — identyfikacja uszkodzonego elementu." },
      { title: "Wymiana aparatu", description: "Wymiana wadliwego modułu kamery iPhone na nowy, w pełni kompatybilny komponent." },
      { title: "Testy fotograficzne", description: "Sprawdzenie autofokusu, stabilizacji obrazu, jakości zdjęć i nagrań wideo." },
    ],
    faqs: [
      { question: "Dlaczego aparat w moim iPhone robi rozmyte zdjęcia?", answer: "Rozmyte zdjęcia mogą wynikać z uszkodzenia modułu kamery, problemów z autofokusem lub uszkodzenia szybki aparatu. Diagnoza w naszym serwisie pozwoli ustalić dokładną przyczynę." },
      { question: "Czy wymiana aparatu iPhone wpływa na Face ID?", answer: "Wymiana tylnego aparatu nie wpływa na Face ID. Przy wymianie przedniego aparatu (kamery TrueDepth) zachowujemy pełną funkcjonalność Face ID." },
    ],
  },

  powerButton: {
    intro:
      "Uszkodzony przycisk zasilania iPhone to problem, który utrudnia podstawowe korzystanie z telefonu — od włączania i wyłączania ekranu po restartowanie urządzenia. Jeśli przycisk power nie reaguje, jest zablokowany lub wymaga silnego nacisku, nasz serwis iPhone w Warszawie przeprowadzi szybką i profesjonalną naprawę przycisku zasilania iPhone, przywracając pełen komfort użytkowania.",
    whyUs: [
      "Szybka naprawa przycisku zasilania iPhone — zazwyczaj w ciągu 45 minut",
      "Oryginalne komponenty i precyzyjny montaż",
      "Gwarancja na naprawę przycisku power iPhone",
      "Profesjonalny serwis iPhone Warszawa z doświadczeniem w naprawach mechanicznych",
    ],
    processSteps: [
      { title: "Diagnoza przycisku", description: "Ocena stanu przycisku zasilania iPhone — czy wymaga wymiany całego modułu czy naprawy mechanicznej." },
      { title: "Naprawa / wymiana", description: "Precyzyjna naprawa lub wymiana modułu przycisku power iPhone." },
      { title: "Testy funkcjonalne", description: "Weryfikacja poprawności działania przycisku zasilania — włączanie, wyłączanie i blokowanie ekranu." },
    ],
    faqs: [
      { question: "Czy naprawa przycisku zasilania wpływa na Face ID?", answer: "Nie, naprawa przycisku power iPhone nie wpływa na działanie Face ID ani Touch ID." },
      { question: "Czy mogę korzystać z iPhone bez działającego przycisku zasilania?", answer: "Tymczasowo można używać funkcji AssistiveTouch, ale zalecamy jak najszybszą naprawę przycisku zasilania dla pełnego komfortu użytkowania." },
    ],
  },

  microphone: {
    intro:
      "Problemy z mikrofonem iPhone — przyciszony głos podczas rozmów, brak rejestracji dźwięku przy nagrywaniu filmów czy niedziałający głośnik na speakerphonie — mogą poważnie utrudnić codzienne korzystanie z telefonu. W naszym serwisie iPhone w Warszawie oferujemy profesjonalną wymianę mikrofonu iPhone, przywracając pełną jakość dźwięku podczas rozmów i nagrań.",
    whyUs: [
      "Profesjonalna wymiana mikrofonu iPhone w Warszawie",
      "Wysokiej jakości mikrofony zapewniające czysty i głośny dźwięk",
      "Gwarancja na wymianę mikrofonu iPhone",
      "Naprawa iPhone Warszawa z szybką realizacją — zazwyczaj tego samego dnia",
    ],
    processSteps: [
      { title: "Diagnostyka mikrofonu", description: "Test mikrofonu iPhone — identyfikacja uszkodzonego mikrofonu (główny, dodatkowy lub mikrofon FaceTime)." },
      { title: "Wymiana mikrofonu", description: "Wymiana wadliwego mikrofonu iPhone na nowy, w pełni kompatybilny komponent." },
      { title: "Testy dźwięku", description: "Weryfikacja jakości dźwięku — rozmowy telefoniczne, nagrywanie wideo i dyktafon." },
    ],
    faqs: [
      { question: "Dlaczego rozmówcy nie słyszą mnie podczas rozmów?", answer: "Problem może wynikać z uszkodzenia mikrofonu głównego, zablokowania otworu mikrofonowego lub usterki oprogramowania. Diagnoza w naszym serwisie pomoże ustalić przyczynę." },
      { question: "Ile mikrofonów ma iPhone?", answer: "Większość modeli iPhone posiada 3–4 mikrofony: główny (dolny), dodatkowy (przy aparacie tylnym) i mikrofon FaceTime (przedni). Każdy można wymienić osobno." },
    ],
  },

  housing: {
    intro:
      "Uszkodzony korpus iPhone — wgniecenia, głębokie rysy, pęknięcia obudowy czy pogięty frame — to nie tylko kwestia estetyki, ale może również wpływać na wodoodporność i integralność urządzenia. W naszym serwisie iPhone w Warszawie oferujemy profesjonalną wymianę korpusu iPhone, przywracając Twojemu telefonowi fabryczny wygląd i pełną ochronę wewnętrznych komponentów.",
    whyUs: [
      "Kompleksowa wymiana korpusu iPhone — przywrócenie fabrycznego wyglądu",
      "Obudowy najwyższej jakości w pełnej gamie kolorów",
      "Gwarancja na wymianę obudowy iPhone",
      "Serwis iPhone Warszawa z precyzyjnym montażem wszystkich komponentów wewnętrznych",
    ],
    processSteps: [
      { title: "Ocena uszkodzeń", description: "Dokładna ocena stanu obudowy iPhone i planowanie procesu wymiany korpusu." },
      { title: "Wymiana korpusu", description: "Przeniesienie wszystkich komponentów wewnętrznych do nowego korpusu iPhone." },
      { title: "Montaż i testy", description: "Precyzyjny montaż i kompleksowe testy wszystkich funkcji urządzenia po wymianie obudowy." },
    ],
    faqs: [
      { question: "Czy wymiana korpusu iPhone jest bezpieczna dla komponentów wewnętrznych?", answer: "Tak, w profesjonalnym serwisie wszystkie komponenty wewnętrzne są ostrożnie przenoszone do nowej obudowy z zachowaniem pełnej funkcjonalności." },
      { question: "Czy mogę zmienić kolor obudowy iPhone podczas wymiany korpusu?", answer: "Tak, oferujemy obudowy iPhone w pełnej gamie kolorów — możesz wybrać nowy kolor podczas wymiany korpusu." },
      { question: "Ile trwa wymiana korpusu iPhone?", answer: "Wymiana obudowy iPhone to bardziej złożona naprawa, trwająca zazwyczaj 2–4 godziny, ponieważ wymaga przeniesienia wszystkich komponentów wewnętrznych." },
    ],
  },
};
