import { Link } from "react-router-dom";
import { ArrowUpRight, Brain, Database, LineChart, Bot } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: "brain" | "database" | "chart" | "bot";
  index: number;
}

const iconMap = {
  brain: Brain,
  database: Database,
  chart: LineChart,
  bot: Bot,
};

const ProjectCard = ({ id, title, description, tags, icon, index }: ProjectCardProps) => {
  const Icon = iconMap[icon];
  
  return (
    <Link to={`/project/${id}`}>
      <article
        className="group relative card-gradient rounded-xl border border-border p-6 hover-lift cursor-pointer overflow-hidden h-full"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        </div>

        {/* Icon */}
        <div className="relative mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </article>
    </Link>
  );
};

export default ProjectCard;
