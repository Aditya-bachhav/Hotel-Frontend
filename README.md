## Hotel K Max Digital Concierge

A high-performance, spec-accurate landing page for Hotel K Max (Ajwa Road, Vadodara). The experience follows the "High-Contrast Liquid Luxury" direction—full-viewport hero, parallax glide, WhatsApp-first conversion path, swipeable room deck, and ever-present thumb-zone CTA so guests can inquire in two taps.

### Tech Stack

- Next.js 16 (App Router, React 19)
- TypeScript
- Tailwind CSS v4 (mobile-first utilities)
- Framer Motion for parallax and spring reveals
- Lucide React for iconography
- `next/font` with Playfair Display + Inter stack

- **Liquid hero**: Parallax-backed dark hero with the mandated headline, metallic gradient typography, stats rail, and WhatsApp CTA.
- **Flow metrics & journey timeline**: Animated cards quantify concierge speed/occupancy, followed by a three-step "Liquid Flow" arrival story.
- **Bento amenities grid**: Highlights free parking, 3rd-floor privacy with elevator, vegetarian breakfast, family layouts, and 24-hour check-in.
- **Swipeable room showcase**: Scrollable card rail for Deluxe, Super Deluxe, and Family Suite with imagery, capacity, and descriptions.
- **Trust & social proof**: Hard-coded 4.7/5 JustDial snippet plus review callouts for cleanliness and fast concierge replies.
- **Neighborhood radar + facility notes**: Address, nearby perks with travel times, lift/parking badges, and map CTA aligned to the Ajwa Road spec.
- **Thumb-zone CTA bar**: Always-on floating bar (mobile) mirroring the hero CTA so WhatsApp booking is never more than two taps away.

> Unsplash photos remain placeholders—swap them with branded imagery before launch.

### Getting Started

1. **Install dependencies**

	```bash
	npm install
	```

2. **Run the development server**

	```bash
	npm run dev
	```

	Visit [http://localhost:3000](http://localhost:3000) to preview the site.

3. **Lint & format**

	```bash
	npm run lint
	```

4. **Create a production build**

	```bash
	npm run build
	```

### Customization Notes

- Update `WHATSAPP_LINK` (hero, CTA section, bottom bar), phone dial link, and copy deck inside `components/LandingExperience.tsx` when contact details evolve.
- The golden crest in `components/Logo.tsx` now references `public/logo.svg`; tweak the gradient or sizing classes there when art direction evolves.
- Replace the Unsplash hero image with a brand photo (store in `public/` and adjust `next.config.ts` if using an external CDN) to keep LCP low.
- Tailwind tokens for the bold-contrast palette live inside `app/globals.css`; tweak them if the art direction changes.
- Animation easing/stiffness is defined inline with Framer Motion. Adjust the spring values if you want snappier or slower reveals.

### Available Scripts

- `npm run dev` - start the Next.js dev server with Turbopack
- `npm run lint` - run ESLint using the Next.js config
- `npm run build` - produce the production bundle
- `npm run start` - serve the compiled build (after `npm run build`)

### Deployment

Deploy to any Node-friendly host (Vercel, Azure Static Web Apps, etc.). For best results, set `NEXT_TELEMETRY_DISABLED=1` if telemetry is not allowed, and configure environment variables or secrets for analytics/pixels when you add them later.
