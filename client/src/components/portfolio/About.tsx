import SectionHeading from "./SectionHeading";
import { Progress } from "@/components/ui/progress";

const skills = [
  { category: "Web Development", items: "HTML, CSS, JavaScript, React", level: 85 },
  { category: "Design Tools", items: "Photoshop, Canva, Affinity Suite", level: 90 },
  { category: "AI & Strategy", items: "AI-Assisted Coding, Data Analysis, SEO", level: 75 },
];

const softSkills = ["Creativity", "Problem-Solving", "Time Management", "Adaptability"];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="About Me"
            title="The Intersection of Code & Design"
            description="A BSc. IT student (Valia College) with a passion for combining technical front-end skills with creative design."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-serif font-bold mb-6">Technical Proficiency</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.category}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.category}</span>
                      <span className="text-sm text-muted-foreground">{skill.items}</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-background border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="italic text-muted-foreground text-center">
                  "I believe the best digital experiences are built at the intersection of logical structure and creative expression."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
