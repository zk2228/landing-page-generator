# Landing Page Generator

## Project Overview
This project generates production-ready React/Next.js landing pages for three brands. The workflow accepts example landing pages (screenshots, URLs, or HTML files) as reference material and produces brand-compliant, conversion-optimized pages.

## Tech Stack
- Framework: Next.js (App Router) with TypeScript
- Styling: Tailwind CSS
- Output location: /output/
- Components: /output/components/

## Brands
This project serves three distinct brands. Always read the full brand file before generating any page.

### RevitalizeMe (Telehealth)
- Brand file: /brands/revitalizeme.md
- Industry: Telehealth / wellness
- Key constraint: HIPAA-aware marketing. Never make medical claims. Always include "consult your healthcare provider" disclaimers. FDA disclaimer required for supplement pages. No before/after photos with medical claims.
- Tone: Professional, warm, trustworthy, science-informed but accessible

### LighterUSA (E-commerce)
- Brand file: /brands/lighterusa.md
- Industry: Nicotine pouches, vapes, smoking accessories
- Key constraint: Age-gate required (21+ verification). No health benefit claims. Must include nicotine warning: "WARNING: This product contains nicotine. Nicotine is an addictive chemical." No targeting of minors in copy or imagery.
- Tone: Bold, modern, lifestyle-focused, direct

### Wild Bill's Tobacco (Franchise)
- Brand file: /brands/wildbills.md
- Industry: Tobacco retail franchise
- Key constraint: Same tobacco advertising restrictions as LighterUSA. Location-specific content for Nashville expansion.
- Tone: Approachable, community-oriented, established brand feel

## Workflow
When generating a landing page:
1. Ask which brand this page is for (if not specified)
2. Read the corresponding brand file in /brands/
3. Analyze the provided example (screenshot, URL, or HTML)
4. Extract the layout structure and conversion patterns from the example
5. Generate the page using brand guidelines, NOT the example's branding
6. Include all required compliance elements for that brand's industry
7. Ensure mobile-first responsive design
8. Add SEO meta tags and Open Graph data

## Important Rules
- NEVER copy branding (colors, logos, copy) from example pages — only use their STRUCTURE as inspiration
- ALWAYS include industry-specific compliance disclaimers
- ALWAYS make pages mobile-responsive
- When in doubt about compliance, err on the side of more disclaimers
