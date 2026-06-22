import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

const strengths = [
  "Responsive, component-based interfaces with React and TypeScript",
  "Backend services and REST APIs with Node.js and Express.js",
  "SQL and NoSQL databases chosen around product requirements",
  "JWT, Firebase Auth, and session-based authentication flows",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <SectionTitle index="" title="Built from both sides." subtitle="Mid-level software engineer with hands-on freelance experience since 2022, bridging product requirements, maintainable engineering, and polished interfaces." />

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-[2rem] border border-[#dce9e6]/10 bg-[#1b3033] p-7 md:p-10 lg:p-12"
          >
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#81918f]">
              <span className="rounded-full border border-[#d2b98e]/20 bg-[#d2b98e]/[0.07] px-3 py-2 text-[#d2b98e]">2022 - Present</span>
              <span>Freelance Software Engineer</span>
            </div>
            <p className="max-w-3xl text-2xl leading-[1.35] tracking-[-0.025em] text-[#e2e7e3] md:text-3xl md:leading-[1.3]">
              I translate business requirements into <span className="editorial text-[#d2b98e]">complete digital products</span> — from reusable frontend components to APIs, databases, and authentication.
            </p>
            <div className="mt-10 grid gap-6 border-t border-[#dce9e6]/10 pt-8 text-sm leading-7 text-[#92a29f] md:grid-cols-2">
              <p>I build responsive applications with React, TypeScript, HTML, CSS, and Tailwind CSS, with a focus on reusable structure and usability.</p>
              <p>On the backend, I work with Node.js, Express.js, REST APIs, database integration, authentication, Postman, Git, and practical debugging workflows.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col rounded-[2rem] border border-[#d2b98e]/20 bg-[#d2b98e]/[0.07] p-7 md:p-9"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] text-[#d2b98e]">What I bring</div>
            <ul className="mt-7 grid gap-0">
              {strengths.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3 border-t border-[#dce9e6]/10 py-5 text-sm leading-6 text-[#cbd5d2]"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#d2b98e]/15 text-[#f0d7aa]"><Check className="h-3 w-3" /></span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <a href="#contact" className="group mt-auto flex items-center justify-between border-t border-[#dce9e6]/10 pt-6 text-sm text-[#f0d7aa]">
              Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
