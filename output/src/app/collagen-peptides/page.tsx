import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Multi Collagen Peptides — Grass-Fed & Pasture-Raised | RevitalizeMe",
  description:
    "Pure hydrolyzed collagen peptides (Types I & III) from grass-fed, pasture-raised bovine. Designed to help support hair, skin, nail, and joint health. 41 servings per container.",
  openGraph: {
    title:
      "Multi Collagen Peptides — Grass-Fed & Pasture-Raised | RevitalizeMe",
    description:
      "Pure hydrolyzed collagen peptides designed to help support hair, skin, nails, and joints. Gluten free, non-GMO, dairy free.",
    type: "website",
    url: "https://www.revitalizeme.com/collagen-peptides",
    siteName: "RevitalizeMe",
  },
};

/* ───────────────────────────────── Icon Components ───────────────────────────────── */

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#294547]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      className="faq-chevron w-5 h-5 text-[#294547]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h.008M21 12.75V6.375c0-.621-.504-1.125-1.125-1.125H5.25M21 12.75l-2.25-4.5H13.5m0 0V5.25m0 7.5h3.75"
      />
    </svg>
  );
}

function BeakerIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  );
}

/* ───────────────────────────────── Page Component ───────────────────────────────── */

export default function CollagenPeptidesPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#1A1A2E]">
      {/* ════════════ PROMO BAR ════════════ */}
      <div className="bg-[#294547] text-white text-center py-2.5 px-4 text-sm font-semibold tracking-wide">
        Free Shipping on Orders Over $50 &nbsp;|&nbsp; 60-Day Money-Back
        Guarantee
      </div>

      {/* ════════════ NAVIGATION ════════════ */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a
            href="/"
            className="text-2xl text-[#294547]"
            style={{ fontFamily: '"Yeseva One", Georgia, serif' }}
          >
            RevitalizeMe
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#294547]">
            <a href="#" className="hover:text-[#81D9DE] transition-colors">
              Shop
            </a>
            <a href="#" className="hover:text-[#81D9DE] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#81D9DE] transition-colors">
              Science
            </a>
            <a href="#" className="hover:text-[#81D9DE] transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-semibold text-[#294547] hover:text-[#81D9DE] transition-colors"
            >
              Account
            </a>
            {/* Cart icon */}
            <a href="#" className="relative text-[#294547]" aria-label="Cart">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </a>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#294547]"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ════════════ HERO / PRODUCT BUY BOX ════════════ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#5A5A6E] mb-6" aria-label="Breadcrumb">
            <a href="#" className="hover:text-[#294547]">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="#" className="hover:text-[#294547]">
              Supplements
            </a>
            <span className="mx-2">/</span>
            <span className="text-[#294547] font-semibold">
              Multi Collagen Peptides
            </span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {/* Left Column — Product Image Gallery */}
            <div>
              {/* Main product image placeholder */}
              <div className="bg-[#EBF5F0] rounded-xl aspect-square flex items-center justify-center border border-gray-100">
                {/* Placeholder: Replace with product hero image */}
                <div className="text-center text-[#5A5A6E] p-8">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-[#81D9DE]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.75}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                    />
                  </svg>
                  <p className="text-sm font-semibold">Product Hero Image</p>
                  <p className="text-xs mt-1">
                    Multi Collagen Peptides — Front of Container
                  </p>
                </div>
              </div>
              {/* Thumbnail gallery */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {[
                  "Front Label",
                  "Back Label",
                  "Lifestyle Shot",
                  "Supplement Facts",
                ].map((label) => (
                  <div
                    key={label}
                    className="bg-[#EBF5F0] rounded-lg aspect-square flex items-center justify-center border border-gray-100 cursor-pointer hover:border-[#81D9DE] transition-colors"
                  >
                    {/* Placeholder: Replace with thumbnail image */}
                    <span className="text-[10px] text-[#5A5A6E] text-center px-1">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Product Info & Purchase */}
            <div>
              <h1 className="text-3xl lg:text-4xl text-[#294547] mb-2">
                Multi Collagen Peptides
              </h1>
              <p className="text-lg text-[#5A5A6E] font-semibold mb-3">
                Grass-Fed &amp; Pasture-Raised&ensp;|&ensp;Types I &amp; III
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex text-[#D4A55A]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <a
                  href="#reviews"
                  className="text-sm text-[#5A5A6E] hover:text-[#294547] underline underline-offset-2"
                >
                  2,400+ Reviews
                </a>
              </div>

              <p className="text-[#1A1A2E] leading-relaxed mb-6">
                Pure hydrolyzed collagen peptides designed to help support
                healthy hair, skin, nails, and joints. Sourced from Grade A,
                grass-fed, pasture-raised bovine with 19 naturally-occurring
                amino acids.
              </p>

              {/* Product Meta */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#5A5A6E] mb-6">
                <span>Unflavored</span>
                <span>16 oz (454g)</span>
                <span>~41 Servings</span>
              </div>

              {/* Certification Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "Gluten Free",
                  "Non-GMO",
                  "Dairy Free",
                  "Soy Free",
                  "Shellfish Free",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 bg-[#E8F8F9] text-[#294547] text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    <CheckIcon />
                    {cert}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-[#294547]">
                  $39.95
                </span>
                <span className="text-sm text-[#5A5A6E]">
                  ($0.97 per serving)
                </span>
              </div>

              {/* Pack Size Options */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border-2 border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:border-[#81D9DE] transition-colors">
                  <p className="text-xs text-[#5A5A6E] mb-1">1 Container</p>
                  <p className="font-bold text-[#294547]">$39.95</p>
                </div>
                <div className="border-2 border-[#81D9DE] rounded-lg p-3 text-center cursor-pointer bg-[#E8F8F9] relative">
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#294547] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    POPULAR
                  </span>
                  <p className="text-xs text-[#5A5A6E] mb-1">2-Pack</p>
                  <p className="font-bold text-[#294547]">$71.90</p>
                  <p className="text-xs text-[#81D9DE] font-semibold">
                    Save 10%
                  </p>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:border-[#81D9DE] transition-colors">
                  <p className="text-xs text-[#5A5A6E] mb-1">3-Pack</p>
                  <p className="font-bold text-[#294547]">$95.85</p>
                  <p className="text-xs text-[#81D9DE] font-semibold">
                    Save 20%
                  </p>
                </div>
              </div>

              {/* Subscribe & Save */}
              <div className="bg-[#E8F8F9] border border-[#81D9DE] rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 rounded-full border-2 border-[#294547] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#294547]"></div>
                  </div>
                  <span className="font-bold text-[#294547]">
                    Subscribe &amp; Save 15%
                  </span>
                  <span className="text-sm font-bold text-[#294547]">
                    $33.96/container
                  </span>
                </div>
                <ul className="text-sm text-[#5A5A6E] space-y-1 ml-8">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Free shipping on every order
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Easily pause, skip, or cancel anytime
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Delivered every 30, 60, or 90 days
                  </li>
                </ul>
              </div>

              {/* Add to Cart */}
              <button className="w-full bg-[#294547] hover:bg-[#1a2f31] text-white text-lg font-bold py-4 rounded-lg transition-colors mb-4">
                Add to Cart — $39.95
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-1.5 text-[#294547]">
                  <ShieldIcon />
                  <span className="text-xs font-semibold leading-tight">
                    60-Day
                    <br />
                    Guarantee
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-[#294547]">
                  <TruckIcon />
                  <span className="text-xs font-semibold leading-tight">
                    Free Shipping
                    <br />
                    $50+
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-[#294547]">
                  <BeakerIcon />
                  <span className="text-xs font-semibold leading-tight">
                    Third-Party
                    <br />
                    Tested
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ TRUST MARQUEE ════════════ */}
      <div className="bg-[#294547] py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center">
              {[
                "Grass-Fed & Pasture-Raised",
                "Types I & III Collagen",
                "Non-GMO",
                "Gluten Free",
                "Dairy Free",
                "Soy Free",
                "Shellfish Free",
                "19 Amino Acids",
                "Third-Party Tested",
                "Made in the USA",
              ].map((item) => (
                <span
                  key={`${setIdx}-${item}`}
                  className="text-white text-sm font-semibold mx-6 flex items-center gap-2"
                >
                  <span className="text-[#81D9DE]">✦</span> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ WHY COLLAGEN? — EDUCATION ════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#294547] mb-6">
                Why Collagen Matters
              </h2>
              <p className="text-lg text-[#5A5A6E] leading-relaxed mb-6">
                Collagen is the most abundant protein in your body, providing
                essential structure to your skin, hair, nails, joints, and
                connective tissues.
              </p>
              <div className="bg-[#E8F8F9] rounded-xl p-6 mb-6">
                <p className="text-4xl font-bold text-[#294547] mb-2">~1.5%</p>
                <p className="text-[#5A5A6E] leading-relaxed">
                  Starting around age 25, your body&apos;s natural collagen
                  production may begin to decline by approximately 1–1.5% per
                  year. By age 40, you may have lost a significant portion of
                  your body&apos;s collagen.*
                </p>
              </div>
              <p className="text-[#1A1A2E] leading-relaxed">
                Supplementing with hydrolyzed collagen peptides is designed to
                help replenish what time may take away — supporting your body
                from the inside out.
              </p>
            </div>
            <div>
              {/* Placeholder: Replace with educational illustration or infographic */}
              <div className="bg-[#EBF5F0] rounded-xl aspect-[4/3] flex items-center justify-center border border-gray-100">
                <div className="text-center text-[#5A5A6E] p-8">
                  <svg
                    className="w-20 h-20 mx-auto mb-3 text-[#81D9DE]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.75}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                  <p className="text-sm font-semibold">
                    Collagen Science Infographic
                  </p>
                  <p className="text-xs mt-1">
                    Illustration showing collagen&apos;s role in the body
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ BENEFITS GRID ════════════ */}
      <section className="py-16 md:py-24 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl text-[#294547] mb-3">
              Feel Good, Inside &amp; Out
            </h2>
            <p className="text-lg text-[#5A5A6E] max-w-2xl mx-auto">
              Our Multi Collagen Peptides are formulated to help support your
              body&apos;s natural beauty and mobility — from head to toe.*
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hair",
                description:
                  "May help support thicker, healthier-looking hair and promote natural growth.*",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                ),
              },
              {
                title: "Skin",
                description:
                  "Designed to help promote skin elasticity, hydration, and a youthful appearance.*",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                ),
              },
              {
                title: "Nails",
                description:
                  "May help strengthen brittle nails and support healthy nail growth.*",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15"
                    />
                  </svg>
                ),
              },
              {
                title: "Joints",
                description:
                  "Formulated to support joint comfort, flexibility, and everyday mobility.*",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                ),
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8F8F9] text-[#294547] mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl text-[#294547] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#5A5A6E] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHAT MAKES OURS DIFFERENT ════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Placeholder: Replace with product lifestyle image */}
            <div className="bg-[#EBF5F0] rounded-xl aspect-[4/3] flex items-center justify-center border border-gray-100 order-2 md:order-1">
              <div className="text-center text-[#5A5A6E] p-8">
                <svg
                  className="w-20 h-20 mx-auto mb-3 text-[#81D9DE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.75}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                  />
                </svg>
                <p className="text-sm font-semibold">
                  Product Lifestyle Image
                </p>
                <p className="text-xs mt-1">
                  Collagen being mixed into a beverage
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl lg:text-4xl text-[#294547] mb-6">
                What Makes Ours Different
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Grass-Fed & Pasture-Raised",
                    text: "Sourced exclusively from Grade A, grass-fed, pasture-raised bovine — never factory-farmed.",
                  },
                  {
                    title: "Types I & III",
                    text: "The two most abundant collagen types in the human body, playing key roles in skin, hair, nails, and joint structure.",
                  },
                  {
                    title: "19 Naturally-Occurring Amino Acids",
                    text: "A comprehensive amino acid profile including glycine, proline, and hydroxyproline.",
                  },
                  {
                    title: "Pure Hydrolyzed Peptides",
                    text: "Enzymatically broken down into smaller peptides designed for optimal absorption.",
                  },
                  {
                    title: "Clean Formula",
                    text: "Free from all dairy, gluten, soy, hormones, and preservatives. Nothing artificial, ever.",
                  },
                  {
                    title: "Unflavored & Versatile",
                    text: "Dissolves easily in hot or cold beverages without altering the taste of your favorite drinks.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#E8F8F9] flex items-center justify-center">
                        <CheckIcon />
                      </div>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-[#294547] mb-0.5"
                        style={{
                          fontFamily:
                            '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5A5A6E] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ HOW TO USE ════════════ */}
      <section className="py-16 md:py-24 bg-[#E8F8F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl text-[#294547] mb-3">
              Simple to Use, Every Day
            </h2>
            <p className="text-lg text-[#5A5A6E]">
              Just one scoop a day — in under 30 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Scoop",
                description:
                  "Measure one level scoop (11g) using the included scoop.",
              },
              {
                step: "2",
                title: "Mix",
                description:
                  "Add to 8–12 fl oz of your favorite hot or cold beverage — coffee, smoothies, water, and more.",
              },
              {
                step: "3",
                title: "Enjoy",
                description:
                  "Stir or blend until fully dissolved. Enjoy once daily as part of your wellness routine.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#294547] text-white text-xl font-bold mb-5">
                  {item.step}
                </div>
                <h3 className="text-xl text-[#294547] mb-3">{item.title}</h3>
                <p className="text-[#5A5A6E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SUPPLEMENT FACTS ════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-[#294547] text-center mb-12">
            Supplement Facts
          </h2>

          <div className="bg-[#F9F7F4] rounded-xl border border-gray-200 p-6 md:p-8 max-w-lg mx-auto">
            <div className="border-b-8 border-[#294547] pb-2 mb-2">
              <h3
                className="text-2xl font-bold text-[#294547]"
                style={{
                  fontFamily:
                    '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
                }}
              >
                Supplement Facts
              </h3>
            </div>
            <div className="border-b-4 border-[#294547] pb-1 mb-3 text-sm">
              <p>
                <strong>Serving Size:</strong> 11g (1 Level Scoop)
              </p>
              <p>
                <strong>Servings Per Container:</strong> About 41
              </p>
            </div>

            <div className="text-sm">
              <div className="flex justify-between border-b border-gray-300 py-1.5">
                <span className="font-bold">Amount Per Serving</span>
                <span className="font-bold">% Daily Value</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 py-1.5">
                <span>
                  <strong>Calories</strong>
                </span>
                <span>40</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 py-1.5">
                <span>
                  <strong>Total Protein</strong>
                </span>
                <span>10g</span>
              </div>
              <div className="border-b-8 border-[#294547] py-1.5">
                <div className="flex justify-between">
                  <span>
                    <strong>Collagen Peptides</strong>
                    <br />
                    <span className="text-xs text-[#5A5A6E]">
                      (from Bovine Hide)
                    </span>
                  </span>
                  <span>
                    11g&ensp;<strong>†</strong>
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5A5A6E] mt-2">
                † Daily Value not established.
              </p>
              <p className="text-xs text-[#5A5A6E] mt-2">
                <strong>Other Ingredients:</strong> None.
              </p>
              <p className="text-xs text-[#5A5A6E] mt-2">
                Contains: Bovine (cow)-derived ingredients.
              </p>
            </div>
          </div>

          {/* Amino Acid Highlights */}
          <div className="mt-10 text-center">
            <h3
              className="text-xl font-bold text-[#294547] mb-4"
              style={{
                fontFamily:
                  '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
              }}
            >
              19 Naturally-Occurring Amino Acids
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {[
                "Glycine",
                "Proline",
                "Hydroxyproline",
                "Glutamic Acid",
                "Alanine",
                "Arginine",
                "Aspartic Acid",
                "Lysine",
                "Serine",
                "Leucine",
                "Valine",
                "Threonine",
                "Phenylalanine",
                "Isoleucine",
                "Histidine",
                "Methionine",
                "Tyrosine",
                "Hydroxylysine",
                "Cysteine",
              ].map((amino) => (
                <span
                  key={amino}
                  className="bg-[#E8F8F9] text-[#294547] text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {amino}
                </span>
              ))}
            </div>
          </div>

          {/* FDA Disclaimer */}
          <p className="text-xs text-[#5A5A6E] text-center mt-8 max-w-xl mx-auto italic">
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* ════════════ REVIEWS / SOCIAL PROOF ════════════ */}
      <section id="reviews" className="py-16 md:py-24 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl text-[#294547] mb-3">
              What Our Customers Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex text-[#D4A55A]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-lg font-bold text-[#294547]">4.8/5</span>
            </div>
            <p className="text-[#5A5A6E]">
              Based on 2,400+ verified customer reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Austin, TX",
                rating: 5,
                title: "Noticed a difference in my hair and nails",
                review:
                  "I've been using this collagen for about two months now and my hairdresser commented that my hair looks thicker. My nails also seem stronger — they used to break all the time. I mix it into my morning coffee and can't taste it at all.",
                verified: true,
              },
              {
                name: "James R.",
                location: "Denver, CO",
                rating: 5,
                title: "Great for my morning routine",
                review:
                  "I was looking for a clean collagen supplement without a bunch of fillers. This one dissolves perfectly in hot or cold drinks. I appreciate that it's grass-fed and has no added junk. Been part of my daily routine for 3 months now.",
                verified: true,
              },
              {
                name: "Linda K.",
                location: "Portland, OR",
                rating: 5,
                title: "My joints feel more comfortable",
                review:
                  "At 55, I wanted to support my joint health as I stay active. I've been taking this daily and my morning stiffness seems less noticeable. Love that it's unflavored — works in my smoothie, tea, or just water.",
                verified: true,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex text-[#D4A55A] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <h4
                  className="font-bold text-[#294547] mb-2"
                  style={{
                    fontFamily:
                      '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
                  }}
                >
                  {review.title}
                </h4>
                <p className="text-sm text-[#5A5A6E] leading-relaxed mb-4">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#294547]">
                    {review.name}{" "}
                    <span className="font-normal text-[#5A5A6E]">
                      — {review.location}
                    </span>
                  </span>
                  {review.verified && (
                    <span className="text-[#294547] font-semibold flex items-center gap-1">
                      <CheckIcon /> Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5A5A6E] text-center mt-6 italic">
            Individual results may vary. These reviews are from verified
            customers and reflect their personal experiences.
          </p>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-[#294547] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {[
              {
                q: "What types of collagen are in this product?",
                a: "Our Multi Collagen Peptides contain Types I and III collagen, which are the two most abundant collagen types in the human body. Type I is primarily found in skin, hair, nails, and bones, while Type III supports skin elasticity and is found in connective tissues.",
              },
              {
                q: "Where is the collagen sourced from?",
                a: "Our collagen is sourced from Grade A, grass-fed, pasture-raised bovine (cow) hide. We never use factory-farmed sources. The product is manufactured in a GMP-compliant facility in the United States.",
              },
              {
                q: "How does it taste?",
                a: "Our collagen peptides are completely unflavored and dissolve easily in both hot and cold beverages. Most customers report no detectable taste or texture change in their drinks — from coffee and tea to smoothies and water.",
              },
              {
                q: "How long until I may notice results?",
                a: "Individual results may vary. Some customers report noticing differences in their hair, skin, and nails within 4–8 weeks of consistent daily use. For joint comfort, some customers report changes within 8–12 weeks. Consult your healthcare provider about what timeline may be appropriate for you.",
              },
              {
                q: "Is this product free from common allergens?",
                a: "Yes. Our Multi Collagen Peptides are free from gluten, dairy, soy, shellfish, hormones, and preservatives. The product contains bovine (cow)-derived ingredients. If you have specific dietary concerns, we recommend consulting your healthcare provider.",
              },
              {
                q: "Can I take this with other supplements or medications?",
                a: "We recommend consulting your healthcare provider before starting any new supplement, especially if you are currently taking medications, are pregnant, nursing, or have a medical condition.",
              },
              {
                q: "What is your return policy?",
                a: "We offer a 60-day, full money-back guarantee. If you're not completely satisfied with your purchase, contact our support team at support@revitalizeme.com for a full refund — no questions asked.",
              },
              {
                q: "How should I store this product?",
                a: "Store in a cool, dry place with the lid tightly closed. No refrigeration is required. Keep out of reach of children.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#F9F7F4] rounded-lg border border-gray-200"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-[#294547] hover:text-[#1a2f31]">
                  <span>{faq.q}</span>
                  <ChevronDown />
                </summary>
                <div className="px-5 pb-5 text-sm text-[#5A5A6E] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ GUARANTEE / RISK REVERSAL ════════════ */}
      <section className="py-16 md:py-20 bg-[#E8F8F9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#294547] text-white mb-6">
            <ShieldIcon />
          </div>
          <h2 className="text-3xl text-[#294547] mb-4">
            60-Day Money-Back Guarantee
          </h2>
          <p className="text-lg text-[#5A5A6E] leading-relaxed max-w-xl mx-auto">
            We&apos;re confident you&apos;ll love our Multi Collagen Peptides.
            If you&apos;re not completely satisfied within 60 days of purchase,
            contact us for a full refund — no questions asked.
          </p>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section className="py-16 md:py-24 bg-[#294547]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Ready to Feel Good, Inside &amp; Out?
          </h2>
          <p className="text-lg text-[#81D9DE] mb-8 max-w-2xl mx-auto">
            Join thousands of customers who have made RevitalizeMe Multi
            Collagen Peptides part of their daily wellness routine.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-md mx-auto mb-8">
            {/* Placeholder: Replace with small product image */}
            <div className="w-32 h-32 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-xs text-white/70 text-center px-2">
                Product Image
              </span>
            </div>
            <p
              className="text-white text-xl font-bold mb-1"
              style={{
                fontFamily:
                  '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
              }}
            >
              Multi Collagen Peptides
            </p>
            <p className="text-[#81D9DE] text-sm mb-4">
              16 oz&ensp;|&ensp;~41 Servings&ensp;|&ensp;Unflavored
            </p>
            <p className="text-white text-2xl font-bold mb-5">$39.95</p>
            <button className="w-full bg-[#81D9DE] hover:bg-[#6bc4c9] text-[#294547] text-lg font-bold py-4 rounded-lg transition-colors">
              Add to Cart
            </button>
          </div>

          <p className="text-sm text-white/60">
            Free shipping on orders over $50&ensp;•&ensp;60-day money-back
            guarantee&ensp;•&ensp;Subscribe &amp; save 15%
          </p>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="bg-[#1a2f31] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <p
                className="text-xl mb-3"
                style={{ fontFamily: '"Yeseva One", Georgia, serif' }}
              >
                RevitalizeMe
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Your wellness journey, guided by science.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-wider mb-4"
                style={{
                  fontFamily:
                    '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
                }}
              >
                Shop
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Multi Collagen Peptides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    All Supplements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bundles &amp; Save
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Subscribe &amp; Save
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-wider mb-4"
                style={{
                  fontFamily:
                    '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
                }}
              >
                Company
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-wider mb-4"
                style={{
                  fontFamily:
                    '"Source Sans 3", "Source Sans Pro", system-ui, sans-serif',
                }}
              >
                Support
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a
                    href="mailto:support@revitalizeme.com"
                    className="hover:text-white transition-colors"
                  >
                    support@revitalizeme.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:8867897790"
                    className="hover:text-white transition-colors"
                  >
                    (886) 789-7790
                  </a>
                </li>
                <li className="leading-relaxed">
                  1254 Wooster Blvd, Suite A
                  <br />
                  Huntington, MI 56789
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-white/10 mt-10 pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40 mb-6">
              <a href="#" className="hover:text-white/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Refund Policy
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Shipping Policy
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Accessibility
              </a>
            </div>

            {/* FDA Disclaimer */}
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              *These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>

            {/* Healthcare Provider Disclaimer */}
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              Consult your healthcare provider before starting any new
              supplement or wellness program. Individual results may vary. Not
              intended for use by persons under the age of 18.
            </p>

            {/* Distribution Info */}
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              Distributed by: RevitalizeMe, 1254 Wooster Blvd, Suite A,
              Huntington, MI 56789 &nbsp;|&nbsp;{" "}
              <a
                href="https://www.revitalizeme.com"
                className="underline hover:text-white/80"
              >
                www.revitalizeme.com
              </a>
            </p>

            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} RevitalizeMe. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
