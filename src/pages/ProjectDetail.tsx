import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Placeholder project data - will be replaced with real data later
const projectsData: Record<string, {
  title: string;
  oneLiner: string;
  stack: string[];
  context: string;
  features: string[];
  results?: { label: string; value: string }[];
  githubUrl: string;
  imageUrl?: string;
}> = {
  "1": {
    title: "NLP Sentiment Analyzer",
    oneLiner: "Real-time sentiment analysis for social media monitoring",
    stack: ["Python", "PyTorch", "Transformers", "FastAPI", "Docker"],
    context: "Les entreprises ont besoin de comprendre en temps réel ce que leurs clients disent sur les réseaux sociaux. Ce projet propose une solution scalable de monitoring de sentiment utilisant des modèles de langage state-of-the-art.",
    features: [
      "Analyse multi-langue avec support de 12 langues",
      "API REST haute performance avec latence < 100ms",
      "Dashboard temps réel avec visualisations interactives",
      "Fine-tuning automatique sur données client"
    ],
    results: [
      { label: "Accuracy", value: "94.2%" },
      { label: "Latence", value: "< 50ms" },
      { label: "Throughput", value: "10K req/s" }
    ],
    githubUrl: "https://github.com/thomasmartin",
    imageUrl: "/placeholder.svg"
  },
  "2": {
    title: "Computer Vision Pipeline",
    oneLiner: "Automated defect detection for manufacturing quality control",
    stack: ["Python", "TensorFlow", "OpenCV", "Kubernetes", "MLflow"],
    context: "L'inspection visuelle manuelle dans l'industrie manufacturière est coûteuse et sujette aux erreurs. Ce pipeline automatisé détecte les défauts avec une précision surhumaine.",
    features: [
      "Détection de défauts en temps réel sur ligne de production",
      "Transfer learning pour adaptation rapide à nouveaux produits",
      "Système de monitoring et alerting intégré",
      "Interface de labeling pour amélioration continue"
    ],
    results: [
      { label: "Recall", value: "99.1%" },
      { label: "Précision", value: "97.8%" },
      { label: "ROI", value: "340%" }
    ],
    githubUrl: "https://github.com/thomasmartin",
    imageUrl: "/placeholder.svg"
  },
  "3": {
    title: "Time Series Forecasting",
    oneLiner: "ML-powered demand forecasting for supply chain optimization",
    stack: ["Python", "Prophet", "XGBoost", "Spark", "Airflow"],
    context: "La prévision de demande est critique pour l'optimisation des stocks et la réduction des coûts logistiques. Ce système combine plusieurs approches ML pour des prédictions robustes.",
    features: [
      "Ensemble de modèles avec sélection automatique",
      "Gestion des saisonnalités multiples et événements spéciaux",
      "Pipeline automatisé avec retraining hebdomadaire",
      "Explainability des prédictions pour les équipes métier"
    ],
    results: [
      { label: "MAPE", value: "8.3%" },
      { label: "Stock-outs", value: "-45%" },
      { label: "Économies", value: "€2.1M/an" }
    ],
    githubUrl: "https://github.com/thomasmartin",
    imageUrl: "/placeholder.svg"
  },
  "4": {
    title: "Recommendation Engine",
    oneLiner: "Personalized content recommendations using deep learning",
    stack: ["Python", "PyTorch", "Redis", "PostgreSQL", "AWS"],
    context: "Les systèmes de recommandation sont essentiels pour l'engagement utilisateur. Ce moteur combine filtrage collaboratif et content-based pour des suggestions personnalisées.",
    features: [
      "Architecture hybride collaborative + content-based",
      "Real-time personalization avec mise à jour continue",
      "A/B testing framework intégré",
      "Cold-start handling pour nouveaux utilisateurs"
    ],
    results: [
      { label: "CTR", value: "+35%" },
      { label: "Engagement", value: "+52%" },
      { label: "Conversion", value: "+28%" }
    ],
    githubUrl: "https://github.com/thomasmartin",
    imageUrl: "/placeholder.svg"
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-mono text-foreground mb-4">Project not found</h1>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Home</span>
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.oneLiner}
            </p>
            
            {/* Stack badges */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="font-mono text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          {/* Screenshot/GIF Zone */}
          <section className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-video rounded-lg border border-border/50 bg-card/50 overflow-hidden relative group">
              <img 
                src={project.imageUrl} 
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground font-mono text-sm">
                  Screenshot / Demo GIF
                </span>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </section>

          {/* Context Section */}
          <section className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="text-primary">//</span> Context
            </h2>
            <p className="text-muted-foreground leading-relaxed pl-6 border-l-2 border-primary/30">
              {project.context}
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="text-primary">//</span> Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-primary font-mono mt-1">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Results Section */}
          {project.results && project.results.length > 0 && (
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-mono font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">//</span> Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.results.map((result, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm text-center group hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="text-3xl font-mono font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="gap-2 font-mono bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 mt-20">
          <div className="max-w-4xl mx-auto px-6 py-8 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              © 2024 Thomas Martin
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetail;
