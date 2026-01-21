# Portfolio

A modern, responsive portfolio website built with Next.js and TypeScript, featuring smooth animations and a contact form with email functionality.

## Overview

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Yup validation
- **Notifications**: Sonner toast notifications
- **Icons**: Lucide React

## Key Features

- Responsive design with mobile-first approach
- Smooth scroll navigation
- Animated sections and components
- Contact form with email integration
- Dark theme with purple accent colors
- Optimized performance with Next.js

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Environment Variables

Create a `.env.local` file with:

```
EMAIL_ADDRESS=your-email@gmail.com
```

## Main Packages

- `next`: 16.1.1 - React framework
- `react`: 19.2.3 - UI library
- `typescript`: 5.x - Type safety
- `tailwindcss`: 4.x - Utility-first CSS
- `framer-motion`: 12.26.1 - Animation library
- `react-hook-form`: 7.71.1 - Form management
- `yup`: 1.7.1 - Schema validation
- `sonner`: 2.0.7 - Toast notifications
- `lucide-react`: 0.562.0 - Icon library

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # API route for contact form
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── common/          # Reusable components
│   ├── contact/         # Contact form section
│   ├── footer/          # Footer component
│   ├── navbar/          # Navigation bar
│   └── ...              # Other sections
├── lib/
│   └── mailer.ts        # Email configuration
└── models/
    └── contactSchema.tsx # Form validation schema
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

