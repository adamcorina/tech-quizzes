# Right Tool Finder — Tech Quizzes

A fast, minimal React 19 + Vite app for interactive tech stack decision quizzes.

## 🚀 Overview

**Right Tool Finder** helps you choose the right frontend and backend technologies for your project. Answer a few yes/no questions and get tailored recommendations for:

- **Frontend rendering strategies** (SSG, SSR, ISR, CSR, ESR)
- **Styling approaches** (CSS, utility-first, style systems, headless, component kits)
- **Backend architectures** (monolith, serverless, microservices)
- **Web caching strategies** (HTTP/CDN, client, server, database)

No data leaves your browser. All logic runs client-side.

## ✨ Features

- Instant, interactive quizzes — no backend required
- Clear, opinionated recommendations based on your answers
- Learn pages for each approach: use cases, frameworks, tips
- Built with [React 19](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- Fully open source and easy to extend

## 🖥️ Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the dev server:**
   ```sh
   npm run dev
   ```

## 🛠️ Build & Deploy

To build for production:
```sh
npm run build
```

To preview the production build:
```sh
npm run preview
```

To deploy to GitHub Pages:
```sh
npm run deploy
```

## 📁 Project Structure

- `src/registry.ts` — Quiz registry and configuration
- `src/routes/` — Main app routes (Home, Quiz, Learn)
- `src/components/` — UI components
- `src/data/` — Quiz questions, options, and approach info
- `src/types/` — TypeScript types

## 📝 Adding a New Quiz

1. Add your questions, options, and approach info in `src/data/your-quiz/`.
2. Register your quiz in [`src/registry.ts`](src/registry.ts).
3. That’s it! The UI will pick it up automatically.

## 📄 License

MIT

---

Made with ❤️ by [Corina Adam](https://github.com/adamcorina)