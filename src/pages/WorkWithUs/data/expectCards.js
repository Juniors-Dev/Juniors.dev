import { BookOpen, CalendarCheck, Code2, Folder } from "lucide-react";

/** @typedef {{ id: string, Icon: import("lucide-react").LucideIcon, tone: "blue"|"lime", titleKey: string, bodyKey: string }} ExpectCardDef */

/** @type {ExpectCardDef[]} */
export const workWithUsExpectItems = [
  {
    id: "learning",
    Icon: BookOpen,
    tone: "blue",
    titleKey: "learningTitle",
    bodyKey: "learningBody",
  },
  {
    id: "weekly",
    Icon: CalendarCheck,
    tone: "lime",
    titleKey: "weeklyTitle",
    bodyKey: "weeklyBody",
  },
  {
    id: "tech",
    Icon: Code2,
    tone: "lime",
    titleKey: "techTitle",
    bodyKey: "techBody",
  },
  {
    id: "project",
    Icon: Folder,
    tone: "blue",
    titleKey: "projectTitle",
    bodyKey: "projectBody",
  },
];
