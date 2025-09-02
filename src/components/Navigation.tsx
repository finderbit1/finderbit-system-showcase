import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FB</span>
            </div>
            <span className="text-xl font-display font-bold text-gradient">
              Finderbit
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-smooth">
              Serviços
            </a>
            <a href="#sistemas" className="text-foreground hover:text-primary transition-smooth">
              Sistemas
            </a>
            <a href="#tecnologias" className="text-foreground hover:text-primary transition-smooth">
              Tecnologias
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">
              Portfolio
            </a>
            <Button variant="default" className="glow-effect">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#inicio"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#sistemas"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Sistemas
              </a>
              <a
                href="#tecnologias"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Tecnologias
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full glow-effect">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;