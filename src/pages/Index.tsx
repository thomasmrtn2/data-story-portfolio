import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, hsl(187 100% 50% / 0.05) 0%, transparent 50%)',
        }}
      />

      <main className="relative">
        <Hero />
        <FeaturedProjects />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
