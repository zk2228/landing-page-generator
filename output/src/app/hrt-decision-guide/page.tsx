"use client";

import Image from "next/image";

export default function HRTDecisionGuidePage() {
  return (
    <>
      <head>
        <title>The HRT Decision: Bioidentical vs. Synthetic Hormones — What Your Doctor Isn&apos;t Explaining | RevitalizeMe</title>
        <meta
          name="description"
          content="50 million women avoided HRT based on warnings now removed. Oral vs. transdermal, progesterone types, timing windows — the evidence-based guide to making the right HRT decision."
        />
        <meta
          property="og:title"
          content="The HRT Decision: What Your Doctor Isn't Explaining About Bioidentical vs. Synthetic Hormones"
        />
        <meta
          property="og:description"
          content="The FDA removed its black box warning from HRT. Here's what changed, what the evidence actually shows, and the three decisions that matter most."
        />
        <meta property="og:type" content="article" />
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

          {/* Headline */}
          <h1 className="font-display text-[28px] sm:text-[34px] text-[#294547] text-center leading-tight mb-4">
            The HRT Decision: What Your Doctor Isn&rsquo;t Explaining About Bioidentical vs. Synthetic Hormones
          </h1>

          {/* Byline */}
          <p className="text-center text-[#666666] text-sm mb-8">
            By Dr. Cyrus, MD &bull; February 2026 &bull; 14 min read
          </p>

          {/* Opening */}
          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              In 2002, a single study changed everything. The Women&rsquo;s Health Initiative published results suggesting that hormone replacement therapy increased the risk of breast cancer, heart disease, stroke, and dementia. Doctors stopped prescribing. Women flushed their pills. An entire generation was told that the hormones their bodies were missing could kill them.
            </p>
            <p>
              There was just one problem: the study was deeply flawed, the findings were misrepresented, and it took 23 years to correct course.
            </p>
          </div>

          {/* ── H2: The Lost Generation ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Lost Generation
          </h2>

          {/* Stat Cards — 3 in a row */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">50M</span>
              <span className="text-white/90 text-sm leading-snug block">American women avoided HRT based on warnings now removed</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">67%</span>
              <span className="text-white/90 text-sm leading-snug block">of WHI participants were aged 60&ndash;79, a decade past menopause</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">23 yrs</span>
              <span className="text-white/90 text-sm leading-snug block">for the FDA to remove its strongest safety warning</span>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              The WHI study made headlines worldwide. But the media reported relative risk (a scary-sounding 26% increase in breast cancer) rather than absolute risk (4 additional cases per 1,000 women over 5 years). And the estrogen-only arm of the study actually showed 23% LOWER breast cancer &mdash; a finding that was barely covered at all.
            </p>
            <p>
              The WHI&rsquo;s own reanalysis found a 40% lower breast cancer death rate among estrogen-only users.
            </p>
          </div>

          {/* Callout — Peter Attia quote */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-base sm:text-lg leading-relaxed font-medium italic">
              &ldquo;It&rsquo;s very hard not to argue that this is the greatest single failure of the modern medical system.&rdquo; &mdash; Peter Attia, MD
            </p>
          </div>

          {/* ── H2: What Actually Happened ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What Actually Happened &mdash; And What We Know Now
          </h2>

          {/* Timeline */}
          <div className="w-full mb-8">
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">2002 &mdash; WHI publishes panic-inducing results</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Media reports relative risk without context. Millions of women stop HRT overnight.</p>
              </div>
            </div>
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">2003 &mdash; FDA adds black box warning to all HRT</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">The strongest possible safety label. Providers become afraid to prescribe.</p>
              </div>
            </div>
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">2010s &mdash; Reanalysis reveals major design flaws</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Wrong age group, wrong hormones, wrong conclusions. The &ldquo;timing hypothesis&rdquo; emerges.</p>
              </div>
            </div>
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">2024 &mdash; WHI authors acknowledge benefits outweigh risks</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">For most women starting HRT near menopause, the benefit-risk ratio is favorable.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
              </div>
              <div className="pb-2">
                <h3 className="font-semibold text-[#294547] text-base mb-1">November 2025 &mdash; FDA removes black box warning</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">The strongest possible regulatory signal that the risk profile has fundamentally changed.</p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-4">
            <p>The WHI study had three critical flaws:</p>
          </div>

          {/* Three numbered flaw cards */}
          <div className="w-full space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Wrong age group</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  67% of participants were 60&ndash;79 years old. The average age was 63. Most women begin menopause around 51. The study tested HRT on women who were a decade or more past the window where it provides the greatest benefit.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Wrong hormones</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  The study used conjugated equine estrogens (from horse urine) combined with medroxyprogesterone acetate (MPA) &mdash; a synthetic progestin now linked to the breast cancer risk the study reported. These formulations are rarely prescribed today.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Wrong conclusion</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  The media reported a 26% increased breast cancer risk. The actual absolute risk was 4 additional cases per 1,000 women over 5 years. And the estrogen-only arm showed 23% LOWER breast cancer.
                </p>
              </div>
            </div>
          </div>

          {/* ── H2: The Three Decisions That Matter ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Forget &ldquo;Bioidentical vs. Synthetic&rdquo; &mdash; Here Are the Three Decisions That Actually Matter
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              The internet frames HRT as &ldquo;bioidentical = good, synthetic = bad.&rdquo; That&rsquo;s an oversimplification. The evidence shows three specific decisions drive nearly all of the risk variation:
            </p>
          </div>

          {/* Three-column decision cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">1. Delivery Method</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Transdermal (patch, gel) bypasses the liver. No increased clot risk. No increased stroke risk. Preferred for most women.
              </p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">2. Progesterone Type</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Micronized progesterone (Prometrium) vs synthetic progestins (MPA/Provera). 33% lower breast cancer risk with micronized progesterone.
              </p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">3. Timing Window</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Start within 10 years of menopause onset or before age 60 for optimal benefit. FDA now recommends this as standard guidance.
              </p>
            </div>
          </div>

          {/* Callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-sm sm:text-base leading-relaxed">
              <strong>Key distinction:</strong> The WHI used oral conjugated equine estrogens + synthetic MPA. Modern evidence-based HRT uses transdermal estradiol + micronized progesterone. These are fundamentally different treatments with fundamentally different risk profiles.
            </p>
          </div>

          {/* ── H2: Decision #1: Delivery Method ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Decision #1: How You Take It Matters More Than What You Take
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              Oral estrogen passes through the liver before reaching the rest of the body. This &ldquo;first-pass metabolism&rdquo; disrupts clotting protein synthesis. Transdermal estrogen &mdash; delivered through a patch or gel &mdash; enters the bloodstream directly, bypassing the liver entirely.
            </p>
          </div>

          {/* Horizontal Bar Comparison */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-5 sm:p-6 mb-6">
            <h3 className="font-semibold text-[#294547] text-base mb-4">Oral Estrogen vs. Transdermal Estrogen</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">Blood Clots (VTE)</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-xs text-[#666666] w-20 shrink-0">Oral</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div className="bg-[#294547] h-6 rounded-full flex items-center justify-end pr-2" style={{ width: "63%" }}>
                      <span className="text-white text-xs font-semibold">+63%</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <span className="text-xs text-[#666666] w-20 shrink-0">Transdermal</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div className="bg-[#81D9DE] h-6 rounded-full flex items-center justify-center" style={{ width: "8%" }}>
                    </div>
                  </div>
                  <span className="text-xs text-[#81D9DE] font-semibold">No increase</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">DVT Risk</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-xs text-[#666666] w-20 shrink-0">Oral</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div className="bg-[#294547] h-6 rounded-full flex items-center justify-end pr-2" style={{ width: "80%" }}>
                      <span className="text-white text-xs font-semibold">+109%</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <span className="text-xs text-[#666666] w-20 shrink-0">Transdermal</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div className="bg-[#81D9DE] h-6 rounded-full flex items-center justify-center" style={{ width: "8%" }}>
                    </div>
                  </div>
                  <span className="text-xs text-[#81D9DE] font-semibold">No increase</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">Stroke Risk</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-xs text-[#666666] w-20 shrink-0">Oral</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div className="bg-[#294547] h-6 rounded-full flex items-center justify-end pr-2" style={{ width: "24%" }}>
                      <span className="text-white text-xs font-semibold">+24%</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <span className="text-xs text-[#666666] w-20 shrink-0">Transdermal</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div className="bg-[#81D9DE] h-6 rounded-full flex items-center justify-center" style={{ width: "8%" }}>
                    </div>
                  </div>
                  <span className="text-xs text-[#81D9DE] font-semibold">No increase</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#666666] mt-4 italic">Source: Meta-analysis of 15 observational studies, J Clin Endocrinol Metab 2015</p>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              NICE (UK), ACOG, and the Menopause Society all now recommend transdermal estrogen as the preferred delivery method.
            </p>
            <p>
              <strong>Common transdermal options:</strong> Estradiol patches (Climara, Vivelle-Dot, Alora), estradiol gels (EstroGel, Divigel), estradiol sprays (Evamist). All are FDA-approved and bioidentical.
            </p>
          </div>

          {/* ── MID-ARTICLE EMAIL CAPTURE CTA ── */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] text-center mb-3">
              Want the Complete HRT Decision Guide?
            </h2>
            <p className="text-center text-[#666666] text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Download the full guide with the oral vs. transdermal comparison, progesterone safety data, the provider conversation checklist, and 10 cited sources &mdash; all in a printable PDF.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full flex flex-col gap-3 max-w-md mx-auto"
            >
              <input type="hidden" name="access_key" value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897" />
              <input type="hidden" name="redirect" value="https://landing-page-generator-gamma.vercel.app/hrt-decision-guide/thank-you" />
              <input type="hidden" name="subject" value="New Lead: HRT Decision Guide" />
              <input type="hidden" name="from_name" value="RevitalizeMe Lead Magnet" />
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
                Send Me the Free Guide &rarr;
              </button>
            </form>
            <p className="text-center text-sm text-[#666666] mt-3">
              Free &bull; No spam &bull; Unsubscribe anytime
            </p>
          </div>

          {/* ── H2: Decision #2: Progesterone Type ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Decision #2: Not All Progesterone Is the Same
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              The WHI&rsquo;s progesterone finding was barely discussed. Mounting evidence now points to synthetic progestin MPA as the primary driver of the breast cancer risk &mdash; not estrogen.
            </p>
          </div>

          {/* Two-column comparison */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border-2 border-red-300 overflow-hidden">
              <div className="bg-red-50 px-5 py-3">
                <h3 className="font-semibold text-red-800 text-base">Synthetic MPA (Provera)</h3>
              </div>
              <ul className="text-sm text-[#1A1A2E] space-y-2 p-5">
                <li>&bull; Molecular structure differs from human progesterone</li>
                <li>&bull; Binds to androgen and glucocorticoid receptors</li>
                <li>&bull; Increases breast cell proliferation</li>
                <li>&bull; Associated with 28% increased breast cancer (WHI)</li>
                <li>&bull; Linked to cardiovascular risk</li>
                <li className="font-semibold text-red-700">&bull; What the WHI study used</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-emerald-300 overflow-hidden">
              <div className="bg-emerald-50 px-5 py-3">
                <h3 className="font-semibold text-emerald-800 text-base">Micronized Progesterone (Prometrium)</h3>
              </div>
              <ul className="text-sm text-[#1A1A2E] space-y-2 p-5">
                <li>&bull; Identical molecular structure to human progesterone</li>
                <li>&bull; Binds only to progesterone receptors</li>
                <li>&bull; Does not increase breast cell proliferation</li>
                <li>&bull; 33% lower breast cancer vs synthetic progestins</li>
                <li>&bull; No increased cardiovascular risk documented</li>
                <li className="font-semibold text-emerald-700">&bull; FDA-approved, widely available</li>
              </ul>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              The French E3N cohort study &mdash; following over 80,000 women &mdash; found estrogen + micronized progesterone showed no increased breast cancer risk (RR = 1.0), while estrogen + synthetic progestins showed RR of 1.69. Meta-analysis confirmed: progesterone was associated with 33% lower breast cancer risk (RR = 0.67, p &lt; 0.0001).
            </p>
          </div>

          {/* Callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-sm sm:text-base leading-relaxed">
              <strong>If you have a uterus, you need a progestogen with your estrogen.</strong> Micronized progesterone provides that protection without the breast cancer signal associated with synthetic MPA. This distinction alone changes the entire risk conversation.
            </p>
          </div>

          {/* ── H2: Decision #3: Timing ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Decision #3: When You Start Changes Everything
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              The FDA&rsquo;s November 2025 label update includes a specific timing recommendation: start within 10 years of menopause onset or before age 60.
            </p>
          </div>

          {/* Three stat cards — timing benefits */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">50%</span>
              <span className="text-white/90 text-sm leading-snug block">reduction in cardiovascular disease risk</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">35%</span>
              <span className="text-white/90 text-sm leading-snug block">reduction in Alzheimer&rsquo;s disease risk</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">50&ndash;60%</span>
              <span className="text-white/90 text-sm leading-snug block">reduction in bone fracture risk</span>
            </div>
          </div>

          {/* ── FDA-Approved vs. Compounded ── */}
          <h3 className="w-full text-lg sm:text-xl font-semibold text-[#294547] mb-4 mt-2">
            FDA-Approved vs. Compounded: The Real Distinction
          </h3>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              Both FDA-approved and compounded products can be bioidentical. The difference is manufacturing and quality control:
            </p>
          </div>

          {/* 2x2 card grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="border-t-4 border-emerald-400 rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">FDA-Approved Bioidentical</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Estradiol patches (Climara, Vivelle), Prometrium. Standardized dosing, rigorous QC, insurance-covered. These ARE bioidentical.
              </p>
            </div>
            <div className="border-t-4 border-amber-400 rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">⚠️</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Compounded Bioidentical</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Custom-mixed at specialty pharmacies. Same active ingredients but variable potency (FDA found 26&ndash;270% of labeled dose). Not FDA-evaluated.
              </p>
            </div>
            <div className="border-t-4 border-red-400 rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">❌</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Synthetic Non-Bioidentical</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Premarin (horse-derived estrogen), Provera (MPA). Different molecular structure. What the WHI studied.
              </p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">The Smart Approach</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Start with FDA-approved bioidentical. Consider compounded only if you need a formulation unavailable as FDA-approved (e.g., testosterone for women).
              </p>
            </div>
          </div>

          {/* ── H2: Provider Conversation Checklist ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Your Provider Conversation Checklist
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              Not all providers are up to date. The average U.S. medical school devotes less than 4 hours to menopause education.
            </p>
          </div>

          {/* 5 numbered action cards */}
          <div className="w-full space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Am I a candidate for HRT?</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  The FDA recommends considering HRT for women under 60 or within 10 years of menopause onset with moderate-to-severe symptoms.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Can we use transdermal estradiol instead of oral?</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Patches and gels bypass the liver, eliminating the blood clot and stroke risk associated with oral estrogen.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Can we use micronized progesterone instead of synthetic?</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Prometrium has a more favorable breast cancer profile than MPA. FDA-approved, widely available.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">What monitoring should I expect?</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Baseline labs, symptom tracking at 3 months, follow-up labs at 6&ndash;12 months. Dosing should be titrated to symptom relief.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Are there situations where HRT is NOT right for me?</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Active breast cancer, history of blood clots, active liver disease, or unexplained vaginal bleeding require careful evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* ── Final Consultation CTA ── */}
          <div className="w-full bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              Ready to Talk to a Provider Who Understands This?
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              Our providers specialize in women&rsquo;s hormone health. They understand the latest evidence on HRT &mdash; delivery methods, progesterone types, and timing that make all the difference.
            </p>
            <a
              href="https://revitalizeme.com/catalog?category=womens-health"
              className="inline-block bg-[#81D9DE] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-lg hover:brightness-90 transition-all"
            >
              Start Your Free Consultation
            </a>
            <p className="text-white/70 text-xs mt-3">No commitment. No pressure. Just answers.</p>
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
              This content is for educational purposes only and is not intended as medical advice. Information reflects published research available as of February 2026. HRT decisions should be made with a qualified healthcare provider based on your individual health history and risk factors. Individual results may vary.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
