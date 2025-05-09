export interface ReadingItem {
  title: string
  snippet: string
  tags: string[]
  link: string
}

export const readingList: ReadingItem[] = [
  {
    title: "Why Technology Favors Tyranny",
    snippet:
      "Yuval Noah Harari explores how AI and biotech could consolidate power among a small elite, creating a 'useless class' and enabling digital dictatorships.",
    tags: ["AI", "Oligarchy", "Class Consciousness"],
    link: "https://www.theatlantic.com/magazine/archive/2018/10/yuval-noah-harari-technology-tyranny/568330/",
  },
  // ... existing code ...
] 