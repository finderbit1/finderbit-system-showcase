import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, ShoppingCart, BarChart3, Users, Package, Star, ExternalLink, Play } from "lucide-react";
import systemMockup1 from "@/assets/system-mockup-1.jpg";
import systemMockup2 from "@/assets/system-mockup-2.jpg";
import systemMockup3 from "@/assets/system-mockup-3.jpg";

const systems = [
  {
    id: 1,
    name: "Sistema de E-commerce Avançado",
    category: "Vendas",
    description: "Plataforma completa de vendas online com gestão de produtos, pagamentos e analytics.",
    image: systemMockup2,
    rating: 4.9,
    features: [
      "Catálogo de produtos",
      "Carrinho inteligente",
      "Gateway de pagamento",
      "Gestão de estoque",
      "Analytics de vendas",
      "Sistema de cupons"
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    testimonial: "Aumentamos nossas vendas em 150% após implementar o sistema.",
    client: "TechStore Brasil"
  },
  {
    id: 2,
    name: "Dashboard de Gestão Empresarial",
    category: "Gestão",
    description: "ERP completo para gestão de recursos empresariais, financeiro e recursos humanos.",
    image: systemMockup1,
    rating: 4.8,
    features: [
      "Gestão financeira",
      "Controle de RH",
      "Relatórios avançados",
      "Fluxo de caixa",
      "Gestão de projetos",
      "Controle de ponto"
    ],
    technologies: ["Vue.js", "Python", "MongoDB"],
    testimonial: "Organizou completamente nossa gestão interna e aumentou nossa produtividade.",
    client: "Empresa Alpha Ltda"
  },
  {
    id: 3,
    name: "Sistema de Controle de Estoque",
    category: "Logística",
    description: "Solução completa para gerenciamento de inventário, controle de produtos e relatórios.",
    image: systemMockup3,
    rating: 4.7,
    features: [
      "Controle de entrada/saída",
      "Código de barras",
      "Alertas de estoque baixo",
      "Relatórios de movimento",
      "Múltiplos depósitos",
      "Integração com vendas"
    ],
    technologies: ["React", "Django", "PostgreSQL"],
    testimonial: "Reduzimos perdas em 80% e otimizamos todo nosso processo logístico.",
    client: "LogiMax Distribuidora"
  },
  {
    id: 4,
    name: "CRM de Relacionamento",
    category: "Vendas",
    description: "Gestão completa de relacionamento com clientes e pipeline de vendas.",
    image: systemMockup1,
    rating: 4.9,
    features: [
      "Pipeline de vendas",
      "Histórico de clientes",
      "Automação de marketing",
      "Relatórios de performance",
      "Integração com email",
      "Dashboard executivo"
    ],
    technologies: ["Angular", "FastAPI", "Redis"],
    testimonial: "Nossa taxa de conversão aumentou 200% com o novo CRM.",
    client: "SalesForce Pro"
  },
  {
    id: 5,
    name: "Sistema Financeiro",
    category: "Financeiro",
    description: "Controle financeiro completo com fluxo de caixa, relatórios e análises.",
    image: systemMockup2,
    rating: 4.6,
    features: [
      "Fluxo de caixa",
      "Contas a pagar/receber",
      "Relatórios financeiros",
      "Controle de despesas",
      "Planejamento orçamentário",
      "Análise de rentabilidade"
    ],
    technologies: ["React", "Python", "PostgreSQL"],
    testimonial: "Temos controle total sobre nossas finanças agora.",
    client: "FinanceMax"
  },
  {
    id: 6,
    name: "Portal de Gestão de Projetos",
    category: "Gestão",
    description: "Gerenciamento ágil de projetos com timeline, tarefas e colaboração em equipe.",
    image: systemMockup3,
    rating: 4.8,
    features: [
      "Kanban boards",
      "Timeline de projetos",
      "Gestão de tarefas",
      "Colaboração em equipe",
      "Relatórios de progresso",
      "Integração com calendário"
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    testimonial: "Melhoramos nossa entrega de projetos em 60%.",
    client: "ProjectWorks"
  }
];

const categories = ["Todos", "Vendas", "Gestão", "Financeiro", "Logística"];

const SystemsCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSystem, setSelectedSystem] = useState(null);

  const filteredSystems = systems.filter(system => {
    const matchesSearch = system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || system.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Vendas": return <ShoppingCart className="w-4 h-4" />;
      case "Gestão": return <BarChart3 className="w-4 h-4" />;
      case "Financeiro": return <Package className="w-4 h-4" />;
      case "Logística": return <Package className="w-4 h-4" />;
      default: return <BarChart3 className="w-4 h-4" />;
    }
  };

  return (
    <section id="sistemas" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Package className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Catálogo de Sistemas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Nossos Sistemas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossa seleção de sistemas desenvolvidos para otimizar diferentes áreas do seu negócio.
            Cada solução é pensada para entregar resultados excepcionais.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 animate-slide-up">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Buscar sistemas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSystems.map((system, index) => (
            <Card 
              key={system.id} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={system.image} 
                  alt={system.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {getCategoryIcon(system.category)}
                    <span className="ml-1">{system.category}</span>
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">{system.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                  {system.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {system.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {system.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {system.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                  {system.features.length > 3 && (
                    <p className="text-sm text-muted-foreground">
                      +{system.features.length - 3} funcionalidades
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex-1 group-hover:border-primary/50 transition-colors"
                      onClick={() => setSelectedSystem(system)}
                    >
                      Ver Mais
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-display">{system.name}</DialogTitle>
                      <DialogDescription className="text-lg">
                        {system.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                      <div>
                        <img 
                          src={system.image} 
                          alt={system.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Funcionalidades Principais</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {system.features.map((feature) => (
                              <div key={feature} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Tecnologias</h4>
                          <div className="flex flex-wrap gap-2">
                            {system.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Depoimento do Cliente</h4>
                          <p className="text-sm italic mb-2">"{system.testimonial}"</p>
                          <p className="text-sm font-medium text-primary">- {system.client}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-6">
                      <Button className="flex-1 glow-effect">
                        <Play className="w-4 h-4 mr-2" />
                        Solicitar Demonstração
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Falar com Especialista
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button className="flex-1 glow-effect group-hover:shadow-glow transition-all">
                  <Play className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredSystems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nenhum sistema encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar seus filtros ou termo de busca
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SystemsCatalog;