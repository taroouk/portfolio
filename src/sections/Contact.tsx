import { ArrowUpRight, Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/tarookk_", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/201033967886", icon: MessageCircle },
  { label: "GitHub", href: "https://github.com/taroouk", icon: Github },
  { label: "Email", href: "mailto:tarekelfanty@gmail.com", icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.975 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="noise relative overflow-hidden rounded-[2.25rem] border border-[#d2b98e]/20 bg-[#d2b98e] text-[#162729]"
        >
          <div className="animate-float-slow pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#162729]/10" />
          <div className="animate-soft-pulse pointer-events-none absolute -bottom-20 left-[35%] h-44 w-44 rounded-full bg-[#f4f0e7]/10 blur-2xl" />
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 md:p-11 lg:p-14">
              <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">Have an idea?<br /><span className="editorial text-[#374746]">Let’s make it real.</span></h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-[#334345]/75 md:text-[15px]">Looking for a mid-level software engineer for a web application, full-stack feature, or freelance project? Share the scope and I’ll get back to you with a clear next step.</p>

              <div className="mt-10 flex flex-wrap gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <motion.a whileHover={{ y: -5, rotate: -4 }} key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-[#162729]/15 text-[#2f4042] hover:bg-[#162729] hover:text-[#f0d7aa]">
                    <Icon className="h-[18px] w-[18px]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <form action="https://formspree.io/f/xvgbyadg" method="POST" className="m-3 rounded-[1.75rem] bg-[#132629] p-6 text-[#f4f0e7] md:m-5 md:p-9 lg:p-10">
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <div className="flex items-center justify-between border-b border-[#dce9e6]/10 pb-6">
                <div>
                  <p className="text-lg font-medium">Project inquiry</p>
                  <p className="mt-1 text-xs text-[#788986]">Usually replies within 1–2 days</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#d2b98e]" />
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block text-xs text-[#91a19e]">Your name
                  <input type="text" name="name" placeholder="John Doe" required className="mt-2.5 w-full border-b border-[#dce9e6]/15 bg-transparent pb-3 text-sm text-[#f4f0e7] focus:border-[#d2b98e]" />
                </label>
                <label className="block text-xs text-[#91a19e]">Email address
                  <input type="email" name="email" placeholder="john@example.com" required className="mt-2.5 w-full border-b border-[#dce9e6]/15 bg-transparent pb-3 text-sm text-[#f4f0e7] focus:border-[#d2b98e]" />
                </label>
              </div>
              <label className="mt-7 block text-xs text-[#91a19e]">Tell me about the project
                <textarea name="message" rows={5} placeholder="A few details about your idea, scope, or timeline..." required className="mt-2.5 w-full resize-none rounded-2xl border border-[#dce9e6]/10 bg-[#dce9e6]/[0.04] p-4 text-sm leading-6 text-[#f4f0e7] focus:border-[#d2b98e]/60" />
              </label>
              <button type="submit" className="group mt-5 flex w-full items-center justify-between rounded-full bg-[#f4f0e7] px-5 py-3.5 text-sm font-medium text-[#162729] hover:bg-[#f0d7aa]">
                Send project details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
