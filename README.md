# Juniors.dev Website

## Overview

This repository contains the code for the Juniors.dev website, a platform dedicated to supporting junior developers in their career growth.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Juniors-Dev/Juniors.dev.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Juniors.dev
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the site:
   ```bash
   npm start
   ```

## Project Structure

```perl
src/
├── pages/                # The main pages of the site (Home, About, Projects, etc.)
│   ├── Home
│   │   ├── sections       # Page-specific sections (Hero, Mission, Roadmap, etc.)
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   ├── translations   # Page-specific translations (Hero, Mission, Roadmap, etc.)
│   │   │   ├── Hero.js
│   │   │   ├── Projects.js
│   │   │   ├── Services.js
│   │   │   └── Contact.js
│   │   └── Home.jsx
│   ├── About
│   ├── Projects
│   ├── Team
│   └── Contact
│
├── features/                # Self-contained feature modules
│   ├── UI/                 # Reusable, presentation-only building blocks eg.Buttons, inputs, cards, etc.
│   │   ├── Button/
│   │   │   └── Button.jsx
│   │   ├── Section/
│   │   │   └── Section.jsx
│   │   ├── Tag/
│   │   │   └── Tag.jsx
│   │   └── index.js     # Barrel export for all UI components/hooks/state
│   ├── Layout/
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── LanguageToggle/
│   │   │   └── LanguageToggle.jsx
│   │   ├── translations/
│   │   └── Layout.jsx # Main layout component that composes Header, Footer, etc.
│   ├── ProjectCard/  # Composite feature modules that combine UI components + state + accept translations as props
│   ├── ServiceCard/
│   └── ExpectCard/
│
├── hooks/                   # Truly global hooks (useLocalStorage, useLocalStorageListener, etc..)
│
├── stores/                   # Global Zustand/Context slices (theme, auth, language)
│
├── utils/                   # Pure helper functions (validation, formatting)
│
├── assets/                  # Static assets (icons, images, svgs)
│
├── styles/                  # Tailwind config, global styles
│
├── App.jsx                  # Root component
└── main.jsx                 # ReactDOM.createRoot entry
```

## Git Workflow & Commit Rules

This project uses Husky + Commitlint to enforce commit message conventions and code quality before changes are pushed.

**Pre-Commit**

- Runs ESLint and Prettier on staged files via lint-staged.
- Code is automatically formatted and linted before commit is saved.

**Pre-Push**

- Runs npm run lint && npm test to ensure code passes linting and tests before being pushed.
- Tests can/will be added in future iterations.

Commit Message Rules
Commit messages follow the Conventional Commits format:

```php-template
<type>: <subject>

<body>
```

**Allowed types**

| Type         | Use for                                                               |
| ------------ | --------------------------------------------------------------------- |
| **feat**     | A new feature or functionality                                        |
| **fix**      | A bug fix                                                             |
| **docs**     | Documentation only (README, guides, inline docs, comments)            |
| **style**    | Changes that don’t affect code meaning (formatting, whitespace, etc.) |
| **refactor** | Code changes that aren’t features or fixes (e.g., restructuring)      |
| **perf**     | Performance improvements                                              |
| **test**     | Adding or updating tests                                              |
| **build**    | Changes to build system or dependencies (npm, vite, etc.)             |
| **ci**       | CI/CD workflow changes (GitHub Actions, pipelines, etc.)              |
| **chore**    | Maintenance tasks (configs, tooling, small progress commits)          |
| **revert**   | Reverts a previous commit                                             |

**Subject line rules**

- Must be lowercase
- Should be concise (max ~50 characters)
- No trailing period

examples:

correct:

```bash
feat(roadmap): add timeline component

- implemented vertical timeline layout
- added status icons for each phase
```

```bash
fix(footer): correct spacing in social icons

- adjusted flexbox alignment
- fixed margin around SVGs for better responsiveness
```

```bash
chore: update eslint and prettier configs

- fixed trailing comma rule in prettier config
- updated lint-staged to include json/md files
```

incorrect:

```bash
Added roadmap timeline        // ❌ missing type
fixes footer spacing          // ❌ wrong verb + no type
Feat: Add Timeline Component  // ❌ wrong case
```

## Tech Spec & Task Mapping

0. **Repo & Setup**

- [#1 Initialize repo, set up branch protections](https://github.com/Juniors-Dev/Juniors.dev/issues/1)
- [#2 Configure ESLint + Prettier + Husky hooks](https://github.com/Juniors-Dev/Juniors.dev/issues/2)
- [#3 CI pipeline runs lint + build](https://github.com/Juniors-Dev/Juniors.dev/issues/3)
- [#4 Configure hosting/deployment baseline](https://github.com/Juniors-Dev/Juniors.dev/issues/4)
- [#5 Setup Scaffolding](https://github.com/Juniors-Dev/Juniors.dev/issues/5)
- [#6 Configure Tailwind variables](https://github.com/Juniors-Dev/Juniors.dev/issues/6)

1. **Global Components & State**

- [#9 Reusable button styles (primary, secondary, CTA)](https://github.com/Juniors-Dev/Juniors.dev/issues/9)
- [#10 Lucide icon integration](https://github.com/Juniors-Dev/Juniors.dev/issues/10)
- [#11 Create Light/Dark toggle](https://github.com/Juniors-Dev/Juniors.dev/issues/11)
- [#12 Create language toggle](https://github.com/Juniors-Dev/Juniors.dev/issues/12)
- [#13 State manager](https://github.com/Juniors-Dev/Juniors.dev/issues/13), implement Context/Zustand to handle theme + language

Accessibility: labels, tab order, WCAG AA contrast

2. **Header**

- [#7 Create header](https://github.com/Juniors-Dev/Juniors.dev/issues/7)
  - [#20 Header Mobile](https://github.com/Juniors-Dev/Juniors.dev/issues/20)
  - [#21 Header Desktop](https://github.com/Juniors-Dev/Juniors.dev/issues/21)

**Contents:**

- Logo
- Nav links (anchor scroll)
- Theme + language toggle

3. **Hero Section**

- [#15 Hero Section](https://github.com/Juniors-Dev/Juniors.dev/issues/15)
  - [#24 Hero Mobile](https://github.com/Juniors-Dev/Juniors.dev/issues/24)
  - [#25 Hero Desktop](https://github.com/Juniors-Dev/Juniors.dev/issues/25)

Content: H1, H2, CTA button (scrolls to contact form), placeholder image

4. **Mission Statement Section**

- [#16 Mission Statement Section](https://github.com/Juniors-Dev/Juniors.dev/issues/16)
  - [#26 Mission Mobile](https://github.com/Juniors-Dev/Juniors.dev/issues/26)
  - [#27 Mission Desktop](https://github.com/Juniors-Dev/Juniors.dev/issues/27)

Dark blue background, heading + paragraph (from doc)

5. **“What to Expect” Section**

- [#17 "What to Expect" Section](https://github.com/Juniors-Dev/Juniors.dev/issues/17)
  - [#28 Expect Mobile](https://github.com/Juniors-Dev/Juniors.dev/issues/28)
  - [#29 Expect Desktop](https://github.com/Juniors-Dev/Juniors.dev/issues/29)

Content: 3 bullet points with Lucide icons, bold heading, supporting text

6. **Roadmap Section**

- [#14 Card component for roadmap items](https://github.com/Juniors-Dev/Juniors.dev/issues/14)
- [#18 Roadmap Section](https://github.com/Juniors-Dev/Juniors.dev/issues/18)
  - [#30 Roadmap Mobile](https://github.com/Juniors-Dev/Juniors.dev/issues/30)
  - [#31 Roadmap Desktop](https://github.com/Juniors-Dev/Juniors.dev/issues/31)

Structure: Vertical timeline with icons + titles + descriptions
Status states: ✅ (done), ⏳ (in progress), ✏️ (to do)

7. **Contact Form**

- [#19 Contact form](https://github.com/Juniors-Dev/Juniors.dev/issues/19)

Fields: Name*, Email*, Subject*, Message* (min. 25 chars)

Inline validation with error text

Button: orange → hover → green success state

Success message: “Thanks for reaching out! We’ll respond shortly.”

8. Footer

- [#8 Footer with socials](https://github.com/Juniors-Dev/Juniors.dev/issues/8)
  - [#22 Footer Mobile](https://github.com/Juniors-Dev/Juniors.dev/issues/22)
  - [#23 Footer Desktop](https://github.com/Juniors-Dev/Juniors.dev/issues/23)

Logo + tagline

Social media icons (SVG, hover states)

Text: © 2025 Juniors.dev | All rights reserved

### Build Flow

- Complete repo + setup tasks (#1–6)
- Implement global components/state (#9–13)
- Build header (#7, #20, #21)
- Add sections in order: Hero → Mission → Expect → Roadmap → Contact → Footer
- Hook up validation + interactivity
- Ensure responsiveness (mobile/desktop)
- QA for accessibility + UX
- Deploy to staging
