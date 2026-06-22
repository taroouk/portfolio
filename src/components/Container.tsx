// src/components/Container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10">{children}</div>;
}
