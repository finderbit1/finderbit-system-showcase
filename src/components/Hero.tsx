import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Target } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-teal/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 z-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-secondary/20 border border-primary/30 rounded-full mb-8 animate-glow">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Soluções Digitais de Alta Performance</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-gradient">Finderbit</span>
            <br />
            <span className="text-foreground">Bit a bit, solução por solução</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos landing pages, sistemas personalizados e oferecemos consultoria técnica. 
            Transformamos suas ideias em soluções digitais eficientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group glow-effect px-8 py-6 text-lg font-semibold transition-bounce hover:scale-105"
            >
              Fale com um especialista
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-primary/30 hover:bg-primary/10 transition-smooth"
            >
              Nossos serviços
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 card-elegant animate-slide-up">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Desenvolvimento Personalizado</h3>
              <p className="text-muted-foreground text-center">Sistemas sob medida para seu negócio</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 card-elegant animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Foco em Resultados</h3>
              <p className="text-muted-foreground text-center">Soluções que impulsionam seu crescimento</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 card-elegant animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Tecnologias Modernas</h3>
              <p className="text-muted-foreground text-center">Stack atualizado e eficiente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;