import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-bold">
              📱
            </div>
            <span className="font-bold">iCuro</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 iCuro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
