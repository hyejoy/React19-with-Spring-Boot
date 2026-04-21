# Repository Guidelines

## Project Structure & Module Organization

This repository currently contains the React frontend for the study project. App code lives in `src/`, with route definitions in `src/router/`, page components in `src/pages/`, shared layout in `src/layouts/`, menu components in `src/components/`, and static assets in `src/assets/`. Public files such as icons live in `public/`. Build tooling is defined in `package.json`, `vite.config.ts`, `tsconfig*.json`, and `eslint.config.js`.

## Build, Test, and Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server for local development.
- `npm run build`: run TypeScript project checks and create a production build in `dist/`.
- `npm run preview`: serve the built app locally for a quick production check.
- `npm run lint`: run ESLint across the project.

## Coding Style & Naming Conventions

Use TypeScript for all new UI code. Follow the existing style: 2-space indentation, semicolons, and double quotes. Keep component and page filenames in lower camel case to match the current tree, for example `basicLayout.tsx` and `listPage.tsx`. Export React components as default exports when the file defines a single main component. Keep route-specific code close to its feature folder, and prefer clear folder names such as `pages/todo/`.

## Testing Guidelines

There is no test runner configured yet. Until one is added, treat `npm run lint` and `npm run build` as the minimum verification step before opening a pull request. When tests are introduced, place them beside the related source file or under a dedicated `src/__tests__/` directory, and use names like `listPage.test.tsx`.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit prefixes such as `feat:`, `chore:`, and `docs:`. Continue that pattern and keep messages focused, for example `feat: add todo detail route`. Pull requests should include a short summary, affected screens or routes, linked issues if any, and screenshots for visible UI changes.

## Configuration Notes

The repository README describes a broader React + Spring Boot study plan, but this checkout currently contains the frontend app only. If backend code is added later, document its module path and run commands here before changing contributor workflow.

## rules

- 모든 대답은 한국어로 대답할 것
