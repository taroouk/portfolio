// src/components/SectionTitle.tsx
export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center md:mb-12">
      <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/42">
        {title}
      </div>

      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-white/60 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}