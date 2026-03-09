export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/62">{subtitle}</p>
      ) : null}
    </div>
  );
}