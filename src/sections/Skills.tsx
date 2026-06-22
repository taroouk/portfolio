import { Code2, Database, Server, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { skills } from "../data/skills";

const groups = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    description: "Responsive, accessible interfaces built for clarity and speed.",
    items: skills.filter((skill) => ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Responsive Design"].includes(skill)),
  },
  {
    number: "02",
    title: "Backend & APIs",
    icon: Server,
    description: "Full-stack services, integrations, and reliable application workflows.",
    items: skills.filter((skill) => ["Node.js", "Express.js", "REST APIs", "API Integration"].includes(skill)),
  },
  {
    number: "03",
    title: "Databases & Auth",
    icon: Database,
    description: "SQL and NoSQL data layers with practical authentication flows.",
    items: skills.filter((skill) => ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "JWT & Auth"].includes(skill)),
  },
  {
    number: "04",
    title: "Workflow & Delivery",
    icon: Workflow,
    description: "Clean, testable work from version control through deployment.",
    items: skills.filter((skill) => ["Git & GitHub", "Postman", "Debugging", "Clean Code", "Deployment"].includes(skill)),
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Container>
        <SectionTitle index="" title="A full-stack toolkit." subtitle="The frontend, backend, database, authentication, and delivery tools I use across practical software projects." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.13 } },
          }}
          className="grid gap-5 md:grid-cols-2"
        >
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={{
                  hidden: { opacity: 0, y: 34, scale: 0.97 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.58, ease: "easeOut" } },
                }}
                whileHover={{ y: -7 }}
                className="group rounded-[2rem] border border-[#dce9e6]/10 bg-[#1b3033] p-7 transition-colors duration-300 hover:border-[#d2b98e]/25 md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-[#6a7b78]">{group.number}</span>
                  <motion.span whileHover={{ rotate: 8, scale: 1.08 }} className="grid h-11 w-11 place-items-center rounded-full border border-[#d2b98e]/15 bg-[#d2b98e]/[0.07] text-[#d2b98e] transition group-hover:bg-[#d2b98e]/15"><Icon className="h-[18px] w-[18px]" /></motion.span>
                </div>
                <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em] text-[#eceae3]">{group.title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-[#849592]">{group.description}</p>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-[#dce9e6]/10 pt-6">
                  {group.items.map((item) => <span key={item} className="rounded-full bg-[#dce9e6]/[0.05] px-3 py-2 text-[11px] text-[#b1bfbc]">{item}</span>)}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
