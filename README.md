# The Well Connected — Marketing Website

A production-quality marketing website for **The Well Connected**, a premium creative agency. Built with Next.js (App Router), React, TailwindCSS, and Framer Motion.

## Design

- **Brand colors:** Wistful (#ADA8D3), Las Palmas (#C9DB32), Alabaster (#EEECE1), White, Black
- **Typography:** Playfair Display (headlines), Inter (body)
- **Tone:** Modern, editorial, minimal, premium — similar to Pentagram, IDEO, A24-style design systems

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TailwindCSS**
- **Framer Motion** (animations)
- **TypeScript**

## Project Structure

```
/components     — Reusable UI (Header, Footer, Button, Section, MotionInView, TextReveal)
/sections       — Page sections (Hero, AboutCompany, CorePillars, Services, WorkGallery, CTASection)
/app            — Routes: Home, About, Services, Work, Approach, Contact, Work/[slug]
/styles         — globals.css, Tailwind
```

## Pages

- **Home** — Hero, Our Mission, Core Pillars, Services, Case Studies gallery, CTA
- **About** — Mission, Vision, Ethos, Impact
- **Services** — Six service offerings with descriptions
- **Work** — Gallery of case studies
- **Work/[slug]** — Case study detail (Challenge, Strategy, Execution, Results)
- **Approach** — Five-step process (Discover → Measure & Evolve)
- **Contact** — Form (Name, Email, Company, Project Description) + Email, Instagram, LinkedIn

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## License

Private — The Well Connected.
