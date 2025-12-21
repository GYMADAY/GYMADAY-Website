# GYMADAY Website

A modern, responsive website for GYMADAY - a revolutionary fitness platform connecting gym enthusiasts with premium fitness facilities across India.

## 🎨 Brand Identity

- **Name:** GYMADAY
- **Tagline:** "Why Commit? Just Gym it."
- **Colors:** 
  - Dark Orange: `#FF4500`
  - Black: `#000000`
- **Logo:** Located in `/public/Logo.png`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Gym/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── gyms/              # Gyms listing page
│   ├── about-us/          # About Us page
│   ├── privacy-policy/    # Privacy Policy page
│   ├── terms-conditions/  # Terms & Conditions page
│   ├── not-found.tsx      # 404 error page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   └── Logo.png          # GYMADAY logo
└── package.json          # Dependencies
```

## 📄 Pages

- **Home** (`/`) - Landing page with tagline, concept overview, and contact section
- **Gyms** (`/gyms`) - Static listing of partner gyms (booking functionality coming in Phase 2)
- **About Us** (`/about-us`) - Company information, mission, and vision
- **Privacy Policy** (`/privacy-policy`) - Privacy policy document
- **Terms & Conditions** (`/terms-conditions`) - Terms of service
- **404** - Custom branded error page

## 🎯 Phase 1 Features

✅ Brand-aligned website design  
✅ Responsive, mobile-first layout  
✅ All required pages implemented  
✅ Logo integration (header, footer, favicon)  
✅ Contact information display  
✅ SEO-friendly structure  

## 🔜 Phase 2 (Coming Soon)

- Gym booking functionality
- QR code generation and scanning
- User authentication
- Payment integration
- Subscription management
- Backend API integration

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Deployment:** Ready for Vercel, Netlify, or any Node.js hosting

## 📧 Contact

For questions or support, contact: **gymaday.app@gmail.com**

---

© 2025 GYMADAY. All rights reserved. Made with ❤️ in India

