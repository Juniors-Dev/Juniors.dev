import { WORK_WITH_US_ENABLED } from "../../config/features";

export const headerNavLinks = [
  { to: "/", key: "home", end: true },
  { to: "/projects", key: "projects" },
  { to: "/about", key: "about" },
  ...(WORK_WITH_US_ENABLED ? [{ to: "/work-with-us", key: "work" }] : []),
];

export const footerNavLinks = [
  { to: "/", key: "home", end: true },
  ...(WORK_WITH_US_ENABLED ? [{ to: "/work-with-us", key: "work" }] : []),
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
];
