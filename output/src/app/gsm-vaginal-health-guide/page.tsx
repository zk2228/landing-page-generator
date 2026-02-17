"use client";

import Image from "next/image";

export default function GSMVaginalHealthGuidePage() {
  return (
    <>
      <head>
        <title>The Condition No One Talks About: Vaginal Health, Recurrent UTIs &amp; Local Estrogen | RevitalizeMe</title>
        <meta
          name="description"
          content="Up to 60% of postmenopausal women have GSM. Painful sex, recurrent UTIs, vaginal dryness — it's treatable. The complete evidence-based guide to local estrogen."
        />
        <meta
          property="og:title"
          content="The Condition No One Talks About: Vaginal Health, Recurrent UTIs, and What Local Estrogen Can Fix"
        />
        <meta
          property="og:description"
          content="GSM affects up to 60% of postmenopausal women. Fewer than half ever receive treatment. This guide changes that."
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
            The Condition No One Talks About: Vaginal Health, Recurrent UTIs, and What Local Estrogen Can Fix
          </h1>

          {/* Byline */}
          <p className="text-center text-[#666666] text-sm mb-8">
            By The RevitalizeMe Clinical Team &bull; February 2026 &bull; 14 min read
          </p>

          {/* Opening */}
          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              There is a medical condition that affects up to 60% of postmenopausal women. It causes painful sex, recurrent urinary tract infections, chronic vaginal discomfort, and urinary urgency. It is treatable &mdash; effectively and safely. And yet fewer than half of affected women ever receive treatment, because almost no one talks about it.
            </p>
            <p>
              It is called genitourinary syndrome of menopause, or GSM. And it is probably the most significant gap in women&rsquo;s healthcare you have never heard of.
            </p>
          </div>

          {/* ── H2: What Is GSM? ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What Is GSM?
          </h2>

          {/* Stat Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">40&ndash;60%</span>
              <span className="text-white/90 text-sm leading-snug block">of postmenopausal women report GSM symptoms</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">~50%</span>
              <span className="text-white/90 text-sm leading-snug block">never discuss symptoms with a provider</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">95%</span>
              <span className="text-white/90 text-sm leading-snug block">reduction in estrogen at menopause</span>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              GSM is the medical term for the vaginal, urinary, and sexual changes caused by declining estrogen after menopause. It replaced the outdated term &ldquo;vaginal atrophy&rdquo; in 2014, because the condition extends far beyond the vagina.
            </p>
            <p>
              When estrogen drops, tissues throughout the urogenital tract &mdash; vagina, vulva, bladder, and urethra &mdash; lose thickness, elasticity, blood flow, and moisture. The vaginal pH rises, protective Lactobacillus bacteria decline, and the entire system becomes vulnerable.
            </p>
          </div>

          {/* ── H2: The Three Faces of GSM ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Three Faces of GSM
          </h2>

          {/* Three-column symptom cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="border-t-4 border-rose-400 rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-rose-700 text-base mb-3">Genital</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1.5">
                <li>&bull; Vaginal dryness</li>
                <li>&bull; Burning &amp; irritation</li>
                <li>&bull; Itching</li>
                <li>&bull; Tissue thinning</li>
                <li>&bull; Narrowing of vaginal canal</li>
                <li>&bull; Reduced elasticity</li>
              </ul>
            </div>
            <div className="border-t-4 border-amber-400 rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-amber-700 text-base mb-3">Urinary</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1.5">
                <li>&bull; Recurrent UTIs</li>
                <li>&bull; Urgency &amp; frequency</li>
                <li>&bull; Painful urination</li>
                <li>&bull; Incontinence</li>
                <li>&bull; Nocturia</li>
                <li>&bull; Post-void dribbling</li>
              </ul>
            </div>
            <div className="border-t-4 border-purple-400 rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-purple-700 text-base mb-3">Sexual</h3>
              <ul className="text-sm text-[#1A1A2E] space-y-1.5">
                <li>&bull; Painful intercourse</li>
                <li>&bull; Decreased lubrication</li>
                <li>&bull; Reduced arousal</li>
                <li>&bull; Difficulty with orgasm</li>
                <li>&bull; Avoidance of intimacy</li>
                <li>&bull; Loss of libido</li>
              </ul>
            </div>
          </div>

          {/* Callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-sm sm:text-base leading-relaxed">
              <strong>Key insight:</strong> These three categories share the same root cause: loss of estrogen in urogenital tissues. Treating the estrogen deficiency addresses all three &mdash; not just one.
            </p>
          </div>

          {/* ── H2: GSM Gets Worse ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Unlike Hot Flashes, GSM Gets Worse &mdash; Not Better
          </h2>

          {/* Progression bar */}
          <div className="w-full mb-6">
            <div className="flex w-full rounded-xl overflow-hidden mb-3">
              <div className="bg-[#81D9DE] py-3 px-2 text-center flex-1">
                <span className="text-white text-xs font-semibold block">Perimenopause</span>
              </div>
              <div className="bg-[#5A9EA1] py-3 px-2 text-center flex-1">
                <span className="text-white text-xs font-semibold block">Early Menopause</span>
              </div>
              <div className="bg-[#B45A5A] py-3 px-2 text-center flex-1">
                <span className="text-white text-xs font-semibold block">5+ Years</span>
              </div>
              <div className="bg-[#8B2020] py-3 px-2 text-center flex-1">
                <span className="text-white text-xs font-semibold block">10+ Years</span>
              </div>
            </div>
            <div className="flex w-full text-xs text-[#666666]">
              <div className="flex-1 text-center">Mild dryness</div>
              <div className="flex-1 text-center">Discomfort, UTIs begin</div>
              <div className="flex-1 text-center">Tissue thinning, pain</div>
              <div className="flex-1 text-center">Irreversible without tx</div>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              Hot flashes tend to improve within 5&ndash;7 years. GSM moves in the opposite direction. Without estrogen, the vaginal lining thins year by year, loses blood flow, and becomes less elastic. This is not a temporary phase &mdash; it is a chronic, progressive condition that the British Journal of General Practice (2025) confirms is &ldquo;progressive and irreversible without appropriate treatment.&rdquo;
            </p>
          </div>

          {/* ── H2: Why Nobody Talks About It ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Why Nobody Talks About It
          </h2>

          <div className="w-full space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Women assume it&rsquo;s normal aging</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">It is common &mdash; but it is not inevitable, and it is treatable.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Providers do not ask</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Only half of women with symptoms have discussed them with a clinician (AUA/SUFU 2025).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Embarrassment and stigma</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Vaginal health, painful sex, urinary leakage &mdash; topics most women don&rsquo;t bring up voluntarily.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Confusion about hormone safety</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Local estrogen is completely different from systemic HRT &mdash; minimal absorption, no systemic risk increase.</p>
              </div>
            </div>
          </div>

          {/* ── H2: The Recurrent UTI Connection ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Recurrent UTI Connection
          </h2>

          {/* Stat Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-1">52%</span>
              <span className="text-white/90 text-sm leading-snug block">reduction in UTI frequency with vaginal estrogen</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">$2B+</span>
              <span className="text-white/90 text-sm leading-snug block">annual UTI-related costs in postmenopausal women</span>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <span className="font-display text-3xl sm:text-4xl text-[#81D9DE] block mb-1">Grade A</span>
              <span className="text-white/90 text-sm leading-snug block">recommendation for vaginal estrogen to prevent rUTI</span>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              If you are postmenopausal and dealing with recurrent urinary tract infections, the root cause may not be bacteria &mdash; it may be estrogen deficiency. Before menopause, estrogen keeps vaginal pH low and supports healthy Lactobacillus bacteria that protect against infection. When estrogen drops, pH rises, Lactobacillus declines, and harmful bacteria colonize more easily.
            </p>
            <p>
              The landmark 1993 New England Journal of Medicine trial found that 95% of women on vaginal estrogen were UTI-free at 8 months, compared to only 30% on placebo. A 2025 study of over 2 million women found those on vaginal estrogen had lower rates of sepsis (10.6% vs 19.4%) and death.
            </p>
          </div>

          {/* Callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-base sm:text-lg leading-relaxed font-medium italic">
              If your doctor is prescribing repeated courses of antibiotics for recurrent UTIs without discussing vaginal estrogen, they are treating the symptom while ignoring the cause.
            </p>
          </div>

          {/* ── MID-ARTICLE EMAIL CAPTURE CTA ── */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] text-center mb-3">
              Want the Complete GSM Guide?
            </h2>
            <p className="text-center text-[#666666] text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Download the full guide with the symptom map, treatment ladder, safety evidence, delivery method comparison, and provider conversation scripts &mdash; formatted to print and bring to your next appointment.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full flex flex-col gap-3 max-w-md mx-auto"
            >
              <input type="hidden" name="access_key" value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897" />
              <input type="hidden" name="redirect" value="https://landing-page-generator-gamma.vercel.app/gsm-vaginal-health-guide/thank-you" />
              <input type="hidden" name="subject" value="New Lead: GSM Vaginal Health Guide" />
              <input type="hidden" name="from_name" value="RevitalizeMe Lead Magnet" />
              <input type="checkbox" name="botcheck" className="hidden" />
              <input type="text" name="name" required placeholder="First name" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-base text-[#1A1A2E] placeholder:text-gray-400 outline-none transition-colors focus:border-[#81D9DE] focus:ring-2 focus:ring-[#81D9DE]/30" />
              <input type="email" name="email" required placeholder="Enter your email" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-base text-[#1A1A2E] placeholder:text-gray-400 outline-none transition-colors focus:border-[#81D9DE] focus:ring-2 focus:ring-[#81D9DE]/30" />
              <button type="submit" className="w-full bg-[#294547] text-white font-semibold text-base sm:text-lg py-3.5 rounded-lg hover:bg-[#3A5F62] transition-all cursor-pointer">
                Send Me the Free Guide &rarr;
              </button>
            </form>
            <p className="text-center text-sm text-[#666666] mt-3">Free &bull; No spam &bull; Unsubscribe anytime</p>
          </div>

          {/* ── H2: Treatment: A Step-Up Approach ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Treatment: A Step-Up Approach
          </h2>

          {/* Treatment ladder */}
          <div className="w-full space-y-3 mb-8">
            <div className="flex gap-3 items-start">
              <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full shrink-0 mt-0.5">Mild</span>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Step 1: OTC Moisturizers &amp; Lubricants</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Vaginal moisturizers 2&ndash;3x/week, silicone or water-based lubricants during sex. First-line for mild symptoms.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full shrink-0 mt-0.5">Moderate</span>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Step 2: Local Vaginal Estrogen (Gold Standard)</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Cream, tablet, or ring. Restores tissue thickness, pH, and Lactobacillus. Supported by AUA/SUFU, NAMS, ICSM, and Endocrine Society.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full shrink-0 mt-0.5">Alternative</span>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Step 3: DHEA or Ospemifene</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Vaginal DHEA (Intrarosa) or oral ospemifene (Osphena) for women who prefer non-estrogen options.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-xs font-semibold bg-red-100 text-red-700 px-2.5 py-1 rounded-full shrink-0 mt-0.5">Severe</span>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">Step 4: Combination Therapy</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">Local estrogen + systemic HRT for women with severe multi-symptom GSM alongside other menopause symptoms.</p>
              </div>
            </div>
          </div>

          {/* ── H2: Local Estrogen Options ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Local Estrogen &mdash; Your Options Compared
          </h2>

          {/* Three-column comparison */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Vaginal Cream</h3>
              <p className="text-xs text-[#666666] mb-2">Estrace, Premarin</p>
              <p className="text-sm text-[#1A1A2E] leading-relaxed mb-2"><strong>Dosing:</strong> 2&ndash;3x/week</p>
              <p className="text-sm text-emerald-600 mb-1">+ Most flexible dosing</p>
              <p className="text-sm text-red-500">- Can be messy</p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Vaginal Tablet</h3>
              <p className="text-xs text-[#666666] mb-2">Vagifem, Yuvafem</p>
              <p className="text-sm text-[#1A1A2E] leading-relaxed mb-2"><strong>Dosing:</strong> 2x/week</p>
              <p className="text-sm text-emerald-600 mb-1">+ Cleaner application</p>
              <p className="text-sm text-red-500">- Fixed dose only</p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Vaginal Ring</h3>
              <p className="text-xs text-[#666666] mb-2">Estring</p>
              <p className="text-sm text-[#1A1A2E] leading-relaxed mb-2"><strong>Dosing:</strong> Replace every 90 days</p>
              <p className="text-sm text-emerald-600 mb-1">+ Set it and forget it</p>
              <p className="text-sm text-red-500">- Must be comfortable with insertion</p>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-4">
            <p>All three are effective. Choice depends on your preference, comfort with application, and insurance coverage.</p>
          </div>

          {/* Callout */}
          <div className="w-full bg-[#E8F7F8] border-l-4 border-[#81D9DE] rounded-r-lg p-5 mb-10">
            <p className="text-[#294547] text-sm sm:text-base leading-relaxed">
              <strong>Important:</strong> Local vaginal estrogen does not require a progestogen &mdash; unlike systemic HRT. No endometrial surveillance is needed.
            </p>
          </div>

          {/* ── H2: Is Local Estrogen Safe? ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Is Local Estrogen Safe?
          </h2>

          {/* 2x2 safety grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border-t-4 border-emerald-400 rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-[#294547] text-base mb-1">No Breast Cancer Risk Increase</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">Meta-analysis: 17.6% vs 17.1% recurrence. No increased mortality.</p>
            </div>
            <div className="border-t-4 border-emerald-400 rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-[#294547] text-base mb-1">No Endometrial Risk</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">No progestogen required with local estrogen. No endometrial surveillance needed.</p>
            </div>
            <div className="border-t-4 border-emerald-400 rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-[#294547] text-base mb-1">Minimal Systemic Absorption</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">Serum estradiol levels remain within the normal postmenopausal range.</p>
            </div>
            <div className="border-t-4 border-emerald-400 rounded-xl bg-white shadow-sm p-5">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-[#294547] text-base mb-1">Safe for Breast Cancer Survivors</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">AUA/SUFU 2025: may be recommended even for breast cancer survivors with shared decision-making.</p>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              JAMA Oncology 2024 (McVicker et al.): two-cohort study of 49,237 women &mdash; no evidence of increased breast cancer-specific mortality with vaginal estrogen.
            </p>
          </div>

          {/* ── H2: How to Talk to Your Provider ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            How to Talk to Your Provider
          </h2>

          <div className="w-full space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">For vaginal symptoms</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">&ldquo;I&rsquo;m experiencing vaginal dryness and discomfort that&rsquo;s affecting my quality of life. I&rsquo;d like to discuss local vaginal estrogen.&rdquo;</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">For recurrent UTIs</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">&ldquo;I&rsquo;ve had multiple UTIs since menopause. AUA guidelines recommend vaginal estrogen for prevention. Can we try that before more antibiotics?&rdquo;</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">For urinary symptoms</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">&ldquo;I&rsquo;m having urgency and frequency issues. Could this be GSM-related, and would local estrogen help?&rdquo;</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#294547] flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-lg">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#294547] text-base mb-1">If your provider hesitates on safety</h3>
                <p className="text-sm text-[#1A1A2E] leading-relaxed">&ldquo;I understand concerns about systemic HRT, but vaginal estrogen has minimal systemic absorption. The AUA/SUFU 2025 guidelines and JAMA Oncology data support its safety.&rdquo;</p>
              </div>
            </div>
          </div>

          {/* ── H2: What You Can Do Right Now ── */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What You Can Do Right Now
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Switch to Gentle Products</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">Fragrance-free, pH-balanced cleansers only. Avoid douches, scented soaps, and wipes.</p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Start a Vaginal Moisturizer</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">Use 2&ndash;3x per week, not just before sex. Hyaluronic acid-based options are well-tolerated.</p>
            </div>
            <div className="border-t-4 border-[#81D9DE] rounded-xl bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-2">Use the Right Lubricant</h3>
              <p className="text-sm text-[#1A1A2E] leading-relaxed">Silicone-based for longer lasting. Water-based for compatibility. Avoid glycerin and parabens.</p>
            </div>
          </div>

          {/* ── Final Consultation CTA ── */}
          <div className="w-full bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              You Deserve to Feel Like Yourself Again
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              GSM is treatable. Our providers understand the condition, the evidence, and the full range of treatment options. A free consultation takes 10 minutes and gives you a clear next step.
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
            <a href="https://revitalizeme.com" className="text-sm text-[#81D9DE] hover:underline mb-3 inline-block">RevitalizeMe.com</a>
            <p className="text-xs text-[#666666]/80 leading-relaxed max-w-xl mx-auto">
              This content is for educational purposes only and is not intended as medical advice. Information reflects research and guidelines available as of February 2026. Always consult with a qualified healthcare provider before starting any treatment. Individual results may vary.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
