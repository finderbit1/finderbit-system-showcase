import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Code, MessageSquare, Package, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para capturar leads e aumentar suas vendas.",
    features: [
      "Design responsivo e moderno",
      "Otimização para conversão",
      "Integração com analytics",
      "A/B Testing",
      "SEO otimizado"
    ],
    price: "A partir de R$ 2.500"
  },
  {
    icon: Code,
    title: "Sistemas Personalizados",
    description: "Desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio.",
    features: [
      "Arquitetura escalável",
      "Interface intuitiva",
      "Integração com APIs",
      "Banco de dados otimizado",
      "Suporte e manutenção"
    ],
    price: "Orçamento personalizado"
  },
  {
    icon: MessageSquare,
    title: "Consultoria Técnica",
    description: "Orientação especializada para escolher as melhores tecnologias e arquiteturas para seus projetos.",
    features: [
      "Análise de requisitos",
      "Recomendação de tecnologias",
      "Arquitetura de sistemas",
      "Code review",
      "Mentoria técnica"
    ],
    price: "R$ 150/hora"
  },
  {
    icon: Package,
    title: "Sistema de Estoque",
    description: "Soluções completas para gerenciamento de inventário, controle de produtos e relatórios.",
    features: [
      "Controle de entrada/saída",
      "Relatórios detalhados",
      "Alertas automáticos",
      "Código de barras",
      "Múltiplos depósitos"
    ],
    price: "A partir de R$ 5.000"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Code className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Soluções Completas</span>
            <br />
            <span className="text-foreground">para seu Negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento de software para impulsionar seu negócio
            com tecnologias modernas e eficientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow transition-all">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-sm font-semibold text-primary mt-1">
                      {service.price}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary/50 group-hover:bg-primary/5 transition-all"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-dark rounded-2xl p-8 md:p-12 card-elegant animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Pronto para transformar sua ideia em realidade?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer 
            com soluções digitais sob medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect px-8">
              Fale com um Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Ver Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;