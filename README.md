# EmployAI Landing Page

A modern, responsive landing page for EmployAI built with Next.js 15.7, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Next.js 15.7** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **shadcn/ui** for beautiful UI components
- **Responsive design** that works on all devices
- **Modern animations** with Framer Motion and GSAP
- **Interactive charts** with Recharts
- **Particle wave effects** for visual appeal

## Tech Stack

- **Framework:** Next.js 15.7
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion, GSAP
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/divyeshradadiya/EmployAI-landing-page.git
   cd EmployAI-landing-page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── landing/      # Landing page sections
│   ├── Button.tsx
│   ├── ChromaGrid.tsx
│   ├── InfrastructureVisualization.tsx
│   ├── MockupCharts.tsx
│   ├── NetworkVisualization.tsx
│   └── ParticleWave.tsx
└── lib/
    └── utils.ts     # Utility functions
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Component Naming Convention

All components follow PascalCase naming with descriptive suffixes:

- Section components: `Hero`, `CallToActionSection`, `HowItWorksSection`
- UI components: `Button`, `ChromaGrid`
- Visualization components: `InfrastructureVisualization`, `NetworkVisualization`

## Deployment

The application can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

For Vercel deployment:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
