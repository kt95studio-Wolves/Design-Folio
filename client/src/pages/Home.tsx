import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import CreativeGallery from "@/components/portfolio/CreativeGallery";
import ContentStrategy from "@/components/portfolio/ContentStrategy";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <CreativeGallery />
        <ContentStrategy />
        <About />
      </main>
      <Contact />
    </div>
  );
}
