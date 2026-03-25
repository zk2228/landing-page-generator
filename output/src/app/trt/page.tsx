"use client";

import { useState, useEffect, useRef } from "react";

/* ================================================================
   DATA
   ================================================================ */

const SYMPTOMS = [
  "Persistent fatigue, even after a full night of sleep",
  "Decreased interest in sex or changes in sexual performance",
  "Brain fog, difficulty concentrating, or forgetfulness",
  "Loss of muscle mass or difficulty building strength",
  "Unexplained weight gain, especially around the midsection",
  "Mood changes, irritability, low motivation, or feeling flat",
];

const STEPS = [
  {
    title: "Complete Your Evaluation",
    desc: "Answer a brief health questionnaire and meet with a licensed provider via telehealth. It takes about 10 minutes \u2014 no waiting rooms, no awkward small talk.",
  },
  {
    title: "Get Your Lab Work",
    desc: "Your provider will order comprehensive labs \u2014 including total and free testosterone, PSA, and CBC. We help you find a convenient lab near you.",
  },
  {
    title: "Receive Your Personalized Plan",
    desc: "Your treatment plan is built around your labs, your symptoms, and your health history. No cookie-cutter protocols \u2014 your provider tailors the approach to you.",
  },
  {
    title: "Ongoing Care and Monitoring",
    desc: "Your medication ships directly to your door. Regular follow-up appointments and lab work are part of your care \u2014 not an upsell.",
  },
];

const TREATMENTS = [
  {
    title: "Topical Testosterone Creams",
    desc: "Applied daily to the skin, topical creams provide steady testosterone delivery with dosing that can be easily adjusted by your provider.",
    details: ["Daily application", "Steady hormone levels", "Adjustable dosing"],
  },
  {
    title: "Troches (Sublingual)",
    desc: "A small troche dissolves under the tongue, offering a convenient alternative for patients who prefer not to use topical preparations.",
    details: ["Dissolves under tongue", "Quick absorption", "Convenient alternative"],
  },
  {
    title: "Supportive Medications",
    desc: "When clinically appropriate, medications like anastrozole may be prescribed to help manage estrogen levels that can rise during testosterone therapy.",
    details: ["Estrogen management", "When clinically indicated", "Provider-determined"],
  },
];

const DIFFERENTIATORS = [
  { title: "Physician-Led Care", desc: "Every treatment decision is made by a licensed provider \u2014 not an algorithm, not a sales rep." },
  { title: "Lab-Based Decision Making", desc: "We don\u2019t guess. Comprehensive lab work guides every treatment plan and adjustment." },
  { title: "Personalized Protocols", desc: "Multiple formulations and strengths mean your plan fits you \u2014 not the other way around." },
  { title: "Monitoring Built In", desc: "Regular follow-ups and repeat lab work are part of your care plan. No surprise fees." },
  { title: "Private, Convenient Telehealth", desc: "Consultations from your couch. Medication delivered to your door. No waiting rooms." },
  { title: "Transparent Pricing", desc: "Plans start at $99/month. No hidden fees, no bait-and-switch, no complicated billing." },
];

const TESTIMONIALS = [
  {
    stars: 5,
    text: "I\u2019m 38, and for the last two years I felt like I was running on empty. I\u2019d drag through the workday, skip the gym, and crash on the couch by 8pm. My wife noticed before I did. Three months into treatment with RevitalizeMe, I have steady energy throughout the day and I\u2019m back in the gym four days a week. The telehealth setup made it easy \u2014 I didn\u2019t have to take time off work for a single appointment.",
    name: "Marcus T.",
    age: 38,
  },
  {
    stars: 4,
    text: "I\u2019ll be honest \u2014 I was skeptical. I\u2019d tried a testosterone clinic before and felt like they were just pushing products. RevitalizeMe was different. My provider actually looked at my labs and adjusted my protocol twice before we found what worked. It took about 8 weeks before I noticed real changes, and I wish the initial lab process had been a bit faster. But the ongoing monitoring gives me confidence that someone\u2019s actually paying attention.",
    name: "David R.",
    age: 46,
  },
  {
    stars: 5,
    text: "At 54, I\u2019d accepted that feeling tired and foggy was just part of getting older. My doctor ran basic bloodwork but never tested my testosterone. When I found RevitalizeMe, the process was straightforward \u2014 labs, consultation, treatment plan within a week. Six months in, my focus is sharper, my mood is more even, and my wife says I\u2019m \u201cmore like myself.\u201d I appreciate that they check my labs regularly and adjust as needed.",
    name: "Robert K.",
    age: 54,
  },
];

const FAQ_ITEMS = [
  {
    q: "Is testosterone therapy safe?",
    a: "When prescribed and monitored by a licensed provider, testosterone therapy has a well-established safety profile. Like any medical treatment, it carries potential risks that your provider will discuss with you during your consultation. Regular monitoring through lab work helps ensure your treatment remains safe and effective. Testosterone therapy is not appropriate for everyone \u2014 your provider will evaluate your health history and lab results to determine if it\u2019s right for you.",
  },
  {
    q: "What are the possible side effects?",
    a: "Common side effects may include acne, changes in mood, fluid retention, and increased red blood cell count. Less common but more serious effects can include sleep apnea, changes in cholesterol, and effects on fertility. Your provider will monitor for these through regular lab work and follow-up appointments. Most side effects are manageable through dosage adjustments.",
  },
  {
    q: "How long before I might notice changes?",
    a: "Response timelines vary by individual. Some men report improvements in energy and mood within the first few weeks. Changes in body composition and sexual function typically take longer \u2014 often 3 to 6 months of consistent treatment. Your provider will track your progress through regular check-ins and lab work.",
  },
  {
    q: "Is this covered by insurance?",
    a: "RevitalizeMe operates on a self-pay model, which keeps the process simple and private. Most HSA and FSA accounts can be used toward the cost of treatment. We don\u2019t bill insurance directly, but we can provide documentation if you\u2019d like to submit for potential reimbursement.",
  },
  {
    q: "What does treatment cost?",
    a: "Treatment plans range from $99 to $199 per month, depending on your prescribed protocol. This includes your medication, provider consultations, and ongoing monitoring. There are no hidden fees, enrollment costs, or surprise charges.",
  },
  {
    q: "How does the telehealth consultation work?",
    a: "After completing a brief health questionnaire, you\u2019ll schedule a video consultation with a licensed provider. The appointment typically takes about 10 minutes. Your provider will review your symptoms, health history, and lab results to determine if testosterone therapy is appropriate for you.",
  },
  {
    q: "Do I need lab work?",
    a: "Yes \u2014 lab work is required, not optional. Comprehensive bloodwork (including total and free testosterone, PSA, and CBC) is essential for safe, effective treatment. We don\u2019t prescribe based on symptoms alone. We\u2019ll help you find a convenient lab location near you.",
  },
  {
    q: "Can I continue with my current doctor?",
    a: "Absolutely. RevitalizeMe is designed to complement your existing healthcare, not replace it. We encourage you to share your treatment plan with your primary care provider. We can provide lab results and treatment documentation for your records.",
  },
];

const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "RevitalizeMe",
      url: "https://revitalizeme.com",
      description:
        "Physician-led telehealth platform offering personalized testosterone replacement therapy with lab-based treatment plans and ongoing monitoring.",
      medicalSpecialty: "Endocrinology",
      availableService: {
        "@type": "MedicalTherapy",
        name: "Testosterone Replacement Therapy (TRT)",
        description:
          "Personalized testosterone therapy plans based on comprehensive lab work and clinical evaluation, delivered via telehealth.",
      },
      isAcceptingNewPatients: true,
      priceRange: "$99-$199/month",
    },
    {
      "@type": "MedicalWebPage",
      name: "Testosterone Replacement Therapy (TRT) | RevitalizeMe",
      description:
        "Physician-led testosterone replacement therapy through telehealth. Lab-based treatment plans, personalized protocols, and ongoing monitoring from $99/month.",
      url: "https://revitalizeme.com/trt",
      lastReviewed: "2026-03-24",
      specialty: { "@type": "MedicalSpecialty", name: "Endocrinology" },
      about: {
        "@type": "MedicalCondition",
        name: "Low Testosterone (Hypogonadism)",
        signOrSymptom: [
          { "@type": "MedicalSignOrSymptom", name: "Fatigue" },
          { "@type": "MedicalSignOrSymptom", name: "Decreased Libido" },
          { "@type": "MedicalSignOrSymptom", name: "Brain Fog" },
          { "@type": "MedicalSignOrSymptom", name: "Loss of Muscle Mass" },
          { "@type": "MedicalSignOrSymptom", name: "Weight Gain" },
          { "@type": "MedicalSignOrSymptom", name: "Mood Changes" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

/* ================================================================
   ICONS (inline SVGs)
   ================================================================ */

function IconShieldCheck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconFlask({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4 19a1 1 0 00.87 1.5h14.26A1 1 0 0020 19l-6-9.5V3" />
    </svg>
  );
}

function IconHeartPulse({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0L12 5.34l-.77-.76a5.4 5.4 0 00-7.65 7.65L12 20.65l8.42-8.42a5.4 5.4 0 000-7.65z" />
      <path d="M3.5 12h4l2-3 3 6 2-3h5.5" />
    </svg>
  );
}

function IconLock({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function IconGlobe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function IconAward({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function IconBuilding({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  );
}

function IconClipboard({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function IconTestTube({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2" />
      <path d="M8.5 2h7" />
      <path d="M14.5 16h-5" />
    </svg>
  );
}

function IconFileText({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function IconPackage({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19" />
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#81D9DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconStar({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#F6AD55" : "none"} stroke="#F6AD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

const STEP_ICONS = [IconClipboard, IconTestTube, IconFileText, IconPackage];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function TRTLandingPage() {
  const [checkedSymptoms, setCheckedSymptoms] = useState<Record<number, boolean>>({});
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const checkedCount = Object.values(checkedSymptoms).filter(Boolean).length;

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(SCHEMA_DATA);
    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <head>
        <title>Testosterone Replacement Therapy (TRT) | RevitalizeMe</title>
        <meta name="description" content="Physician-led testosterone replacement therapy through telehealth. Lab-based treatment plans, personalized protocols, and ongoing monitoring from $99/month." />
        <meta property="og:title" content="Testosterone Replacement Therapy (TRT) | RevitalizeMe" />
        <meta property="og:description" content="Physician-led TRT through private telehealth. Personalized, lab-based treatment plans with ongoing monitoring. Plans from $99/month." />
        <meta property="og:type" content="website" />
      </head>

      {/* ============ TOP BAR ============ */}
      <div className="bg-brand-dark-teal text-white text-center py-2.5 px-4 text-[11px] sm:text-xs font-semibold tracking-[1.5px] uppercase">
        Physician-Led Telehealth &middot; Lab-Based Treatment Plans &middot; Delivered to Your Door
      </div>

      {/* ============ NAVIGATION ============ */}
      <nav className="bg-white border-b border-gray-200 py-4 relative z-50">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-2xl text-brand-dark-teal cursor-pointer">
            Revitalize<span className="text-brand-aqua">Me</span>
          </button>
          <div className="flex items-center gap-8">
            <button onClick={() => scrollTo("how-it-works")} className="hidden sm:block text-[15px] font-semibold text-brand-dark-teal hover:text-brand-aqua transition-colors cursor-pointer">
              How It Works
            </button>
            <button onClick={() => scrollTo("faq")} className="hidden sm:block text-[15px] font-semibold text-brand-dark-teal hover:text-brand-aqua transition-colors cursor-pointer">
              FAQ
            </button>
            <a href="#get-started" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-aqua text-brand-dark-teal text-sm font-bold hover:brightness-90 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section ref={heroRef} className="py-16 sm:py-20 bg-gradient-to-b from-brand-soft-gray to-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="font-display text-[28px] sm:text-[40px] lg:text-[48px] leading-tight text-brand-dark-teal mb-6">
            Tired of Feeling Like a Shadow of Who You Used to Be?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-brand-text-gray leading-relaxed mb-10 max-w-[640px] mx-auto">
            RevitalizeMe connects you with licensed providers who create personalized
            testosterone therapy plans — based on your labs, your symptoms, and your
            health history. All through private, convenient telehealth.
          </p>
          <a
            href="#get-started"
            id="get-started"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-brand-aqua text-brand-dark-teal font-bold text-base sm:text-lg hover:brightness-90 transition-all"
          >
            Start Your Free Consultation
            <IconArrow />
          </a>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mt-8">
            <span className="flex items-center gap-2 text-brand-text-gray text-sm font-semibold">
              <IconShieldCheck className="text-brand-aqua" /> Licensed Providers
            </span>
            <span className="flex items-center gap-2 text-brand-text-gray text-sm font-semibold">
              <IconFlask className="text-brand-aqua" /> Lab-Based Protocols
            </span>
            <span className="flex items-center gap-2 text-brand-text-gray text-sm font-semibold">
              <IconHeartPulse className="text-brand-aqua" /> Ongoing Monitoring
            </span>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF BAR ============ */}
      <div className="bg-[#E8F7F8] border-y border-[#d1eff1] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 sm:gap-12">
          {[
            { Icon: IconAward, label: "Board-Certified Providers" },
            { Icon: IconLock, label: "HIPAA-Compliant Platform" },
            { Icon: IconBuilding, label: "Licensed Compounding Pharmacy" },
            { Icon: IconGlobe, label: "50-State Telehealth Network" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-[15px] font-semibold text-brand-dark-teal">
              <span className="w-9 h-9 rounded-full bg-brand-dark-teal flex items-center justify-center shrink-0">
                <Icon className="text-brand-aqua" />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ============ SYMPTOM CHECKER ============ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] sm:text-4xl text-brand-dark-teal text-center mb-3">
            Could Low Testosterone Be Affecting You?
          </h2>
          <p className="text-center text-brand-text-gray text-base sm:text-lg mb-12 max-w-[600px] mx-auto">
            Select any symptoms you have been experiencing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto mb-8">
            {SYMPTOMS.map((symptom, i) => (
              <button
                key={i}
                onClick={() => setCheckedSymptoms((prev) => ({ ...prev, [i]: !prev[i] }))}
                className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  checkedSymptoms[i]
                    ? "border-brand-aqua bg-[#E8F7F8]"
                    : "border-gray-200 hover:border-brand-aqua hover:bg-brand-soft-gray"
                }`}
              >
                <span
                  className={`w-[22px] h-[22px] rounded flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    checkedSymptoms[i] ? "bg-brand-aqua border-brand-aqua" : "border-2 border-gray-300"
                  }`}
                >
                  {checkedSymptoms[i] && <IconCheck />}
                </span>
                <span className="text-base leading-snug text-brand-charcoal">{symptom}</span>
              </button>
            ))}
          </div>

          {checkedCount >= 2 && (
            <div className="max-w-[700px] mx-auto bg-brand-soft-gray border-2 border-brand-aqua rounded-xl p-6 sm:p-8 text-center animate-[fadeIn_0.3s_ease]">
              <p className="text-[17px] leading-relaxed text-brand-dark-teal mb-4">
                <strong>These symptoms are commonly associated with low testosterone levels
                in men over 30.</strong> You are not imagining it — and you are not alone.
              </p>
              <p className="text-[17px] leading-relaxed text-brand-dark-teal mb-6">
                A clinical evaluation with lab work is the only way to know for sure.
                Our providers can help you understand what is going on and what your
                options are.
              </p>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-brand-aqua text-brand-dark-teal font-bold hover:brightness-90 transition-all"
              >
                Talk to a Provider <IconArrow />
              </a>
              <p className="text-[13px] text-brand-text-gray italic mt-5">
                This is not a medical diagnosis. Only a qualified healthcare provider
                can diagnose and treat hormonal conditions based on a complete clinical
                evaluation and lab work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-brand-soft-gray">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] sm:text-4xl text-brand-dark-teal text-center mb-3">
            How It Works
          </h2>
          <p className="text-center text-brand-text-gray text-base sm:text-lg mb-12 max-w-[600px] mx-auto">
            From consultation to ongoing care — four straightforward steps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => {
              const StepIcon = STEP_ICONS[i];
              return (
                <div key={i} className="text-center">
                  <div className="font-display text-5xl text-brand-aqua/40 mb-3">0{i + 1}</div>
                  <div className="w-14 h-14 bg-brand-dark-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <StepIcon className="text-brand-aqua" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-brand-dark-teal mb-3">{step.title}</h3>
                  <p className="text-[15px] text-brand-text-gray leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ TREATMENT OPTIONS ============ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] sm:text-4xl text-brand-dark-teal text-center mb-3">
            Understanding Your Options
          </h2>
          <p className="text-center text-brand-text-gray text-base sm:text-lg mb-12 max-w-[600px] mx-auto">
            Treatment is determined by your provider based on your clinical evaluation
            and lab results. Here is an overview of common approaches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
            {TREATMENTS.map((t, i) => (
              <div key={i} className="bg-brand-soft-gray rounded-xl p-7 sm:p-8 border border-[#d1eff1] hover:-translate-y-0.5 transition-transform">
                <h3 className="font-display text-xl sm:text-[22px] text-brand-dark-teal mb-3.5">{t.title}</h3>
                <p className="text-[15px] text-brand-text-gray leading-relaxed mb-5">{t.desc}</p>
                {t.details.map((d, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm font-semibold text-brand-dark-teal mb-2">
                    <IconCheckCircle /> {d}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="max-w-[800px] mx-auto text-center text-sm text-brand-text-gray italic leading-relaxed">
            Treatment options are determined by your provider based on clinical evaluation
            and lab results. Not all options are appropriate for every patient. Individual
            results may vary. Consult with a qualified healthcare provider before starting
            any treatment.
          </p>
        </div>
      </section>

      {/* ============ WHY REVITALIZEME ============ */}
      <section className="py-16 sm:py-20 bg-brand-dark-teal">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] sm:text-4xl text-white text-center mb-3">
            Why Men Choose RevitalizeMe
          </h2>
          <p className="text-center text-[#A0C4C6] text-base sm:text-lg mb-12 max-w-[600px] mx-auto">
            Real clinical care — not a subscription box with a questionnaire.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} className="bg-white/[0.06] border border-brand-aqua/15 rounded-xl p-7 hover:bg-white/10 hover:border-brand-aqua/30 transition-all">
                <h3 className="font-display text-lg sm:text-xl text-brand-aqua mb-2.5">{d.title}</h3>
                <p className="text-[15px] text-gray-300 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] sm:text-4xl text-brand-dark-teal text-center mb-3">
            What Our Patients Are Saying
          </h2>
          <p className="text-center text-brand-text-gray text-base sm:text-lg mb-12 max-w-[600px] mx-auto">
            Real experiences from men who chose RevitalizeMe for their care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-brand-soft-gray rounded-xl p-7 sm:p-8 border border-[#d1eff1] flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <IconStar key={j} filled={j < t.stars} />
                  ))}
                </div>
                <p className="text-[15px] leading-[1.7] text-brand-text-gray flex-1 mb-5">{t.text}</p>
                <div>
                  <div className="text-[15px] font-bold text-brand-dark-teal">{t.name}, age {t.age}</div>
                  <div className="text-xs text-gray-400 italic mt-1">Results may vary</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-brand-text-gray italic max-w-[700px] mx-auto mt-10 leading-relaxed">
            Individual results may vary. These testimonials reflect individual patient
            experiences and do not constitute a guarantee of results. All patients
            underwent clinical evaluation and lab work before beginning treatment.
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-16 sm:py-20 bg-brand-soft-gray">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] sm:text-4xl text-brand-dark-teal text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-brand-text-gray text-base sm:text-lg mb-12 max-w-[600px] mx-auto">
            Honest answers about testosterone therapy, our process, and what to expect.
          </p>

          <div className="max-w-[800px] mx-auto space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border overflow-hidden transition-colors ${
                  openFAQ === i ? "border-brand-aqua" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-semibold text-brand-dark-teal hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-expanded={openFAQ === i}
                >
                  {item.q}
                  <span className={`shrink-0 transition-transform duration-200 ${openFAQ === i ? "rotate-180" : ""}`}>
                    <IconChevron />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: openFAQ === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-base leading-[1.7] text-brand-text-gray">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-dark-teal via-[#1e3335] to-brand-dark-teal text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-[28px] sm:text-[40px] text-white mb-5">
            You Don&rsquo;t Have to Feel This Way
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-[640px] mx-auto mb-9 leading-[1.7]">
            Low testosterone is a medical condition — not a character flaw, and not
            &ldquo;just getting older.&rdquo; A clinical evaluation is the first step toward
            understanding what is going on and what can be done about it.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-dark-teal font-bold text-base sm:text-lg hover:bg-brand-soft-gray transition-all"
          >
            Start Your Free Consultation
            <IconArrow />
          </a>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mt-6">
            <span className="text-sm font-semibold text-[#A0C4C6]">No commitment required</span>
            <span className="hidden sm:block text-[#A0C4C6]">&middot;</span>
            <span className="text-sm font-semibold text-[#A0C4C6]">HIPAA-compliant</span>
            <span className="hidden sm:block text-[#A0C4C6]">&middot;</span>
            <span className="text-sm font-semibold text-[#A0C4C6]">Plans from $99/month</span>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#1a2e30] pt-14 sm:pt-16 text-[#A0C4C6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 sm:gap-12 mb-12">
            <div>
              <div className="font-display text-[28px] text-white mb-4">
                Revitalize<span className="text-brand-aqua">Me</span>
              </div>
              <p className="text-[15px] leading-relaxed text-[#7FA3A5] max-w-xs">
                Physician-led telehealth for men&rsquo;s health. Personalized treatment
                plans backed by lab work, delivered with ongoing monitoring and care.
              </p>
            </div>
            <div>
              <h4 className="font-display text-base text-white mb-5">Treatments</h4>
              <ul className="space-y-2.5">
                {["Weight Loss", "Testosterone (TRT)", "Hair Loss", "Sexual Wellness", "Women\u2019s HRT", "Skincare"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-[#7FA3A5] hover:text-brand-aqua transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-base text-white mb-5">Company</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "About", href: "#" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-[#7FA3A5] hover:text-brand-aqua transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.08] py-6">
            <p className="text-xs text-[#5a7e80] max-w-[800px] mx-auto text-center leading-[1.7]">
              This website and its content are for informational purposes only and do not
              constitute medical advice. Always consult with a qualified healthcare provider
              before starting any treatment. Individual results may vary. RevitalizeMe is a
              telehealth platform that connects patients with licensed healthcare providers.
              All medical decisions are made by licensed providers based on clinical evaluation.
              <br /><br />
              All patient information is protected under HIPAA. We use industry-standard
              encryption and security practices to safeguard your health data.
              <br /><br />
              &copy; 2026 RM MSO National, LLC. All rights reserved. RevitalizeMe&reg; is
              a registered trademark of Ronin LLC.
            </p>
          </div>
        </div>
      </footer>

      {/* ============ STICKY NAV ============ */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-md py-3 z-[100] transition-transform duration-300 ${
          stickyVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-2xl text-brand-dark-teal cursor-pointer">
            Revitalize<span className="text-brand-aqua">Me</span>
          </button>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-aqua text-brand-dark-teal text-sm font-bold hover:brightness-90 transition-all"
          >
            Start Your Consultation <IconArrow />
          </a>
        </div>
      </div>

      {/* Keyframe for symptom result fade-in */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-\\[fadeIn_0\\.3s_ease\\] {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </>
  );
}
