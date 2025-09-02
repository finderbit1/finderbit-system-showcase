import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, CheckCircle, Clock } from "lucide-react";
import systemMockup1 from "@/assets/system-mockup-1.jpg";
import systemMockup2 from "@/assets/system-mockup-2.jpg";
import systemMockup3 from "@/assets/system-mockup-3.jpg";

const projects = [
  {
    id: 1,
    title: "E-commerce Avançado",
    description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e analytics.",
    image: systemMockup2,
    status: "Concluído",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Stripe"],
    features: [
      "Sistema de pagamentos integrado",
      "Gestão completa de produtos",
      "Dashboard de analytics",
      "Sistema de cupons e promoções",
      "Notificações em tempo real"
    ],
    results: [
      "150% de aumento nas vendas",
      "80% redução no tempo de checkout",
      "95% de satisfação dos usuários"
    ],
    timeline: "4 meses",
    client: "TechStore Brasil"
  },
  {
    id: 2,
    title: "Sistema de Gestão Empresarial",
    description: "ERP personalizado para gestão completa de recursos empresariais, financeiro e RH.",
    image: systemMockup1,
    status: "Em Desenvolvimento",
    technologies: ["Flutter", "FastAPI", "PostgreSQL", "Redis"],
    features: [
      "Gestão de recursos humanos",
      "Controle financeiro avançado",
      "Módulo de projetos",
      "Relatórios executivos",
      "Sistema de aprovações"
    ],
    results: [
      "40% redução no tempo de processos",
      "100% digitalização de workflows",
      "60% melhoria na produtividade"
    ],
    timeline: "6 meses",
    client: "Empresa Alpha Ltda"
  },
  {
    id: 3,
    title: "Landing Page Conversão",
    description: "Landing page otimizada para conversão com A/B testing e analytics avançados.",
    image: systemMockup3,
    status: "Concluído",
    technologies: ["React", "TypeScript", "Tailwind", "Analytics"],
    features: [
      "Design responsivo otimizado",
      "A/B testing integrado",
      "Formulários inteligentes",
      "Analytics em tempo real",
      "SEO avançado"
    ],
    results: [
      "300% aumento na conversão",
      "50% redução na taxa de rejeição",
      "200% aumento em leads qualificados"
    ],
    timeline: "2 meses",
    client: "Marketing Pro"
  }
];

const Portfolio = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Concluído":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Em Desenvolvimento":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Concluído":
        return <CheckCircle className="w-4 h-4" />;
      case "Em Desenvolvimento":
        return <Clock className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <ExternalLink className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Nosso Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Projetos que</span>
            <br />
            <span className="text-foreground">Transformaram Negócios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes e os resultados 
            excepcionais que alcançamos juntos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} flex items-center gap-1`}>
                      {getStatusIcon(project.status)}
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.timeline}
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                    <p className="text-sm font-medium text-primary mt-2">
                      Cliente: {project.client}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Tecnologias Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-background/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Principais Funcionalidades</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {project.features.length > 3 && (
                          <p className="text-sm text-muted-foreground ml-5">
                            +{project.features.length - 3} funcionalidades
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Resultados Alcançados</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.results.map((result) => (
                          <div key={result} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" className="flex-1">
                        Ver Projeto
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-gradient-dark rounded-2xl p-8 md:p-12 card-elegant animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Seu projeto pode ser o próximo case de sucesso
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Que tal discutirmos como podemos transformar sua ideia em uma solução digital 
            que gere resultados excepcionais para seu negócio?
          </p>
          <Button size="lg" className="glow-effect px-8">
            Iniciar Meu Projeto
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;