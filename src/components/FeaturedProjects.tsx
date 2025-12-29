import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "1",
    title: "NLP Sentiment Analyzer",
    description: "Real-time sentiment analysis for social media monitoring using transformer models and FastAPI.",
    tags: ["PyTorch", "Transformers", "FastAPI"],
    icon: "brain" as const,
  },
  {
    id: "2",
    title: "Computer Vision Pipeline",
    description: "Automated defect detection for manufacturing quality control with 99% recall rate.",
    tags: ["TensorFlow", "OpenCV", "MLflow"],
    icon: "database" as const,
  },
  {
    id: "3",
    title: "Time Series Forecasting",
    description: "ML-powered demand forecasting for supply chain optimization reducing stock-outs by 45%.",
    tags: ["Prophet", "XGBoost", "Airflow"],
    icon: "chart" as const,
  },
  {
    id: "4",
    title: "Recommendation Engine",
    description: "Personalized content recommendations using hybrid deep learning approach with +35% CTR.",
    tags: ["PyTorch", "Redis", "AWS"],
    icon: "bot" as const,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="px-6 py-20" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-sm text-primary mb-4 tracking-wider">
            {"// PORTFOLIO"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work in machine learning, data engineering, and AI research.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              icon={project.icon}
              index={index}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary link-underline transition-colors"
          >
            View all projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
