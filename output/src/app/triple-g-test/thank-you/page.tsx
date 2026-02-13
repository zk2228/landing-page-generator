import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Guide Is Ready | RevitalizeMe",
  description: "Download your free copy of Triple G Explained.",
};

export default function ThankYouPage() {
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

          {/* Confirmation Icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#81D9DE" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#294547"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: "#294547", fontFamily: "'Yeseva One', serif" }}
          >
            Your Guide Is Ready
          </h1>

          {/* Subtext */}
          <p className="text-base mb-8" style={{ color: "#4a5e60" }}>
            Click below to download your free copy of{" "}
            <strong>Triple G Explained</strong>.
          </p>

          {/* Download Button */}
          <a
            href="/hormone-health-checklist.pdf"
            download
            className="inline-block w-full py-3 rounded-lg text-base font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#81D9DE", color: "#294547" }}
          >
            Download the Free Guide
          </a>

          {/* Divider */}
          <hr className="my-10 border-t" style={{ borderColor: "#d8d8d3" }} />

          {/* Consultation CTA */}
          <p className="text-base mb-5" style={{ color: "#4a5e60" }}>
            Want to talk to a provider about which weight loss medication is
            right for you?
          </p>

          <a
            href="https://revitalizeme.com"
            className="inline-block w-full py-3 rounded-lg text-base font-semibold border-2 transition-opacity hover:opacity-90"
            style={{
              borderColor: "#294547",
              color: "#294547",
              backgroundColor: "transparent",
            }}
          >
            Start Your Free Consultation
          </a>

          {/* Footer */}
          <p className="text-xs mt-12" style={{ color: "#8a9a9c" }}>
            &copy; 2026 RevitalizeMe. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
