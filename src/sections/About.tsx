import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

const strengths = [
  "Responsive frontend development with clean UI structure",
  "Scalable backend logic and API-focused architecture",
  "Attention to usability, performance, and polished execution",
  "Strong focus on production-ready implementation",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-28">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ease-out hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] md:p-10 lg:p-12">
          <div className="mb-8 border-b border-white/10 pb-8 md:mb-10">
            <SectionTitle
              title="About Me"
              subtitle="A full-stack developer focused on building reliable, polished, and scalable digital products."
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 md:p-7">
              <p className="text-sm leading-8 text-white/72 md:text-[15px]">
                I build end-to-end web experiences from concept to deployment,
                combining responsive frontend development with practical backend
                architecture. My work is centered around clean code, strong
                structure, and creating products that feel intuitive, fast, and
                ready for real-world use.
              </p>

              <p className="mt-5 text-sm leading-8 text-white/60 md:text-[15px]">
                I enjoy turning ideas into modern digital products that balance
                visual quality with reliable functionality, with a strong focus
                on clarity, maintainability, and user experience.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 md:p-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                What I Focus On
              </div>

              <ul className="mt-5 grid gap-4">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/72">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/70" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}