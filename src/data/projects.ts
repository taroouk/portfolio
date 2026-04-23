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
      "An e-commerce platform focused on limited drops and a premium shopping experience, built with a full-stack architecture designed for scalability, structured product management, and secure payment integration.",
    highlights: [
      "Frontend and backend foundation prepared for a scalable store flow",
      "Catalog structure planned for drops, collections, and product organization",
      "Stripe integration planned for secure checkout and payments",
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
      "A modern storefront experience built to improve product discovery through clean UI, responsive layouts, and a clear shopping flow.",
    highlights: [
      "Conversion-focused storefront layout and user flow",
      "Responsive implementation across desktop and mobile devices",
      "Clear product presentation with strong visual hierarchy",
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
      "A real estate web experience built to showcase listings clearly and support a smooth inquiry flow through responsive pages and structured content presentation.",
    highlights: [
      "Listing-focused layout with simple and intuitive navigation",
      "Responsive pages optimized for browsing across devices",
      "Inquiry flow designed to support lead generation",
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