# RevitalizeMe Landing Page Template

## How to Use This Template

1. Open **Claude Code** (claude.ai/code) → select `landing-page-generator` repo
2. Start a **new session** (use `/clear` between pages)
3. Copy the **Claude Code Prompt** below
4. Fill in the `[BRACKETS]` with your product details
5. Paste into Claude Code
6. Review → Merge PR on GitHub → Live on Vercel in ~1 minute

---

## Claude Code Prompt (Copy & Customize)

```
Read brands/revitalizeme.md for brand guidelines, then create a landing page at output/src/app/[PRODUCT-SLUG]/page.tsx

PRODUCT: [PRODUCT NAME]
- [Key feature 1]
- [Key feature 2]
- Benefits: [List main benefits]
- Certifications: [List certifications]
- Size/Format: [Product size, form factor]
- Price: $[XX.XX] (was $[XX.XX], SAVE [X]%)
- Subscribe & Save: $[XX.XX]/month (15% off)

REFERENCE STYLE: [Paste a URL of a page you like, OR say "Use the collagen peptides page as reference"]

SECTIONS TO INCLUDE:
1. Promo bar (free shipping $50+ | 60-day guarantee)
2. Sticky nav (RevitalizeMe logo + Shop Now button)
3. Hero/buy box (product image + name, rating, price, subscribe & save, Add to Cart, trust badges)
4. Trust badges marquee (certifications scrolling)
5. Education section — why this ingredient matters (include 3 stat cards)
6. Benefits grid (4 cards with icons — use "may support" language)
7. "What Makes Ours Different" checklist (6-8 points with checkmarks)
8. How to Use (3 steps: visual numbered guide)
9. Supplement Facts panel (serving size, nutrients, ingredients, allergen info)
10. Customer reviews (3 testimonials with star ratings + "results may vary")
11. FAQ accordion (6-8 questions with expand/collapse)
12. 60-day money-back guarantee section
13. Final CTA (dark teal background, product name, price, Shop Now button)
14. Footer (links, FDA disclaimer, medical disclaimer, contact info)
15. Sticky Add to Cart bar (appears on scroll past hero)

PRODUCT IMAGE: Use <img src="/[IMAGE-FILENAME]" /> — I'll upload the image to output/public/ on GitHub.

REQUIREMENTS:
- Brand colors: #294547 (dark teal) primary, #81D9DE (aqua teal) accent
- Fonts: Yeseva One for headings, Source Sans 3 for body text
- Full compliance (see below)
- Mobile-first responsive design
- Single page.tsx file with Tailwind CSS
- Commit directly to main branch (NOT a pull request)

COMPLIANCE (MANDATORY — DO NOT SKIP):
- FDA disclaimer: "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
- All benefit claims must use: "may support," "may help," "designed to help," "formulated to support"
- NEVER use absolute claims like "will improve," "cures," "treats," "prevents"
- Every testimonial must include: "Individual results may vary"
- Reviews section must include: "Results may vary. These testimonials do not constitute a guarantee of results. Consult your healthcare provider."
- Include "Consult your healthcare provider before starting any supplement" near purchase areas
- No before/after photos with medical claims
```

---

## Product Ideas to Build Next

### Berberine ("Nature's Ozempic")
- **Slug:** `/berberine`
- **Angle:** Trending weight management supplement, "Nature's Ozempic" positioning
- **Key benefits:** Blood sugar support, metabolic health, weight management support
- **Content hooks:** Pair with GLP-1 content strategy, cite trending social media interest
- **Compliance notes:** Extra careful — cannot claim weight loss directly. Use "may support healthy metabolism" and "may help maintain blood sugar levels already within normal range"

### GLP-1 Support / Telehealth Consultation
- **Slug:** `/glp1-consultation` or `/weight-management`
- **Angle:** Telehealth consultation landing page (not a product page — a service page)
- **Key benefits:** Licensed providers, personalized plans, convenient telehealth
- **Compliance notes:** HIPAA-aware marketing, telehealth state disclaimers, no guaranteed outcomes
- **Different structure:** Hero → How it works (3 steps) → What to expect → Provider credentials → FAQ → Book consultation CTA

### Vitamin D3 + K2
- **Slug:** `/vitamin-d3-k2`
- **Key benefits:** Bone health, immune support, calcium absorption
- **Certifications:** Same lineup as collagen

### Omega-3 Fish Oil
- **Slug:** `/omega-3`
- **Key benefits:** Heart health, brain function, joint support
- **Content hooks:** Wild-caught, third-party tested for purity

### Magnesium Complex
- **Slug:** `/magnesium`
- **Key benefits:** Sleep support, muscle relaxation, stress response
- **Content hooks:** "Most Americans are deficient" angle

### Probiotic Blend
- **Slug:** `/probiotics`
- **Key benefits:** Gut health, digestive support, immune function
- **Content hooks:** CFU count, strain diversity, shelf-stable

---

## Section-by-Section Copywriting Guide

Use this to customize the copy for each product. Replace the examples with your product specifics.

### Section 1: Promo Bar
```
FREE SHIPPING ON ORDERS $50+ | 60-DAY MONEY-BACK GUARANTEE
```

### Section 2: Hero / Buy Box
- **Tagline:** REVITALIZEME® SUPPLEMENTS
- **Product name:** [Full Product Name]
- **Subtitle:** [Key differentiator — e.g., "Grass-Fed & Pasture-Raised · Types I & III"]
- **Rating:** ★★★★★ ([XXX] Reviews)
- **Price:** $[XX.XX] ~~$[XX.XX]~~ SAVE [X]%
- **Subscribe box:** Subscribe & Save 15% → $[XX.XX]/month · Free shipping · Cancel anytime
- **CTA:** Add to Cart
- **Trust badges below CTA:** ✓ Free Shipping $50+ · ✓ 60-Day Guarantee · ✓ 3rd-Party Tested

### Section 3: Trust Badges Marquee
Pick the ones that apply to your product:
- 🌿 Grass-Fed & Pasture-Raised
- 🔬 3rd-Party Tested
- 🚫 Gluten Free
- 🌱 Non-GMO
- 🥛 Dairy Free
- 🫘 Soy Free
- 🦐 Shellfish Free
- 🇺🇸 Made in USA
- ⚙️ GMP-Certified

### Section 4: Education ("Why [Ingredient] Matters")
Structure:
- **Paragraph 1:** What is this ingredient and why does the body need it?
- **Paragraph 2:** Why supplementation may help (use qualified language)
- **3 Stat Cards:**
  - Stat 1: A compelling number about the problem (e.g., "1-1.5% annual decline...")
  - Stat 2: A product-specific number (e.g., "19 amino acids")
  - Stat 3: A dosage/serving highlight (e.g., "10g per scoop")

### Section 5: Benefits Grid
4 cards, each with:
- **Icon** (emoji or SVG)
- **Benefit name** (one word: Hair, Skin, Nails, Joints, etc.)
- **Description** (2-3 sentences using "may support" language)

⚠️ ALWAYS end this section with the FDA disclaimer.

### Section 6: "What Makes Ours Different"
6-8 checkmark items, each with:
- **Bold title** (e.g., "Grass-Fed & Pasture-Raised Source")
- **One-line description** (e.g., "Our bovine collagen comes from cattle raised on pasture without hormones or antibiotics.")

### Section 7: How to Use
3 steps format:
- **01 — [Action Word]** (e.g., "Scoop") + one-line instruction
- **02 — [Action Word]** (e.g., "Mix") + one-line instruction
- **03 — [Action Word]** (e.g., "Enjoy Daily") + one-line instruction

### Section 8: Supplement Facts
Include:
- Serving size and servings per container
- Calories, Protein, Sodium (if applicable)
- Active ingredient(s) with amounts
- Full ingredient breakdown (amino acids, strains, etc.)
- Other Ingredients
- Allergen Info

### Section 9: Customer Reviews
3 reviews with:
- Star rating (mix it up: two 5-star, one 4-star)
- Quote (2-3 sentences, specific and believable)
- Name (First name + Last initial)
- ⚠️ Must include "Individual results may vary" on each
- ⚠️ Section footer: "Results may vary. These testimonials do not constitute a guarantee of results. Consult your healthcare provider."

### Section 10: FAQ
6-8 questions. Always include:
1. What type of [ingredient] is in this product?
2. How should I take [product]?
3. When might I start to notice results?
4. Is this product safe if I have allergies?
5. Can I take this with other supplements?
6. Is this product third-party tested?
7. [Product-specific question]
8. [Product-specific question]

### Section 11: 60-Day Guarantee
Standard copy:
```
We stand behind our product. If you're not satisfied for any reason,
contact us within 60 days of purchase for a full refund — no questions
asked. We want you to feel confident trying our [Product Name].
```
CTA: "Try It Risk-Free"

### Section 12: Final CTA
Dark teal (#294547) background section:
- **Headline:** "Elevate Your Wellness Journey" (or product-specific)
- **Subtext:** "Join thousands who have made RevitalizeMe® [Product Name] part of their daily routine."
- **CTA Button:** "Shop Now — $[XX.XX]"
- **Fine print:** "Free shipping on orders $50+ · Subscribe & save 15%"

---

## Image Upload Checklist

Before or after running the Claude Code prompt:

1. Go to **github.com/zk2228/landing-page-generator**
2. Navigate to **output → public**
3. Click **Add file → Upload files**
4. Upload your product image (use descriptive filename, e.g., `berberine-bottle-front.jpg`)
5. **Commit directly to main**
6. Make sure the filename in your prompt matches exactly

---

## Post-Launch Checklist

After the page is live, review these:

- [ ] Product image loads correctly (not placeholder)
- [ ] All prices are accurate
- [ ] Subscribe & Save math is correct (15% off)
- [ ] FDA disclaimer appears (at least twice: after benefits + footer)
- [ ] "May support" language on ALL benefit claims
- [ ] "Results may vary" on ALL testimonials
- [ ] "Consult healthcare provider" disclaimer present
- [ ] FAQ accordion opens/closes properly
- [ ] Sticky Add to Cart bar appears on scroll
- [ ] Mobile responsive (test on phone)
- [ ] All links point somewhere reasonable (or are placeholder #)
- [ ] No absolute medical claims anywhere
- [ ] Supplement Facts are accurate to your actual label

---

## Quick Iteration Prompts

Use these in Claude Code to make changes after the page is live:

**Change copy:**
```
In output/src/app/[SLUG]/page.tsx, change the hero headline from "[old text]" to "[new text]". Commit to main.
```

**Add a section:**
```
In output/src/app/[SLUG]/page.tsx, add a new "As Seen In" logo bar section between the trust badges and the education section. Include placeholder logos for [publications]. Commit to main.
```

**Change colors/styling:**
```
In output/src/app/[SLUG]/page.tsx, make the Add to Cart button use the dark teal (#294547) background instead of aqua. Commit to main.
```

**Swap product image:**
```
In output/src/app/[SLUG]/page.tsx, change the product image src from "/old-image.jpg" to "/new-image.jpg". Commit to main.
```

**Add email capture:**
```
In output/src/app/[SLUG]/page.tsx, add an email capture section before the final CTA. Include a headline "Get 10% Off Your First Order", an email input field, and a submit button. Style it with the aqua teal background. Commit to main.
```

---

## Compliance Quick Reference

### ALWAYS Use (Safe Language)
- "May support..."
- "May help..."
- "Designed to help..."
- "Formulated to support..."
- "Individual results may vary"
- "Consult your healthcare provider"

### NEVER Use (Unsafe Language)
- "Will improve..."
- "Cures..."
- "Treats..."
- "Prevents..."
- "Guaranteed results"
- "Clinically proven to..." (unless you have actual clinical trials)
- Before/after photos with medical claims

### Required Disclaimers
1. **FDA Disclaimer:** "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
2. **Medical Disclaimer:** "Consult your healthcare provider before starting any new supplement regimen."
3. **Testimonial Disclaimer:** "Individual results may vary. These testimonials do not constitute a guarantee of results."
