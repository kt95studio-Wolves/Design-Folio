import { motion } from "framer-motion";
import { ArrowRight, Github, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/portfolio/ContactDialog";
import heroBg from "@assets/generated_images/minimalist_abstract_hero_background_with_geometric_shapes.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 tracking-wide">
            Portfolio 2025
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-foreground">
            Aspiring Front-End Developer <br />
            <span className="text-muted-foreground italic">& Digital Content Strategist</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Building responsive, user-centric web experiences with a background in graphic design and digital marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base group" asChild>
              <a href="#work">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <ContactDialog>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Contact Me
              </Button>
            </ContactDialog>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground">
            <a href="https://github.com/kt95studio-Wolves" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <div className="w-1 h-1 bg-border rounded-full" />
            <a href="https://kaushiktambe95blog-letsjusttalk.blogspot.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <MessageSquare size={20} />
              <span className="text-sm font-medium">Blog</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
