import { motion } from "framer-motion";
import { PenTool, Video, FileText, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import videoImg from "@assets/generated_images/cinematic_video_production_concept.png";

export default function ContentStrategy() {
  return (
    <section id="strategy" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              subtitle="Multimedia & Strategy"
              title="Content & Strategy"
              description="Showcasing soft skills in communication, adaptability, and content creation."
            />

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full h-fit text-primary">
                  <PenTool size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Technical Writing</h3>
                  <p className="text-muted-foreground mb-3">
                    Authored SEO-friendly product descriptions for <strong>Oyprice.com</strong> (Lobsbelo Pvt. Ltd.), focusing on tech categories like mobiles and laptops.
                  </p>
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary" asChild>
                    <a href="https://kaushiktambe95blog-letsjusttalk.blogspot.com/" target="_blank" rel="noopener noreferrer">
                      Read my Blog <ExternalLink size={14} className="ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full h-fit text-primary">
                  <Video size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Video Production</h3>
                  <p className="text-muted-foreground">
                    Served as Assistant Director Intern at <strong>Squaredeal Productions</strong>. Contributed to storyboarding, concept art, and on-set production using tools like Adobe Premiere Pro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl -z-10" />
            <img
              src={videoImg}
              alt="Video Production Concept"
              className="rounded-xl shadow-lg w-full object-cover aspect-video"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-xl border max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold">Content Strategist</p>
                  <p className="text-xs text-muted-foreground">Role</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Combining technical understanding with creative storytelling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
