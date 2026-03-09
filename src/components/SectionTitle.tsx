export function SectionTitle({
    title,
    subtitle,
  }: {
    title: string;
    subtitle?: string;
  }) {
    return (
      <div className="mb-10">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-white/50 mt-2">{subtitle}</p>
      </div>
    );
  }
