import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Guide Is Ready | RevitalizeMe",
  description:
    "Download our free berberine guide — AMPK activation, metabolic health, and the 3-ingredient stack explained. Evidence-based, from RevitalizeMe's medical team.",
  openGraph: {
    title: "Your Guide Is Ready | RevitalizeMe",
    description:
      "Download our free berberine guide — evidence-based, provider-reviewed.",
    type: "website",
  },
};

export default function BerberinePlaybookThankYouPage() {
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
          Click below to download Berberine: What the Research Actually Says. We&rsquo;ve also
          sent a copy to your email.
        </p>

        {/* Download Button */}
        <a
          href="/revitalizeme-berberine-guide.pdf"
          download
          className="w-full text-center bg-brand-dark-teal text-white font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:brightness-125 transition-all inline-block mb-10"
        >
          Download Your Free Guide
        </a>

        {/* What's Inside Section */}
        <div className="w-full bg-brand-soft-gray rounded-xl p-6 sm:p-8 mb-10">
          <h2 className="font-display text-xl sm:text-2xl text-brand-dark-teal mb-4 text-center">
            What&rsquo;s Inside
          </h2>
          <ul className="space-y-3 text-brand-text-gray text-sm sm:text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-brand-aqua mt-0.5">&#10003;</span>
              <span>How berberine activates AMPK — and what that means for metabolic health</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-aqua mt-0.5">&#10003;</span>
              <span>Head-to-head comparison: berberine vs. GLP-1 medications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-aqua mt-0.5">&#10003;</span>
              <span>Why ALA and Ceylon Cinnamon make a 3-ingredient metabolic stack</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-aqua mt-0.5">&#10003;</span>
              <span>Red flags to watch for when choosing a berberine supplement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-aqua mt-0.5">&#10003;</span>
              <span>Drug interaction warnings and safety considerations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-aqua mt-0.5">&#10003;</span>
              <span>Full clinical references — every claim linked to its source study</span>
            </li>
          </ul>
        </div>

        {/* Consultation CTA */}
        <div className="w-full bg-brand-soft-gray rounded-xl p-6 sm:p-8 text-center mb-12">
          <h2 className="font-display text-xl sm:text-2xl text-brand-dark-teal mb-3">
            Want personalized guidance?
          </h2>
          <p className="text-brand-text-gray text-sm sm:text-base leading-relaxed mb-6 max-w-[440px] mx-auto">
            Our providers can help you determine if berberine is right for your
            metabolic health goals — and ensure it won&rsquo;t interact with any
            current medications.
          </p>
          <a
            href="https://revitalizeme.com"
            className="inline-block border-2 border-brand-dark-teal text-brand-dark-teal font-semibold text-sm sm:text-base py-3 px-8 rounded-lg hover:bg-brand-dark-teal hover:text-white transition-colors"
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Cross-sell Links */}
        <div className="w-full mb-10">
          <h3 className="font-display text-lg text-brand-dark-teal text-center mb-4">
            More from RevitalizeMe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="/new-weight-loss-drugs-2026"
              className="block bg-brand-soft-gray rounded-lg p-4 hover:bg-brand-aqua/10 transition-colors"
            >
              <p className="text-brand-dark-teal font-semibold text-sm mb-1">
                New Weight Loss Drugs 2026
              </p>
              <p className="text-brand-text-gray text-xs leading-relaxed">
                What&rsquo;s coming next in GLP-1 medications
              </p>
            </a>
            <a
              href="/hormone-checklist"
              className="block bg-brand-soft-gray rounded-lg p-4 hover:bg-brand-aqua/10 transition-colors"
            >
              <p className="text-brand-dark-teal font-semibold text-sm mb-1">
                Hormone Health Checklist
              </p>
              <p className="text-brand-text-gray text-xs leading-relaxed">
                12 signs your hormones may need attention
              </p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-gray-200 pt-6 w-full">
          <p className="text-xs text-brand-text-gray mb-2">
            &copy; 2026 RevitalizeMe. All rights reserved.
          </p>
          <p className="text-xs text-brand-text-gray/80 leading-relaxed max-w-[480px] mx-auto">
            *These statements have not been evaluated by the Food and Drug
            Administration. This guide is for educational purposes only and is
            not intended as medical advice, diagnosis, or treatment. Always
            consult with a qualified healthcare provider before starting any
            supplement regimen.
          </p>
        </footer>
      </div>
    </div>
  );
}
