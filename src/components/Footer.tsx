import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-mono text-primary font-bold">TM</span>
            </div>
            <div>
              <span className="font-mono text-foreground font-semibold">Thomas Martin</span>
              <p className="text-xs text-muted-foreground">Data Scientist</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-lg bg-secondary border border-border hover:border-primary/50 flex items-center justify-center hover-glow transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-lg bg-secondary border border-border hover:border-primary/50 flex items-center justify-center hover-glow transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:contact@thomasmartin.dev"
              className="group w-10 h-10 rounded-lg bg-secondary border border-border hover:border-primary/50 flex items-center justify-center hover-glow transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground font-mono flex items-center justify-center gap-1">
            © {currentYear} • Built with{" "}
            <Heart className="w-3.5 h-3.5 text-primary fill-primary inline" /> and{" "}
            <span className="text-primary">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
