"use client";

import Image from "next/image";

export default function DecisionMatrixThankYouPage() {
  return (
    <>
      <head>
        <title>Your Guide Is Ready | RevitalizeMe</title>
        <meta
          name="description"
          content="Download The 2026 GLP-1 Decision Matrix — semaglutide vs. tirzepatide vs. retatrutide compared head-to-head. Evidence-based. Provider-reviewed."
        />
        <meta
          property="og:title"
          content="Your Guide Is Ready | RevitalizeMe"
        />
        <meta
          property="og:description"
          content="Download your free copy of The 2026 GLP-1 Decision Matrix. Evidence-based. Provider-reviewed."
        />
        <meta property="og:type" content="website" />
      </head>

      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-2xl flex flex-col items-center">
          {/* Header / Logo */}
          <div className="mb-8 sm:mb-10">
            <Image
              src="/revitalizeme-logo-wide.svg"
              alt="RevitalizeMe"
              width={200}
              height={60}
              priority
            />
          </div>

          {/* Checkmark Icon */}
          <div className="w-20 h-20 rounded-full bg-[#81D9DE]/20 flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-[#81D9DE]"
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
          <h1 className="font-display text-3xl sm:text-4xl text-[#294547] text-center leading-tight mb-4">
            Your Guide Is Ready!
          </h1>

          {/* Subtext */}
          <p className="text-center text-[#666666] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Click below to download your free copy of The 2026 GLP-1 Decision
            Matrix.
          </p>

          {/* Download Button */}
          <a
            href="/glp1-decision-matrix.pdf"
            download="glp1-decision-matrix.pdf"
            className="w-full text-center bg-[#294547] text-white font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:bg-[#3A5F62] transition-all inline-block mb-10"
          >
            Download The Decision Matrix (PDF) &rarr;
          </a>

          {/* What's Inside */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] mb-4">
              Here&rsquo;s what&rsquo;s inside your guide:
            </h2>
            <ul className="space-y-3 text-[#1A1A2E] text-sm sm:text-base mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  Full comparison table: semaglutide vs. tirzepatide vs.
                  retatrutide
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>Cost and availability breakdown for each</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>Side effect profile comparison</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  Decision framework: &ldquo;Choose X if&hellip;&rdquo;
                </span>
              </li>
            </ul>
            <p className="text-xs text-[#666666]">
              9 pages &bull; Evidence-based &bull; Provider-reviewed
            </p>
          </div>

          {/* CTA Block */}
          <div className="w-full bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-12">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              Want Personalized Guidance?
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              Talk to a licensed provider about which weight loss treatment is
              right for you — based on your health, your goals, and the latest
              evidence.
            </p>
            <a
              href="https://revitalizeme.com"
              className="inline-block bg-[#81D9DE] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-lg hover:brightness-90 transition-all mb-3"
            >
              Start Your Free Consultation
            </a>
            <p className="text-white/70 text-xs mt-2">
              No commitment. No pressure. Just answers.
            </p>
          </div>

          {/* Footer */}
          <footer className="text-center border-t border-gray-200 pt-6 w-full">
            <a
              href="https://revitalizeme.com"
              className="text-sm text-[#81D9DE] hover:underline mb-3 inline-block"
            >
              RevitalizeMe.com
            </a>
            <p className="text-xs text-[#666666]/80 leading-relaxed max-w-xl mx-auto">
              This content is for educational purposes only and is not intended
              as medical advice. Always consult with a qualified healthcare
              provider before starting any treatment. Retatrutide is an
              investigational medication not yet approved by the FDA.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
