import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Your Guide Is Ready | RevitalizeMe",
  description: "Download your free copy of Triple G Explained.",
};

export default function ThankYouPage() {
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

        {/* Confirmation Icon */}
        <div className="w-16 h-16 rounded-full bg-brand-aqua flex items-center justify-center mx-auto mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#294547"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl text-brand-dark-teal text-center leading-tight mb-4">
          Your Guide Is Ready
        </h1>

        {/* Subtext */}
        <p className="text-center text-brand-text-gray text-base sm:text-lg leading-relaxed mb-8 max-w-[480px]">
          Click below to download your free copy of{" "}
          <strong className="text-brand-dark-teal">Triple G Explained</strong>.
        </p>

        {/* Download Button */}
        <a
          href="/hormone-health-checklist.pdf"
          download
          className="w-full bg-brand-aqua text-brand-dark-teal font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:brightness-90 transition-all text-center block"
        >
          Download the Free Guide
        </a>

        {/* Divider */}
        <hr className="my-10 border-t border-gray-200 w-full" />

        {/* Consultation CTA */}
        <p className="text-center text-brand-text-gray text-base leading-relaxed mb-5">
          Want to talk to a provider about which weight loss medication is right
          for you?
        </p>

        <a
          href="https://revitalizeme.com"
          className="w-full py-3.5 rounded-lg text-base font-semibold border-2 border-brand-dark-teal text-brand-dark-teal bg-transparent hover:bg-brand-soft-gray transition-colors text-center block"
        >
          Start Your Free Consultation
        </a>

        {/* Footer */}
        <footer className="text-center border-t border-gray-200 pt-6 mt-12 w-full">
          <p className="text-xs text-brand-text-gray">
            &copy; 2026 RevitalizeMe. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
