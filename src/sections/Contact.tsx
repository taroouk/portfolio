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
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/70 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] ${hoverClass}`}
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12.04 2A9.94 9.94 0 0 0 3.5 16.98L2 22l5.17-1.45A9.99 9.99 0 1 0 12.04 2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M13.5 21v-7.03H16l.38-2.74H13.5V9.47c0-.79.24-1.53 1.66-1.53h1.33V5.6s-1.2-.2-2.35-.2c-2.4 0-3.97 1.42-3.97 4v1.83H7.5v2.74h2.67V21h3.33Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.45.11 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.6 5.06.36.32.69.95.69 1.92v2.84c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2c-2.3 0-4.3 1.9-4.3 4.3v2c0 .3-.1.6-.3.9-.3.5-.8.9-1.3 1.1-.5.1-.8.6-.6 1.1.1.4.5.7.9.7h.1c.6 0 1.1.2 1.5.6.4.4.6 1 .6 1.6v.2c0 .6-.2 1.2-.6 1.6-.3.3-.7.5-1 .6-.4.1-.7.5-.7.9 0 .5.4.9.9.9h.1c.5 0 1 .2 1.5.5.6.4 1.1 1 1.5 1.6.2.4.6.6 1 .6h1.2c.4 0 .8-.2 1-.6.4-.6.9-1.2 1.5-1.6.5-.3 1-.5 1.5-.5h.1c.5 0 .9-.4.9-.9 0-.4-.3-.8-.7-.9-.3-.1-.7-.3-1-.6-.4-.4-.6-1-.6-1.6v-.2c0-.6.2-1.2.6-1.6.4-.4.9-.6 1.5-.6h.1c.4 0 .8-.3.9-.7.2-.5-.1-1-.6-1.1-.5-.2-1-.6-1.3-1.1-.2-.3-.3-.6-.3-.9v-2C16.3 3.9 14.3 2 12 2Z"/>
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

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT SIDE */}

            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-black/25 p-6">

                <p className="text-sm font-medium text-white">Connect</p>

                <div className="mt-5 flex flex-wrap items-center gap-3">

                  <SocialIcon
                    href="https://www.instagram.com/tarookk_"
                    label="Instagram"
                    hoverClass="hover:text-pink-400"
                  >
                    <InstagramIcon />
                  </SocialIcon>

                  <SocialIcon
                    href="https://wa.me/201033967886"
                    label="WhatsApp"
                    hoverClass="hover:text-green-400"
                  >
                    <WhatsAppIcon />
                  </SocialIcon>

                  <SocialIcon
                    href="https://www.facebook.com/tarek.ahmed.zakaria"
                    label="Facebook"
                    hoverClass="hover:text-blue-400"
                  >
                    <FacebookIcon />
                  </SocialIcon>

                  <SocialIcon
                    href="https://github.com/taroouk"
                    label="GitHub"
                    hoverClass="hover:text-white"
                  >
                    <GithubIcon />
                  </SocialIcon>

                  <a
                    href="mailto:tarekelfanty@gmail.com"
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <MailIcon />
                    Email me
                  </a>

                </div>

              </div>

              {/* SNAPCHAT */}

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/25">

                <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                    <SnapchatIcon />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">Snapchat</p>
                    <p className="text-xs text-white/55">Scan to add me</p>
                  </div>

                </div>

                <div className="px-5 pb-4 pt-2">

                  <div className="mx-auto max-w-[220px] overflow-hidden rounded-[22px] border border-white/10 bg-white">

                    <img
                      src={`${base}snapchat.jpg`}
                      alt="Snapchat QR"
                      className="w-full object-cover"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* FORM */}

            <form
              action="https://formspree.io/f/xvgbyadg"
              method="POST"
              className="rounded-3xl border border-white/10 bg-black/25 p-5 md:p-6"
            >

              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

              <div className="space-y-4">

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    rows={7}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90"
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