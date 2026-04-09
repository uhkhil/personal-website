# Personal Website

Personal website and developer portfolio showcasing my work, experience, projects, and contact information. The website is hosted on [https://akhil-kumar.com](https://akhil-kumar.com).

## Tech Stack

This project is built using a modern frontend stack:

- **[Astro](https://astro.build/)**: The web framework for content-driven websites
- **HTML5 & CSS3**: Core web technologies
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming language that builds on JavaScript

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/uhkhil/personal-website.git
   ```

2. Navigate into the project directory:

   ```bash
   cd personal-website
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server:

```bash
npm run dev
```

This will run the app in development mode. Open [http://localhost:4321](http://localhost:4321) to view it in your browser. The page will reload if you make edits.

## Available Scripts

In the project directory, you can run:

- `npm run dev`
  Starts the development server.
- `npm run build`
  Builds the app for production to the `dist` folder. It correctly bundles Vite and optimizes the build for the best performance.
- `npm run preview`
  Locally preview the production build.
- `npm run lint`
  Runs ESLint to catch and fix problems.
- `npm run format`
  Formats the code using Prettier.
- `npm run deploy`
  Builds the app for production and deploys it using Cloudflare Wrangler.

## Project Structure

```text
├── public/            # Static assets like images and fonts
├── src/               # Application source code
│   ├── components/    # Reusable Astro components (e.g., footer, header)
│   ├── content/       # Type-safe Content Collections
│   ├── layouts/       # Astro layouts
│   └── pages/         # Astro file-based routing
├── package.json       # Project dependencies and scripts
├── astro.config.mjs   # Astro configuration
└── eslint.config.js   # ESLint configuration
```

## Data Flow

The project's content is managed via Astro Content Collections in the `src/content/` directory. This includes Markdown and metadata.

Astro Content Collections provide fully type-safe data access inside components and pages, enabling easy content updates without directly editing the HTML structures.

## Setup & Configuration

- **ESLint & Prettier**: Configured for code formatting and linting.
- **Tailwind CSS**: Integrated with Astro to process and bundle styles.
- **Astro**: Used as the core framework for routing and component structure.

## License

**MIT License**

The code in this repository is licensed under [MIT](LICENSE).

All personal content and images belong to Akhil Kumar and may not be reused without permission.
