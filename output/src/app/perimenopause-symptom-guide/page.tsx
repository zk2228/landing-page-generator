"use client";

import Image from "next/image";

export default function PerimenopauseSymptomGuidePage() {
  return (
    <>
      <head>
        <title>Am I in Perimenopause? The Symptom Guide Your Doctor Should Have Given You | RevitalizeMe</title>
        <meta
          name="description"
          content="55% of women in their early 30s already have symptoms. Full-body symptom map, differential diagnosis table, HRT timeline, and what to do next — based on 2025–2026 research."
        />
        <meta
          property="og:title"
          content="Am I in Perimenopause? The Symptom Guide Your Doctor Should Have Given You"
        />
        <meta
          property="og:description"
          content="The guide women are printing out and bringing to their doctors. Full-body symptom map, thyroid comparison table, and what changed with HRT."
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
            Am I in Perimenopause? The Symptom Guide Your Doctor Should Have Given You
          </h1>

          {/* Byline */}
          <p className="text-center text-[#666666] text-sm mb-8">
            By Dr. Cyrus, MD &bull; February 2026 &bull; 12 min read
          </p>

          {/* Opening */}
          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              You are not losing your mind. You are not &ldquo;just stressed.&rdquo; And you are not too young for this.
            </p>
            <p>
              If you are a woman between 30 and 50 and you have been experiencing symptoms that no one can quite explain &mdash; brain fog, sleep disruption, anxiety that came out of nowhere, cycles that suddenly have a mind of their own &mdash; there is a very good chance the answer is perimenopause. And almost no one is telling you.
            </p>
          </div>

          {/* ── H2: The Numbers No One Is Talking About ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Numbers No One Is Talking About
          </h2>

          {/* Stat Cards — 3 in a row */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">55%</span>
              <span className="text-white/90 text-sm leading-snug block">of women aged 30&ndash;35 already have symptoms</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">73%</span>
              <span className="text-white/90 text-sm leading-snug block">say symptoms affected their work performance</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">31%</span>
              <span className="text-white/90 text-sm leading-snug block">did not treat because they didn&rsquo;t know options existed</span>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              Perimenopause is not a cliff you fall off at 50. It is a gradual hormonal shift that can begin in your early 30s and last 7&ndash;10 years before your final menstrual period. The average age of onset is 40&ndash;44, but research published in 2025 shows more than half of women in their early 30s are already experiencing meaningful symptoms.
            </p>
            <p>
              The problem is not biology &mdash; it is awareness. Most women are never told what perimenopause looks like, so they spend years cycling through misdiagnoses, unnecessary medications, and the quiet belief that something is wrong with them.
            </p>
          </div>

          {/* ── H2: Full-Body Symptom Map ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What Perimenopause Actually Looks Like &mdash; A Full-Body Map
          </h2>

          {/* 2x3 Card Grid — 6 Body Systems */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Brain &amp; Mood</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1">
                <li>&bull; Brain fog and difficulty concentrating</li>
                <li>&bull; New or worsening anxiety</li>
                <li>&bull; Mood swings and irritability</li>
                <li>&bull; Depression symptoms</li>
                <li>&bull; Memory lapses</li>
              </ul>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">🔥</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Vasomotor (Temperature)</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1">
                <li>&bull; Hot flashes (5x more prevalent in perimenopause)</li>
                <li>&bull; Night sweats</li>
                <li>&bull; Heart palpitations</li>
                <li>&bull; Skin flushing</li>
              </ul>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">😴</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Sleep</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1">
                <li>&bull; Insomnia or frequent waking</li>
                <li>&bull; Difficulty falling back asleep</li>
                <li>&bull; Unrefreshing sleep even after 7&ndash;8 hours</li>
                <li>&bull; Restless legs</li>
              </ul>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">💪</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Musculoskeletal</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1">
                <li>&bull; Joint pain and stiffness</li>
                <li>&bull; Muscle aches</li>
                <li>&bull; Frozen shoulder</li>
                <li>&bull; Increased injury susceptibility</li>
              </ul>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">🫀</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Metabolic</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1">
                <li>&bull; Unexplained weight gain (especially midsection)</li>
                <li>&bull; Insulin resistance changes</li>
                <li>&bull; Cholesterol shifts</li>
                <li>&bull; Fatigue and energy crashes</li>
              </ul>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">🌸</div>
              <h3 className="font-semibold text-[#294547] text-base mb-2">Reproductive &amp; Urinary</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1">
                <li>&bull; Irregular cycles (shorter, longer, heavier, lighter)</li>
                <li>&bull; Vaginal dryness</li>
                <li>&bull; Decreased libido</li>
                <li>&bull; Increased UTI frequency</li>
              </ul>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              Most women experience symptoms across 3&ndash;4 of these systems simultaneously. That is why it is so easy to misdiagnose &mdash; no single specialist sees the full picture.
            </p>
          </div>

          {/* ── H2: Is It Perimenopause — Or Something Else? ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Is It Perimenopause &mdash; Or Something Else?
          </h2>

          {/* Comparison Table */}
          <div className="w-full overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#294547] text-white">
                  <th className="text-left px-3 py-3 font-semibold rounded-tl-lg"></th>
                  <th className="text-left px-3 py-3 font-semibold">Perimenopause</th>
                  <th className="text-left px-3 py-3 font-semibold">Thyroid</th>
                  <th className="text-left px-3 py-3 font-semibold">Depression</th>
                  <th className="text-left px-3 py-3 font-semibold">Chronic Stress</th>
                  <th className="text-left px-3 py-3 font-semibold rounded-tr-lg">Autoimmune</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#E8F7F8]">
                  <td className="px-3 py-2.5 font-semibold text-[#294547]">Typical age</td>
                  <td className="px-3 py-2.5">35&ndash;50</td>
                  <td className="px-3 py-2.5">Any age</td>
                  <td className="px-3 py-2.5">Any age</td>
                  <td className="px-3 py-2.5">Any age</td>
                  <td className="px-3 py-2.5">20&ndash;50</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2.5 font-semibold text-[#294547]">Key differentiator</td>
                  <td className="px-3 py-2.5">Symptoms cycle with period, worse in luteal phase</td>
                  <td className="px-3 py-2.5">Weight changes, hair loss, temperature sensitivity</td>
                  <td className="px-3 py-2.5">Persistent low mood, anhedonia</td>
                  <td className="px-3 py-2.5">Clear external stressor</td>
                  <td className="px-3 py-2.5">Systemic inflammation markers</td>
                </tr>
                <tr className="bg-[#E8F7F8]">
                  <td className="px-3 py-2.5 font-semibold text-[#294547]">Hormone marker</td>
                  <td className="px-3 py-2.5">Fluctuating estrogen, rising FSH</td>
                  <td className="px-3 py-2.5">Abnormal TSH, T3/T4</td>
                  <td className="px-3 py-2.5">Normal hormones (usually)</td>
                  <td className="px-3 py-2.5">Elevated cortisol</td>
                  <td className="px-3 py-2.5">ANA, ESR, CRP</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2.5 font-semibold text-[#294547]">Cycle impact</td>
                  <td className="px-3 py-2.5">Changes in length, flow, timing</td>
                  <td className="px-3 py-2.5">Can disrupt cycles</td>
                  <td className="px-3 py-2.5">Usually no direct impact</td>
                  <td className="px-3 py-2.5">Can delay or skip periods</td>
                  <td className="px-3 py-2.5">Varies by condition</td>
                </tr>
                <tr className="bg-[#E8F7F8]">
                  <td className="px-3 py-2.5 font-semibold text-[#294547] rounded-bl-lg">First-line test</td>
                  <td className="px-3 py-2.5">FSH, estradiol (Day 3)</td>
                  <td className="px-3 py-2.5">TSH, free T4</td>
                  <td className="px-3 py-2.5">Clinical assessment</td>
                  <td className="px-3 py-2.5">Cortisol panel</td>
                  <td className="px-3 py-2.5 rounded-br-lg">ANA panel</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-sm sm:text-base leading-relaxed">
              <strong>Important:</strong> These conditions can overlap. Up to 20% of perimenopausal women also have subclinical thyroid dysfunction. A thorough evaluation should rule out all of the above rather than stopping at the first match.
            </p>
          </div>

          {/* ── H2: The Age Timeline ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Age Timeline &mdash; What to Expect and When
          </h2>

          {/* Timeline Visual */}
          <div className="w-full mb-10">
            {/* Timeline Node 1 */}
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">Early 30s &mdash; Pre-perimenopause signals</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Subtle cycle changes. PMS may intensify. Sleep quality starts shifting. Most doctors will not attribute these to hormones yet.
                </p>
              </div>
            </div>
            {/* Timeline Node 2 */}
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">Late 30s &mdash; Early perimenopause</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Cycles become less predictable. Anxiety or mood changes may appear. Brain fog starts. Many women get diagnosed with depression or anxiety disorder at this stage.
                </p>
              </div>
            </div>
            {/* Timeline Node 3 */}
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">Early 40s &mdash; Active perimenopause</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Hot flashes and night sweats begin. Weight redistribution (midsection). Joint pain. Cycle irregularity becomes pronounced. This is the stage most women first search &ldquo;am I in perimenopause.&rdquo;
                </p>
              </div>
            </div>
            {/* Timeline Node 4 */}
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">Late 40s &mdash; Late perimenopause</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Symptoms may intensify before improving. Periods become infrequent. Bone density changes accelerate. Vasomotor symptoms peak.
                </p>
              </div>
            </div>
            {/* Timeline Node 5 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
              </div>
              <div className="pb-2">
                <h3 className="font-semibold text-[#294547] text-base mb-1">~51 (average) &mdash; Menopause</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  12 consecutive months without a period. Symptoms may continue for years after. This is not the end &mdash; it is a transition point.
                </p>
              </div>
            </div>
          </div>

          {/* ── MID-ARTICLE EMAIL CAPTURE CTA ── */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] text-center mb-3">
              Want the Full Symptom Guide?
            </h2>
            <p className="text-center text-[#666666] text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Download the complete guide with the full-body symptom map, differential diagnosis table, HRT timeline, and a provider discussion checklist &mdash; formatted to print and bring to your next appointment.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full flex flex-col gap-3 max-w-md mx-auto"
            >
              <input type="hidden" name="access_key" value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897" />
              <input type="hidden" name="redirect" value="https://landing-page-generator-gamma.vercel.app/perimenopause-symptom-guide/thank-you" />
              <input type="hidden" name="subject" value="New Lead: Perimenopause Symptom Guide" />
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

          {/* ── H2: The HRT Landscape Just Changed ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The HRT Landscape Just Changed &mdash; Dramatically
          </h2>

          {/* HRT Timeline */}
          <div className="w-full mb-8">
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">2002 &mdash; WHI Study Published</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  The Women&rsquo;s Health Initiative study reported increased breast cancer and cardiovascular risks with HRT. Media coverage was dramatic. Millions of women stopped HRT overnight.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">2002&ndash;2020 &mdash; The Fear Era</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  An estimated 50 million American women avoided HRT based on warnings that we now know were misinterpreted. The WHI study population was primarily women 60+ who started HRT a decade after menopause &mdash; not the 40-something women who would benefit most.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
                <div className="w-0.5 bg-[#294547] flex-1"></div>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-[#294547] text-base mb-1">2024&ndash;2025 &mdash; The Research Reversal</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Multiple major studies published: Manson et al. 2025 showed 14% lower breast cancer risk in women under 55 on estrogen-only HRT. Cagnacci &amp; Venier 2025 found no increased stroke, cancer, or heart attack risk when HRT is started within 10 years of menopause onset.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#81D9DE] shrink-0 mt-1"></div>
              </div>
              <div className="pb-2">
                <h3 className="font-semibold text-[#294547] text-base mb-1">November 2025 &mdash; FDA Removes Black Box Warning</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  The FDA officially removed the black box warning from hormone replacement therapy. This is the strongest possible regulatory signal that the risk profile has fundamentally changed.
                </p>
              </div>
            </div>
          </div>

          {/* Callout — 50 million women */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-base sm:text-lg leading-relaxed font-medium italic">
              50 million women avoided HRT based on warnings that have now been officially removed. If you dismissed hormones because of what you heard 10 or 20 years ago, the science has changed &mdash; dramatically.
            </p>
          </div>

          {/* ── H2: What About Breast Cancer Risk? ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What About Breast Cancer Risk?
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              This is the question that stops most women from even considering HRT. Here is what the current evidence actually shows:
            </p>
          </div>

          {/* Two stat cards side by side */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">14%</span>
              <span className="text-white/90 text-sm leading-snug block">lower breast cancer risk in women under 55 on estrogen-only HRT</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">0</span>
              <span className="text-white/90 text-sm leading-snug block">increased risk of stroke, cancer, or heart attack with early-start HRT</span>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              The key factor is <strong>timing</strong>. HRT started within 10 years of menopause onset &mdash; the &ldquo;window of opportunity&rdquo; &mdash; shows a fundamentally different risk profile than HRT started decades later. The WHI study that scared a generation primarily studied women who started HRT in their 60s, well outside this window.
            </p>
            <p>
              Combined estrogen-progesterone HRT does show a small increased breast cancer risk with long-term use (5+ years), but this risk is comparable to drinking one glass of wine per day or being overweight &mdash; risks most women are never warned about with the same urgency.
            </p>
          </div>

          {/* ── H2: Tests Worth Discussing ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Tests Worth Discussing With Your Provider
          </h2>

          {/* 2x2 Test Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">FSH (Follicle-Stimulating Hormone)</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Rises as ovarian function declines. Best tested on Day 3 of your cycle. A single test may not be definitive &mdash; trending over 2&ndash;3 months is more informative.
              </p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Estradiol (E2)</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                The primary estrogen. Fluctuates wildly in perimenopause, which is part of the problem. Low or erratic levels correlate with vasomotor symptoms.
              </p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">TSH + Free T4</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Rules out thyroid dysfunction, which mimics many perimenopause symptoms. Should always be checked before attributing symptoms solely to perimenopause.
              </p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">AMH (Anti-M&uuml;llerian Hormone)</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">
                Reflects ovarian reserve. Not diagnostic for perimenopause on its own, but provides context about where you are in the transition.
              </p>
            </div>
          </div>

          {/* Callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-sm sm:text-base leading-relaxed">
              <strong>Important:</strong> Perimenopause is primarily a clinical diagnosis based on symptoms and age. Lab work supports the picture but a single &ldquo;normal&rdquo; result does not rule it out &mdash; hormones fluctuate day to day in perimenopause, which is exactly the problem.
            </p>
          </div>

          {/* ── H2: What You Can Do Right Now ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What You Can Do Right Now
          </h2>

          {/* 4 Numbered Action Cards */}
          <div className="w-full space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Track your symptoms for 30 days</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Use an app or a simple journal. Note: cycle changes, sleep quality, mood shifts, temperature events, energy levels. Patterns over 30 days are far more informative than a single snapshot.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Print this guide and bring it to your doctor</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Many PCPs have limited menopause training (the average U.S. medical school devotes less than 4 hours to menopause education). Having organized information helps you advocate for yourself.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Request the right labs</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  Ask for FSH, estradiol, TSH, and free T4 at minimum. If your provider dismisses the request, that tells you something important about whether they are the right provider for this stage of your care.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Learn about your treatment options</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">
                  HRT is not the only option, but it is the most evidence-backed for moderate-to-severe symptoms. The landscape has changed dramatically since 2025. A telehealth consultation with a provider who specializes in hormones can help you understand what makes sense for your specific situation.
                </p>
              </div>
            </div>
          </div>

          {/* ── Final Consultation CTA ── */}
          <div className="w-full bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              Ready to Talk to a Provider Who Specializes in This?
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              Our providers understand perimenopause &mdash; the symptoms, the testing, and the full range of treatment options including HRT. A free consultation takes 10 minutes and gives you a clear next step.
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
              This content is for educational purposes only and is not intended as medical advice. Information reflects research available as of February 2026. Always consult with a qualified healthcare provider before starting any treatment. Individual results may vary.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
