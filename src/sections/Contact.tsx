import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <SectionTitle
            title="Contact"
            subtitle="Share your project details and I’ll get back to you quickly."
          />

          <div className="grid md:grid-cols-2 gap-10 mt-10">

            {/* LEFT SIDE */}
            <div className="space-y-4 text-sm text-white/70">
              <p className="text-white/80 font-medium">Quick Contact</p>

              <a
                className="block hover:text-white"
                href="mailto:tarekelfanty@gmail.com"
              >
                Email: tarekelfanty@gmail.com
              </a>

              <a
                className="block hover:text-white"
                href="tel:+201033967886"
              >
                WhatsApp: +20 10 339 67886
              </a>

              <a
                className="block hover:text-white"
                href="https://github.com/taroouk"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="block hover:text-white"
                href="https://www.facebook.com/tarek.ahmed.zakaria"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>

            {/* FORM */}
            <form
              action="https://formspree.io/f/xvgbyadg"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={4}
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90"
              >
                Send message
              </button>
            </form>

          </div>
        </div>
      </Container>
    </section>
  );
}