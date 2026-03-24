"use client";
import Image from "next/image";

export default function BerberinePlaybook() {
  return (
    <>
      <head>
        <title>You've Heard Berberine Called "Nature's Ozempic." Here's What the Research Actually Says. | RevitalizeMe</title>
        <meta name="description" content="An evidence-based look at berberine, AMPK activation, and how a 3-ingredient metabolic stack compares to GLP-1 medications. Free downloadable guide from RevitalizeMe's medical team." />
        <meta property="og:title" content="Berberine: 'Nature's Ozempic' or Overhyped Trend? The Clinical Evidence" />
        <meta property="og:description" content="What the research actually says about berberine, blood sugar, and metabolic health — from RevitalizeMe's medical team." />
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
            You've Heard Berberine Called "Nature's Ozempic." Here's What the Research Actually Says.
          </h1>

          {/* Byline */}
          <p className="text-center text-[#666666] text-sm mb-8">
            Dr. Cyrus Garmo, MD &middot; Medical Director, RevitalizeMe &middot; March 2026 &middot; 8 min read
          </p>

          {/* Hero stat cards row */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <p className="text-[#81D9DE] text-3xl sm:text-4xl font-bold mb-1">$2B+</p>
              <p className="text-white text-xs leading-snug">Berberine supplement market, growing 8.9% annually</p>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <p className="text-[#81D9DE] text-3xl sm:text-4xl font-bold mb-1">2,000+</p>
              <p className="text-white text-xs leading-snug">Years of documented use in traditional medicine</p>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <p className="text-[#81D9DE] text-3xl sm:text-4xl font-bold mb-1">14</p>
              <p className="text-white text-xs leading-snug">Randomized clinical trials analyzed in key meta-analysis</p>
            </div>
          </div>

          {/* Section 1: The "Nature's Ozempic" Claim */}
          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              If you've spent any time on health social media in the past year, you've seen the claim: berberine is "Nature's Ozempic." The hashtag has billions of views on TikTok. Supplement brands are racing to capitalize on it. And people who are curious about GLP-1 medications — or already taking them — are wondering if there's something to the hype.
            </p>
            <p>
              The short answer is: it's complicated. Berberine is a real compound with real clinical research behind it. But calling it "Nature's Ozempic" is misleading in ways that matter — and the difference between what berberine can and can't do could affect your health decisions.
            </p>
            <p>
              This article breaks down the evidence. No marketing spin, no TikTok-grade claims. Just the science — explained by a medical team that works with GLP-1 patients and metabolic health every day.
            </p>
          </div>

          {/* FDA Disclaimer #1 */}
          <div className="w-full bg-[#F0F9FA] border border-[#81D9DE]/30 rounded-lg p-4 mb-10">
            <p className="text-xs text-[#5A6B6E] leading-relaxed text-center">
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
            </p>
          </div>

          {/* Section 2: What Berberine Actually Does */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What Berberine Actually Does in Your Body
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-8">
            <p>
              Berberine is an alkaloid compound found in several plants, including barberry, goldenseal, and Oregon grape. It's been used in traditional Chinese and Ayurvedic medicine for over 2,000 years — but the reason it's getting attention now has nothing to do with tradition.
            </p>
            <p>
              In the past two decades, researchers have identified berberine's primary mechanism of action: it activates an enzyme called <strong>AMP-activated protein kinase (AMPK)</strong>. Researchers sometimes call AMPK a "metabolic master switch" because of its central role in cellular energy regulation.
            </p>
          </div>

          <h3 className="w-full text-lg sm:text-xl font-semibold text-[#294547] mb-4">
            When AMPK is activated:
          </h3>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <div className="bg-[#F0F9FA] rounded-lg p-4 border-l-4 border-[#81D9DE]">
              <p className="font-semibold text-[#294547] text-sm mb-1">Glucose uptake increases</p>
              <p className="text-[#5A6B6E] text-sm">Cells pull more sugar from the bloodstream for energy</p>
            </div>
            <div className="bg-[#F0F9FA] rounded-lg p-4 border-l-4 border-[#81D9DE]">
              <p className="font-semibold text-[#294547] text-sm mb-1">Insulin sensitivity improves</p>
              <p className="text-[#5A6B6E] text-sm">Cells respond more effectively to insulin signals</p>
            </div>
            <div className="bg-[#F0F9FA] rounded-lg p-4 border-l-4 border-[#81D9DE]">
              <p className="font-semibold text-[#294547] text-sm mb-1">Fatty acid oxidation increases</p>
              <p className="text-[#5A6B6E] text-sm">The body shifts toward burning stored fat for fuel</p>
            </div>
            <div className="bg-[#F0F9FA] rounded-lg p-4 border-l-4 border-[#81D9DE]">
              <p className="font-semibold text-[#294547] text-sm mb-1">Lipid synthesis decreases</p>
              <p className="text-[#5A6B6E] text-sm">Less new fat production in the liver</p>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              This is the same enzyme pathway activated by exercise and by metformin, one of the most widely prescribed medications for blood sugar management. That overlap is what's driven much of the clinical interest — and the comparison to GLP-1 drugs like semaglutide.
            </p>
          </div>

          {/* Section 3: What the Clinical Research Shows */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What the Clinical Research Actually Shows
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-8">
            <p>
              Berberine isn't a hypothetical compound with only test-tube results. There are multiple randomized clinical trials and meta-analyses examining its effects on metabolic markers. Here's what the research found:
            </p>
          </div>

          {/* Study cards */}
          <div className="w-full space-y-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-semibold text-[#294547]">Meta-analysis: 14 Randomized Clinical Trials</span>
                <span className="text-xs bg-[#81D9DE]/20 text-[#294547] px-2 py-0.5 rounded-full">Blood sugar</span>
                <span className="text-xs bg-[#81D9DE]/20 text-[#294547] px-2 py-0.5 rounded-full">Lipids</span>
              </div>
              <p className="text-sm text-[#5A6B6E]">
                Berberine supplementation significantly reduced fasting blood glucose, HbA1c, triglycerides, and LDL cholesterol in participants with metabolic dysfunction.
              </p>
              <p className="text-xs text-[#666666] mt-2">Dong H, et al. <em>Evidence-Based Complementary and Alternative Medicine.</em> 2012.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-semibold text-[#294547]">Head-to-head: Berberine vs. Metformin</span>
                <span className="text-xs bg-[#81D9DE]/20 text-[#294547] px-2 py-0.5 rounded-full">Comparison</span>
              </div>
              <p className="text-sm text-[#5A6B6E]">
                Berberine at 1,000mg/day showed blood sugar reduction comparable to metformin (1,500mg/day) over three months in patients with type 2 diabetes.
              </p>
              <p className="text-xs text-[#666666] mt-2">Yin J, Xing H, Ye J. <em>Metabolism.</em> 2008;57(5):712-717.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-semibold text-[#294547]">Diabetes + Dyslipidemia Trial</span>
                <span className="text-xs bg-[#81D9DE]/20 text-[#294547] px-2 py-0.5 rounded-full">Lipids</span>
                <span className="text-xs bg-[#81D9DE]/20 text-[#294547] px-2 py-0.5 rounded-full">Blood sugar</span>
              </div>
              <p className="text-sm text-[#5A6B6E]">
                Berberine significantly lowered fasting blood glucose (by 25.9%), HbA1c (by 18.1%), triglycerides (by 17.6%), and LDL cholesterol (by 21.0%).
              </p>
              <p className="text-xs text-[#666666] mt-2">Zhang Y, et al. <em>Journal of Clinical Endocrinology &amp; Metabolism.</em> 2008;93(7):2559-2565.</p>
            </div>
          </div>

          {/* Stat card - metabolic health */}
          <div className="w-full bg-[#294547] rounded-xl p-6 text-center mb-8">
            <p className="text-[#81D9DE] text-4xl sm:text-5xl font-bold mb-2">12.2%</p>
            <p className="text-white text-sm sm:text-base leading-snug">of American adults are considered metabolically healthy — even among those at a "normal" weight</p>
            <p className="text-white/50 text-xs mt-2">Araújo J, et al. <em>Metabolic Syndrome and Related Disorders.</em> 2019;17(1):46-52.</p>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              <strong>Important context:</strong> The research is promising — but it comes with caveats. Most studies were conducted in populations with existing metabolic dysfunction, not in healthy adults. Sample sizes are moderate. And more large-scale trials are still needed. Berberine isn't a miracle compound. It's a tool with a growing evidence base suggesting meaningful effects on specific metabolic markers when used at clinically studied doses.
            </p>
          </div>

          {/* Section 4: Berberine vs. GLP-1 */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Berberine vs. GLP-1 Medications: The Honest Comparison
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              This is where the "Nature's Ozempic" label falls apart. Berberine and GLP-1 medications work through <em>completely different mechanisms</em>. Comparing them directly is like comparing a multivitamin to chemotherapy — they exist in different categories of intervention.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="w-full overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#294547] text-white">
                  <th className="text-left p-3 font-semibold text-xs sm:text-sm"></th>
                  <th className="text-left p-3 font-semibold text-xs sm:text-sm">GLP-1 Medications</th>
                  <th className="text-left p-3 font-semibold text-xs sm:text-sm">Berberine</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-[#294547] text-xs sm:text-sm">Mechanism</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Mimics incretin hormones; signals satiety to brain; slows gastric emptying</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">AMPK activation; improves glucose uptake and insulin sensitivity</td>
                </tr>
                <tr className="bg-[#F0F9FA]">
                  <td className="p-3 font-semibold text-[#294547] text-xs sm:text-sm">Typical weight effect</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Significant — 15-20% body weight in clinical trials</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Modest — may support weight management as part of a broader strategy</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-[#294547] text-xs sm:text-sm">How taken</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Prescription injection (weekly)</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Oral supplement (daily)</td>
                </tr>
                <tr className="bg-[#F0F9FA]">
                  <td className="p-3 font-semibold text-[#294547] text-xs sm:text-sm">Prescription required?</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Yes — requires medical evaluation</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">No — available over the counter</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-[#294547] text-xs sm:text-sm">Approximate cost</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">$300-1,000+/month (varies by insurance)</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">~$40/month</td>
                </tr>
                <tr className="bg-[#F0F9FA]">
                  <td className="p-3 font-semibold text-[#294547] text-xs sm:text-sm">Evidence level</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Large-scale Phase III trials (thousands of participants)</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Multiple RCTs and meta-analyses (moderate sample sizes)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold text-[#294547] text-xs sm:text-sm">FDA status</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">FDA-approved prescription medication</td>
                  <td className="p-3 text-[#5A6B6E] text-xs sm:text-sm">Dietary supplement — not FDA-evaluated for efficacy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              <strong>Let's be clear:</strong> GLP-1 medications are more powerful for weight loss. That's not debatable. The clinical evidence for semaglutide and tirzepatide is extensive and the weight loss outcomes are significant.
            </p>
            <p>
              Where berberine enters the conversation is <em>different</em>, not <em>better</em>. It targets metabolic health through AMPK activation — a different pathway entirely. For people who don't qualify for GLP-1 prescriptions, can't tolerate them, or want complementary metabolic support, berberine may have a role. But that role needs to be discussed with a provider.
            </p>
          </div>

          {/* Interaction Warning - Orange Callout */}
          <div className="w-full bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-orange-800 text-base mb-2">Critical Safety Warning: Berberine + GLP-1 Interaction</p>
            <p className="text-orange-700 text-sm sm:text-base leading-relaxed">
              Both berberine and GLP-1 medications lower blood sugar. Combining them without medical supervision significantly increases the risk of <strong>hypoglycemia</strong> (dangerously low blood sugar). Never start berberine alongside GLP-1 medications, metformin, or insulin without consulting your prescribing provider first.
            </p>
          </div>

          {/* Section 5: The Three-Ingredient Stack */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Why Three Ingredients — Not Just Berberine
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-8">
            <p>
              A single ingredient rarely tells the full story. RevitalizeMe's Berberine Complex combines three compounds that each address metabolic health through different but complementary pathways.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <p className="text-[#81D9DE] text-3xl font-bold mb-1">1200mg</p>
              <p className="text-white font-semibold text-sm mb-2">Berberine HCl</p>
              <p className="text-white/70 text-xs leading-snug">AMPK activation. Supports glucose metabolism and insulin sensitivity. Dose matches clinical trial protocols.</p>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <p className="text-[#81D9DE] text-2xl font-bold mb-1">ALA</p>
              <p className="text-white font-semibold text-sm mb-2">Alpha Lipoic Acid</p>
              <p className="text-white/70 text-xs leading-snug">Potent antioxidant that may support insulin sensitivity and enhance berberine's metabolic effects.</p>
            </div>
            <div className="bg-[#294547] rounded-xl p-5 text-center">
              <p className="text-[#81D9DE] text-2xl font-bold mb-1">Ceylon</p>
              <p className="text-white font-semibold text-sm mb-2">Cinnamon</p>
              <p className="text-white/70 text-xs leading-snug">Research suggests it may support blood sugar regulation. Ceylon (not Cassia) avoids coumarin risks.</p>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              The 1200mg berberine dose is worth noting. Many commercial berberine supplements use 500mg or less — well below what clinical trials studied. At RevitalizeMe, we match the dose to the evidence.
            </p>
            <p className="text-sm text-[#5A6B6E]">
              <strong>Supporting research:</strong> Allen RW, et al. "Cinnamon use in type 2 diabetes: an updated systematic review and meta-analysis." <em>Annals of Family Medicine.</em> 2013;11(5):452-459. | Golbidi S, et al. "Diabetes and alpha lipoic acid." <em>Frontiers in Pharmacology.</em> 2011;2:69.
            </p>
          </div>

          {/* Section 6: Who Should Consider It */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Who Should Consider Berberine — And Who Shouldn't
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p>
              Honest guidance means being clear about who may benefit and who should avoid this supplement entirely.
            </p>
          </div>

          <h3 className="w-full text-lg sm:text-xl font-semibold text-[#294547] mb-3">
            May be appropriate for:
          </h3>
          <ul className="w-full list-disc list-inside space-y-2 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6 pl-2">
            <li>Adults interested in supporting metabolic health markers as part of a comprehensive strategy including nutrition and physical activity</li>
            <li>People exploring evidence-based supplement options backed by clinical research</li>
            <li>GLP-1 patients seeking complementary support — <em>but only with medical supervision</em></li>
            <li>People who don't qualify for or choose not to use prescription GLP-1 medications</li>
          </ul>

          <h3 className="w-full text-lg sm:text-xl font-semibold text-[#294547] mb-3">
            Do NOT take berberine without consulting your provider if:
          </h3>
          <ul className="w-full list-disc list-inside space-y-2 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6 pl-2">
            <li><strong>You're pregnant or nursing</strong> — insufficient safety data</li>
            <li><strong>You take blood sugar-lowering medications</strong> (metformin, insulin, sulfonylureas, GLP-1s) — risk of hypoglycemia</li>
            <li><strong>You have liver or kidney conditions</strong> — berberine is metabolized hepatically</li>
            <li><strong>You take medications metabolized by CYP enzymes</strong> (some statins, blood thinners, antidepressants) — berberine may alter their blood levels</li>
          </ul>

          {/* Interaction Warning #2 */}
          <div className="w-full bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
            <p className="text-orange-700 text-sm sm:text-base leading-relaxed">
              <strong>Always disclose your full supplement use to every provider you see.</strong> Supplements interact with medications, and your provider can't manage what they don't know about.
            </p>
          </div>

          {/* ====== MID-ARTICLE EMAIL CAPTURE (Primary Conversion) ====== */}
          <div className="w-full bg-[#F0F9FA] rounded-xl p-6 sm:p-8 mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] text-center mb-3">
              Get the Complete Berberine Playbook — Free
            </h2>
            <p className="text-center text-[#666666] text-sm sm:text-base mb-6 max-w-lg mx-auto">
              10 pages of evidence-based guidance on berberine, metabolic health, and the 3-ingredient stack — including the full comparison table, interaction warnings, and research citations. Written by our medical team, not a marketing department.
            </p>
            <form action="https://api.web3forms.com/submit" method="POST" className="w-full flex flex-col gap-3 max-w-md mx-auto">
              <input type="hidden" name="access_key" value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897" />
              <input type="hidden" name="redirect" value="https://landing-page-generator-gamma.vercel.app/berberine-playbook/thank-you" />
              <input type="hidden" name="subject" value="New Lead: Berberine Playbook Download" />
              <input type="hidden" name="from_name" value="RevitalizeMe Lead Magnet" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <input
                type="text"
                name="name"
                placeholder="First name (optional)"
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
                Send Me the Playbook &rarr;
              </button>
            </form>
            <p className="text-center text-sm text-[#666666] mt-3">
              Free &middot; No spam &middot; Unsubscribe anytime
            </p>
          </div>

          {/* Section 8: What to Look For */}
          <h2 className="w-full font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What to Look For in a Berberine Supplement
          </h2>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-8">
            <p>
              The supplement market has a transparency problem. If you're considering berberine, here's what actually matters — and what's a red flag.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#F0F9FA] rounded-xl p-5">
              <p className="font-semibold text-[#294547] text-sm mb-2">What to look for</p>
              <ul className="text-[#5A6B6E] text-sm space-y-1.5">
                <li>&#10003; Berberine HCl (not generic bark powder)</li>
                <li>&#10003; 1000-1500mg per daily serving</li>
                <li>&#10003; Full dose disclosure (no proprietary blends)</li>
                <li>&#10003; Ceylon cinnamon (not Cassia)</li>
                <li>&#10003; Third-party testing</li>
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-5 border border-red-100">
              <p className="font-semibold text-red-700 text-sm mb-2">Red flags</p>
              <ul className="text-red-600/80 text-sm space-y-1.5">
                <li>&#10007; "Proprietary blend" hiding actual doses</li>
                <li>&#10007; Under 500mg berberine (pixie-dusted)</li>
                <li>&#10007; "Nature's Ozempic" on the label</li>
                <li>&#10007; No third-party verification</li>
                <li>&#10007; Disease treatment claims</li>
              </ul>
            </div>
          </div>

          <div className="w-full space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              RevitalizeMe's Berberine Complex uses 1200mg Berberine HCl + Alpha Lipoic Acid + Ceylon Cinnamon at full dose transparency. No proprietary blends. No equivalence claims. Just a well-formulated supplement designed by a medical team that works with metabolic health patients every day.
            </p>
          </div>

          {/* FDA Disclaimer #2 */}
          <div className="w-full bg-[#F0F9FA] border border-[#81D9DE]/30 rounded-lg p-4 mb-10">
            <p className="text-xs text-[#5A6B6E] leading-relaxed text-center">
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Always consult with a qualified healthcare provider before starting any supplement.
            </p>
          </div>

          {/* Final CTA: Consultation */}
          <div className="w-full bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-10">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              Want to Know If Berberine Fits Your Health Picture?
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              RevitalizeMe providers specialize in metabolic health, GLP-1 medications, and evidence-based supplementation. A quick consultation can help you figure out what makes sense for your situation — including whether berberine is appropriate alongside your current medications.
            </p>
            <a
              href="https://revitalizeme.com/catalog?category=weight-loss"
              className="inline-block bg-[#81D9DE] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-lg hover:brightness-90 transition-all"
            >
              Talk to a Provider
            </a>
            <p className="text-white/70 text-xs mt-3">No commitment. No pressure. Just answers.</p>
          </div>

          {/* Footer */}
          <footer className="text-center border-t border-gray-200 pt-6 w-full">
            <a href="https://revitalizeme.com" className="text-sm text-[#81D9DE] hover:underline mb-3 inline-block">
              RevitalizeMe.com
            </a>
            <p className="text-xs text-[#666666]/80 leading-relaxed max-w-xl mx-auto">
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
              <br /><br />
              <strong>Medical Disclaimer:</strong> This content is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider before starting any supplement or treatment. Individual results may vary.
              <br /><br />
              &copy; 2026 RevitalizeMe. All rights reserved.
            </p>
          </footer>

        </div>
      </div>
    </>
  );
}
