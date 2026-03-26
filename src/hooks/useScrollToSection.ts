import { useNavigate, useLocation } from "react-router-dom";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Zmieniłem nazwę argumentu z 'id' na 'pathOrId', żeby lepiej oddawała to, co robi
  const scrollToSection = (pathOrId: string, onBeforeScroll?: () => void) => {
    // Wywołaj dodatkową funkcję, jeśli została przekazana (np. zamknięcie menu)
    if (onBeforeScroll) {
      onBeforeScroll();
    }

    // NOWOŚĆ: Jeśli zaczyna się od "/", potraktuj to jako zwykły link do podstrony
    if (pathOrId.startsWith("/")) {
      navigate(pathOrId);
      // Opcjonalnie: warto dodać przewinięcie na samą górę strony przy zmianie zakładki
      window.scrollTo({ top: 0, behavior: "smooth" }); 
      return; // Przerywamy działanie funkcji, żeby nie szukała ID na nowej stronie
    }

    // LOGIKA DLA SEKCJI (ID)
    if (location.pathname === "/") {
      // Jesteśmy na stronie głównej, po prostu przewiń
      const element = document.getElementById(pathOrId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Jesteśmy na podstronie, najpierw wracamy na stronę główną
      navigate("/");
      // Czekamy chwilę na wyrenderowanie DOM i przewijamy
      setTimeout(() => {
        const element = document.getElementById(pathOrId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return scrollToSection;
};