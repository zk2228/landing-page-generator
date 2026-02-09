import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Guide Is Ready | RevitalizeMe",
  description:
    "Download The Hormone Health Checklist — 12 signs your hormones may be working against you, with a self-scoring system and provider-recommended action plan.",
  openGraph: {
    title: "Your Guide Is Ready | RevitalizeMe",
    description:
      "Download The Hormone Health Checklist — evidence-based, provider-reviewed.",
    type: "website",
  },
};

export default function HormoneChecklistThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-[560px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 sm:mb-10">
          <span className="font-display text-2xl sm:text-3xl tracking-tight">
            <span className="text-brand-dark-teal">Revitalize</span>
            <span className="text-brand-aqua">Me</span>
            <sup className="text-xs text-brand-text-gray align-super ml-0.5">
              &reg;
            </sup>
          </span>
        </div>

        {/* Checkmark Icon */}
        <div className="w-20 h-20 rounded-full bg-brand-aqua/20 flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-brand-aqua"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl text-brand-dark-teal text-center leading-tight mb-4">
          Your Guide Is Ready
        </h1>

        {/* Subheadline */}
        <p className="text-center text-brand-text-gray text-base sm:text-lg leading-relaxed mb-8 max-w-[480px]">
          Click below to download The Hormone Health Checklist. We&rsquo;ve also
          sent a copy to your email.
        </p>

        {/* Download Button */}
        <a
          href="/hormone-health-checklist.pdf"
          download
          className="w-full text-center bg-brand-dark-teal text-white font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:brightness-125 transition-all inline-block mb-10"
        >
          Download Your Free Guide
        </a>

        {/* What's Next Section */}
        <div className="w-full bg-brand-soft-gray rounded-xl p-6 sm:p-8 text-center mb-12">
          <h2 className="font-display text-xl sm:text-2xl text-brand-dark-teal mb-3">
            While you&rsquo;re here&hellip;
          </h2>
          <p className="text-brand-text-gray text-sm sm:text-base leading-relaxed mb-6 max-w-[440px] mx-auto">
            If the checklist hits close to home, you don&rsquo;t have to figure
            it out alone. RevitalizeMe offers personalized telehealth
            consultations for hormone health, weight management, and more.
          </p>
          <a
            href="https://revitalizeme.com"
            className="inline-block border-2 border-brand-dark-teal text-brand-dark-teal font-semibold text-sm sm:text-base py-3 px-8 rounded-lg hover:bg-brand-dark-teal hover:text-white transition-colors"
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-gray-200 pt-6 w-full">
          <p className="text-xs text-brand-text-gray mb-2">
            &copy; 2026 RevitalizeMe. All rights reserved.
          </p>
          <p className="text-xs text-brand-text-gray/80 leading-relaxed max-w-[480px] mx-auto">
            This guide is for educational purposes only and is not intended as
            medical advice, diagnosis, or treatment. Always consult with a
            qualified healthcare provider.
          </p>
        </footer>
      </div>
    </div>
  );
}
