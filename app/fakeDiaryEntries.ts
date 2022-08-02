export interface DiaryEntry {
  date: string;
  content: string;
}
export const fakeDiaryEntries: DiaryEntry[] = [
  {
    date: "1987-09-12",
    content:
      "On this day, the world changed and would never be the same.\n\nAndrew was born.",
  },
  {
    date: "2021-06-19",
    content: "I got married.\n",
  },
].sort((a, b) => (a.date > b.date ? -1 : 1));
