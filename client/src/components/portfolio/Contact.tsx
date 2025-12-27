import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/portfolio/ContactDialog";

export default function Contact() {
  return (
    <footer id="contact" className="bg-background border-t">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's work together.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to apply my skills in an HTML/CSS Developer Intern role. Open to opportunities where I can learn and contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactDialog>
                <Button size="lg" className="gap-2">
                  <Mail size={18} />
                  Send a Message
                </Button>
              </ContactDialog>
              
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="tel:+919372862138">
                  <Phone size={18} />
                  +91 9372862138
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 min-w-[200px]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Socials</h3>
            <a
              href="https://github.com/kt95studio-Wolves"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors font-medium"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href="https://kaushiktambe95blog-letsjusttalk.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors font-medium"
            >
              Blog <ArrowUpRight size={14} />
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="border-t mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 Kaushik Tambe. All rights reserved.</p>
          <p>Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}
