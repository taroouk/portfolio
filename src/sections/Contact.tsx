import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

function SocialIcon({
  href,
  label,
  children,
  hoverClass,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  hoverClass: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={`group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/75 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] ${hoverClass}`}
    >
      <span className="transition duration-300 group-hover:scale-110">{children}</span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.9 1.15a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.04 2A9.94 9.94 0 0 0 3.5 16.98L2 22l5.17-1.45A9.99 9.99 0 1 0 12.04 2Zm0 18.12a8.08 8.08 0 0 1-4.12-1.13l-.29-.17-3.07.86.9-2.99-.19-.31A8.12 8.12 0 1 1 12.04 20.12Zm4.46-6.06c-.24-.12-1.43-.7-1.66-.78-.22-.08-.39-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.33.98 2.49.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M13.5 21v-7.03H16l.38-2.74H13.5V9.47c0-.79.24-1.53 1.66-1.53h1.33V5.6s-1.2-.2-2.35-.2c-2.4 0-3.97 1.42-3.97 4v1.83H7.5v2.74h2.67V21h3.33Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.45.11 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.6 5.06.36.32.69.95.69 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.02 2.55c-2.38 0-4.31 1.93-4.31 4.31v2.03c0 .36-.09.71-.27 1.02-.3.51-.77.9-1.34 1.08-.52.16-.8.7-.64 1.22.13.42.51.69.93.69h.03c.58 0 1.12.22 1.53.63.45.45.69 1.04.69 1.67v.17c0 .64-.25 1.24-.7 1.69-.28.28-.63.48-1.01.58-.44.11-.74.5-.74.95 0 .54.44.98.98.98h.04c.55 0 1.09.17 1.55.48.62.42 1.15 1 1.52 1.69.22.41.65.66 1.11.66h1.2c.46 0 .89-.25 1.11-.66.37-.69.9-1.27 1.52-1.69.46-.31 1-.48 1.55-.48h.04c.54 0 .98-.44.98-.98 0-.45-.3-.84-.74-.95a2.47 2.47 0 0 1-1.01-.58 2.38 2.38 0 0 1-.7-1.69v-.17c0-.63.24-1.22.69-1.67.41-.41.95-.63 1.53-.63h.03c.42 0 .8-.27.93-.69.16-.52-.12-1.06-.64-1.22a2.63 2.63 0 0 1-1.34-1.08 1.98 1.98 0 0 1-.27-1.02V6.86c0-2.38-1.93-4.31-4.31-4.31h-.02Z" />
    </svg>
  );
}

export function Contact() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <SectionTitle
            title="Contact"
            subtitle="Have a project idea? Let’s talk and build something polished."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
                <p className="text-sm font-medium text-white">Quick Contact</p>

                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <a
                    className="block transition hover:text-white"
                    href="mailto:tarekelfanty@gmail.com"
                  >
                    Email: tarekelfanty@gmail.com
                  </a>

                  <a
                    className="block transition hover:text-white"
                    href="https://wa.me/201033967886"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp: +20 10 339 67886
                  </a>

                  <a
                    className="block transition hover:text-white"
                    href="https://www.instagram.com/tarookk_?igsh=MTFmY2E4dGlsMmZkMA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram: @tarookk_
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
                <p className="text-sm font-medium text-white">Social</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <SocialIcon
                    href="https://www.instagram.com/tarookk_?igsh=MTFmY2E4dGlsMmZkMA%3D%3D&utm_source=qr"
                    label="Instagram"
                    hoverClass="hover:text-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]"
                  >
                    <InstagramIcon />
                  </SocialIcon>

                  <SocialIcon
                    href="https://wa.me/201033967886"
                    label="WhatsApp"
                    hoverClass="hover:text-green-400 hover:shadow-[0_0_30px_rgba(74,222,128,0.22)]"
                  >
                    <WhatsAppIcon />
                  </SocialIcon>

                  <SocialIcon
                    href="https://www.facebook.com/tarek.ahmed.zakaria"
                    label="Facebook"
                    hoverClass="hover:text-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.24)]"
                  >
                    <FacebookIcon />
                  </SocialIcon>

                  <SocialIcon
                    href="https://github.com/taroouk"
                    label="GitHub"
                    hoverClass="hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  >
                    <GithubIcon />
                  </SocialIcon>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                    <SnapchatIcon />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">Snapchat</p>
                    <p className="text-xs text-white/55">Scan to add me on Snapchat</p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white">
                    <img
                      src={`${base}snapchat.jpg`}
                      alt="Tarouk Snapchat QR"
                      className="w-full object-cover transition duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xvgbyadg"
              method="POST"
              className="rounded-3xl border border-white/10 bg-black/25 p-5 md:p-6"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={7}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}