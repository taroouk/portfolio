// src/components/Container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1180px] px-5 md:px-7 xl:px-8">{children}</div>;
}