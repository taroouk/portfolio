import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">About</h2>

                <p className="mt-4 text-sm leading-7 text-white/80">
                  I’m a full-stack developer with hands-on experience building
                  complete web products from the ground up — from clean user
                  interfaces to robust backend systems.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/80">
                  I focus on writing maintainable code, designing scalable
                  architectures, and delivering real-world solutions that balance
                  performance, usability, and business needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-xs text-white/60">ROLE</div>
                  <div className="mt-2 font-medium">Full-Stack Developer</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-xs text-white/60">FOCUS</div>
                  <div className="mt-2 font-medium">SaaS & Web Applications</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-xs text-white/60">STACK</div>
                  <div className="mt-2 font-medium">Laravel, React, TypeScript</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-xs text-white/60">LOCATION</div>
                  <div className="mt-2 font-medium">Egypt</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
