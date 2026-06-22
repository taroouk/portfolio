// src/data/projects.ts
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
    subtitle: "Full-stack e-commerce platform in progress",
    status: "In Progress",
    description:
      "A full-stack application in progress using React and Node.js, structured to support scalable business features, backend integrations, and future payment workflows.",
    highlights: [
      "Scalable frontend and backend project structure with React and Node.js",
      "Backend and API flow designed for future business integrations",
      "Payment workflow planning with Stripe integration readiness",
      "Responsive interface built with performance and usability in mind",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "REST APIs", "Stripe (Planned)"],
    liveUrl: "http://toogoodformerch.com/",
    image: "projects/toogoodformerch.jpg",
  },
  {
    title: "StyleSphere Store",
    subtitle: "Modern e-commerce storefront",
    status: "Shipped",
    description:
      "A modern e-commerce application built with reusable React components, frontend state handling, and responsive product experiences across devices.",
    highlights: [
      "Reusable React and TypeScript components for a scalable UI structure",
      "Responsive product pages across desktop, tablet, and mobile",
      "Clear product presentation and user-friendly shopping navigation",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "UI/UX", "E-commerce"],
    liveUrl: "https://stylesphere.store/",
    image: "projects/stylesphere.jpg",
  },
  {
    title: "InsightBoard",
    subtitle: "Analytics dashboard interface",
    status: "Shipped",
    description:
      "A dashboard-style application focused on presenting analytics in a clear and structured way using reusable components and scalable interface patterns.",
    highlights: [
      "Dashboard layout designed for data-heavy admin experiences",
      "Reusable UI components for easier scaling and iteration",
      "Clear hierarchy for metrics, sections, and content blocks",
    ],
    tech: ["React", "TypeScript", "Dashboard UI", "Reusable Components"],
    liveUrl: "https://insightboard.org/",
    image: "projects/insightboard.jpg",
  },
  {
    title: "DreamKey Partners",
    subtitle: "Real estate website",
    status: "Shipped",
    description:
      "A responsive real estate listings platform with structured property presentation, reusable frontend components, and clear navigation across screen sizes.",
    highlights: [
      "Reusable property cards and structured listing page components",
      "Professional visual hierarchy for property presentation",
      "Responsive behavior and smooth navigation across devices",
    ],
    tech: ["React", "TypeScript", "Responsive Design", "UI/UX"],
    liveUrl: "https://dreamkeypartners.org/",
    image: "projects/dreamkey.jpg",
  },
  {
    title: "GEM Opening Project",
    subtitle: "Landing page for the Grand Egyptian Museum opening",
    status: "Shipped",
    description:
      "A responsive landing page built to present the GEM opening in a clear and engaging format, with a modern layout and clean front-end structure.",
    highlights: [
      "Responsive layout across multiple screen sizes",
      "Clean HTML, CSS, and JavaScript structure",
      "Published as a live public project",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://taroouk.github.io/GEM-OpeningProject/",
    image: "projects/gem-opening.jpg",
  },
];
