import styles from "../Roadmap.module.css";
import { RoadmapCard, STATUS_TYPES } from "./RoadmapCard";
import { useTranslation } from "@/hooks/useTranslation";
import { roadmapTranslations } from "../translations";
import usersIcon from "@/assets/users.svg";
import rocketIcon from "@/assets/rocket.svg";
import searchIcon from "@/assets/text-search.svg";
import settingsIcon from "@/assets/cog.svg";
import fileUserIcon from "@/assets/file-user.svg";
import mountainIcon from "@/assets/mountain-snow.svg";

const PHASE_ICONS = {
  users: usersIcon,
  rocket: rocketIcon,
  search: searchIcon,
  settings: settingsIcon,
  fileUser: fileUserIcon,
  mountain: mountainIcon,
};

const TRANSLATION_KEYS = {
  PHASE_1: "phase1",
  PHASE_2: "phase2",
  PHASE_3: "phase3",
  PHASE_4: "phase4",
  PHASE_5: "phase5",
  PHASE_6: "phase6",
};

const CLASSES = {
  phaseMarker: "bg-white",
};

const createPhaseData = (translate) => [
  {
    icon: PHASE_ICONS.users,
    title: translate(TRANSLATION_KEYS.PHASE_1),
    text: translate(`${TRANSLATION_KEYS.PHASE_1}Description`),
    status: STATUS_TYPES.DONE,
  },
  {
    icon: PHASE_ICONS.rocket,
    title: translate(TRANSLATION_KEYS.PHASE_2),
    text: translate(`${TRANSLATION_KEYS.PHASE_2}Description`),
    status: STATUS_TYPES.IN_PROGRESS,
  },
  {
    icon: PHASE_ICONS.search,
    title: translate(TRANSLATION_KEYS.PHASE_3),
    text: translate(`${TRANSLATION_KEYS.PHASE_3}Description`),
    status: STATUS_TYPES.TODO,
  },
  {
    icon: PHASE_ICONS.settings,
    title: translate(TRANSLATION_KEYS.PHASE_4),
    text: translate(`${TRANSLATION_KEYS.PHASE_4}Description`),
    status: STATUS_TYPES.TODO,
  },
  {
    icon: PHASE_ICONS.fileUser,
    title: translate(TRANSLATION_KEYS.PHASE_5),
    text: translate(`${TRANSLATION_KEYS.PHASE_5}Description`),
    status: STATUS_TYPES.TODO,
  },
  {
    icon: PHASE_ICONS.mountain,
    title: translate(TRANSLATION_KEYS.PHASE_6),
    text: translate(`${TRANSLATION_KEYS.PHASE_6}Description`),
    status: STATUS_TYPES.TODO,
  },
];

export function RoadmapTimeline() {
  const { translate } = useTranslation(roadmapTranslations);
  const phases = createPhaseData(translate);

  return (
    <div className={styles.timeline}>
      {phases.map((phase, idx) => (
        <div key={`${phase.status}-${idx}`} className={styles.phase}>
          <div className={`${styles.icon} ${CLASSES.phaseMarker}`} />
          <RoadmapCard {...phase} translate={translate} />
        </div>
      ))}
    </div>
  );
}
