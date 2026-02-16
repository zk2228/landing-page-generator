"use client";
import Image from "next/image";

export default function VaginalMicrobiomeGuideThankYou() {
  return (
    <>
      <head>
        <title>Your Vaginal Microbiome Guide Is Ready | RevitalizeMe</title>
        <meta name="description" content="Download your free Vaginal Microbiome Guide from RevitalizeMe." />
      </head>
      <div
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          fontFamily: "'Source Sans 3', sans-serif",
          color: "#294547",
        }}
      >
        {/* Logo */}
        <div style={{ padding: "24px 0", textAlign: "center" }}>
          <a href="https://revitalizeme.com">
            <Image
              src="/revitalizeme-logo-wide.svg"
              alt="RevitalizeMe"
              width={220}
              height={50}
              priority
            />
          </a>
        </div>

        <div style={{ maxWidth: "560px", margin: "0 auto", padding: "0 20px 60px", textAlign: "center" }}>
          {/* Checkmark */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "#E8F7F8",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 13l4 4L19 7"
                stroke="#81D9DE"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.9rem",
              color: "#294547",
              marginBottom: "10px",
            }}
          >
            Your Vaginal Microbiome Guide Is Ready
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1rem", marginBottom: "28px" }}>
            Click below to download your guide. Check your email for a copy too.
          </p>

          {/* Download Button */}
          <a
            href="/vaginal-microbiome-guide.pdf"
            download
            style={{
              display: "inline-block",
              background: "#294547",
              color: "#81D9DE",
              fontWeight: 700,
              fontSize: "1.05rem",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              marginBottom: "36px",
            }}
          >
            Download the Vaginal Microbiome Guide (PDF) →
          </a>

          {/* What's Inside */}
          <div
            style={{
              background: "#E8F7F8",
              borderRadius: "12px",
              padding: "24px 28px",
              textAlign: "left",
              marginBottom: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Yeseva One', serif",
                fontSize: "1.1rem",
                color: "#294547",
                marginBottom: "14px",
              }}
            >
              Here&apos;s what&apos;s inside your guide:
            </h3>
            {[
              "Community State Type (CST) diagram — your microbiome fingerprint",
              "Before/after microbiome comparison (premenopausal vs postmenopausal)",
              "Estrobolome flow chart — the gut-vagina connection",
              "Four-step microbiome restoration ladder",
              "Probiotic strain selection criteria",
              "Provider conversation scripts with cited guidelines",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "6px 0",
                }}
              >
                <span style={{ color: "#81D9DE", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                <span style={{ fontSize: "0.92rem", color: "#294547" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div
            style={{
              background: "#294547",
              borderRadius: "12px",
              padding: "28px 24px",
              marginBottom: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Yeseva One', serif",
                fontSize: "1.15rem",
                color: "#81D9DE",
                marginBottom: "10px",
              }}
            >
              Ready for Personalized Guidance?
            </h3>
            <p style={{ color: "#d1d5db", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "18px" }}>
              Our providers understand microbiome science and can create a restoration plan tailored to your symptoms and health history.
            </p>
            <a
              href="https://revitalizeme.com/catalog?category=womens-health"
              style={{
                display: "inline-block",
                background: "#81D9DE",
                color: "#294547",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "12px 28px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Start Your Free Consultation
            </a>
          </div>

          {/* Cross-sell */}
          <div style={{ textAlign: "left", marginBottom: "32px" }}>
            <h3
              style={{
                fontFamily: "'Yeseva One', serif",
                fontSize: "1.05rem",
                color: "#294547",
                marginBottom: "14px",
              }}
            >
              Keep learning:
            </h3>
            {[
              {
                question: "New to GSM?",
                link: "/gsm-vaginal-health-guide",
                label: "Start with the GSM & Vaginal Health Guide",
              },
              {
                question: "Ready to explore HRT?",
                link: "/hrt-decision-guide",
                label: "Get the HRT Decision Guide",
              },
              {
                question: "Think your anxiety might be hormonal?",
                link: "/hormonal-anxiety-guide",
                label: "Get the Hormonal Anxiety Guide",
              },
            ].map((c, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <span style={{ fontSize: "0.92rem", color: "#6b7280" }}>{c.question} </span>
                <a
                  href={c.link}
                  style={{ color: "#81D9DE", fontWeight: 600, fontSize: "0.92rem", textDecoration: "underline" }}
                >
                  {c.label}
                </a>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "20px" }}>
            <p style={{ fontSize: "0.78rem", color: "#9ca3af", lineHeight: 1.6 }}>
              This content is for educational purposes only and is not intended as medical advice. All treatment decisions should be made with a qualified healthcare provider. Probiotic products are not FDA-regulated for vaginal health claims. Information reflects published research as of February 2026.
            </p>
            <p style={{ fontSize: "0.78rem", color: "#9ca3af", marginTop: "8px" }}>
              &copy; {new Date().getFullYear()} RevitalizeMe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
