export type ProjectStatus = "In Progress" | "Shipped";

export type Project = {
  title: string;
  subtitle: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "TooGoodForMerch",
    subtitle: "Premium merch store — launching soon",
    status: "In Progress",
    description:
      "An upcoming e-commerce product focused on limited drops and a premium shopping experience, built with scalable full-stack foundations.",
    highlights: [
      "Live Coming Soon page on a dedicated domain",
      "Planned secure checkout and payments integration",
      "Catalog structure designed for drops & collections",
      "Performance-first UI with mobile-ready layout",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe (Planned)"],
    liveUrl: "http://toogoodformerch.com/",
    image: "projects/toogoodformerch.jpg",
  },
  {
    title: "StyleSphere Store",
    subtitle: "E-commerce storefront experience",
    status: "Shipped",
    description:
      "A modern storefront experience built around smooth browsing, clean UI, and clear product discovery.",
    highlights: [
      "Conversion-friendly layout and sections",
      "Responsive experience across devices",
      "Clean information hierarchy for product browsing",
    ],
    tech: ["React", "TypeScript", "UI/UX", "E-commerce"],
    liveUrl: "https://stylesphere.store/",
    image: "projects/stylesphere.jpg",
  },
  {
    title: "InsightBoard",
    subtitle: "Analytics dashboard interface",
    status: "Shipped",
    description:
      "A dashboard-style web app focused on data visibility and admin-style layouts, built with scalable UI patterns.",
    highlights: [
      "Dashboard layout with stats-focused sections",
      "Clear data hierarchy and reusable components",
      "Built for scalability and iteration",
    ],
    tech: ["React", "TypeScript", "Dashboard UI"],
    liveUrl: "https://insightboard.org/",
    image: "projects/insightboard.jpg",
  },
  {
    title: "DreamKey Partners",
    subtitle: "Real estate website experience",
    status: "Shipped",
    description:
      "A real-estate web experience designed to highlight listings and streamline user inquiries with a clean layout.",
    highlights: [
      "Listing-first layout with clear navigation",
      "Mobile-first responsive pages",
      "Designed for fast discovery and inquiry flow",
    ],
    tech: ["React", "TypeScript", "Responsive Design"],
    liveUrl: "https://dreamkeypartners.org/",
    image: "projects/dreamkey.jpg",
  },
  {
    title: "GEM Opening Project",
    subtitle: "Landing page for the Grand Egyptian Museum opening",
    status: "Shipped",
    description:
      "A responsive landing page showcasing the GEM opening with a clean layout and modern structure.",
    highlights: [
      "Fully responsive layout",
      "Clean and structured HTML/CSS",
      "Deployed as a public live demo",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://taroouk.github.io/GEM-OpeningProject/",
    image: "projects/gem-opening.jpg",
  },
];