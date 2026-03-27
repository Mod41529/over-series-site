export type Brand = {
  slug: string;
  name: string;
  domain: string;
  domainKo: string;
  color: string;
  sentence: string;
  concept: string;
  taglines: string[];
  tone: string;
  featured?: boolean;
};

export const brands: Brand[] = [
  {
    slug: "overture",
    name: "Overture",
    domain: "Music",
    domainKo: "음악",
    color: "#B8860B",
    sentence: "Sound that opens every story before words arrive.",
    concept: "A sonic identity system tuned for intros, rhythm cuts, and emotional transitions.",
    taglines: ["Lead with resonance.", "Compose momentum before the message."],
    tone: "Warm, cinematic, confident",
    featured: true,
  },
  {
    slug: "override",
    name: "Override",
    domain: "AI",
    domainKo: "인공지능",
    color: "#2563EB",
    sentence: "Human intent amplified by adaptive intelligence.",
    concept: "An AI-native narrative that prioritizes command clarity over algorithm spectacle.",
    taglines: ["Decisions, accelerated.", "Human direction. Machine precision."],
    tone: "Sharp, lucid, decisive",
    featured: true,
  },
  {
    slug: "overthrow",
    name: "Overthrow",
    domain: "Startup",
    domainKo: "스타트업",
    color: "#DC2626",
    sentence: "Velocity that replaces hesitation with execution.",
    concept: "A launch framework focused on conviction, speed, and ruthless prioritization.",
    taglines: ["Ship before doubt returns.", "Conviction in motion."],
    tone: "Aggressive, fast, mission-driven",
  },
  {
    slug: "overlook",
    name: "Overlook",
    domain: "Strategy",
    domainKo: "경영전략",
    color: "#166534",
    sentence: "Clarity that sees around corners before markets move.",
    concept: "A strategic lens for long-cycle bets, operating cadence, and directional control.",
    taglines: ["See the second-order effect.", "Position before the curve bends."],
    tone: "Measured, high-context, authoritative",
  },
  {
    slug: "overflow",
    name: "Overflow",
    domain: "Investment",
    domainKo: "투자",
    color: "#0D9488",
    sentence: "Capital disciplined by pattern recognition and timing.",
    concept: "An investment voice balancing analytical rigor with portfolio-level storytelling.",
    taglines: ["Signal over noise.", "Allocate with clarity."],
    tone: "Analytical, calm, exact",
  },
  {
    slug: "overhaul",
    name: "Overhaul",
    domain: "Professional",
    domainKo: "전문직",
    color: "#312E81",
    sentence: "A full-system rebuild for trusted expert services.",
    concept: "A transformation blueprint for legacy professional services entering modern demand.",
    taglines: ["Rebuild trust architecture.", "Reset the operating standard."],
    tone: "Structured, credible, transformative",
  },
  {
    slug: "overwrite",
    name: "Overwrite",
    domain: "Writing",
    domainKo: "글쓰기",
    color: "#7C3AED",
    sentence: "Language that rewrites assumptions and decisions.",
    concept: "A writing system that converts abstract direction into executable language.",
    taglines: ["Write to move action.", "Replace ambiguity with intent."],
    tone: "Editorial, precise, layered",
  },
  {
    slug: "overcast",
    name: "Overcast",
    domain: "Content",
    domainKo: "콘텐츠",
    color: "#64748B",
    sentence: "Stories scaled for channels, not trapped in formats.",
    concept: "A modular content engine that keeps one voice across many distribution surfaces.",
    taglines: ["Scale voice, not clutter.", "One narrative, many surfaces."],
    tone: "Systematic, adaptive, contemporary",
  },
  {
    slug: "overlap",
    name: "Overlap",
    domain: "Design",
    domainKo: "디자인",
    color: "#DB2777",
    sentence: "Form where aesthetics and function stop competing.",
    concept: "A design direction where utility and signature aesthetics are built as one.",
    taglines: ["Form meets utility.", "Design that performs."],
    tone: "Expressive, clean, intentional",
  },
  {
    slug: "overdrive",
    name: "Overdrive",
    domain: "Sports",
    domainKo: "스포츠",
    color: "#F97316",
    sentence: "Performance culture tuned for repeatable breakthroughs.",
    concept: "A performance identity for teams, athletes, and systems chasing measurable gains.",
    taglines: ["Train the edge.", "Repeat the breakthrough."],
    tone: "Energetic, disciplined, relentless",
  },
];

export const tagline = "Beyond default, in every direction.";

export const philosophy = [
  "Over-는 접두사가 아니라 기준이다.",
  "한 개의 타이포그래피 DNA로 열 개의 방향성을 만든다.",
  "기본값을 넘는 순간, 브랜드는 장르가 된다.",
];

export const bySlug = Object.fromEntries(brands.map((brand) => [brand.slug, brand]));
