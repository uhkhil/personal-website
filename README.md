# Personal Website

Personal website and developer portfolio showcasing my work, experience, projects, and contact information.

## Tech Stack

This project is built using a modern frontend stack:

- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast development
- **HTML5 & CSS3**: Core web technologies
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming language that builds on JavaScript
- **[Handlebars](https://handlebarsjs.com/)**: Simple templating language using `vite-plugin-handlebars` for component reuse

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

This will run the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload if you make edits.

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

## Project Structure

```text
├── public/            # Static assets like images and fonts
├── src/               # Application source code
│   └── components/    # Reusable Handlebars components (e.g., footer, header)
├── index.html         # Main entry point and Home page
├── experience.html    # Experience page
├── package.json       # Project dependencies and scripts
├── vite.config.ts     # Vite configuration
└── eslint.config.js   # ESLint configuration
```

## Setup & Configuration

- **ESLint & Prettier**: Configured for code formatting and linting.
- **Tailwind CSS**: Integrated with Vite to process and bundle styles.
- **Handlebars**: Used as a template engine for HTML component reuse.

## License

**MIT License**

The code in this repository is licensed under [MIT](LICENSE).

All personal content and images belong to Akhil Kumar and may not be reused without permission.
