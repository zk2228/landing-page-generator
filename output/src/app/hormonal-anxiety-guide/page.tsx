"use client";

import Image from "next/image";

export default function HormonalAnxietyGuidePage() {
  return (
    <>
      <head>
        <title>Why Your Anxiety Might Be Hormonal: Perimenopause, Mood &amp; the Misdiagnosis Problem | RevitalizeMe</title>
        <meta
          name="description"
          content="39% of perimenopausal women are offered antidepressants instead of HRT. Learn why your anxiety might be hormonal and what the evidence actually says about treatment."
        />
        <meta
          property="og:title"
          content="Why Your Anxiety Might Be Hormonal: Perimenopause, Mood & the Misdiagnosis Problem"
        />
        <meta
          property="og:description"
          content="The diagnostic comparison chart, brain chemistry explainer, and provider conversation checklist your doctor should have given you."
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
            Why Your Anxiety Might Be Hormonal: Perimenopause, Mood, and the Misdiagnosis Problem
          </h1>

          {/* Byline */}
          <p className="text-center text-[#666666] text-sm mb-8">
            By Dr. Cyrus, MD &bull; February 2026 &bull; 12 min read
          </p>

          {/* Opening */}
          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              Here is a scenario that plays out thousands of times a day: A woman in her late 30s or 40s walks into her doctor&rsquo;s office. She&rsquo;s anxious &mdash; a grinding, constant anxiety she&rsquo;s never felt before. She can&rsquo;t sleep. She snaps at her kids over nothing. Her doctor runs a standard workup, finds nothing alarming, and writes a prescription for an SSRI.
            </p>
            <p>
              Nobody asks about her menstrual cycle. Nobody checks her hormones. Nobody mentions perimenopause. She is 42 years old, and the average U.S. medical school devotes less than four hours to menopause education.
            </p>
          </div>

          {/* ── H2: The Misdiagnosis Epidemic ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Misdiagnosis Epidemic
          </h2>

          {/* Stat Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">39%</span>
              <span className="text-white/90 text-sm leading-snug block">offered antidepressants instead of HRT as first treatment</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">84%</span>
              <span className="text-white/90 text-sm leading-snug block">report anxiety or stress since becoming perimenopausal</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">2&ndash;5x</span>
              <span className="text-white/90 text-sm leading-snug block">higher risk of first-episode depression during perimenopause</span>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              A 2024 study in the Journal of Affective Disorders found that nearly half of women ages 45&ndash;54 who received a mental health diagnosis during the menopause transition were prescribed antidepressants &mdash; while menopause guidelines are clear that antidepressants should NOT be used as first-line treatment for mood symptoms of perimenopause.
            </p>
          </div>

          {/* ── H2: The Question Nobody Is Asking ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Question Nobody Is Asking
          </h2>

          <h3 className="w-full text-lg sm:text-xl font-semibold text-[#294547] text-center mb-4">
            Is It Anxiety &mdash; Or Is It Hormones?
          </h3>

          {/* HERO VISUAL: Side-by-side diagnostic comparison */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl border-2 border-red-300 overflow-hidden">
              <div className="bg-red-50 px-5 py-3">
                <h3 className="font-semibold text-red-800 text-base">Clinical Anxiety / Depression</h3>
              </div>
              <ul className="text-sm text-[#1A1A2E] space-y-2 p-5">
                <li>&bull; Constant, doesn&rsquo;t fluctuate with cycle</li>
                <li>&bull; Present 2+ weeks without relief</li>
                <li>&bull; Often triggered by specific events</li>
                <li>&bull; Family history of mood disorders</li>
                <li>&bull; Responds well to SSRIs alone</li>
                <li>&bull; No physical menopause symptoms</li>
                <li>&bull; No pattern tied to menstrual timing</li>
                <li>&bull; History of anxiety/depression pre-35</li>
                <li className="font-semibold text-red-700">&bull; First-line: SSRI/SNRI + therapy</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-emerald-300 overflow-hidden">
              <div className="bg-emerald-50 px-5 py-3">
                <h3 className="font-semibold text-emerald-800 text-base">Hormonal / Perimenopause</h3>
              </div>
              <ul className="text-sm text-[#1A1A2E] space-y-2 p-5">
                <li>&bull; Waxes/wanes, often worse before period</li>
                <li>&bull; Came on &ldquo;out of nowhere&rdquo; after age 35</li>
                <li>&bull; Accompanied by hot flashes/night sweats</li>
                <li>&bull; Sleep disruption without obvious cause</li>
                <li>&bull; Rage, irritability, &ldquo;not yourself&rdquo;</li>
                <li>&bull; Brain fog, word-finding difficulty</li>
                <li>&bull; Cycle changes (shorter/longer/heavier)</li>
                <li>&bull; No prior history of mood disorders</li>
                <li className="font-semibold text-emerald-700">&bull; First-line: HRT (estrogen + progesterone)</li>
              </ul>
            </div>
          </div>

          <p className="w-full text-xs text-[#666666] italic mb-10 text-center">
            These can overlap. Many women benefit from both. This is a starting framework, not a diagnosis.
          </p>

          {/* ── H2: Why the Confusion Happens ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Why the Confusion Happens
          </h2>

          {/* Three-column overlap visual */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="rounded-xl border-t-4 border-red-400 bg-white shadow-sm p-5">
              <h3 className="font-semibold text-red-700 text-sm mb-3">Anxiety Only</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1.5">
                <li>&bull; Specific phobias</li>
                <li>&bull; Panic with known trigger</li>
                <li>&bull; Avoidance behavior</li>
                <li>&bull; Chronic worry pattern</li>
              </ul>
            </div>
            <div className="rounded-xl border-t-4 border-amber-400 bg-white shadow-sm p-5">
              <h3 className="font-semibold text-amber-700 text-sm mb-3">Shared Symptoms</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1.5">
                <li>&bull; Insomnia</li>
                <li>&bull; Irritability / rage</li>
                <li>&bull; Heart palpitations</li>
                <li>&bull; Difficulty concentrating</li>
                <li>&bull; Fatigue</li>
                <li>&bull; Feeling overwhelmed</li>
              </ul>
            </div>
            <div className="rounded-xl border-t-4 border-emerald-400 bg-white shadow-sm p-5">
              <h3 className="font-semibold text-emerald-700 text-sm mb-3">Hormonal Only</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1.5">
                <li>&bull; Hot flashes / sweats</li>
                <li>&bull; Cycle irregularity</li>
                <li>&bull; Vaginal dryness</li>
                <li>&bull; Joint stiffness</li>
                <li>&bull; Worsens pre-period</li>
              </ul>
            </div>
          </div>

          {/* Brain chemistry cards */}
          <h3 className="w-full text-lg sm:text-xl font-semibold text-[#294547] mb-4">
            Your Brain on Declining Estrogen
          </h3>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Serotonin</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Estrogen helps produce and regulate serotonin. Less estrogen = less serotonin = low mood, anxiety, OCD-like intrusive thoughts.
              </p>
            </div>
            <div className="border-t-4 border-purple-400 rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">GABA</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Progesterone converts to allopregnanolone, a natural sedative. Fluctuating progesterone = less GABA = insomnia, panic, restlessness.
              </p>
            </div>
            <div className="border-t-4 border-[#294547] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Dopamine</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Estrogen modulates dopamine pathways. Lower estrogen = less motivation, less pleasure, reduced focus.
              </p>
            </div>
          </div>

          {/* ── MID-ARTICLE EMAIL CAPTURE CTA ── */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] text-center mb-3">
              Want the Complete Hormonal Anxiety Guide?
            </h2>
            <p className="text-center text-[#666666] text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Download the full guide with the diagnostic comparison chart, brain chemistry explainer, provider conversation checklist, and 10 cited sources &mdash; all in a printable PDF.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full flex flex-col gap-3 max-w-md mx-auto"
            >
              <input type="hidden" name="access_key" value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897" />
              <input type="hidden" name="redirect" value="https://landing-page-generator-gamma.vercel.app/hormonal-anxiety-guide/thank-you" />
              <input type="hidden" name="subject" value="New Lead: Hormonal Anxiety Guide" />
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

          {/* ── H2: The Post-WHI Medication Swap ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Post-WHI Medication Swap
          </h2>

          {/* Horizontal bar chart */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-5 sm:p-6 mb-6">
            <h3 className="font-semibold text-[#294547] text-base mb-4">After 2002: What replaced HRT</h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">HRT Prescriptions</span>
                  <span className="text-red-600 font-semibold text-xs">↓ 46% decline</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div className="bg-red-400 h-5 rounded-full" style={{ width: "46%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">Antidepressants (ages 45&ndash;54)</span>
                  <span className="text-amber-600 font-semibold text-xs">↑ Nearly half prescribed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div className="bg-amber-400 h-5 rounded-full" style={{ width: "48%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">Sleep Medications</span>
                  <span className="text-amber-600 font-semibold text-xs">↑ Significant increase</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div className="bg-amber-400 h-5 rounded-full" style={{ width: "38%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">Anti-Anxiety Medications</span>
                  <span className="text-amber-600 font-semibold text-xs">↑ Significant increase</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div className="bg-amber-400 h-5 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#294547] font-medium">Joint Pain / NSAIDs</span>
                  <span className="text-amber-600 font-semibold text-xs">↑ Increased</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div className="bg-amber-400 h-5 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#666666] mt-4 italic">
              Multiple medications to treat individual symptoms of one underlying condition: hormone deficiency.
            </p>
          </div>

          {/* Callout — neurotransmitter quote */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-sm sm:text-base leading-relaxed italic">
              &ldquo;Estrogen doesn&rsquo;t just &lsquo;affect&rsquo; mood. It is a core regulator of serotonin, GABA, and dopamine &mdash; the same neurotransmitter systems that SSRIs target. The question is whether it makes more sense to replace the missing hormone or to artificially prop up the downstream neurotransmitter.&rdquo;
            </p>
          </div>

          {/* ── H2: What the Evidence Actually Says ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What the Evidence Actually Says
          </h2>

          {/* Stat Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">34%</span>
              <span className="text-white/90 text-sm leading-snug block">of perimenopausal women worldwide have depression</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">3 mos</span>
              <span className="text-white/90 text-sm leading-snug block">of HRT significantly improved depressive symptoms</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">56%</span>
              <span className="text-white/90 text-sm leading-snug block">more likely to have anxiety during perimenopause</span>
            </div>
          </div>

          {/* Guideline cards */}
          <div className="w-full space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">The Menopause Society</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Antidepressants should NOT be first-line for menopause mood symptoms.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">The Menopause Charity (UK)</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Most effective treatment is to stabilize hormone levels with replacement estrogen.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Kulkarni et al. 2024</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Menopause depression is under-recognized and poorly treated. MHT should be considered before antidepressants for new-onset symptoms.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Mosconi et al. 2024</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Brain imaging shows estrogen receptor density measurably decreases across menopause stages.
                </p>
              </div>
            </div>
          </div>

          {/* ── H2: The Important Nuance ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Important Nuance
          </h2>

          {/* Prominent callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-6">
            <p className="text-[#294547] text-base sm:text-lg leading-relaxed font-medium">
              This guide is NOT saying: throw away your antidepressants. It IS saying: if your mood symptoms started in your late 30s or 40s alongside physical menopause symptoms, you deserve to have the hormonal root cause investigated before &mdash; or alongside &mdash; psychiatric medication.
            </p>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-8">
            <p>
              SSRIs have their place. If you were on antidepressants before perimenopause, continue them. But if your anxiety is new-onset and emerged alongside hot flashes, night sweats, cycle changes, or brain fog, the evidence strongly supports HRT as a first-line option.
            </p>
          </div>

          {/* Provider checklist */}
          <h3 className="w-full text-lg sm:text-xl font-semibold text-[#294547] mb-4">
            Your Provider Conversation Checklist
          </h3>

          <div className="w-full space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">&ldquo;My mood symptoms started at the same time as physical changes.&rdquo;</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Connect the timeline for your provider.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">&ldquo;I&rsquo;d like to explore HRT before or alongside an SSRI.&rdquo;</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Supported by The Menopause Society, ACOG, and CANMAT guidelines.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">&ldquo;A single &lsquo;normal&rsquo; hormone test doesn&rsquo;t rule out perimenopause.&rdquo;</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Wild fluctuation IS the hallmark.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">&ldquo;How soon should I expect mood improvement on HRT?&rdquo;</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Research shows significant improvement within 3 months.</p>
              </div>
            </div>
          </div>

          {/* ── Final Consultation CTA ── */}
          <div className="w-full bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              Your Mood Deserves a Second Opinion
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              If you&rsquo;ve been told it&rsquo;s &ldquo;just anxiety&rdquo; but it doesn&rsquo;t feel like just anything &mdash; talk to a provider who understands the hormonal picture.
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
              This content is for educational purposes only and is not intended as medical advice. If you are currently taking antidepressants, do not stop or change your dose without consulting your prescribing provider. Information reflects published research as of February 2026. Individual results may vary.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
