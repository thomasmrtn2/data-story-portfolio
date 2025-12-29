import { Github, Linkedin, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal icon decoration */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary border border-border hover-glow">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">Thomas</span>{" "}
          <span className="text-gradient glow-text">Martin</span>
        </h1>

        {/* Title */}
        <p className="animate-fade-in-up-delay-2 text-xl md:text-2xl text-muted-foreground font-mono mb-8">
          <span className="text-primary">{">"}</span> Data Scientist{" "}
          <span className="text-primary">|</span> ML/DL Engineer{" "}
          <span className="text-primary">{"<"}</span>
        </p>

        {/* Bio */}
        <p className="animate-fade-in-up-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about transforming complex data into actionable insights.
          Specializing in machine learning, deep learning, and building scalable AI solutions.
        </p>

        {/* CTA Links */}
        <div className="animate-fade-in-up-delay-3 flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border hover:border-primary/50 hover-glow transition-all duration-300"
          >
            <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover-glow transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-primary">LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up-delay-3 mt-20">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="font-mono text-xs tracking-wider">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
