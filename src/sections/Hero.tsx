import { Container } from "../components/Container";

export function Hero() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* text */}
          <div>
            <span className="text-sm text-white/50">
              Full Stack Developer – Available for freelance projects
            </span>

            <h1 className="text-5xl font-bold leading-tight mt-4">
              I build polished <br />
              web products <br />
              that feel premium.
            </h1>

            <p className="text-white/60 mt-6 max-w-lg">
              Hi, I'm Tarek Ahmed. I design and develop complete web
              experiences from modern interfaces to robust backend APIs.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-xl font-medium"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                className="border border-white/20 px-6 py-3 rounded-xl"
              >
                Show CV
              </a>
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4">
              <img
                src="/hero.png"
                className="rounded-xl"
              />

              <div className="grid grid-cols-3 gap-4 mt-4 text-center text-sm">

                <div className="bg-white/5 rounded-lg py-2">
                  <div className="font-bold">10+</div>
                  <div className="text-white/50">Projects</div>
                </div>

                <div className="bg-white/5 rounded-lg py-2">
                  <div className="font-bold">4+</div>
                  <div className="text-white/50">Years</div>
                </div>

                <div className="bg-white/5 rounded-lg py-2">
                  <div className="font-bold">24h</div>
                  <div className="text-white/50">Response</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}