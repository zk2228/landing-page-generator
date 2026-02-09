import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Hormone Health Checklist | RevitalizeMe",
  description:
    "Download the free checklist: 12 signs your hormones may be working against you — and what to actually do about it. Evidence-based. Provider-reviewed.",
  openGraph: {
    title: "Free Hormone Health Checklist | RevitalizeMe",
    description:
      "12 signs your hormones may be working against you — and what to actually do about it. Evidence-based. Provider-reviewed.",
    type: "website",
  },
};

export default function HormoneChecklistPage() {
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

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl text-brand-dark-teal text-center leading-tight mb-4">
          Your Hormones Are Trying to Tell You Something
        </h1>

        {/* Subheadline */}
        <p className="text-center text-brand-text-gray text-base sm:text-lg leading-relaxed mb-8 max-w-[480px]">
          Get the free checklist: 12 signs your hormones may be working against
          you — and what to actually do about it. Evidence-based.
          Provider-reviewed. No BS.
        </p>

        {/* Social Proof */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex -space-x-2">
            <span className="inline-block w-8 h-8 rounded-full bg-brand-dark-teal border-2 border-white" />
            <span className="inline-block w-8 h-8 rounded-full bg-brand-aqua border-2 border-white" />
            <span className="inline-block w-8 h-8 rounded-full bg-brand-text-gray border-2 border-white" />
            <span className="inline-block w-8 h-8 rounded-full bg-brand-dark-teal/70 border-2 border-white" />
            <span className="inline-block w-8 h-8 rounded-full bg-brand-aqua/70 border-2 border-white" />
          </div>
          <span className="text-sm text-brand-text-gray">
            Join 2,000+ readers who&rsquo;ve downloaded this guide
          </span>
        </div>

        {/* Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full flex flex-col gap-3 mb-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://landing-page-generator-gamma.vercel.app/hormone-checklist/thank-you"
          />
          <input
            type="hidden"
            name="subject"
            value="New Hormone Checklist Download"
          />

          <input
            type="text"
            name="name"
            placeholder="First name"
            required
            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-base text-brand-charcoal placeholder:text-gray-400 outline-none transition-colors focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-base text-brand-charcoal placeholder:text-gray-400 outline-none transition-colors focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/30"
          />

          <button
            type="submit"
            className="w-full bg-brand-aqua text-brand-dark-teal font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:brightness-90 transition-all cursor-pointer"
          >
            Send Me the Free Guide
          </button>
        </form>

        {/* Trust Text */}
        <p className="text-center text-sm text-brand-text-gray mb-8">
          No spam ever. Unsubscribe anytime. Your data stays private.
        </p>

        {/* What's Inside */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-brand-dark-teal mb-12">
          <span>&#10003; 12 hormone warning signs</span>
          <span className="hidden sm:inline text-brand-text-gray">&middot;</span>
          <span>&#10003; Self-scoring system</span>
          <span className="hidden sm:inline text-brand-text-gray">&middot;</span>
          <span>&#10003; Provider-recommended action plan</span>
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
