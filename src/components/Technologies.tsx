import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Server, Database, Cloud, Globe } from "lucide-react";

const techStacks = [
  {
    category: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-purple-600",
    technologies: [
      { name: "React", description: "Biblioteca JavaScript para interfaces" },
      { name: "TypeScript", description: "JavaScript com tipagem estática" },
      { name: "Tailwind CSS", description: "Framework CSS utilitário" },
      { name: "Next.js", description: "Framework React full-stack" },
      { name: "Vue.js", description: "Framework JavaScript progressivo" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-teal-600",
    technologies: [
      { name: "Python", description: "Linguagem versátil e poderosa" },
      { name: "Django", description: "Framework web Python completo" },
      { name: "FastAPI", description: "Framework Python moderno e rápido" },
      { name: "Node.js", description: "Runtime JavaScript server-side" },
      { name: "Express", description: "Framework web minimalista para Node.js" }
    ]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-purple-500 to-pink-600",
    technologies: [
      { name: "Flutter", description: "Framework multiplataforma Google" },
      { name: "React Native", description: "Apps nativos com React" },
      { name: "Dart", description: "Linguagem otimizada para Flutter" },
      { name: "Kotlin", description: "Linguagem moderna para Android" },
      { name: "Swift", description: "Linguagem nativa para iOS" }
    ]
  },
  {
    category: "Database",
    icon: Database,
    color: "from-orange-500 to-red-600",
    technologies: [
      { name: "PostgreSQL", description: "Banco relacional avançado" },
      { name: "MongoDB", description: "Banco de dados NoSQL" },
      { name: "Redis", description: "Cache e estrutura de dados" },
      { name: "MySQL", description: "Sistema de gerenciamento de BD" },
      { name: "SQLite", description: "Banco de dados leve e eficiente" }
    ]
  }
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Code className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Stack Tecnológico</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Tecnologias Modernas</span>
            <br />
            <span className="text-foreground">e Eficientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos as tecnologias mais modernas e eficientes do mercado para criar 
            soluções robustas e escaláveis para seu negócio.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {techStacks.map((stack, index) => (
            <Card 
              key={stack.category} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center group-hover:animate-glow transition-all`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {stack.category}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-foreground">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Message */}
        <div className="text-center bg-gradient-dark rounded-2xl p-8 md:p-12 card-elegant animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Cloud className="w-8 h-8 text-primary" />
              <Code className="w-8 h-8 text-primary" />
              <Database className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Combinamos essas tecnologias para criar
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Soluções robustas e escaláveis que crescem junto com seu negócio, 
            garantindo performance e confiabilidade.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/10 border-primary/30">
              Alta Performance
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/10 border-primary/30">
              Escalabilidade
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/10 border-primary/30">
              Segurança
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/10 border-primary/30">
              Manutenibilidade
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;