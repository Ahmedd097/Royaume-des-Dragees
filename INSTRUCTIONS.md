# INSTRUCTIONS.md - Royaume des Dragées Website

## Project Overview
Single-page responsive website for "Royaume des Dragées" - a luxurious celebration essentials boutique in Tunisia. The site presents life milestone services through an elegant, royal-themed experience.

## Tech Stack
- React + TypeScript
- Tailwind CSS (utility-first styling)
- Framer Motion (smooth animations)
- Vite (build tool)
- pnpm (package manager)

## Design Principles
### Visual Identity
- **Color Palette**: Gold (#D4AF37, #FFD700) and Black (#000000, #1a1a1a)
- **Language**: Arabic primary (RTL support required)
- **Aesthetic**: Tunisian elegance meets contemporary sophistication
- **Typography**: Elegant Arabic fonts (consider Noto Naskh Arabic, Cairo, or Tajawal)

### User Experience
- Mobile-first responsive design
- Smooth scroll with tasteful animations (avoid over-animation)
- Fast loading - optimize images and lazy-load where appropriate
- Accessible navigation (keyboard + screen reader friendly)
- NO browser storage APIs (localStorage/sessionStorage)

## Core Services (DO NOT ADD/REMOVE)
1. Birth celebrations (شوكولا ولادة، دراجاي عشوية ولادة)
2. Wedding & engagement celebrations (كتيبة صداق)
3. Graduation ceremonies (تخرج و كملت قرايتك)
4. Circumcion celebrations (طهور)
5. Bridal accessories (لوازم العروسة، نحاس، قفة، سطل، حكة، لوبان، حنة)

## Component Structure
```
src/
├── components/
│   ├── Hero.tsx           # Landing section with logo/tagline
│   ├── ServicesGrid.tsx   # Quick navigation cards
│   ├── ServiceDetail.tsx  # Individual service sections
│   └── Footer.tsx         # Contact info
├── assets/               # Images, icons
├── styles/              # Global styles, Tailwind config
└── App.tsx              # Main layout
```

## Development Guidelines
### Styling
- Use Tailwind utility classes ONLY (no custom CSS unless absolutely necessary)
- Stick to core Tailwind utilities - no arbitrary values that require compilation
- Gold variants: `text-yellow-600`, `bg-yellow-500`, `border-yellow-400`
- Black variants: `bg-black`, `text-gray-900`, `bg-gray-950`

### Animations
- Use Framer Motion for scroll animations and transitions
- Keep animations subtle and performant (duration: 0.3-0.6s)
- Use Intersection Observer for scroll-triggered effects
- Avoid animating heavy properties (use transform/opacity)

### Responsive Breakpoints
- Mobile: default (< 640px)
- Tablet: `sm:` (640px+)
- Desktop: `lg:` (1024px+)
- Test on: iPhone SE, iPad, Desktop 1920px

### Arabic/RTL Support
- Set `dir="rtl"` on root element
- Use logical properties: `ms-4` instead of `ml-4`
- Test text alignment and layout flow in RTL
- Ensure animations work correctly in RTL

## Content Strategy
- Focus on EXPERIENCE and EMOTION, not product listings
- Use evocative language about life's precious moments
- Avoid generic e-commerce copy
- Each service section should tell a story

## Performance Targets
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Image optimization: WebP format, lazy loading

## Testing Checklist
- [ ] Renders correctly on mobile (375px width)
- [ ] Smooth scroll animations on all devices
- [ ] RTL layout displays properly
- [ ] All interactive elements keyboard accessible
- [ ] Images load progressively
- [ ] No console errors or warnings
- [ ] Color contrast meets WCAG AA standards
- [ ] Works on Safari, Chrome, Firefox

## What NOT to Do
- ❌ Don't use localStorage or sessionStorage
- ❌ Don't add services not listed above
- ❌ Don't use heavy 3D libraries (Three.js, Spline)
- ❌ Don't create a multi-page SPA with routing
- ❌ Don't use custom fonts without fallbacks
- ❌ Don't add forms or backend integrations without approval
- ❌ Don't over-engineer - keep it simple and solid

## Contact/Business Info to Include
- Business name: Royaume des Dragées
- Location: Tunisia (mention if specific address provided)
- Social media links (if provided)
- Phone/WhatsApp for orders (if provided)

## Git Workflow
- Branch naming: `feature/hero-section`, `fix/mobile-layout`
- Commit messages: Clear and descriptive
- Test before committing: `pnpm lint && pnpm build`
- PR title format: `[Royaume] <Feature/Fix description>`

## Questions to Ask Before Starting
1. Do we have the business logo in SVG/PNG format?
2. Are there existing brand photos or should we use placeholder images?
3. What's the preferred contact method (phone, WhatsApp, Instagram)?
4. Any specific Arabic font preferences?
5. Should we include pricing or "Contact for quote" approach?
```