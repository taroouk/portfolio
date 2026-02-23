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
    title: "TooGoodForMerch",
    subtitle: "Premium merch store — launching soon",
    status: "In Progress",
    description:
      "An upcoming e-commerce platform focused on limited-edition drops and a premium shopping experience, built with scalable full-stack foundations.",
    highlights: [
      "Coming Soon page live on a dedicated domain",
      "Planned secure checkout and payments integration",
      "Product catalog structure designed for drops & collections",
      "Performance-first UI with mobile-ready layout",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe (Planned)"],
    liveUrl: "http://toogoodformerch.com/",
  },

  {
    title: "StyleSphere Store",
    subtitle: "E-commerce storefront experience",
    status: "Shipped",
    description:
      "A modern storefront experience built around smooth browsing, clean UI, and clear product discovery.",
    highlights: [
      "Product browsing experience with clean UI",
      "Responsive layout across devices",
      "Focus on UX clarity and conversion-friendly pages",
    ],
    tech: ["React", "TypeScript", "E-commerce", "UI/UX"],
    liveUrl: "https://stylesphere.store/",
  },

  {
    title: "InsightBoard",
    subtitle: "Analytics dashboard interface",
    status: "Shipped",
    description:
      "A dashboard-style web app focused on data visibility and admin-style layouts, built with scalable UI patterns.",
    highlights: [
      "Dashboard layout with stats-focused sections",
      "Data presentation with clean information hierarchy",
      "Built with reusable components for scalability",
    ],
    tech: ["React", "TypeScript", "Dashboard", "UI Architecture"],
    liveUrl: "https://insightboard.org/",
  },

  {
    title: "DreamKey Partners",
    subtitle: "Real estate website experience",
    status: "Shipped",
    description:
      "A real-estate web experience designed to highlight listings and streamline user inquiries with a clean layout.",
    highlights: [
      "Listing-first layout with clear navigation",
      "Responsive pages optimized for mobile browsing",
      "Designed for fast discovery and inquiry flow",
    ],
    tech: ["React", "TypeScript", "Web UI", "Responsive Design"],
    liveUrl: "https://dreamkeypartners.org/",
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