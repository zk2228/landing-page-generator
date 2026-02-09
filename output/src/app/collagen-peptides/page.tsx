"use client";

import { useState } from "react";

/* ───────────────────────────── data ───────────────────────────── */

const faqs = [
  {
    q: "What type of collagen is in this product?",
    a: "Our Multi Collagen Peptides contain Types I & III collagen sourced from grass-fed, pasture-raised bovine. These are the most abundant collagen types in the human body and are associated with skin elasticity, hair strength, and joint comfort.",
  },
  {
    q: "How should I take collagen peptides?",
    a: "Mix one scoop (approximately 10 g) into 8-12 oz of any hot or cold beverage. Our unflavored formula dissolves easily in coffee, smoothies, water, or juice. For best results, use daily.",
  },
  {
    q: "When might I start to notice results?",
    a: "Individual results vary. Some people report noticing changes in nail strength within 2-4 weeks. Skin and hair changes are often reported after 6-12 weeks of consistent daily use. Consult your healthcare provider for personalized guidance.",
  },
  {
    q: "Is this product safe if I have allergies?",
    a: "Our collagen peptides are certified Gluten Free, Dairy Free, Soy Free, and Shellfish Free. They are also Non-GMO. However, if you have specific allergies or medical conditions, please consult your healthcare provider before use.",
  },
  {
    q: "Can I take collagen peptides with other supplements?",
    a: "Generally, collagen peptides can be taken alongside other supplements. However, we always recommend consulting your healthcare provider before combining supplements, especially if you take prescription medications.",
  },
  {
    q: "Is this product third-party tested?",
    a: "Yes. Our Multi Collagen Peptides are manufactured in a GMP-certified facility and undergo third-party testing for purity and potency.",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "I've been using this daily in my morning coffee for about 3 months. My nails feel noticeably stronger and my skin looks more hydrated. Love that it's truly unflavored.",
  },
  {
    name: "James R.",
    rating: 5,
    text: "Great quality collagen. I mix it into my post-workout shake. My joints feel better after long runs. The fact that it's grass-fed and Non-GMO was a deciding factor for me.",
  },
  {
    name: "Linda K.",
    rating: 4,
    text: "Dissolves well and has no taste at all. I've been taking it for about 6 weeks and my hairdresser commented that my hair looks healthier. Will keep using it.",
  },
];

const supplementFacts = [
  { nutrient: "Calories", amount: "35" },
  { nutrient: "Protein", amount: "9 g" },
  { nutrient: "Sodium", amount: "45 mg" },
  { nutrient: "Collagen Peptides (Bovine)", amount: "10 g", sub: "Types I & III — Grass-Fed & Pasture-Raised" },
];

const aminoAcids = [
  "Glycine",
  "Proline",
  "Hydroxyproline",
  "Alanine",
  "Arginine",
  "Aspartic Acid",
  "Glutamic Acid",
  "Serine",
  "Lysine",
  "Leucine",
  "Threonine",
  "Valine",
  "Phenylalanine",
  "Isoleucine",
  "Hydroxylysine",
  "Methionine",
  "Histidine",
  "Tyrosine",
  "Cysteine",
];

/* ───────────────────────────── helpers ─────────────────────────── */

function Stars({ count }: { count: number }) {
  return (
    <span className="text-brand-aqua text-lg tracking-wider" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-aqua/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-semibold text-brand-dark-teal"
        aria-expanded={open}
      >
        {q}
        <span className="ml-4 shrink-0 text-2xl text-brand-aqua transition-transform duration-200" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0", opacity: open ? 1 : 0 }}
      >
        <p className="pb-5 text-brand-text-gray leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ───────────────────────────── page ───────────────────────────── */

export default function CollagenPeptidesPage() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. PROMO BAR ─── */}
      <div className="bg-brand-dark-teal text-white text-center text-sm py-3 px-4 font-semibold tracking-wide">
        FREE SHIPPING ON ORDERS $50+ &nbsp;|&nbsp; 60-DAY MONEY-BACK GUARANTEE
      </div>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-brand-soft-gray px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-display text-2xl text-brand-dark-teal leading-none">Revitalize</span>
          <span className="font-display text-2xl text-brand-aqua leading-none">Me</span>
          <span className="text-[8px] text-brand-text-gray align-top">®</span>
        </div>
        <a
          href="#buy"
          className="hidden sm:inline-block bg-brand-aqua text-brand-dark-teal font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-90 transition"
        >
          Shop Now
        </a>
      </nav>

      {/* ─── 2. HERO / BUY BOX ─── */}
      <section
        id="buy"
        className="bg-gradient-to-br from-brand-dark-teal to-[#3A5F62] text-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Product image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center text-center p-8">
              <span className="text-6xl mb-4">🫙</span>
              <p className="text-brand-aqua font-display text-xl">Multi Collagen Peptides</p>
              <p className="text-white/60 text-sm mt-2">16 oz · Unflavored</p>
            </div>
          </div>

          {/* Buy box */}
          <div>
            <p className="text-brand-aqua text-sm font-semibold uppercase tracking-widest mb-3">
              RevitalizeMe® Supplements
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Multi Collagen Peptides
            </h1>
            <p className="text-white/80 text-lg mb-2">
              Grass-Fed &amp; Pasture-Raised · Types I &amp; III
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <Stars count={5} />
              <span className="text-white/60 text-sm">(127 Reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold">$39.99</span>
              <span className="text-white/50 line-through text-lg">$49.99</span>
              <span className="bg-brand-aqua/20 text-brand-aqua text-xs font-semibold px-2 py-1 rounded">
                SAVE 20%
              </span>
            </div>

            {/* Subscribe & Save */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-[#81D9DE] w-5 h-5" defaultChecked />
                <div>
                  <span className="font-semibold">Subscribe &amp; Save 15%</span>
                  <p className="text-white/60 text-sm mt-0.5">
                    $33.99/month · Free shipping · Cancel anytime
                  </p>
                </div>
              </label>
            </div>

            {/* CTA */}
            <button className="w-full bg-brand-aqua text-brand-dark-teal font-bold text-lg py-4 rounded-lg hover:brightness-90 transition mb-4">
              Add to Cart
            </button>

            {/* Mini trust */}
            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <span>✓ Free Shipping $50+</span>
              <span>✓ 60-Day Guarantee</span>
              <span>✓ 3rd-Party Tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRUST BADGES MARQUEE ─── */}
      <section className="bg-white border-y border-brand-soft-gray py-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-brand-dark-teal">
            {[
              "🌿 Grass-Fed & Pasture-Raised",
              "🧪 3rd-Party Tested",
              "🚫 Gluten Free",
              "🌱 Non-GMO",
              "🥛 Dairy Free",
              "🫘 Soy Free",
              "🦐 Shellfish Free",
              "🇺🇸 Made in USA",
            ].map((badge) => (
              <span key={badge} className="text-sm font-semibold whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. WHY COLLAGEN MATTERS ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark-teal mb-6">
            Why Collagen Matters
          </h2>
          <p className="text-brand-text-gray text-lg leading-relaxed mb-6">
            Collagen is the most abundant protein in your body — it&apos;s the structural
            foundation of your skin, hair, nails, joints, and connective tissue. Starting
            in your mid-20s, your body&apos;s natural collagen production begins to decline
            by roughly 1-1.5% per year.
          </p>
          <p className="text-brand-text-gray text-lg leading-relaxed mb-8">
            Supplementing with hydrolyzed collagen peptides may help support your
            body&apos;s collagen needs. Our Types I &amp; III peptides are enzymatically
            broken down into small, bioavailable molecules that are easy to absorb.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: "1-1.5%", desc: "Annual decline in collagen production after age 25" },
              { stat: "19", desc: "Amino acids in each serving" },
              { stat: "10g", desc: "Collagen peptides per scoop" },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-brand-soft-gray rounded-xl p-6"
              >
                <p className="font-display text-3xl text-brand-aqua mb-2">{item.stat}</p>
                <p className="text-brand-text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. BENEFITS GRID ─── */}
      <section className="bg-brand-soft-gray py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark-teal text-center mb-4">
            Targeted Support for Your Body
          </h2>
          <p className="text-brand-text-gray text-center mb-12 max-w-2xl mx-auto">
            Each scoop delivers hydrolyzed collagen peptides that may support multiple
            areas of wellness.*
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "Hair",
                text: "May support hair strength and thickness by providing amino acids that are building blocks for keratin production.",
              },
              {
                icon: "💧",
                title: "Skin",
                text: "May help support skin elasticity and hydration. Types I & III collagen are the primary collagen types found in skin.",
              },
              {
                icon: "💅",
                title: "Nails",
                text: "May support nail strength and reduce brittleness with glycine and proline — key amino acids for nail health.",
              },
              {
                icon: "🦴",
                title: "Joints",
                text: "May help support joint comfort and flexibility. Collagen is a major component of cartilage and connective tissue.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-brand-aqua/10 text-center"
              >
                <span className="text-4xl block mb-4">{card.icon}</span>
                <h3 className="font-display text-xl text-brand-dark-teal mb-3">{card.title}</h3>
                <p className="text-brand-text-gray text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-text-gray text-xs mt-8">
            *These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* ─── 6. WHAT MAKES OURS DIFFERENT ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark-teal text-center mb-12">
            What Makes Ours Different
          </h2>
          <div className="space-y-5">
            {[
              {
                title: "Grass-Fed & Pasture-Raised Source",
                desc: "Our bovine collagen comes from cattle raised on pasture without hormones or antibiotics.",
              },
              {
                title: "Types I & III — The Most Abundant",
                desc: "We focus on the two collagen types that make up over 90% of the collagen in your body.",
              },
              {
                title: "Hydrolyzed for Absorption",
                desc: "Enzymatically broken down into small peptides for better bioavailability and easy mixing.",
              },
              {
                title: "19 Amino Acids per Serving",
                desc: "A comprehensive amino acid profile including glycine, proline, and hydroxyproline.",
              },
              {
                title: "Truly Unflavored",
                desc: "Dissolves clear with no taste or smell — add it to coffee, smoothies, water, or recipes.",
              },
              {
                title: "Third-Party Tested",
                desc: "Every batch is tested by an independent lab for purity, potency, and heavy metals.",
              },
              {
                title: "Free From Major Allergens",
                desc: "Gluten free, dairy free, soy free, shellfish free, and Non-GMO verified.",
              },
              {
                title: "GMP-Certified Manufacturing",
                desc: "Produced in a facility that meets or exceeds Good Manufacturing Practice standards.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-brand-aqua/20 text-brand-aqua flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-brand-dark-teal">{item.title}</h3>
                  <p className="text-brand-text-gray text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. HOW TO USE ─── */}
      <section className="bg-brand-dark-teal text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">How to Use</h2>
          <p className="text-white/70 mb-12 max-w-xl mx-auto">
            Three simple steps to make collagen part of your daily routine.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Scoop",
                desc: "Add one scoop (≈ 10 g) to your favorite beverage — hot or cold.",
              },
              {
                step: "02",
                title: "Stir",
                desc: "Mix or blend until fully dissolved. Our hydrolyzed formula dissolves quickly with no clumps.",
              },
              {
                step: "03",
                title: "Enjoy Daily",
                desc: "Consistency is key. Use every day to provide your body with a steady supply of collagen peptides.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="inline-block font-display text-5xl text-brand-aqua mb-3">
                  {item.step}
                </span>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. SUPPLEMENT FACTS ─── */}
      <section className="bg-brand-soft-gray py-16 md:py-24">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark-teal text-center mb-10">
            Supplement Facts
          </h2>
          <div className="bg-white rounded-xl border border-brand-dark-teal/10 overflow-hidden">
            <div className="bg-brand-dark-teal text-white px-6 py-3 flex justify-between text-sm font-semibold">
              <span>Serving Size: 1 Scoop (approx. 10 g)</span>
              <span>Servings: ~45</span>
            </div>
            <div className="divide-y divide-brand-soft-gray">
              {supplementFacts.map((row) => (
                <div key={row.nutrient} className="px-6 py-3 flex justify-between items-start">
                  <div>
                    <span className="font-semibold text-brand-dark-teal">{row.nutrient}</span>
                    {row.sub && (
                      <span className="block text-xs text-brand-text-gray mt-0.5">{row.sub}</span>
                    )}
                  </div>
                  <span className="text-brand-dark-teal font-semibold">{row.amount}</span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-brand-soft-gray/50">
              <p className="text-xs text-brand-text-gray font-semibold mb-2">
                Amino Acid Profile (19 amino acids):
              </p>
              <p className="text-xs text-brand-text-gray leading-relaxed">
                {aminoAcids.join(", ")}
              </p>
            </div>
            <div className="px-6 py-3 text-xs text-brand-text-gray">
              <p>
                <strong>Other Ingredients:</strong> Hydrolyzed Bovine Collagen Peptides.
              </p>
              <p className="mt-1">
                <strong>Allergen Info:</strong> Free from gluten, dairy, soy, shellfish. Produced in a facility that may process other allergens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. CUSTOMER REVIEWS ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark-teal text-center mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-brand-text-gray text-center mb-12">
            Individual results may vary. These reviews reflect personal experiences.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-brand-soft-gray rounded-xl p-6 border border-brand-aqua/10"
              >
                <Stars count={review.rating} />
                <p className="text-brand-text-gray text-sm leading-relaxed mt-3 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-semibold text-brand-dark-teal text-sm">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-text-gray text-xs mt-8">
            *Results may vary. These testimonials do not constitute a guarantee of results. Consult your healthcare provider.
          </p>
        </div>
      </section>

      {/* ─── 10. FAQ ACCORDION ─── */}
      <section className="bg-brand-soft-gray py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark-teal text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. 60-DAY GUARANTEE ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-6xl block mb-6">🛡️</span>
          <h2 className="font-display text-3xl md:text-4xl text-brand-dark-teal mb-4">
            60-Day Money-Back Guarantee
          </h2>
          <p className="text-brand-text-gray text-lg leading-relaxed mb-6">
            We stand behind our product. If you&apos;re not satisfied for any reason, contact
            us within 60 days of purchase for a full refund — no questions asked. We want
            you to feel confident trying our Multi Collagen Peptides.
          </p>
          <a
            href="#buy"
            className="inline-block bg-brand-aqua text-brand-dark-teal font-bold text-lg px-10 py-4 rounded-lg hover:brightness-90 transition"
          >
            Try It Risk-Free
          </a>
        </div>
      </section>

      {/* ─── 12. FINAL CTA ─── */}
      <section className="bg-gradient-to-br from-brand-dark-teal to-[#3A5F62] text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Elevate Your Wellness Journey
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands who have made RevitalizeMe® Multi Collagen Peptides part
            of their daily routine. Your body will thank you.
          </p>
          <a
            href="#buy"
            className="inline-block bg-brand-aqua text-brand-dark-teal font-bold text-lg px-10 py-4 rounded-lg hover:brightness-90 transition mb-4"
          >
            Shop Now — $39.99
          </a>
          <p className="text-white/50 text-sm">
            Free shipping on orders $50+ · Subscribe &amp; save 15%
          </p>
        </div>
      </section>

      {/* ─── 13. FOOTER ─── */}
      <footer className="bg-brand-dark-teal text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-1 mb-3">
                <span className="font-display text-2xl leading-none">Revitalize</span>
                <span className="font-display text-2xl text-brand-aqua leading-none">Me</span>
                <span className="text-[8px] text-white/40 align-top">®</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Elevate your wellness journey with science-backed supplements and
                telehealth services.
              </p>
            </div>
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-3 text-brand-aqua text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="font-semibold mb-3 text-brand-aqua text-sm uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition">Shipping &amp; Returns</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="mailto:support@revitalizeme.com" className="hover:text-white transition">support@revitalizeme.com</a></li>
              </ul>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="border-t border-white/10 pt-8 space-y-4">
            <p className="text-white/40 text-xs leading-relaxed">
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the
              Food and Drug Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided is for educational
              purposes only and is not intended as medical advice. Always consult with a
              qualified healthcare provider before starting any new supplement or treatment.
              Individual results may vary.
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              © {new Date().getFullYear()} RevitalizeMe®. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
