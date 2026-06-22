import { motion } from "framer-motion";

export function SectionTitle({
  title,
  subtitle,
  index,
}: {
  title: string;
  subtitle?: string;
  index?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } },
      }}
      className="mb-10 grid gap-5 border-b border-[#dce9e6]/10 pb-8 md:mb-14 md:grid-cols-[0.7fr_1.3fr] md:items-end md:pb-10"
    >
      <motion.div variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
        {index ? <span className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-[#71827f]">{index}</span> : null}
        <h2 className="text-4xl font-medium tracking-[-0.045em] text-[#f4f0e7] md:text-5xl">{title}</h2>
      </motion.div>
      {subtitle ? <motion.p variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="max-w-2xl text-sm leading-7 text-[#92a29f] md:justify-self-end md:text-[15px]">{subtitle}</motion.p> : null}
    </motion.div>
  );
}
