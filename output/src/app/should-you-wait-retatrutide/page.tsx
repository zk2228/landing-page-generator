"use client";

export default function ShouldYouWaitRetatrutidePage() {
  return (
    <>
      <head>
        <title>
          Should You Wait for Retatrutide? The 18-Month Trap | RevitalizeMe
        </title>
        <meta
          name="description"
          content="The real cost of waiting for retatrutide isn't measured in months — it's measured in pounds you didn't lose. Evidence-based analysis from RevitalizeMe."
        />
        <meta
          property="og:title"
          content="Should You Wait for Retatrutide? The 18-Month Trap"
        />
        <meta
          property="og:description"
          content="Why waiting for the next weight loss drug could be the most expensive decision you never make. Evidence-based analysis."
        />
        <meta property="og:type" content="article" />
      </head>

      <div className="min-h-screen bg-white">
        {/* Editorial Header */}
        <header className="border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <span className="font-display text-lg text-[#294547]">
              RevitalizeMe<sup className="text-xs">®</sup>
            </span>
            <span className="text-xs tracking-widest uppercase text-[#5A6B6E]">
              Weight Loss Research
            </span>
          </div>
        </header>

        {/* Article */}
        <article className="max-w-[720px] mx-auto px-4 pt-10 sm:pt-14 pb-16">
          {/* Headline — editorial, NOT branded */}
          <h1 className="text-[26px] sm:text-[30px] font-bold text-[#1A1A2E] leading-snug mb-4">
            The &ldquo;18-Month Trap&rdquo;: Why Waiting for the Next Weight
            Loss Drug Could Be the Most Expensive Decision You Never Make
          </h1>

          {/* Byline */}
          <p className="text-sm text-[#5A6B6E] mb-10">
            By the RevitalizeMe Clinical Team &bull; February 2026 &bull; 8 min
            read
          </p>

          {/* Opening */}
          <div className="space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>Every week, our providers get the same question.</p>

            <p className="text-xl sm:text-2xl font-semibold text-[#294547] italic">
              &ldquo;Should I wait for retatrutide?&rdquo;
            </p>

            <p>
              It is a reasonable question. The Phase 3 data is extraordinary
              &mdash; 28.7% average body weight loss at 68 weeks, the highest
              ever recorded for a weight loss medication. That is an average of
              71 pounds. For a 250-pound person, that is dropping to 178. The
              headlines are hard to ignore.
            </p>

            <p>
              But here is what the headlines do not tell you: the real cost of
              waiting is not measured in months. It is measured in pounds you did
              not lose, metabolic damage that continued, and a biological clock
              that does not pause while the FDA reviews paperwork.
            </p>

            <p>
              We call it the 18-Month Trap. And thousands of people are falling
              into it right now.
            </p>
          </div>

          {/* Section: FDA Timeline */}
          <h2 className="font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            What Actually Has to Happen Before You Can Get Retatrutide
          </h2>

          <div className="text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-8">
            <p className="mb-6">
              The excitement around retatrutide is justified. But excitement is
              not the same as availability. Here is the reality of the FDA
              approval process &mdash; laid out like a timeline, because that is
              what it is.
            </p>

            {/* Timeline */}
            <div className="relative pl-8 mb-8 space-y-6">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-200" />

              {/* Completed: Phase 2 */}
              <div className="relative">
                <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-[#81D9DE] border-2 border-white shadow-sm" />
                <p className="text-sm font-semibold text-[#294547]">
                  Phase 2 Trials &mdash; Complete
                </p>
                <p className="text-sm text-[#5A6B6E]">
                  24% weight loss at 48 weeks. Record-setting data that launched
                  the hype.
                </p>
              </div>

              {/* In progress: Phase 3 */}
              <div className="relative">
                <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-[#81D9DE] border-2 border-white shadow-sm" />
                <p className="text-sm font-semibold text-[#294547]">
                  Phase 3 Trials (TRIUMPH) &mdash; In Progress
                </p>
                <p className="text-sm text-[#5A6B6E]">
                  Seven TRIUMPH readouts expected throughout 2026. First results
                  showing 28.7% weight loss at 68 weeks.
                </p>
              </div>

              {/* YOU ARE HERE badge */}
              <div className="relative">
                <div className="absolute -left-[26px] top-0">
                  <span className="inline-block bg-[#81D9DE] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    You are here
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#294547] pl-1 pt-0.5">
                  February 2026
                </p>
                <p className="text-sm text-[#5A6B6E] pl-1">
                  Trials still running. No NDA filed yet.
                </p>
              </div>

              {/* Future: NDA */}
              <div className="relative">
                <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white shadow-sm" />
                <p className="text-sm font-semibold text-[#5A6B6E]">
                  NDA Submission &mdash; Mid-to-Late 2026 (estimated)
                </p>
                <p className="text-sm text-[#5A6B6E]">
                  After trials complete, Eli Lilly compiles data and submits to
                  the FDA.
                </p>
              </div>

              {/* Future: FDA Review */}
              <div className="relative">
                <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white shadow-sm" />
                <p className="text-sm font-semibold text-[#5A6B6E]">
                  FDA Review &mdash; 10-12 Months Minimum
                </p>
                <p className="text-sm text-[#5A6B6E]">
                  Standard review timeline. Decision expected late 2027.
                </p>
              </div>

              {/* Future: Manufacturing */}
              <div className="relative">
                <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white shadow-sm" />
                <p className="text-sm font-semibold text-[#5A6B6E]">
                  Manufacturing &amp; Distribution &mdash; Early 2028+
                </p>
                <p className="text-sm text-[#5A6B6E]">
                  Scale-up, distribution, insurance negotiations. Remember how
                  long Wegovy was in shortage after launch?
                </p>
              </div>
            </div>

            <p>
              That is the best-case scenario. Delays are common &mdash; safety
              signals, additional data requests, manufacturing scale-up. The
              realistic availability for most patients is early 2028 at the
              earliest.
            </p>
          </div>

          {/* Section: The Math */}
          <h2 className="font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Math Your Doctor Wishes You Would Do
          </h2>

          <div className="text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-6">
            <p className="mb-6">
              What does 18 months look like? Two very different paths.
            </p>
          </div>

          {/* Two-column comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Waiting */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-3">
                18 Months of Waiting
              </h3>
              <ul className="space-y-2 text-sm text-[#1A1A2E]">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">&times;</span>
                  <span>0 lbs lost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">&times;</span>
                  <span>Metabolic damage continues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">&times;</span>
                  <span>Insulin resistance worsens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">&times;</span>
                  <span>Cardiovascular risk unchanged</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">&times;</span>
                  <span>No habit foundation built</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">&times;</span>
                  <span>Still at starting line when retatrutide launches</span>
                </li>
              </ul>
            </div>

            {/* On treatment */}
            <div className="bg-[#F0F9FA] border border-[#81D9DE]/30 rounded-xl p-5">
              <h3 className="font-semibold text-[#294547] text-base mb-3">
                18 Months on Treatment
              </h3>
              <ul className="space-y-2 text-sm text-[#1A1A2E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#81D9DE] shrink-0">&#10003;</span>
                  <span>37-52 lbs lost (trial averages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#81D9DE] shrink-0">&#10003;</span>
                  <span>Metabolic markers improving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#81D9DE] shrink-0">&#10003;</span>
                  <span>Insulin sensitivity restored</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#81D9DE] shrink-0">&#10003;</span>
                  <span>Blood pressure reduced</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#81D9DE] shrink-0">&#10003;</span>
                  <span>Healthy habits established</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#81D9DE] shrink-0">&#10003;</span>
                  <span>Ready to switch from a position of strength</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Large stat callout */}
          <div className="bg-[#294547] rounded-xl p-6 text-center mb-10">
            <span className="font-display text-4xl sm:text-5xl text-[#81D9DE] block mb-2">
              37&ndash;52 lbs
            </span>
            <p className="text-white/90 text-sm sm:text-base max-w-md mx-auto">
              That is the average weight loss in 18 months on currently available
              GLP-1 medication. Published clinical trial data, not a projection.
            </p>
          </div>

          {/* Section: What If Retatrutide Is Better? */}
          <h2 className="font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            But What If Retatrutide Is Better?
          </h2>

          <div className="space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>It probably will be. And that is fine.</p>

            <p>
              Starting treatment now does not lock you in. Patients switch
              medications regularly as new options become available. This is
              standard practice in medicine. Your body does not reset &mdash; you
              keep every pound lost, every metabolic improvement, every healthy
              habit formed.
            </p>

            <p>
              Think of it this way: starting treatment now is like taking a
              direct flight that gets you 70% there. When retatrutide arrives,
              you upgrade to first class. But you do not sit in the airport for
              18 months waiting for the upgrade.
            </p>

            <p>
              The patients who will benefit most from retatrutide are the ones
              who started with what is available today. They will have lower
              starting weights, better metabolic baselines, and established
              habits. They are switching from a position of strength &mdash; not
              desperation.
            </p>
          </div>

          {/* Section: Which Scenario Are You? */}
          <h2 className="font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            Which Scenario Are You?
          </h2>

          <div className="space-y-4 mb-12">
            {/* Scenario 1 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-[#294547] text-sm mb-1">
                &ldquo;I haven&rsquo;t started any medication yet.&rdquo;
              </p>
              <p className="text-sm text-[#5A6B6E]">
                Start now. You have 18+ months of progress ahead of you before
                retatrutide even exists as an option. That is 37-52 pounds of
                progress, based on clinical trial averages.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-[#294547] text-sm mb-1">
                &ldquo;Semaglutide is working for me.&rdquo;
              </p>
              <p className="text-sm text-[#5A6B6E]">
                Stay the course. You are making progress right now. When
                retatrutide becomes available, you and your provider can decide
                if switching makes sense based on your goals.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-[#294547] text-sm mb-1">
                &ldquo;I&rsquo;ve hit a plateau on semaglutide.&rdquo;
              </p>
              <p className="text-sm text-[#5A6B6E]">
                Consider tirzepatide now. The dual-receptor approach often breaks
                through plateaus. Reassess when retatrutide arrives &mdash; from
                a much better starting point.
              </p>
            </div>

            {/* Scenario 4 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-[#294547] text-sm mb-1">
                &ldquo;I&rsquo;ve tried both and want something
                better.&rdquo;
              </p>
              <p className="text-sm text-[#5A6B6E]">
                You are the ideal candidate for retatrutide when it arrives. But
                do not stop treatment in the meantime. Maintaining your current
                progress is far easier than restarting from zero.
              </p>
            </div>

            {/* Scenario 5 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-[#294547] text-sm mb-1">
                &ldquo;I have PCOS / fatty liver / insulin
                resistance.&rdquo;
              </p>
              <p className="text-sm text-[#5A6B6E]">
                Current GLP-1 medications help with these conditions too. Every
                month on treatment is a month your metabolic health improves.
                Start now &mdash; your future self will thank you.
              </p>
            </div>
          </div>

          {/* EMAIL CAPTURE — after ~2,000 words */}
          <div className="bg-[#F0F9FA] border border-[#81D9DE]/20 rounded-xl p-6 sm:p-8 -mx-2 sm:-mx-4 mb-12">
            <h2 className="font-display text-xl sm:text-2xl text-[#294547] text-center mb-3">
              Want the Full Timeline and Decision Framework?
            </h2>
            <p className="text-center text-[#5A6B6E] text-sm sm:text-base mb-6 max-w-lg mx-auto">
              We put together a free guide covering everything in this article in
              more detail &mdash; plus a visual FDA timeline, the five-scenario
              framework, and exact questions to ask your provider. 7 pages,
              evidence-based, no upsell.
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="max-w-md mx-auto flex flex-col gap-3"
            >
              <input
                type="hidden"
                name="access_key"
                value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://landing-page-generator-gamma.vercel.app/should-you-wait-retatrutide/thank-you"
              />
              <input
                type="hidden"
                name="subject"
                value="New Lead: Should You Wait for Retatrutide (Advertorial)"
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
                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-base text-[#1A1A2E] placeholder:text-gray-400 outline-none transition-colors focus:border-[#81D9DE] focus:ring-2 focus:ring-[#81D9DE]/30"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-base text-[#1A1A2E] placeholder:text-gray-400 outline-none transition-colors focus:border-[#81D9DE] focus:ring-2 focus:ring-[#81D9DE]/30"
              />

              <button
                type="submit"
                className="w-full bg-[#294547] text-white font-semibold text-base py-3.5 rounded-lg hover:bg-[#3A5F62] transition-all cursor-pointer"
              >
                Send Me the Free Guide
              </button>
            </form>

            <p className="text-center text-xs text-[#5A6B6E] mt-3">
              Free &bull; No spam &bull; Unsubscribe anytime
            </p>
          </div>

          {/* Content continues AFTER form */}
          <h2 className="font-display text-2xl sm:text-[28px] text-[#294547] mb-6">
            The Real Question Is Not &ldquo;Should I Wait?&rdquo; &mdash; It Is
            &ldquo;What Should I Do Today?&rdquo;
          </h2>

          <div className="space-y-5 text-[#1A1A2E] text-base sm:text-[17px] leading-relaxed mb-10">
            <p>
              The weight loss medication pipeline is extraordinary. Retatrutide,
              orforglipron, survodutide &mdash; the next few years will bring
              options we could not have imagined a decade ago. That is genuinely
              exciting.
            </p>

            <p>
              But today&rsquo;s medications are also extraordinary.
              Semaglutide and tirzepatide have already changed hundreds of
              thousands of lives. They are FDA-approved, available now, covered
              by many insurance plans, and backed by years of real-world data.
              They work.
            </p>

            <p>
              The worst decision is no decision. Every month spent waiting is a
              month your body continues on the same trajectory. The question is
              not whether something better is coming &mdash; it is. The question
              is whether you are willing to lose 18 months finding out.
            </p>
          </div>

          {/* Consultation CTA */}
          <div className="bg-[#294547] rounded-xl p-6 sm:p-8 text-center mb-12">
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">
              Ready to Stop Waiting?
            </h2>
            <p className="text-[#81D9DE] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              Talk to a licensed provider about which weight loss treatment
              makes sense for you right now &mdash; based on your health, your
              goals, and the latest evidence.
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
        </article>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-6">
          <div className="max-w-[720px] mx-auto px-4 text-center">
            <p className="text-xs text-[#5A6B6E]/80 leading-relaxed max-w-xl mx-auto">
              This content is for educational purposes only and is not intended
              as medical advice. Retatrutide is an investigational medication not
              yet approved by the FDA. Always consult with a qualified healthcare
              provider before starting any treatment. Individual results may
              vary. All medications require evaluation by a licensed provider.
            </p>
            <p className="text-xs text-[#5A6B6E]/60 mt-3">
              &copy; 2026 RevitalizeMe
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
