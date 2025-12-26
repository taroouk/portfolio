export type Project = {
  title: string;
  subtitle: string;
  status?: "In Progress" | "Shipped";
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Syrvly",
    subtitle: "SaaS platform for service businesses",
    status: "In Progress",
    description:
      "A full SaaS platform built from scratch covering booking, CRM, HR, loyalty, reporting, website builder, and an admin panel.",
    highlights: [
      "Merchant dashboard with KPIs and management tools",
      "Advanced booking system with deposits and journey flow",
      "No-code website builder with preview & publish",
      "HR & staff management (attendance, leaves, roles & permissions)",
      "Admin panel for merchants, plans, permissions, and analytics",
    ],
    tech: ["React", "TypeScript", "Laravel", "MySQL", "SaaS"],
  },
  {
    title: "GEM Opening Project",
    subtitle: "Landing page for the Grand Egyptian Museum opening",
    status: "Shipped",
    description:
      "A responsive landing page showcasing the GEM opening with a clean layout and a modern structure.",
    highlights: [
      "Fully responsive layout",
      "Clean and structured HTML/CSS",
      "Deployed as a public live demo",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://taroouk.github.io/GEM-OpeningProject/",
  },
];
