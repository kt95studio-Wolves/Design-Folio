import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import eventImg from "@assets/generated_images/event_branding_materials_flat_lay.png";
import editorialImg from "@assets/generated_images/magazine_spread_editorial_design_mockup.png";

const items = [
  {
    id: 1,
    category: "Event Branding",
    title: "Cosmos Jallosh",
    role: "Vice-Chairperson (Media)",
    description: "Designed brochures, banners, and entry bands for a major college cultural event.",
    image: eventImg,
    className: "md:col-span-2",
  },
  {
    id: 2,
    category: "Editorial Design",
    title: "Valia College Magazine",
    role: "Editorial Board Member",
    description: "Layouts showing visual consistency and curated content for the annual magazine.",
    image: editorialImg,
    className: "md:col-span-1",
  },
  {
    id: 3,
    category: "Marketing Collateral",
    title: "Promotional Graphics",
    role: "Graphic Designer",
    description: "Posters and certificates for Cultural Committee and promotional graphics for SSV Projects.",
    image: "https://images.unsplash.com/photo-1626785774573-4b7993143a26?q=80&w=2070&auto=format&fit=crop", // Stock fallback or generate another if needed
    className: "md:col-span-3",
  },
];

export default function CreativeGallery() {
  return (
    <section id="creative" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Visual Design"
          title="Creative Gallery"
          description="A showcase of graphic design, branding, and editorial work demonstrating visual adaptability."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-background border shadow-sm ${item.className}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold font-serif mb-1">{item.title}</h3>
                <p className="text-white/90 text-sm mb-2">{item.role}</p>
                <p className="text-white/70 text-sm line-clamp-2">{item.description}</p>
              </div>
              
              {/* Mobile-friendly visible content below image for touch devices if hover is tricky, 
                  but for this clean aesthetic, the overlay is nice. 
                  Let's add a static visible label for non-hover state consistency? 
                  Actually, let's keep it clean. */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
