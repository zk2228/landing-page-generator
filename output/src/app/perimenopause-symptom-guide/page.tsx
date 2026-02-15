"use client";

import Image from "next/image";

export default function PerimenopauseSymptomGuidePage() {
  return (
    <>
      <head>
        <title>Am I in Perimenopause? Free Symptom Guide | RevitalizeMe</title>
        <meta
          name="description"
          content="55% of women in their early 30s already have symptoms. Free full-body symptom map, thyroid comparison table, and the latest 2025–2026 HRT research."
        />
        <meta
          property="og:title"
          content="Am I in Perimenopause? Free Symptom Guide | RevitalizeMe"
        />
        <meta
          property="og:description"
          content="The guide women are printing out and bringing to their doctors. Full-body symptom map, thyroid comparison table, and what to do next."
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

          {/* Headline */}
          <h1 className="font-display text-[28px] sm:text-[34px] text-[#294547] text-center leading-tight mb-4">
            Am I in Perimenopause?
          </h1>

          {/* Subheadline */}
          <p className="text-center text-[#666666] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            55% of women in their early 30s already have symptoms. Most
            won&apos;t be told for another 20 years. This free guide changes
            that &mdash; with the latest 2025&ndash;2026 research, a full-body
            symptom map, and what to do next.
          </p>

          {/* Stat Accent */}
          <div className="text-center mb-8">
            <span className="font-display text-5xl sm:text-6xl text-[#81D9DE] block">
              55%
            </span>
            <span className="text-sm text-[#666666] mt-1 block">
              of women in their early 30s already have symptoms
            </span>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-2">
              <span className="inline-block w-8 h-8 rounded-full bg-[#294547] border-2 border-white" />
              <span className="inline-block w-8 h-8 rounded-full bg-[#81D9DE] border-2 border-white" />
              <span className="inline-block w-8 h-8 rounded-full bg-[#5A6B6E] border-2 border-white" />
              <span className="inline-block w-8 h-8 rounded-full bg-[#294547]/70 border-2 border-white" />
              <span className="inline-block w-8 h-8 rounded-full bg-[#81D9DE]/70 border-2 border-white" />
            </div>
            <span className="text-sm text-[#666666]">
              The guide women are printing out and bringing to their doctors
            </span>
          </div>

          {/* Email Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="w-full flex flex-col gap-3 mb-3"
          >
            <input
              type="hidden"
              name="access_key"
              value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://landing-page-generator-gamma.vercel.app/perimenopause-symptom-guide/thank-you"
            />
            <input
              type="hidden"
              name="subject"
              value="New Lead: Perimenopause Symptom Guide"
            />
            <input
              type="hidden"
              name="from_name"
              value="RevitalizeMe Lead Magnet"
            />
            <input type="checkbox" name="botcheck" className="hidden" />

            <input
              type="text"
              name="name"
              required
              placeholder="First name"
              className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-base text-[#1A1A2E] placeholder:text-gray-400 outline-none transition-colors focus:border-[#81D9DE] focus:ring-2 focus:ring-[#81D9DE]/30"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-base text-[#1A1A2E] placeholder:text-gray-400 outline-none transition-colors focus:border-[#81D9DE] focus:ring-2 focus:ring-[#81D9DE]/30"
            />

            <button
              type="submit"
              className="w-full bg-[#294547] text-white font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:bg-[#3A5F62] transition-all cursor-pointer"
            >
              Get the Symptom Guide &rarr;
            </button>
          </form>

          {/* Trust Line */}
          <p className="text-center text-sm text-[#666666] mb-10">
            Free &bull; No spam &bull; Unsubscribe anytime
          </p>

          {/* What's Inside */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-12">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] mb-4">
              What&rsquo;s inside:
            </h2>
            <ul className="space-y-3 text-[#1A1A2E] text-sm sm:text-base mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  Full-body symptom map &mdash; organized by 6 body systems so
                  nothing gets missed
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  Is it perimenopause or thyroid? A comparison table to bring to
                  your doctor
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  The FDA just removed HRT warnings &mdash; what changed and why
                  it matters now
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#81D9DE] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  Tests worth discussing with your provider at your next
                  appointment
                </span>
              </li>
            </ul>
            <p className="text-xs text-[#666666]">
              Evidence-based &bull; Provider-reviewed &bull; Updated for 2026
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
              provider before starting any treatment.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
