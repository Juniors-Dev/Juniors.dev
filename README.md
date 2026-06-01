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
   pnpm install
   ```
4. Start the site:
   ```bash
   pnpm dev
   ```

This project uses pnpm 10.28.1 and enforces a 30-day minimum release age for newly resolved packages through `pnpm-workspace.yaml`.

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

- Runs pnpm lint && pnpm test to ensure code passes linting and tests before being pushed.
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
| **build**    | Changes to build system or dependencies (pnpm, vite, etc.)            |
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
