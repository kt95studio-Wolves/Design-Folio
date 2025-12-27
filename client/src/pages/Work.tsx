import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layout,
  Loader2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { WorkProject } from "@shared/schema";
import Navbar from "@/components/portfolio/Navbar";
import Contact from "@/components/portfolio/Contact";

export default function Work() {
  const { data: projects, isLoading } = useQuery<WorkProject[]>({
    queryKey: ["/api/work"],
  });

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <Navbar />
      <main>
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Case Studies"
            title="Selected Projects"
            description="Detailed breakdown of my work, technical challenges, and the solutions implemented."
          />

          {isLoading ? (
            <div className="flex justify-center py-24">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
            </div>
          ) : (
            <div className="space-y-24 mt-16">
              {projects?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                >
                  <div className="flex-1 w-full">
                    <Link href={`/work/${project.slug}`}>
                      <div className="relative overflow-hidden rounded-2xl border bg-muted aspect-video group shadow-lg cursor-pointer">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-background/90 backdrop-blur-sm px-6 py-2 rounded-full font-bold flex items-center gap-2">
                            View Case Study <ArrowRight size={18} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="p-6 bg-muted/50 rounded-xl border">
                      <h4 className="font-bold mb-2 flex items-center gap-2 text-foreground">
                        <Layout size={18} className="text-primary" />
                        Key Focus
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.details}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
                      >
                        Read Detailed Case Study <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Contact />
    </div>
  );
}
