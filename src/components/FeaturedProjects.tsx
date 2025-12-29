import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Neural Network Classifier",
    description: "Deep learning model for image classification achieving 98% accuracy on custom dataset using PyTorch and transfer learning.",
    tags: ["PyTorch", "CNN", "Computer Vision"],
    icon: "brain" as const,
  },
  {
    title: "Real-time Analytics Pipeline",
    description: "Scalable data pipeline processing 1M+ events/day with Apache Kafka and Spark for real-time ML predictions.",
    tags: ["Spark", "Kafka", "MLOps"],
    icon: "database" as const,
  },
  {
    title: "Time Series Forecasting",
    description: "LSTM-based forecasting system for financial markets with custom attention mechanisms and uncertainty quantification.",
    tags: ["TensorFlow", "LSTM", "Finance"],
    icon: "chart" as const,
  },
  {
    title: "Conversational AI Agent",
    description: "RAG-powered chatbot using LangChain and vector databases for intelligent document Q&A with 95% relevance score.",
    tags: ["LangChain", "RAG", "LLMs"],
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
              key={project.title}
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
