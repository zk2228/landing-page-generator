import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triple G Explained — Free Guide | RevitalizeMe",
  description:
    "How retatrutide targets 3 hormones where Ozempic targets 1. Free evidence-based guide from RevitalizeMe.",
};

export default function TripleGTestPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Source+Sans+3:wght@400;600;700&display=swap');
      `}</style>

      <main
        className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
        style={{
          backgroundColor: "#F5F5F0",
          fontFamily: "'Source Sans 3', sans-serif",
        }}
      >
        <div className="w-full max-w-md mx-auto text-center">
          {/* Logo */}
          <p
            className="text-sm tracking-[0.3em] uppercase mb-10"
            style={{ color: "#294547", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}
          >
            Revitalize Me
          </p>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: "#294547", fontFamily: "'Yeseva One', serif" }}
          >
            The Next Generation of Weight Loss Medicine Is a Triple Threat
          </h1>

          {/* Subheadline */}
          <p className="text-base mb-8" style={{ color: "#4a5e60" }}>
            How retatrutide&apos;s 3-receptor approach is rewriting the playbook
            on metabolic weight loss. Free guide. Evidence-based.
            Provider-reviewed.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex -space-x-2">
              {["#81D9DE", "#294547", "#E8734A", "#F2C94C", "#81D9DE"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
            <p className="text-sm" style={{ color: "#4a5e60" }}>
              Join thousands staying ahead of the weight loss science
            </p>
          </div>

          {/* Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-3 mb-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="2e69ed75-e2a2-4eed-97c6-b1ace9d49897"
            />
            <input
              type="hidden"
              name="subject"
              value="TEST — Triple G Explained Guide"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://landing-page-generator-gamma.vercel.app/triple-g-test/thank-you"
            />

            <input
              type="text"
              name="name"
              required
              placeholder="First name"
              className="w-full px-4 py-3 rounded-lg border text-base outline-none transition-all focus:ring-2"
              style={{
                borderColor: "#d1d5db",
                backgroundColor: "#ffffff",
                color: "#294547",
              }}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border text-base outline-none transition-all focus:ring-2"
              style={{
                borderColor: "#d1d5db",
                backgroundColor: "#ffffff",
                color: "#294547",
              }}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-base font-semibold transition-opacity hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: "#81D9DE", color: "#294547" }}
            >
              Send Me the Free Guide
            </button>
          </form>

          {/* Trust Line */}
          <p className="text-xs mb-10" style={{ color: "#8a9a9c" }}>
            No spam. Unsubscribe anytime. Your data stays private.
          </p>

          {/* Preview Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12 text-left">
            {[
              "Single vs. dual vs. triple agonist breakdown",
              "Phase 3 clinical trial results",
              "What it means for your treatment options",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-3 text-sm"
                style={{ backgroundColor: "#eaeae5", color: "#294547" }}
              >
                <span style={{ color: "#81D9DE" }}>&#10003;</span> {item}
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="text-xs" style={{ color: "#8a9a9c" }}>
            &copy; 2026 RevitalizeMe. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
