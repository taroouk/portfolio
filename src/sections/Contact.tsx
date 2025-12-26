import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xvgbyadg";

/* Snapchat official-style SVG icon */
function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2c-2.9 0-5.2 2.3-5.2 5.2 0 .6.1 1.1.2 1.6-.5.4-1.3.9-2.4 1.2-.6.2-1 .7-.9 1.3.1.6.6 1 1.2 1 .6 0 1.3.3 1.8.6.4.2.5.8.2 1.2-.6.8-1.5 1.4-2.7 1.6-.6.1-1 .6-1 1.2 0 .6.4 1.1 1 1.2 1.9.4 3.2 1.2 3.8 2.2.2.4.6.6 1.1.6.9 0 1.7-.3 2.5-.7.5-.3 1.1-.3 1.6 0 .8.4 1.6.7 2.5.7.4 0 .9-.2 1.1-.6.6-1 1.9-1.8 3.8-2.2.6-.1 1-.6 1-1.2 0-.6-.4-1.1-1-1.2-1.2-.2-2.1-.8-2.7-1.6-.3-.4-.2-1 .2-1.2.5-.3 1.2-.6 1.8-.6.6 0 1.1-.4 1.2-1 .1-.6-.3-1.1-.9-1.3-1.1-.3-1.9-.8-2.4-1.2.1-.5.2-1 .2-1.6C17.2 4.3 14.9 2 12 2z" />
    </svg>
  );
}

function SocialIcon({
  href,
  label,
  hoverClass,
  children,
}: {
  href: string;
  label: string;
  hoverClass: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="group relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div className={`h-5 w-5 text-white/70 transition ${hoverClass}`}>{children}</div>

      <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 transition group-hover:opacity-100">
        <div className="rounded-lg border border-white/10 bg-black/80 px-3 py-1 text-xs text-white/80 backdrop-blur">
          {label}
        </div>
        <div className="mx-auto mt-1 h-2 w-2 rotate-45 border-b border-r border-white/10 bg-black/80" />
      </div>
    </a>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  If you want to discuss a project, collaboration, or an opportunity, feel free to reach out.
                </p>

                <div className="mt-8 text-xs font-semibold tracking-wider text-white/60">LINKS</div>

                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                  <SocialIcon
                    href="https://facebook.com/tarek.ahmed.zakaria"
                    label="Facebook"
                    hoverClass="group-hover:text-[#1877F2]"
                  >
                    <Facebook className="h-5 w-5" />
                  </SocialIcon>

                  <SocialIcon
                    href="https://instagram.com/tarookk_"
                    label="Instagram"
                    hoverClass="group-hover:text-[#E1306C]"
                  >
                    <Instagram className="h-5 w-5" />
                  </SocialIcon>

                  <SocialIcon
                    href="https://snapchat.com/add/taaroouk"
                    label="Snapchat"
                    hoverClass="group-hover:text-[#FFFC00]"
                  >
                    <SnapchatIcon className="h-5 w-5" />
                  </SocialIcon>

                  <SocialIcon
                    href="mailto:tarekelfanty@gmail.com"
                    label="Email"
                    hoverClass="group-hover:text-[#EA4335]"
                  >
                    <Mail className="h-5 w-5" />
                  </SocialIcon>

                  <SocialIcon
                    href="tel:+201033967886"
                    label="Mobile"
                    hoverClass="group-hover:text-[#34C759]"
                  >
                    <Phone className="h-5 w-5" />
                  </SocialIcon>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-xs font-semibold tracking-wider text-white/60">SEND A MESSAGE</div>

                <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/40 focus:border-white/25"
                  />

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Your email"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/40 focus:border-white/25"
                  />

                  <textarea
                    name="message"
                    required
                    placeholder="Message"
                    className="min-h-[140px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/40 focus:border-white/25"
                  />

                  <input type="hidden" name="_subject" value="New message from portfolio" />

                  <button
                    disabled={status === "sending"}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </button>

                  {status === "success" ? (
                    <p className="text-sm text-white/80">✅ Message sent successfully!</p>
                  ) : null}

                  {status === "error" ? (
                    <p className="text-sm text-white/80">❌ Something went wrong. Please try again.</p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
