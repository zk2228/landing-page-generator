import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Triple G Explained — Free Guide | RevitalizeMe",
  description:
    "How retatrutide targets 3 hormones where Ozempic targets 1. Free evidence-based guide from RevitalizeMe.",
  openGraph: {
    title: "Triple G Explained — Free Guide | RevitalizeMe",
    description:
      "How retatrutide's 3-receptor approach is rewriting the playbook on metabolic weight loss. Free guide. Evidence-based. Provider-reviewed.",
    type: "website",
  },
};

export default function TripleGTestPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-[560px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 sm:mb-10">
          <Image
            src="/revitalizeme-logo-wide.svg"
            alt="RevitalizeMe"
            width={220}
            height={66}
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl text-brand-dark-teal text-center leading-tight mb-4">
          The Next Generation of Weight Loss Medicine Is a Triple Threat
        </h1>

        {/* Subheadline */}
        <p className="text-center text-brand-text-gray text-base sm:text-lg leading-relaxed mb-8 max-w-[480px]">
          How retatrutide&apos;s 3-receptor approach is rewriting the playbook
          on metabolic weight loss. Free guide. Evidence-based.
          Provider-reviewed.
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
            Join thousands staying ahead of the weight loss science
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
            name="subject"
            value="TEST — Triple G Explained Guide"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://landing-page-generator-gamma.vercel.app/triple-g-test/thank-you"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="First name"
            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-base text-brand-charcoal placeholder:text-gray-400 outline-none transition-colors focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/30"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
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
          No spam. Unsubscribe anytime. Your data stays private.
        </p>

        {/* What's Inside */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-brand-dark-teal mb-12">
          <span>&#10003; Single vs. dual vs. triple agonist breakdown</span>
          <span className="hidden sm:inline text-brand-text-gray">
            &middot;
          </span>
          <span>&#10003; Phase 3 clinical trial results</span>
          <span className="hidden sm:inline text-brand-text-gray">
            &middot;
          </span>
          <span>&#10003; What it means for your treatment options</span>
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
