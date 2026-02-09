# RevitalizeMe — Comprehensive Brand Guide

> **Use this document as the single source of truth when generating any RevitalizeMe landing page, component, email, or marketing asset.**

---

## 1. Brand Overview

### Identity
- **Brand Name:** RevitalizeMe (one word, capital R and M, registered trademark ®)
- **Industry:** Telehealth / Wellness
- **Tagline:** "Elevate your wellness journey"
- **Mission:** Make expert, personalized healthcare accessible to everyone, anywhere — bridging the gap between traditional medicine and modern convenience by delivering safe, science-backed treatments through compassionate telehealth care, backed by real physicians.
- **Purpose Statement:** "Our mission is to empower people to feel confident, supported, and in control of their wellness journey — from hair and skin to hormones, weight, and total well-being. Better health should be simple, approachable, and designed around real life."

### Service Areas
- Weight management (GLP-1 medications: Semaglutide, Tirzepatide)
- Hair loss (Finasteride, Minoxidil)
- Sexual wellness / ED (Sildenafil, Tadalafil)
- Skin care (Tretinoin, anti-aging)
- Hormone optimization / Testosterone
- Peptides / Longevity
- Supplements / Collagen
- Cannabis/CBD policy content (informational only — not sold)

### How It Works (Customer Journey)
Use this 4-step flow whenever a "how it works" section is needed:
1. **Tell Us About Yourself** — Complete a quick online medical questionnaire so our licensed providers can understand your goals, symptoms, and health history.
2. **Connect With a Licensed Provider** — One of our clinicians reviews your intake, asks follow-up questions, and determines the safest, most effective treatment plan for you — 100% online.
3. **Get a Personalized Treatment Plan** — If approved, your provider customizes a prescription plan tailored to your needs — whether it's hair, skin, weight support, hormones, or sexual wellness.
4. **Delivered to Your Door** — Your medication is discreetly shipped to your home from a licensed pharmacy. No waiting rooms, no in-person visits.

---

## 2. Visual Identity

### Color Palette (from official brand guide PDF)

| Role | Name | Hex | RGB | CMYK | Pantone | Usage |
|------|------|-----|-----|------|---------|-------|
| **Primary Dark** | Dark Teal | `#294547` | R41 G68 B71 | C92 M70 Y69 K38 | 7477 C | Backgrounds, headers, nav, footer, dark sections |
| **Primary Light** | Aqua Teal | `#81D9DE` | R129 G217 B222 | C60 M0 Y20 K0 | 318 C | Accent color, highlights, icons, "Me" in logo, CTAs, links |
| **White** | White | `#FFFFFF` | R255 G255 B255 | — | — | Text on dark backgrounds, page backgrounds |
| **Near Black** | Charcoal | `#1A1A2E` | — | — | — | Body text on light backgrounds |
| **Light Gray** | Soft Gray | `#F0F5F5` | — | — | — | Alternate section backgrounds, cards |
| **Medium Gray** | Text Gray | `#5A6B6E` | — | — | — | Secondary/supporting body text |

**Tint scales:** Both primary colors can be used at 20%, 40%, 60%, 80%, and 100% opacity for backgrounds, gradients, and layered UI elements.

**Gradient usage:** The brand uses dark teal-to-slightly-lighter-teal gradients on hero and feature sections (visible in static social assets). Apply as `background: linear-gradient(135deg, #294547 0%, #3A5F62 100%)` or similar subtle shifts.

#### Tailwind CSS Implementation
```js
// tailwind.config.js
colors: {
  brand: {
    'dark-teal': '#294547',
    'aqua': '#81D9DE',
    'charcoal': '#1A1A2E',
    'soft-gray': '#F0F5F5',
    'text-gray': '#5A6B6E',
  }
}
```

### Typography

| Role | Font | Weight | Source | Fallback |
|------|------|--------|--------|----------|
| **Display / Hero headings** | Yeseva One | Regular (400) | Google Fonts | Georgia, serif |
| **Section headings (H2-H3)** | Yeseva One | Regular (400) | Google Fonts | Georgia, serif |
| **Body text** | Source Sans 3 (or Inter) | Regular (400) | Google Fonts | system-ui, sans-serif |
| **UI / CTAs / Nav** | Source Sans 3 (or Inter) | Semi-Bold (600) | Google Fonts | system-ui, sans-serif |

- **Yeseva One** is a high-contrast serif display typeface (designed by Jovanny Lemonad). Use it for all headlines and display text. It gives the brand a premium, editorial feel.
- **Body font** should be a clean sans-serif for readability. Source Sans 3 or Inter both work.
- Import: `@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Source+Sans+3:wght@400;600;700&display=swap');`

### Logo

- **Structure:** "Revitalize" in Yeseva One serif + "Me" in script lettering inside a circular swoosh, with ® mark
- **Two layout modes:**
  - **Wide Mode** — horizontal: "Revitalize" + "Me" circle inline (use in nav bars, headers)
  - **Rectangle Mode** — stacked: "Revitalize" on top, "Me" circle centered below (use in footers, social, square spaces)
- **Color variations:**
  - V1: Dark teal text + aqua "Me" circle on white/light background (default for web)
  - V2: White text + aqua "Me" circle on dark teal background (for dark sections/footers)
  - V3: White text + white "Me" circle on aqua teal background (alternate accent)
- **Clear space:** Minimum padding around logo = half the height of the letter "R" on all sides
- **Do not** place logo on busy/patterned backgrounds, distort proportions, or change brand colors

### Iconography
- Use outlined, line-weight icons (not filled) in aqua teal (`#81D9DE`) or white
- Icon containers: teardrop/pin shapes or simple circles with a light teal border
- Style: medical-professional but friendly — stethoscopes, chat bubbles, syringes, paper planes
- Keep icons simple and recognizable at small sizes

### Imagery & Photography Style
- Clean, well-lit, modern healthcare aesthetic
- No stock photos that look overly staged or corporate
- No before/after photos paired with medical claims
- Stock photos must be labeled as illustrative
- Show diversity in age, ethnicity, and body type
- Avoid clinical/hospital imagery — lean toward lifestyle and at-home wellness

---

## 3. Tone of Voice

### The Core Voice
**Who we sound like:** A smart friend who happens to be a doctor. Confident without being arrogant. Clear without being condescending. Empathetic without being soft.

**Who we DON'T sound like:**
- Corporate healthcare ("your wellness journey partner")
- Bro-science influencer ("trust me bro, this works")
- Academic journal (inaccessible jargon)
- Scared lawyer (disclaimer soup)

### Five Voice Attributes

#### 1. DIRECT
Get to the point. Patients are Googling because they want answers.

- NO: "Many individuals find themselves wondering about the various options that might be available for addressing concerns related to weight management."
- YES: "Weight loss medications work. Here's how to know if they're right for you."

#### 2. CREDIBLE
Cite sources. Name mechanisms. Don't hide behind vague claims.

- NO: "Studies show this might help some people."
- YES: "A 2023 NEJM study found Semaglutide patients lost an average of 15% body weight over 68 weeks."

#### 3. EMPATHETIC
These topics are personal. Don't shame. Don't minimize.

- NO: "If you'd just exercise more, you wouldn't need medication."
- YES: "Weight loss is complex — genetics, hormones, and lifestyle all play a role. Medication can be one effective tool in your approach."

#### 4. PRACTICAL
Give people something to do with the information.

- NO: "Hormone optimization is an emerging field with many considerations."
- YES: "Here's how to know if your testosterone levels warrant a conversation with a provider — and what that conversation should cover."

#### 5. HONEST ABOUT LIMITATIONS
Build trust by admitting what we don't know or can't do.

- NO: "Our treatments will solve your hair loss."
- YES: "Finasteride works for most men — about 80-90% see results. It works best for maintaining what you have. If you've been losing hair for years, expectations should be realistic."

### Tone by Content Type

| Content Type | Tone |
|---|---|
| Landing pages / Service pages | Confident, clear, conversion-focused |
| Blog / Pillar posts | Educational, authoritative, thorough |
| FAQ answers | Direct, practical, concise |
| Social media | Conversational, punchy, shareable |
| Email | Personal, action-oriented |
| Policy/news content | Informative, neutral, timely |

---

## 4. Copy & Writing Rules

### Word Choice

| Always Use | Never Use |
|---|---|
| Patients | Clients, customers, users |
| Provider | Doctor (unless specifically an MD) |
| Treatment | Solution, fix, cure |
| May help, often helps | Will help, guaranteed to |
| Evidence suggests | Studies prove |
| Manage, address | Cure, eliminate |
| Schedule a consultation | Book now, sign up |
| Learn more | Click here |
| Clinically supported | Guaranteed results |
| Evidence-based option for | Best treatment for |
| Generally well-tolerated | No side effects |
| If you're experiencing [symptoms] | You have [condition] |
| Prescribed after consultation | Prescription not needed |

### Medical Terms: Explain, Don't Avoid
When using medical terminology, explain it immediately.

- NO: "GLP-1 agonists affect satiety signals."
- YES: "GLP-1 medications (like Semaglutide) work by mimicking a hormone that tells your brain you're full."

### Sentence Structure
**Short sentences for impact.** Long sentences for nuance. Mix them.

> "Hair loss affects 50 million men in the US. It's not just cosmetic — for many, it's tied to confidence, identity, and how they show up in the world. That's worth addressing. Here's what actually works."

### Paragraph Structure
1. Lead with the point
2. Support with evidence or example
3. End with implication or next step

> "Semaglutide isn't a shortcut — it's a tool. Clinical trials show patients lose 15% of body weight on average, but they also follow nutrition guidance and increase activity. The medication makes those changes easier to sustain."

### Quick-Reference Formatting Rules

| Element | Standard |
|---|---|
| Contractions | Yes (we're, you'll, it's) |
| First person | Sparingly ("our providers," not "I think") |
| Second person | Yes — address the reader as "you" |
| Questions to reader | Yes, sparingly |
| Emojis | No (except social media, sparingly) |
| Exclamation points | Rarely — 1 per piece max |
| Humor | Light, never at patient expense |
| Jargon | Always explain immediately after using |

### Headlines & Hooks
Headlines should:
- Lead with benefit or outcome
- Include specificity (numbers, conditions, mechanisms)
- Avoid clickbait that over-promises

Examples:
- NO: "Everything You Need to Know About Weight Loss"
- YES: "GLP-1 Medications Explained: How Semaglutide Actually Works"
- NO: "Hair Loss Solutions That Work"
- YES: "Finasteride vs. Minoxidil: Which Works Better (And Can You Use Both?)"

---

## 5. Hook Library

### Hook Hierarchy (highest-performing first)
1. **Specificity Hooks** — Include a number, percentage, timeframe, or named mechanism
2. **Counterintuitive Hooks** — Challenge a common belief; create curiosity through contradiction
3. **Outcome Hooks** — Lead with what the reader will achieve/understand
4. **Question Hooks** — Mirror the reader's internal question

### Hook Formulas

**Stat + Implication:**
> "15% of body weight. That's what Semaglutide patients lost on average — more than any lifestyle intervention alone."

**Myth Bust:**
> "You've heard you need to eat less to lose weight. Your hormones have a different opinion."

**Direct Answer:**
> "Does Semaglutide actually work? Yes. But 'work' means different things to different people."

**Unexpected Mechanism:**
> "Semaglutide doesn't burn fat. It changes the conversation between your gut and your brain."

**Timeline Truth:**
> "Hair regrowth takes 6-12 months. Here's what's happening under the surface during those invisible weeks."

**Comparison Setup:**
> "Semaglutide vs. Tirzepatide: The question isn't which is stronger. It's which your body tolerates."

**Personal Stakes:**
> "If you've tried dieting and failed, your biology might be working against you. Here's what that means."

### Hook Examples by Topic

**Weight Loss:**
- "GLP-1s didn't make weight loss easy. They made it possible."
- "You're not failing at diets. Diets are failing at biology."
- "Weight loss isn't about willpower. It's about which hormones are louder."

**Hair Loss:**
- "Hair loss is genetic. Accepting it isn't."
- "The hair you save today is easier than the hair you try to regrow tomorrow."
- "DHT is shrinking your follicles right now. Finasteride stops it."

**Sexual Wellness:**
- "ED isn't a failure. It's a signal."
- "ED affects 30 million American men. Most never bring it up with a doctor. Telehealth changed that."
- "Sildenafil doesn't fix your sex life. It fixes blood flow. Your sex life follows."

**Skin:**
- "Tretinoin has 50 years of research behind it. Most 'anti-aging' products have marketing."
- "Retinol is tretinoin's weaker cousin. Why settle?"
- "Your skin replaces itself every 28 days. Tretinoin makes those new cells better."

**Peptides / Longevity:**
- "Peptides aren't magic. They're signaling molecules your body already makes — just less of as you age."
- "Longevity medicine isn't about living forever. It's about living better, longer."

**Cannabis / Policy:**
- "Marijuana moved to Schedule III. It's the biggest federal cannabis policy shift in 50 years — and it's not legalization."
- "Schedule III changes who can research cannabis. That changes everything else."

### Hook Mistakes to Avoid
- **Vague opener:** "Weight loss is a journey many people struggle with." (says nothing)
- **Clickbait overreach:** "This ONE trick will eliminate belly fat forever!" (unbelievable)
- **Academic intro:** "In this article, we will explore the mechanisms by which..." (boring)
- **Disclaimer lead:** "This is not medical advice, but..." (weak frame)
- **Question without stakes:** "Have you ever wondered about hair loss?" (no urgency)

---

## 6. Compliance & Legal Requirements

### HIPAA-Aware Marketing
- NEVER reference specific patient outcomes that could identify individuals
- Do NOT collect PHI (Protected Health Information) through marketing forms
- Contact/intake forms may only collect: name, email, phone, general area of interest
- Always link to the full Privacy Policy

### FDA Disclaimers
**Required verbatim on all supplement pages:**
> *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.*

### Claims Review — Pre-Publish Checklist
Before publishing ANY content, verify:

- [ ] No diagnosis language ("you have X")
- [ ] No treatment guarantees ("will cure," "guaranteed results")
- [ ] No specific outcome timelines without citation
- [ ] All statistics have sources cited
- [ ] "Typical results" language, not "your results"
- [ ] No superlatives without evidence ("best," "most effective," "only")
- [ ] Mechanisms described correctly
- [ ] Drug names spelled correctly
- [ ] Side effects mentioned where relevant
- [ ] Contraindications noted for medications
- [ ] No off-label promotion
- [ ] Medical disclaimer present
- [ ] "Consult a provider" appears where needed
- [ ] Individual results disclaimer for outcome claims
- [ ] Patient stories anonymized
- [ ] Testimonials include "results may vary"
- [ ] No HIPAA-sensitive information
- [ ] Stock photos labeled as illustrative
- [ ] No before/after photos without "results not typical" disclaimer

### The Compliance Gut-Check
Before publishing, ask:
1. Would a provider be comfortable with their name on this?
2. Does it promise outcomes we can't guarantee?
3. Does it diagnose without a consultation?
4. Would the FDA flag any claims?
5. Is the disclaimer present but not doing all the work?

If any answer is "yes" or "maybe" — revise.

### Compliance Red Flags — Stop and Revise
- Before/after photos without "results not typical"
- Specific weight loss numbers as promises
- "Doctor recommended" without actual doctor
- Testimonials presented as typical outcomes
- Time-bound guarantees ("lose 20 lbs in 30 days")
- Comparative claims against competitors
- Off-label use promotion
- Diagnosis without consultation

### Topic-Specific Compliance Rules

#### Weight Loss (GLP-1s)
**Can say:** "FDA-approved for chronic weight management" · "Clinical trials showed average 15% weight loss" · "Works by reducing appetite" · "Requires prescription after evaluation"
**Cannot say:** "Lose 50 pounds guaranteed" · "Works without diet or exercise" · "No side effects" · "Everyone qualifies"

#### Hair Loss
**Can say:** "FDA-approved for male pattern baldness" · "80-90% of men see results" · "Works best for maintaining existing hair" · "Results take 3-6 months"
**Cannot say:** "Regrow all your hair" · "Works for everyone" · "No sexual side effects" · "Permanent results"

#### Sexual Wellness / ED
**Can say:** "FDA-approved for ED" · "Works for most men" · "Takes effect in 30-60 minutes" · "Requires medical evaluation"
**Cannot say:** "Fixes your sex life" · "Works instantly" · "No heart risks" · "Better than [competitor]"

#### Skin / Tretinoin
**Can say:** "FDA-approved" · "Clinically studied for decades" · "Requires prescription" · "Results develop over weeks"
**Cannot say:** "Erases wrinkles" · "Reverses aging" · "No irritation" · "Works overnight"

#### Peptides
**Can say:** "Research peptides are being studied for..." · "Provider-guided protocols" · "Requires medical supervision" · "Individual results vary"
**Cannot say:** "Anti-aging miracle" · "Reverses aging" · "FDA-approved for longevity" · "Buy peptides online"

#### Cannabis / CBD (informational content only)
**Can say:** "Federal rescheduling moves cannabis to Schedule III" · "Research suggests potential benefits" · "Legal status varies by state"
**Cannot say:** "Cannabis cures..." · "CBD is FDA-approved for..." · "Safe for everyone" · "No side effects"

### Standard Disclaimers (use verbatim)

**General Medical Disclaimer (required in footer of every page):**
> The information provided is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider before starting any treatment. Individual results may vary.

**Treatment-Specific Disclaimer:**
> [Treatment name] is a prescription medication that requires evaluation by a licensed provider. Not everyone qualifies. Side effects may occur. Results vary by individual.

**Cannabis Content Disclaimer:**
> Cannabis laws vary by state. This content is for informational purposes about policy changes and does not constitute medical advice or encouragement to use cannabis. Consult local laws and a healthcare provider.

### High-Risk Topics Requiring Extra Review
- Controlled substances
- Mental health claims
- Pediatric anything
- Pregnancy / fertility
- Cancer (never claim treatment)
- Specific disease cure claims

**When in doubt:** default to more conservative language. Add citation if claim is important. When in doubt, cut it out.

---

## 7. Page Structure & Components

### Required on Every Landing Page
1. **Navigation** with logo (Wide Mode)
2. **Hero section** with clear value proposition, Yeseva One headline, and primary CTA
3. **How It Works** section (4-step flow from Section 1)
4. **Benefits / Features** section
5. **Social proof** (testimonials with "results may vary" disclaimer, trust badges)
6. **FAQ section** (direct, practical answers)
7. **Final CTA** section
8. **Footer** with:
   - Logo (Rectangle Mode)
   - "Consult your healthcare provider" disclaimer
   - General medical disclaimer
   - Privacy Policy link
   - Terms of Service link
   - Contact information
   - FDA disclaimer (if supplement page)

### CTA Buttons
- **Primary CTA text:** "Start Your Consultation" or "Get Started Today"
- **Secondary CTA text:** "Learn More" or "See How It Works"
- **Style:** Rounded corners (8px border-radius), aqua teal background (`#81D9DE`), dark teal text (`#294547`), semi-bold weight
- **Hover:** Slightly darkened aqua or white background with aqua border
- **Size:** Generous padding (16px 32px minimum), large enough for mobile tap targets

### Section Styling Patterns
- **Hero:** Dark teal (`#294547`) background with white Yeseva One headline and aqua accent elements. Subtle gradient allowed.
- **Alternating sections:** Alternate between white and soft gray (`#F0F5F5`) backgrounds
- **Feature/benefit sections:** Can use dark teal background with white text for visual contrast
- **Cards:** White background, subtle shadow or 1px border, rounded corners (12px)
- **Icons:** Aqua teal, outlined style, in circular or teardrop containers

### Responsive Design
- Mobile-first approach — all layouts must work on 320px+ screens
- Stack columns on mobile
- Minimum touch target size: 44x44px
- Readable font sizes: body min 16px, headings scale down proportionally
- No horizontal scroll on any viewport

### SEO Requirements
- Target keywords: telehealth, online wellness, virtual health consultation, personalized wellness, [treatment]-online, [condition]-treatment-telehealth
- Meta description: max 160 characters, include primary keyword and value proposition
- Include Open Graph tags (og:title, og:description, og:image, og:type)
- Use semantic HTML (h1 once, proper heading hierarchy, alt text on images)
- Structured data (FAQ schema for FAQ sections, MedicalBusiness schema where applicable)

---

## 8. Social Media Guidelines

### Platform Tone
Social content should be conversational, punchy, and shareable — but still compliant. No diagnosis language even in casual posts.

### Twitter/X Specifics
- Posting frequency: 3-7 tweets/day, minimum 1/day
- Optimal times: 8-10 AM, 12-1 PM, 5-7 PM (audience timezone)
- Character limit: 280, but aim for <200 for engagement
- Threads: 5-15 tweets optimal, hook in tweet 1, one idea per tweet
- No "Thread:" or thread emoji openers — use the hook as tweet 1
- Image specs: 16:9 (1200x675) or 1:1 (1200x1200) with brand colors
- Video: 30-90 seconds, captions required, hook in first 3 seconds

### Social Compliance Rules
- Stats must be accurate even without full context
- No before/after photos without disclaimer
- Link to full information where possible
- No white coat imagery unless actual provider
- "May help" not "will cure" — even in casual tone
- Testimonial posts need "results may vary" context

### Social Content Formats
1. **Educational threads** — break down a treatment, mechanism, or misconception
2. **Stat-shock singles** — one surprising statistic with implication
3. **Myth-bust posts** — common belief → reality
4. **News commentary** — policy changes, new research
5. **Engagement questions** — mirror the reader's internal question
6. **How-to breakdowns** — step-by-step processes

---

## 9. Email Guidelines
- Clear sender identification (from RevitalizeMe)
- Unsubscribe option required
- No misleading subject lines
- Same claims standards as all other content
- Tone: personal, action-oriented
- CTA: one primary action per email
- Medical disclaimer in email footer

---

## 10. Brand Voice Examples

### Topic: ED Treatments
- **Too clinical:** "Phosphodiesterase type 5 inhibitors function by enhancing nitric oxide pathways to facilitate penile erection through smooth muscle relaxation in the corpus cavernosum."
- **Too casual:** "Can't get it up? No worries bro, these pills fix that."
- **RevitalizeMe voice:** "ED medications like Sildenafil work by increasing blood flow when you're aroused — they don't create arousal on their own. Most men see results within 30-60 minutes. They're safe for most people, though a provider should review your heart health and current medications first."

### Topic: Weight Loss
- **Too clinical:** "Glucagon-like peptide-1 receptor agonists modulate hypothalamic appetite regulation pathways."
- **Too casual:** "Just take the shot and watch the fat melt off!"
- **RevitalizeMe voice:** "GLP-1 medications (like Semaglutide) work by mimicking a hormone that tells your brain you're full. Clinical trials show patients lose 15% of body weight on average, but they also follow nutrition guidance and increase activity. The medication makes those changes easier to sustain."

### Topic: Hair Loss
- **Too clinical:** "5-alpha-reductase inhibitors prevent the conversion of testosterone to dihydrotestosterone in the dermal papilla."
- **Too casual:** "Pop this pill and your hair grows back, easy."
- **RevitalizeMe voice:** "Finasteride works for most men — about 80-90% see results. It works best for maintaining what you have. If you've been losing hair for years, expectations should be realistic. The earlier you start, the more you keep."
