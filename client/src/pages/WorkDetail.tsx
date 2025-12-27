import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import type { WorkProject } from "@shared/schema";

export default function WorkDetail() {
  const { slug } = useParams();

  const { data: project, isLoading } = useQuery<WorkProject>({
    queryKey: [`/api/work/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="pt-32 container mx-auto px-6 max-w-5xl">
        <Skeleton className="h-12 w-1/2 mb-6" />
        <Skeleton className="h-6 w-3/4 mb-12" />
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
    );
  }

  if (!project) return <div className="pt-32 text-center">Project not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 container mx-auto px-6 max-w-5xl"
    >
      <Link href="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 transition-colors">
        <ArrowLeft size={16} /> Back to Work
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 border shadow-lg bg-muted">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layout size={24} className="text-primary" />
              Project Story & Process
            </h2>
            <ReactMarkdown>{project.details}</ReactMarkdown>
          </div>
        </div>

        <aside className="lg:col-span-4 sticky top-32 space-y-8">
          <div className="p-8 rounded-2xl border bg-card/50 backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border bg-card/50 backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Links</h3>
            <div className="space-y-4">
              {project.links.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors font-bold group"
                >
                  <span className="flex items-center gap-3">
                    {link.icon === 'github' ? <Github size={20} /> : <ExternalLink size={20} />}
                    {link.name}
                  </span>
                  <ArrowLeft size={16} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
