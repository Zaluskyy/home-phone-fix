import { Instagram } from "lucide-react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-icuro.png";

const quickLinks = [
  { label: "Strona główna", to: "/" },
  { label: "O nas", to: "/#about" },
  { label: "Kontakt", to: "/#contact" },
  { label: "Blog", to: "/blog" },
];

const serviceLinks = [
  { label: "Wymiana wyświetlacza", to: "/price/screen" },
  { label: "Wymiana baterii", to: "/price/battery" },
  { label: "Wymiana głośnika", to: "/price/speaker" },
  { label: "Wymiana złącza ładowania", to: "/price/chargingPort" },
  { label: "Wymiana szkiełka aparatu", to: "/price/cameraGlass" },
  { label: "Wymiana aparatu", to: "/price/camera" },
  { label: "Naprawa przycisku zasilania", to: "/price/powerButton" },
  { label: "Wymiana mikrofonu", to: "/price/microphone" },
  { label: "Wymiana korpusu", to: "/price/housing" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={logo} alt="iCuro Logo" className="h-8 w-8" />
              <span className="font-bold text-lg">iCuro</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Profesjonalny serwis iPhone w Warszawie. Szybkie naprawy z gwarancją jakości.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <FaTiktok size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Na skróty">
            <h3 className="font-semibold mb-4">Na skróty</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Nasze Usługi">
            <h3 className="font-semibold mb-4">Nasze Usługi</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Dane Kontaktowe</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+48791473583" className="hover:text-primary transition-colors">+48 791 473 583</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:serwis@icuro.pl" className="hover:text-primary transition-colors">serwis@icuro.pl</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Pon-Pt: 9:00-17:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 iCuro. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
