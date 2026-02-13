<p align="center">
  <img src="app/favicon.ico" />
</p>

# Portfolio

This repository contains the source code for a personal portfolio website built with **Next.js** and **Tailwind CSS**. It is designed to showcase projects, experience, and capabilities as a product designer and engineer, with a focus on performance, accessibility, and clean UI implementation.

---

## Features

- **Responsive layout:** Optimized for desktop, tablet, and mobile viewports.
- **Modern UI:** Built with Tailwind CSS utilities for consistent spacing, typography, and visual rhythm.
- **Component-driven:** Reusable React/Next.js components for sections such as hero, projects, experience, and contact.
- **SEO-friendly:** Metadata support via Next.js head utilities (titles, descriptions, open graph tags).
- **Fast by default:** Server-side rendering (SSR) and static site generation (SSG) where appropriate.
- **Easy to extend:** Clear project structure to add or modify sections without rewriting core logic.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Package manager:** npm or yarn
- **Tooling:** ESLint / Prettier

---

## Project Structure

The structure may vary slightly, but the core layout generally follows:

- `app/` or `pages/` – Application routes and page-level components.
- `components/` – Reusable presentational and layout components.
- `styles/` – Global styles and Tailwind configuration (e.g. `globals.css`, `tailwind.config.js`).
- `public/` – Static assets (images, icons, favicon, etc.).
- `app/favicon.ico` – Favicon used in the README and browser tab.

Check the repository for the exact structure used in this project.

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn installed globally

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gwu205/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   # with npm
   npm install

   # or with yarn
   yarn install
   ```

### Running the Development Server

```bash
# npm
npm run dev

# or yarn
yarn dev
```

By default, the app runs at:

```text
http://localhost:3000
```

Open this URL in a browser to view the portfolio in development mode. Changes to components or pages will hot-reload automatically.

---

## Building for Production

To generate an optimized production build:

```bash
# npm
npm run build

# or yarn
yarn build
```

To start the production server after a successful build:

```bash
# npm
npm start

# or yarn
yarn start
```

The portfolio can be deployed to any environment that supports Node.js. Next.js works particularly well on platforms like Vercel, but traditional VPS or container-based deployments are also possible.

---

## Tailwind CSS

Tailwind is configured via:

- `tailwind.config.js` – Theme, colors, fonts, and design tokens.
- `postcss.config.js` – Tailwind + PostCSS pipeline.
- Global styles (usually `styles/globals.css` or `app/globals.css`) – Imports Tailwind base, components, and utilities.

Utility classes are used throughout components to keep styling co-located and maintain a consistent design system.

---

## Scripts

Common package scripts (check `package.json` for the exact list):

- `dev` – Start the development server.
- `build` – Create an optimized production build.
- `start` – Run the production server.
- `lint` – Run linting (if configured).

---

## Contributing

This repository is primarily used as a personal portfolio and is not actively seeking external contributions. If a bug is discovered or an improvement is strongly aligned with the project’s goals, feel free to open an issue or fork the repository for personal use.
