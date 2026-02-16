"use client";

import Image from "next/image";

export default function HormonalAnxietyGuideThankYouPage() {
  return (
    <>
      <head>
        <title>Your Hormonal Anxiety Guide Is Ready | RevitalizeMe</title>
        <meta
          name="description"
          content="Download your free Hormonal Anxiety Guide — diagnostic comparison chart, brain chemistry explainer, provider conversation checklist, and cited sources."
        />
        <meta
          property="og:title"
          content="Your Hormonal Anxiety Guide Is Ready | RevitalizeMe"
        />
        <meta
          property="og:description"
          content="Download your free Hormonal Anxiety Guide from RevitalizeMe."
        />
        <meta property="og:type" content="website" />
      </head>

      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-2xl flex flex-col items-center">
          {/* Logo */}
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
            Your Hormonal Anxiety Guide Is Ready
          </h1>

          {/* Subtext */}
          <p className="text-center text-[#666666] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Click below to download your free Hormonal Anxiety Guide.
          </p>

          {/* Download Button */}
          <a
            href="/hormonal-anxiety-guide.pdf"
            download="hormonal-anxiety-guide.pdf"
            className="w-full text-center bg-[#294547] text-white font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:bg-[#3A5F62] transition-all inline-block mb-10"
          >
            Download the Hormonal Anxiety Guide (PDF) &rarr;
          </a>

          {/* What's Inside */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] mb-4">
              Here&rsquo;s what&rsquo;s inside your guide:
            </h2>
            <ul className="space-y-3 text-[#1A1A2E] text-sm sm:text-base mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>Diagnostic comparison: clinical anxiety vs. hormonal symptoms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>Brain chemistry explainer: serotonin, GABA, and dopamine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>What the evidence says about HRT for mood symptoms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>Provider conversation checklist with 4 key talking points</span>
              </li>
            </ul>
            <p className="text-xs text-[#666666]">
              Evidence-based &bull; 10 cited sources &bull; Updated for 2026
            </p>
          </div>

          {/* CTA Block */}
          <div className="w-full bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              Your Mood Deserves a Second Opinion
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              Talk to a provider who understands the hormonal picture &mdash; not just the psychiatric one.
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

          {/* Cross-Sell Links */}
          <div className="w-full mb-12">
            <h3 className="font-display text-lg text-[#294547] text-center mb-4">
              You might also like:
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="/perimenopause-symptom-guide"
                className="block w-full text-center border border-gray-200 rounded-lg py-3 px-4 text-sm text-[#294547] hover:border-[#81D9DE] hover:bg-[#F0F9FA] transition-all"
              >
                Not sure if you&rsquo;re in perimenopause? Get the Symptom Guide &rarr;
              </a>
              <a
                href="/hrt-decision-guide"
                className="block w-full text-center border border-gray-200 rounded-lg py-3 px-4 text-sm text-[#294547] hover:border-[#81D9DE] hover:bg-[#F0F9FA] transition-all"
              >
                Need the full HRT breakdown? Get the HRT Decision Guide &rarr;
              </a>
            </div>
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
              as medical advice. If you are currently taking antidepressants, do not
              stop or change your dose without consulting your prescribing provider.
              Information reflects published research as of February 2026. Individual results may vary.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
