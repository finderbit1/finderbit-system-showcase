import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">FB</span>
                </div>
                <span className="text-xl font-display font-bold text-gradient">
                  Finderbit
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvemos soluções digitais personalizadas que transformam ideias em 
                realidade. Bit a bit, solução por solução.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="p-2">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                    Sistemas Personalizados
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                    Consultoria Técnica
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                    Sistema de Estoque
                  </a>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold">Tecnologias</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">React & TypeScript</li>
                <li className="text-muted-foreground">Python & Django</li>
                <li className="text-muted-foreground">Flutter & Dart</li>
                <li className="text-muted-foreground">PostgreSQL & MongoDB</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold">Contato</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contato@finderbit.com.br</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="text-center max-w-md mx-auto">
            <h4 className="font-display font-semibold mb-2">Fique por dentro das novidades</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Receba dicas, novidades e insights sobre desenvolvimento em sua caixa de entrada.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Seu melhor e-mail" 
                className="flex-1 bg-background/50 border-border/50"
              />
              <Button size="sm" className="px-4">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2024 Finderbit. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;