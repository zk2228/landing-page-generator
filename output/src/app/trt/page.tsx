"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ================================================================
   DATA
   ================================================================ */

const SYMPTOMS = [
  {
    label: "Persistent fatigue, even after a full night of sleep",
    short: "Fatigue",
  },
  {
    label: "Decreased interest in sex or changes in sexual performance",
    short: "Low libido",
  },
  {
    label: "Brain fog, difficulty concentrating, or forgetfulness",
    short: "Brain fog",
  },
  {
    label: "Loss of muscle mass or difficulty building strength",
    short: "Muscle loss",
  },
  {
    label: "Unexplained weight gain, especially around the midsection",
    short: "Weight gain",
  },
  {
    label: "Mood changes, irritability, or low motivation",
    short: "Mood changes",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Complete Your Evaluation",
    desc: "Answer a brief health questionnaire and connect with a licensed provider via telehealth. Takes about 10 minutes — no waiting rooms, no awkward small talk.",
    icon: "clipboard",
  },
  {
    num: "02",
    title: "Get Your Lab Work",
    desc: "Your provider orders comprehensive labs — total and free testosterone, PSA, CBC, and more. We help you find a convenient lab near you.",
    icon: "flask",
  },
  {
    num: "03",
    title: "Receive Your Personalized Plan",
    desc: "Your treatment is built around YOUR labs, your symptoms, and your health history. No cookie-cutter protocols — your provider tailors everything to you.",
    icon: "plan",
  },
  {
    num: "04",
    title: "Ongoing Care and Monitoring",
    desc: "Medication ships to your door. Regular follow-up appointments and lab work are part of your care — not an upsell.",
    icon: "heart",
  },
];

const TREATMENTS = [
  {
    title: "Topical Testosterone Creams",
    desc: "Applied daily to the skin, topical creams provide steady testosterone delivery with dosing that can be easily adjusted by your provider.",
    points: ["Daily application", "Steady hormone levels", "Adjustable dosing"],
  },
  {
    title: "Troches (Sublingual)",
    desc: "A small troche dissolves under the tongue, offering a convenient alternative for patients who prefer not to use topical preparations.",
    points: [
      "Dissolves under tongue",
      "Quick absorption",
      "Convenient alternative",
    ],
  },
  {
    title: "Supportive Medications",
    desc: "When clinically appropriate, medications like anastrozole may be prescribed to help manage estrogen levels that can rise during testosterone therapy.",
    points: [
      "Estrogen management",
      "Provider-determined",
      "Part of complete protocol",
    ],
  },
];

const DIFFERENTIATORS = [
  {
    title: "Physician-Led, Not Algorithm-Driven",
    desc: "A licensed provider reviews your labs, listens to your symptoms, and builds your plan. No chatbot prescriptions.",
  },
  {
    title: "Lab-Based Decision Making",
    desc: "Every treatment decision is grounded in your bloodwork — not a questionnaire score. Your labs tell the story; your provider reads it.",
  },
  {
    title: "Personalized Protocols",
    desc: "Your body isn't the same as anyone else's. Dosing, delivery method, and supportive medications are all tailored to your clinical picture.",
  },
  {
    title: "Monitoring Built In, Not Bolted On",
    desc: "Follow-up labs and check-ins are included in your care — they're how responsible TRT works, and we don't charge extra for them.",
  },
  {
    title: "Convenient, Private Telehealth",
    desc: "Consultations from your couch. No waiting rooms, no small talk with the receptionist about why you're there.",
  },
  {
    title: "Transparent Pricing From $99/Month",
    desc: "No hidden fees, no surprise charges. You know what you're paying and what you're getting before you start.",
  },
];

const TESTIMONIALS = [
  {
    name: "Jason R.",
    age: 38,
    stars: 5,
    text: "I was dragging through every day — couldn't focus at work, had zero energy for my kids after 5 PM. My wife actually suggested I look into this. After about six weeks on my treatment plan, the fog started lifting. I'm not 22 again, but I feel like myself. That's what I wanted.",
    location: "Austin, TX",
  },
  {
    name: "Mark T.",
    age: 47,
    stars: 4,
    text: "The process was straightforward. Labs came back, provider walked me through everything on a video call. Only knock is scheduling the initial lab draw took a few days to coordinate — but once treatment started, I noticed gradual improvements in energy and mood over the first couple months. Solid experience overall.",
    location: "Denver, CO",
  },
  {
    name: "David L.",
    age: 55,
    stars: 5,
    text: "I'd been putting this off for three years. Kept telling myself the fatigue and weight gain were just 'getting older.' My doctor ran labs, said testosterone was low, but didn't offer much beyond 'try exercising more.' RevitalizeMe actually did something about it. Provider was thorough, asked good questions, and explained why she chose the dosing she did. I wish I hadn't waited so long.",
    location: "Charlotte, NC",
  },
];

const FAQS = [
  {
    q: "Is testosterone replacement therapy safe?",
    a: "TRT has been prescribed and studied for decades. Like any medical treatment, it carries potential risks and benefits that your provider will discuss with you based on your individual health profile. Common side effects may include skin irritation at the application site, changes in mood, and changes in red blood cell count — which is why regular monitoring is part of every treatment plan.",
  },
  {
    q: "What side effects should I expect?",
    a: "Side effects vary by individual and treatment method. Some patients report mild skin irritation (topical), changes in mood, or temporary acne. Your provider monitors bloodwork regularly to watch for changes in hematocrit, PSA, and estrogen levels. If side effects occur, your provider can adjust dosing or switch delivery methods.",
  },
  {
    q: "How soon will I notice a difference?",
    a: "Most patients report that changes in energy and mood are often among the first things they notice, typically within the first few weeks. Changes in body composition and sexual function may take longer — often several months. Individual responses vary significantly, and your provider will track your progress through regular labs and check-ins.",
  },
  {
    q: "Does insurance cover TRT through RevitalizeMe?",
    a: "RevitalizeMe operates on a self-pay model starting at $99/month. We don't bill insurance directly, but many patients use HSA or FSA funds to cover their treatment. We provide itemized receipts you can submit to your insurance for potential reimbursement.",
  },
  {
    q: "How much does treatment cost?",
    a: "Treatment plans range from $99 to $199 per month depending on your prescribed protocol. This includes your medication, provider consultations, and ongoing lab monitoring. There are no hidden fees, enrollment charges, or surprise costs.",
  },
  {
    q: "Is telehealth really sufficient for hormone therapy?",
    a: "Telehealth TRT follows the same clinical standards as in-person care. Your provider reviews comprehensive bloodwork, conducts a thorough health assessment, and monitors you through regular follow-ups. The only difference is you don't sit in a waiting room. If your provider determines you need in-person evaluation, they'll refer you appropriately.",
  },
  {
    q: "Do I need lab work before starting?",
    a: "Yes — always. Responsible TRT requires baseline lab work including total and free testosterone, PSA, CBC, metabolic panel, and other markers. This isn't optional. Your labs are what tell your provider whether TRT is appropriate and help determine the right starting protocol.",
  },
  {
    q: "Can I continue with my primary care doctor while on TRT?",
    a: "Absolutely, and we encourage it. Your RevitalizeMe provider can coordinate with your primary care physician. We're happy to share lab results and treatment details with any provider you authorize. Your overall health is a team effort.",
  },
];

/* ================================================================
   ICONS (inline SVGs — no external dependencies)
   ================================================================ */

function IconClipboard() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function IconFlask() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3h6M10 3v6.5L4 20h16L14 9.5V3" />
      <path d="M7 16h10" />
    </svg>
  );
}

function IconPlan() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconStar({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "#81D9DE" : "none"}
      stroke="#81D9DE"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const STEP_ICONS: Record<string, () => React.JSX.Element> = {
  clipboard: IconClipboard,
  flask: IconFlask,
  plan: IconPlan,
  heart: IconHeart,
};

/* ================================================================
   METADATA (exported for Next.js)
   ================================================================ */

// Note: metadata export must be in a separate file for App Router
// or use generateMetadata. Since this is "use client", we set
// document head via useEffect and JSON-LD via script tag.

/* ================================================================
   COMPONENTS
   ================================================================ */

/* ---------- Top Authority Bar ---------- */
function TopBar() {
  return (
    <div className="bg-brand-dark-teal text-white/90 text-xs sm:text-sm tracking-wide">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex justify-center gap-2 sm:gap-6 text-center font-semibold uppercase">
        <span>Physician-Led Telehealth</span>
        <span className="text-brand-aqua" aria-hidden="true">
          ·
        </span>
        <span>Lab-Based Treatment Plans</span>
        <span className="text-brand-aqua hidden sm:inline" aria-hidden="true">
          ·
        </span>
        <span className="hidden sm:inline">Delivered to Your Door</span>
      </div>
    </div>
  );
}

/* ---------- Navigation ---------- */
function Nav() {
  return (
    <nav className="bg-white border-b border-gray-100" aria-label="Main">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="shrink-0" aria-label="RevitalizeMe home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/revitalizeme-logo-wide.svg"
            alt="RevitalizeMe"
            className="h-9 sm:h-10 w-auto"
          />
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className="hidden sm:block text-sm font-semibold text-brand-text-gray hover:text-brand-dark-teal transition-colors"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="hidden sm:block text-sm font-semibold text-brand-text-gray hover:text-brand-dark-teal transition-colors"
          >
            FAQ
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center px-5 py-2.5 bg-brand-aqua text-brand-dark-teal font-semibold text-sm rounded-lg hover:bg-brand-aqua/80 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---------- Sticky Nav ---------- */
function StickyNav({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" aria-label="RevitalizeMe home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/revitalizeme-logo-wide.svg"
            alt="RevitalizeMe"
            className="h-8 w-auto"
          />
        </a>
        <a
          href="#get-started"
          className="inline-flex items-center px-5 py-2 bg-brand-aqua text-brand-dark-teal font-semibold text-sm rounded-lg hover:bg-brand-aqua/80 transition-colors"
        >
          Start Your Consultation
        </a>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative bg-brand-dark-teal overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #294547 0%, #3A5F62 60%, #294547 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Eyebrow — content strategy: position in buyer journey (awareness) */}
          <p className="text-brand-aqua font-semibold text-sm uppercase tracking-widest mb-4">
            Physician-Led Testosterone Therapy
          </p>

          {/* Headline — Copywriting skill: "{Question highlighting main pain point}" formula
              Marketing Psychology: Contrast effect (who they were vs. who they are now)
              Compliance: No diagnosis, no guarantee, speaks to the identity gap */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            You Used to Feel Like Yourself.
            <br />
            <span className="text-brand-aqua">We Can Help You Get Back There.</span>
          </h1>

          {/* Subhead — Copywriting: expand headline with specificity
              Compliance: "may" language, provider-led framing */}
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            If low testosterone is draining your energy, focus, and drive,
            RevitalizeMe connects you with a licensed provider who builds a
            treatment plan around your labs — not a questionnaire.
          </p>

          {/* CTA — Copywriting: [Action Verb] + [What They Get] formula
              Page CRO: primary CTA visible above the fold */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-aqua text-brand-dark-teal font-semibold text-lg rounded-lg hover:bg-brand-aqua/80 transition-colors"
            >
              Start Your Consultation
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg hover:border-white/60 transition-colors"
            >
              See How It Works
            </a>
          </div>

          {/* Trust signals below CTA — Page CRO: trust near CTAs
              Marketing Psychology: Authority bias */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <IconShield />
              HIPAA-Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <IconShield />
              Licensed Providers
            </span>
            <span className="flex items-center gap-1.5">
              <IconShield />
              From $99/month
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Social Proof Bar ---------- */
function SocialProofBar() {
  const items = [
    { label: "Board-Certified Providers", value: "Licensed" },
    { label: "HIPAA-Compliant Platform", value: "Secure" },
    { label: "Licensed Compounding Pharmacy", value: "Verified" },
    { label: "50-State Telehealth Network", value: "Nationwide" },
  ];

  return (
    <section className="bg-brand-soft-gray border-y border-gray-200" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-brand-aqua font-semibold text-sm uppercase tracking-wide mb-1">
                {item.value}
              </p>
              <p className="text-brand-dark-teal font-semibold text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Symptom Checker ---------- */
function SymptomChecker() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = useCallback((idx: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  const count = checked.size;

  return (
    <section className="bg-white py-16 sm:py-20" id="symptom-checker">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-dark-teal mb-4">
            Does Any of This Sound Familiar?
          </h2>
          <p className="text-brand-text-gray text-lg">
            Low testosterone affects millions of men — and most chalk it up to
            stress or aging. Check the symptoms you&apos;re experiencing.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {SYMPTOMS.map((s, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                checked.has(i)
                  ? "border-brand-aqua bg-brand-aqua/10"
                  : "border-gray-200 hover:border-brand-aqua/40 bg-white"
              }`}
              role="checkbox"
              aria-checked={checked.has(i)}
            >
              <span
                className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  checked.has(i)
                    ? "bg-brand-aqua border-brand-aqua text-white"
                    : "border-gray-300"
                }`}
              >
                {checked.has(i) && <IconCheck />}
              </span>
              <span className="text-brand-charcoal font-medium">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Result — Marketing Psychology: Commitment & Consistency
            Once they've checked 2+, they've self-identified.
            Compliance: "not a medical diagnosis" disclaimer */}
        <div
          className={`rounded-xl p-6 transition-all duration-500 ${
            count >= 2
              ? "bg-brand-dark-teal text-white"
              : "bg-brand-soft-gray text-brand-dark-teal"
          }`}
        >
          {count >= 2 ? (
            <>
              <p className="font-display text-xl mb-2">
                You&apos;re not imagining it.
              </p>
              <p className="text-white/80 mb-4">
                {count} of these symptoms are commonly associated with low
                testosterone. The only way to know for sure is a clinical
                evaluation with bloodwork — and that&apos;s exactly where we start.
              </p>
              <a
                href="#get-started"
                className="inline-flex items-center px-6 py-3 bg-brand-aqua text-brand-dark-teal font-semibold rounded-lg hover:bg-brand-aqua/80 transition-colors"
              >
                Get a Clinical Evaluation
              </a>
            </>
          ) : (
            <p className="text-brand-text-gray text-center">
              Select the symptoms you&apos;re experiencing. This is a screening
              tool — not a medical diagnosis.
            </p>
          )}
        </div>

        <p className="text-xs text-brand-text-gray text-center mt-4">
          This screening tool is for informational purposes only and does not
          constitute a medical diagnosis. Only a licensed provider can evaluate
          your symptoms and determine appropriate treatment.
        </p>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  return (
    <section className="bg-brand-soft-gray py-16 sm:py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-dark-teal mb-4">
            How It Works
          </h2>
          <p className="text-brand-text-gray text-lg max-w-2xl mx-auto">
            From first consultation to ongoing care — here&apos;s what
            physician-led TRT looks like with RevitalizeMe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <div key={step.num} className="relative">
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-brand-aqua/15 text-brand-aqua flex items-center justify-center mb-4">
                    <Icon />
                  </div>
                  <p className="text-brand-aqua font-semibold text-xs uppercase tracking-widest mb-2">
                    Step {step.num}
                  </p>
                  <h3 className="font-display text-xl text-brand-dark-teal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-text-gray text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Treatment Options ---------- */
function TreatmentOptions() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-dark-teal mb-4">
            Treatment Options
          </h2>
          <p className="text-brand-text-gray text-lg max-w-2xl mx-auto">
            Your provider selects the approach that fits your clinical picture.
            Here are the options they may consider.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {TREATMENTS.map((t) => (
            <div
              key={t.title}
              className="bg-brand-soft-gray rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-display text-xl text-brand-dark-teal mb-3">
                {t.title}
              </h3>
              <p className="text-brand-text-gray text-sm leading-relaxed mb-4">
                {t.desc}
              </p>
              <ul className="space-y-2">
                {t.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-brand-dark-teal"
                  >
                    <span className="text-brand-aqua">
                      <IconCheck />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-brand-text-gray text-center max-w-2xl mx-auto">
          All treatment decisions are made by your licensed provider based on
          clinical evaluation and lab results. Not everyone qualifies for
          testosterone therapy. Individual results may vary.
        </p>
      </div>
    </section>
  );
}

/* ---------- Why RevitalizeMe ---------- */
function WhyRevitalizeMe() {
  return (
    <section
      className="py-16 sm:py-20"
      style={{
        background:
          "linear-gradient(135deg, #294547 0%, #3A5F62 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            Why RevitalizeMe
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Not all TRT providers are the same. Here&apos;s what makes our
            approach different — and why it matters for your health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="font-display text-lg text-brand-aqua mb-3">
                {d.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-dark-teal mb-4">
            Real Patients, Real Experiences
          </h2>
          <p className="text-brand-text-gray text-lg max-w-2xl mx-auto">
            Every journey is different. Here&apos;s what some of our patients
            have shared about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-brand-soft-gray rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <IconStar key={s} filled={s <= t.stars} />
                ))}
              </div>
              <blockquote className="text-brand-charcoal text-sm leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-dark-teal text-sm">
                    {t.name}, age {t.age}
                  </p>
                  <p className="text-brand-text-gray text-xs">{t.location}</p>
                </div>
                <p className="text-xs text-brand-text-gray italic">
                  Results may vary
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-brand-text-gray text-center max-w-3xl mx-auto">
          These testimonials reflect individual patient experiences and are not
          intended to represent or guarantee the results any particular patient
          may achieve. Testosterone therapy results vary based on individual
          health factors, compliance with treatment, and clinical response.
          Always consult with a licensed provider about your specific situation.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ Accordion ---------- */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-brand-soft-gray py-16 sm:py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-dark-teal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-text-gray text-lg">
            Straight answers to the questions we hear most.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIdx === i}
              >
                <span className="font-semibold text-brand-dark-teal pr-4">
                  {faq.q}
                </span>
                <IconChevron open={openIdx === i} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIdx === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-brand-text-gray leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section
      className="py-16 sm:py-20"
      id="get-started"
      style={{
        background:
          "linear-gradient(135deg, #294547 0%, #3A5F62 60%, #294547 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Headline — Marketing Psychology: Loss aversion
            Frame inaction as the real risk. Validating, not aspirational.
            Compliance: no diagnosis, no timeline guarantee */}
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
          You Don&apos;t Have to Feel This Way
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Low testosterone doesn&apos;t improve on its own. Every month you wait
          is another month of feeling less than yourself. A clinical evaluation
          takes 10 minutes — and it starts with your labs, not a sales pitch.
        </p>

        <a
          href="#"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-aqua text-brand-dark-teal font-semibold text-lg rounded-lg hover:bg-brand-aqua/80 transition-colors mb-6"
        >
          Start Your Consultation
        </a>

        {/* Trust signals — Marketing Psychology: Regret aversion
            ("no commitment" reduces fear of regret) */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/60 text-sm">
          <span>No commitment required</span>
          <span className="text-brand-aqua" aria-hidden="true">
            ·
          </span>
          <span>HIPAA-compliant platform</span>
          <span className="text-brand-aqua" aria-hidden="true">
            ·
          </span>
          <span>From $99/month</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-brand-dark-teal text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/revitalizeme-logo-wide.svg"
              alt="RevitalizeMe"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              Physician-led telehealth for men who want to feel like themselves
              again.
            </p>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">
              Treatments
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  Testosterone Therapy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  Weight Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  Hair Loss
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  Sexual Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-aqua transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="text-xs leading-relaxed">
            The information provided on this page is for educational purposes
            only and does not constitute medical advice. Always consult with a
            qualified healthcare provider before starting any treatment.
            Individual results may vary. Testosterone therapy is a prescription
            treatment that requires evaluation by a licensed provider. Not
            everyone qualifies. Side effects may occur.
          </p>
          <p className="text-xs leading-relaxed">
            RevitalizeMe is a telehealth platform that connects patients with
            licensed healthcare providers. All consultations, prescriptions, and
            treatment plans are managed by independently licensed physicians and
            clinicians. This platform complies with HIPAA regulations for the
            protection of patient health information.
          </p>
          <p className="text-xs">
            &copy; 2026 RM MSO National, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   SCHEMA (JSON-LD)
   ================================================================ */

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        name: "RevitalizeMe",
        description:
          "Physician-led telehealth platform offering testosterone replacement therapy with comprehensive lab-based treatment plans and ongoing monitoring.",
        url: "https://www.revitalizeme.com/trt",
        logo: "https://www.revitalizeme.com/revitalizeme-logo-wide.svg",
        medicalSpecialty: "Endocrinology",
        availableService: {
          "@type": "MedicalTherapy",
          name: "Testosterone Replacement Therapy",
          description:
            "Personalized, lab-based testosterone therapy managed by licensed providers via telehealth.",
          medicineSystem: "WesternConventional",
        },
        isAcceptingNewPatients: true,
        currenciesAccepted: "USD",
        priceRange: "$99-$199/month",
      },
      {
        "@type": "MedicalWebPage",
        name: "Testosterone Replacement Therapy | RevitalizeMe",
        description:
          "Physician-led TRT through telehealth. Lab-based treatment plans, ongoing monitoring, and medication delivered to your door. From $99/month.",
        url: "https://www.revitalizeme.com/trt",
        lastReviewed: "2026-03-25",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        specialty: "Endocrinology",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function TRTPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    // Set page title and meta for client component
    document.title =
      "Testosterone Replacement Therapy | RevitalizeMe - Physician-Led TRT";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Physician-led TRT through telehealth. Lab-based treatment plans, ongoing monitoring, and medication delivered to your door. From $99/month."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Physician-led TRT through telehealth. Lab-based treatment plans, ongoing monitoring, and medication delivered to your door. From $99/month.";
      document.head.appendChild(meta);
    }

    // OG tags
    const ogTags: Record<string, string> = {
      "og:title":
        "Testosterone Replacement Therapy | RevitalizeMe - Physician-Led TRT",
      "og:description":
        "Physician-led TRT through telehealth. Lab-based treatment plans, ongoing monitoring included. From $99/month.",
      "og:type": "website",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, []);

  useEffect(() => {
    // IntersectionObserver for sticky nav — appears after scrolling past hero
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const current = heroRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <>
      <SchemaMarkup />
      <StickyNav visible={showSticky} />

      <TopBar />
      <Nav />

      <div ref={heroRef}>
        <Hero />
      </div>

      <SocialProofBar />
      <SymptomChecker />
      <HowItWorks />
      <TreatmentOptions />
      <WhyRevitalizeMe />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
