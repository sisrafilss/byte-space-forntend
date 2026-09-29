# ByteSpace Frontend

A modern, responsive e-learning web platform built for the **ByteSpace** assessment.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Poppins (Headings) & Satoshi (Body & Labels)
- **Package Manager:** pnpm

## 📁 Project Structure

```text
byte-space/
├── public/
│   └── assets/
│       ├── svg/         # Logos & vector graphics
│       ├── images/      # Course images, avatars & illustrations
│       └── mockups/     # Full-page high-resolution design references
├── src/
│   ├── app/             # Next.js App Router (pages & layouts)
│   ├── components/      # Reusable UI components
│   └── lib/             # Utility functions & helpers
├── package.json
└── README.md
```

## 🚀 Getting Started

First, install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌿 Git Branching Strategy

Following assessment best practices:

- `main`: Production-ready baseline
- `feature/landing-page`: Feature branch containing active development & PR submission
