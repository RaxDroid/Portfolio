# Raul Sanchez Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

## Overview
This repository contains a responsive one-page portfolio for **Raul Sanchez (Software Engineer / CTO)** with sections for:
- Hero
- Projects (including Alrocam product suite logos)
- Experience
- Education
- Skills
- Contact and social links

## Tech Stack
- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- CSS (custom styling)

## Getting Started
### Prerequisites
- Node.js 18+
- npm

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Production build
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## Project Structure
```text
src/
  components/
    Navbar.tsx
    Hero.tsx
    Projects.tsx
    Experience.tsx
    Education.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
  App.tsx
  App.css
  index.css
public/
  logo.svg
  arccentral.png
  arcdriver.png
  archealth.png
  arcsupply.png
  arcunit.png
```

## Customization
Update content directly in:
- `src/components/Hero.tsx`
- `src/components/Projects.tsx`
- `src/components/Experience.tsx`
- `src/components/Education.tsx`
- `src/components/Skills.tsx`
- `src/components/Contact.tsx`

Update branding assets in:
- `public/logo.svg`
- `public/*.png` (project logos)

## Deployment
This repo includes Cloudflare configuration in `wrangler.jsonc` with `dist/` as static assets output.

Typical deployment flow:
```bash
npm run build
npx wrangler deploy
```

## License
This project is provided as a personal portfolio codebase. Add a license file if you want to define reuse terms publicly.
