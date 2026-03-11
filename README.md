# SALLMA - Software Architecture for LLM-Based Multi-Agent Systems

This is the official landing page and documentation site for **SALLMA**, a multi-agent collaborative system framework designed to build and automate cognitive workflows.

## 🚀 Overview

SALLMA addresses the challenges of single-agent LLM systems—such as lack of task customization, memory, and flexibility—by providing an architecture that enables specialized agents to collaborate and solve complex, real-world problems.

- **Operational Layer**: Request intent management, real-time task execution, and dynamic agent orchestration.
- **Knowledge Layer**: Management of metamodels and configurations for workflows and agents.
- **Tech Stack**: Built with Astro, React, Keystatic CMS, and Tailwind CSS.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```sh
npm install
```

### Development

Start the local development server:

```sh
npm run dev
```

The site will be available at [http://localhost:4321](http://localhost:4321).

### CMS (Content Management)

This project uses [Keystatic](https://keystatic.com/) for local content management. To manage posts and documentation, visit the admin UI at:

[http://localhost:4321/keystatic](http://localhost:4321/keystatic)

## 📁 Project Structure

```text
/
├── src/
│   ├── content/        # Markdown/JSON content managed by Keystatic
│   ├── components/     # Astro/React components
│   ├── layouts/        # Page layouts
│   └── pages/          # Site routes
├── public/             # Static assets
├── keystatic.config.ts # CMS configuration
└── astro.config.mjs    # Astro configuration
```

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run astro`   | Run Astro CLI commands                       |

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

---
*Developed by the [Software Technologies Lab (STLab)](https://stlab.dinfo.unifi.it/) at the University of Florence.*
