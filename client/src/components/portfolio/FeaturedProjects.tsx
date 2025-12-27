import { motion } from "framer-motion";
import { ArrowUpRight, Code, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import ssvImg from "@assets/generated_images/mockup_for_a_project_management_website_optimization_project.png";
import githubImg from "@assets/generated_images/abstract_representation_of_code_and_development.png";

const projects = [
  {
    id: 1,
    title: "SSV Projects Website Optimization",
    description: "Assisted in web design improvements to enhance UI/UX and website aesthetics for a project management firm.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: ssvImg,
    link: "#",
    icon: Layout,
  },
  {
    id: 2,
    title: "Personal GitHub Repositories",
    description: "A collection of responsive layouts and experiments demonstrating foundational front-end skills.",
    tags: ["HTML5", "CSS3", "Responsive Design", "AI-Debugging"],
    image: githubImg,
    link: "https://github.com/kt95studio-Wolves",
    icon: Code,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Selected Work"
          title="Web Development"
          description="Projects that demonstrate my journey in building responsive, user-friendly interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <a href={project.link} className="block space-y-4">
                <div className="relative overflow-hidden rounded-xl border bg-muted aspect-video group-hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 z-10 transition-colors" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-md px-2 py-0.5 text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
