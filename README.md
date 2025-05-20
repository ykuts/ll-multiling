# Label Ladder Website

This is the official website for Label Ladder, a Swiss-Namibian company that provides end-to-end data processing and annotation services.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd label-ladder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser** to view the website.

## Project Structure

```
label-ladder/
├── public/               # Static files
│   ├── images/           # Images and other media
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   └── ...
│   └── favicon.ico
├── src/                  # Source code
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/           # UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   └── SectionHeading.jsx
│   │   └── sections/     # Section components
│   ├── pages/            # Page components/routes
│   │   ├── _app.jsx
│   │   ├── _document.jsx
│   │   ├── index.jsx (home page)
│   │   ├── about.jsx
│   │   └── ...
│   └── styles/           # Global styles
│       └── globals.css
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json
```

## Technology Stack

- **Next.js**: React framework for building the website
- **Tailwind CSS**: For styling and responsive design
- **React Icons**: For icon library (optional)
- **Framer Motion**: For animations (optional)

## Building for Production

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Images and Media

For this project to display correctly, you'll need to create a few folders in the `/public` directory:

1. `/public/images/` - For general images
2. `/public/images/team/` - For team member photos
3. `/public/images/about/` - For about page images

At minimum, you'll need:
- `/public/images/logo.png` - Main logo
- `/public/images/logo-white.png` - White version of logo for dark backgrounds
- Sample team member photos for the About page

## Branding Guide

### Color Palette

- Primary: `#00305D` (deep blue)
- Secondary: `#0086A3` (teal)
- Accent: `#ABBBCA` (light blue)
- Light: `#FFFFFF` (white)

### Typography

The site uses Montserrat font family (loaded via Google Fonts) as an alternative to Code Pro.

## Next Steps

To complete the website, you will need to implement:
1. Services page
2. Approach page
3. Case Studies page
4. Contact page

## License

All rights reserved for Label Ladder.