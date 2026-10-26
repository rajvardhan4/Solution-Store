# Solution Store

Next.js App Router storefront built with React and Motion.

## Development
Requires Node.js 22+ (CI uses 24). Run `npm ci`, then `npm run dev`.

## Production
Run `npm run build` to generate the static site in `out/`. The GitHub Actions workflow sets `NEXT_PUBLIC_BASE_PATH=/Solution-Store` and deploys the Next.js export to GitHub Pages. For a root-domain host, omit this variable before building.

## Source structure
- `app/`: homepage, shared layout, product routes and 404.
- `components/`: reusable header, footer, catalogue, previews, product details, theme and motion controls.
- `lib/products.js`: product content, categories, prices and live portal URLs.
- `public/assets/`: brand logos.
- `scripts/postbuild.mjs`: GitHub Pages metadata and redirects for old product URLs.

## Products
- `/products/chat-pilot/`: introductory INR 999/month.
- `/products/hrm/`: introductory INR 1,499/month.

Dark/light themes, React search and filtering, Motion scroll progress and word reveals, CSS 3D brand cube and rings, card tilt, motion pause and reduced-motion support. All homepage product links stay within the store. Actual application links appear on detail pages. Interface previews are illustrative. Online checkout is not configured.

GitHub Pages serves the static export. Future server-side authentication, APIs and payments require a server-capable host such as Vercel.
