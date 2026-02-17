"use client";
import Image from "next/image";
import { useState } from "react";

export default function VaginalMicrobiomeGuide() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "2e69ed75-e2a2-4eed-97c6-b1ace9d49897",
          email,
          subject: "New Lead: Vaginal Microbiome Guide",
        }),
      });
      if (res.ok) {
        window.location.href = "/vaginal-microbiome-guide/thank-you";
      }
    } catch {
      setSubmitted(false);
    }
    setLoading(false);
  };

  return (
    <>
      <head>
        <title>The Vaginal Microbiome: What Changes at Menopause and How to Restore It | RevitalizeMe</title>
        <meta name="description" content="Your vaginal microbiome depends on estrogen. Learn what changes at menopause, the estrobolome connection, and how to restore protective Lactobacillus with evidence-based treatments." />
        <meta property="og:title" content="The Vaginal Microbiome: What Changes at Menopause and How to Restore It" />
        <meta property="og:description" content="Learn how menopause disrupts your vaginal microbiome and the evidence-based strategies to restore it." />
        <meta property="og:type" content="article" />
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

        {/* Article */}
        <div style={{ maxWidth: "672px", margin: "0 auto", padding: "0 20px 60px" }}>
          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "2.1rem",
              lineHeight: 1.2,
              color: "#294547",
              marginBottom: "12px",
            }}
          >
            The Vaginal Microbiome: What Changes at Menopause and How to Restore It
          </h1>

          {/* Byline */}
          <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "32px" }}>
            By The RevitalizeMe Clinical Team &bull; February 2026 &bull; 14 min read
          </p>

          {/* Opening */}
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "16px" }}>
            Your vaginal microbiome is a living ecosystem that depends on estrogen to stay balanced. When estrogen declines at menopause, the protective bacteria that kept you healthy for decades start to disappear — and the consequences extend far beyond what most women are ever told.
          </p>
          <p style={{ fontSize: "1.08rem", lineHeight: 1.75, marginBottom: "40px" }}>
            This isn&apos;t &ldquo;just dryness.&rdquo; It&apos;s a fundamental shift in the microbial community that protects you from infections, maintains tissue integrity, and supports sexual health.
          </p>

          {/* ====== H2: Your Vaginal Microbiome — A Primer ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Your Vaginal Microbiome — A Primer
          </h2>

          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "28px" }}>
            {[
              { stat: "90%+", label: "Lactobacillus dominance in a healthy microbiome" },
              { stat: "3.5–4.5", label: "Healthy vaginal pH — more acidic than lemon juice" },
              { stat: "5", label: "Community State Types — your microbiome fingerprint" },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  background: "#294547",
                  borderRadius: "10px",
                  padding: "20px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Yeseva One', serif", fontSize: "1.7rem", color: "#81D9DE" }}>
                  {c.stat}
                </div>
                <div style={{ color: "#d1d5db", fontSize: "0.82rem", marginTop: "6px", lineHeight: 1.35 }}>
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "16px" }}>
            The vaginal microbiome is unlike any other microbial community in your body. While your gut thrives on diversity, your vagina is the opposite. A healthy vaginal microbiome is dominated by a single genus: <em>Lactobacillus</em>.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "28px" }}>
            These bacteria ferment glycogen into lactic acid, keeping your pH in the protective 3.5–4.5 range — a natural defense shield against harmful bacteria, yeast, and pathogens.
          </p>

          {/* CST Diagram — 5 columns */}
          <div style={{ marginBottom: "28px" }}>
            <h3 style={{ fontFamily: "'Yeseva One', serif", fontSize: "1.15rem", marginBottom: "14px", color: "#294547" }}>
              Community State Types (CSTs)
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
              {[
                { cst: "CST I", species: "L. crispatus", color: "#16a34a", bg: "#f0fdf4", desc: "Most protective. Stable acid environment. Lowest BV & UTI risk." },
                { cst: "CST II", species: "L. gasseri", color: "#16a34a", bg: "#f0fdf4", desc: "Protective. Less studied but linked to good vaginal health." },
                { cst: "CST III", species: "L. iners", color: "#d97706", bg: "#fffbeb", desc: "Variable. Can shift to dysbiosis. Less lactic acid production." },
                { cst: "CST V", species: "L. jensenii", color: "#16a34a", bg: "#f0fdf4", desc: "Protective. Less common. Associated with healthy microbiome." },
                { cst: "CST IV", species: "Mixed anaerobes", color: "#dc2626", bg: "#fef2f2", desc: "Dysbiotic. Gardnerella, Prevotella. Linked to BV & infections." },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: c.bg,
                    borderRadius: "8px",
                    padding: "12px 8px",
                    borderTop: `4px solid ${c.color}`,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: c.color }}>{c.cst}</div>
                  <div style={{ fontSize: "0.75rem", fontStyle: "italic", color: "#6b7280", margin: "4px 0" }}>
                    {c.species}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#374151", lineHeight: 1.35 }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Callout */}
          <div
            style={{
              background: "#E8F7F8",
              borderLeft: "4px solid #81D9DE",
              borderRadius: "8px",
              padding: "18px 20px",
              marginBottom: "40px",
              fontSize: "0.98rem",
              lineHeight: 1.65,
            }}
          >
            <strong>CST I (<em>L. crispatus</em>-dominant)</strong> is considered the gold standard. Women with CST I microbiomes have the lowest rates of BV, UTIs, and vaginal inflammation. This is the profile that estrogen therapy helps restore.
          </div>

          {/* ====== H2: What Menopause Does to Your Microbiome ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            What Menopause Does to Your Microbiome
          </h2>

          {/* Side-by-side comparison */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
            {/* Premenopausal - green */}
            <div
              style={{
                border: "2px solid #16a34a",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "10px 14px",
                  textAlign: "center",
                }}
              >
                Premenopausal (Healthy)
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  "pH 3.5–4.5 (acidic, protective)",
                  "90%+ Lactobacillus (produces lactic acid)",
                  "High glycogen (estrogen-driven fuel)",
                  "Low diversity (healthy = less diverse)",
                  "Strong barrier (thick epithelium)",
                  "Pathogen-resistant (natural defense)",
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: "0.85rem", padding: "6px 0", borderBottom: i < 5 ? "1px solid #e5e7eb" : "none", display: "flex", alignItems: "flex-start", gap: "6px" }}>
                    <span style={{ color: "#16a34a" }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Postmenopausal - red */}
            <div
              style={{
                border: "2px solid #dc2626",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#dc2626",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "10px 14px",
                  textAlign: "center",
                }}
              >
                Postmenopausal (Dysbiotic)
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  "pH 5.0–7.0+ (alkaline, vulnerable)",
                  "Low Lactobacillus (cannot maintain acidity)",
                  "Low glycogen (no estrogen = no fuel)",
                  "High diversity (the 'menopause paradox')",
                  "Thin barrier (atrophic epithelium)",
                  "Pathogen-prone (UTIs, BV, infections)",
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: "0.85rem", padding: "6px 0", borderBottom: i < 5 ? "1px solid #e5e7eb" : "none", display: "flex", alignItems: "flex-start", gap: "6px" }}>
                    <span style={{ color: "#dc2626" }}>✗</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "16px" }}>
            Scientists call this the &ldquo;menopause paradox&rdquo; — as your vaginal microbiome becomes more diverse, it actually becomes <em>less</em> healthy. Diversity means <em>Lactobacillus</em> has lost dominance and opportunistic pathogens have moved in.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "28px" }}>
            The mechanism: estrogen drives glycogen accumulation. Glycogen fuels <em>Lactobacillus</em>. No estrogen → no glycogen → no <em>Lactobacillus</em> → no lactic acid → rising pH → pathogen colonization. Circulating estrogen drops from &gt;120 pg/mL to &lt;10 pg/mL. The vaginal epithelium thins to just basal cells.
          </p>

          {/* Rose callout */}
          <div
            style={{
              background: "#fff1f2",
              borderLeft: "4px solid #f43f5e",
              borderRadius: "8px",
              padding: "18px 20px",
              marginBottom: "40px",
              fontSize: "0.98rem",
              lineHeight: 1.65,
            }}
          >
            Unlike hot flashes, which often improve on their own, <strong>microbiome changes are progressive and do not reverse without treatment</strong>. The tissue damage worsens the longer it goes unaddressed.
          </div>

          {/* ====== H2: The Gut-Vagina Connection — Your Estrobolome ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            The Gut-Vagina Connection — Your Estrobolome
          </h2>

          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "28px" }}>
            {[
              { stat: "60+", label: "Bacterial genera in the gut that metabolize estrogen" },
              { stat: "2-Way", label: "Estrogen shapes your gut; your gut shapes estrogen levels" },
              { stat: "2011", label: "Year the 'estrobolome' was first defined" },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  background: "#294547",
                  borderRadius: "10px",
                  padding: "20px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Yeseva One', serif", fontSize: "1.7rem", color: "#81D9DE" }}>
                  {c.stat}
                </div>
                <div style={{ color: "#d1d5db", fontSize: "0.82rem", marginTop: "6px", lineHeight: 1.35 }}>
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          {/* Estrobolome Flow Diagram */}
          <div style={{ marginBottom: "28px" }}>
            <h3 style={{ fontFamily: "'Yeseva One', serif", fontSize: "1.15rem", marginBottom: "14px", color: "#294547" }}>
              The Estrobolome Cycle
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "16px" }}>
              {[
                { step: "1", title: "Liver", desc: "Estrogen conjugated (deactivated), excreted in bile", bg: "#fef3c7", border: "#d97706" },
                { step: "2", title: "Gut Bacteria", desc: "Estrobolome enzymes reactivate estrogen", bg: "#E8F7F8", border: "#81D9DE" },
                { step: "3", title: "Bloodstream", desc: "Free estrogen reabsorbed into circulation", bg: "#fce7f3", border: "#ec4899" },
                { step: "4", title: "Vaginal Tissue", desc: "Estrogen drives glycogen + Lactobacillus = healthy microbiome", bg: "#f0fdf4", border: "#16a34a" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div
                    style={{
                      background: s.bg,
                      border: `2px solid ${s.border}`,
                      borderRadius: "10px",
                      padding: "12px 8px",
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        background: s.border,
                        color: "#fff",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {s.step}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "0.78rem", color: "#294547" }}>{s.title}</div>
                    <div style={{ fontSize: "0.68rem", color: "#6b7280", lineHeight: 1.3, marginTop: "4px" }}>{s.desc}</div>
                  </div>
                  {i < 3 && (
                    <div style={{ fontSize: "1.2rem", color: "#81D9DE", fontWeight: 700, padding: "0 4px" }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "16px" }}>
            Your gut health directly affects your vaginal health. A healthy gut microbiome supports estrogen recycling → supports vaginal <em>Lactobacillus</em> → maintains vaginal acidity.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "40px" }}>
            After menopause, when ovarian production ceases, the estrobolome may become an even more influential regulator of circulating estrogen.
          </p>

          {/* ====== MID-ARTICLE EMAIL CAPTURE CTA ====== */}
          <div
            style={{
              background: "#E8F7F8",
              borderRadius: "12px",
              padding: "32px 28px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Yeseva One', serif",
                fontSize: "1.35rem",
                color: "#294547",
                marginBottom: "10px",
              }}
            >
              Want the Complete Vaginal Microbiome Guide?
            </h3>
            <p style={{ color: "#4b5563", fontSize: "0.95rem", marginBottom: "20px", lineHeight: 1.6 }}>
              Download the full guide with the CST diagram, before/after microbiome comparison, estrobolome flow chart, restoration ladder, probiotic selection criteria, and 10 cited sources.
            </p>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: "10px",
                  maxWidth: "420px",
                  margin: "0 auto",
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    fontSize: "1rem",
                    outline: "none",
                    color: "#294547",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "#294547",
                    color: "#81D9DE",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "12px 22px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {loading ? "Sending..." : "Send Me the Free Guide →"}
                </button>
              </form>
            ) : (
              <p style={{ color: "#16a34a", fontWeight: 600 }}>Check your inbox!</p>
            )}
          </div>

          {/* ====== H2: The Evidence — Restoring Your Microbiome Works ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            The Evidence — Restoring Your Microbiome Works
          </h2>

          {/* 2x2 Evidence Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
            {[
              {
                title: "Lactobacillus Restored",
                text: "Vaginal estradiol tablets increased Lactobacillus and Bifidobacterium vs placebo after 12 weeks. Lactic acid metabolites also increased.",
              },
              {
                title: "pH Normalized",
                text: "Estrogen therapy reduces vaginal pH from 5.0–7.0+ back toward 3.5–4.5, re-creating the acidic environment that inhibits pathogens.",
              },
              {
                title: "UTIs Reduced 52%",
                text: "2025 retrospective: 51.9% fewer UTIs with vaginal estrogen. 1993 NEJM: 95% UTI-free at 8 months vs 30% placebo.",
              },
              {
                title: "Synbiotic Breakthrough",
                text: "2025 RCT: multi-strain L. crispatus synbiotic achieved 90% CST I conversion vs 11% placebo. Reduced Gardnerella and Candida.",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "10px",
                  padding: "18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "#16a34a", fontSize: "1.2rem" }}>✓</span>
                  <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#294547" }}>{c.title}</span>
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.55, color: "#374151", margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "16px" }}>
            <strong>Vaginal Estrogen: The Gold Standard.</strong> <em>Lactobacillus</em> abundance increased from 11.2% to 71.0% with low-dose estrogen therapy, with decreases in <em>Gardnerella</em>, <em>Atopobium</em>, <em>Prevotella</em>.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "28px" }}>
            <strong>Probiotics: Emerging Evidence.</strong> Vaginal <em>L. crispatus</em> is most promising. Oral probiotics (<em>L. rhamnosus</em> GR-1, <em>L. reuteri</em> RC-14) show more modest results. Combination estrogen + probiotic is the dual-mechanism frontier.
          </p>

          {/* Probiotic callout */}
          <div
            style={{
              background: "#E8F7F8",
              borderLeft: "4px solid #81D9DE",
              borderRadius: "8px",
              padding: "18px 20px",
              marginBottom: "40px",
              fontSize: "0.98rem",
              lineHeight: 1.65,
            }}
          >
            <strong>Not all probiotics are equal.</strong> Look for products specifically containing <em>L. crispatus</em>, <em>L. rhamnosus</em> GR-1, or <em>L. reuteri</em> RC-14. Vaginal delivery is more direct than oral for microbiome colonization.
          </div>

          {/* ====== H2: Your Microbiome Restoration Plan ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Your Microbiome Restoration Plan
          </h2>

          {/* Step-up Ladder */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              {
                step: "Step 1",
                title: "Lifestyle",
                badge: "Foundations",
                badgeBg: "#dbeafe",
                badgeColor: "#2563eb",
                accent: "#2563eb",
                text: "Avoid douching and scented products. High-fiber diet supports estrobolome. Quit smoking. pH-balanced cleansers only.",
              },
              {
                step: "Step 2",
                title: "Moisturizers + Probiotics",
                badge: "Support",
                badgeBg: "#E8F7F8",
                badgeColor: "#0d9488",
                accent: "#0d9488",
                text: "Vaginal moisturizers 2–3x/week. Vaginal probiotics with L. crispatus. Oral probiotics (L. rhamnosus GR-1, L. reuteri RC-14). Prebiotic fiber.",
              },
              {
                step: "Step 3",
                title: "Vaginal Estrogen",
                badge: "Restore",
                badgeBg: "#fef3c7",
                badgeColor: "#d97706",
                accent: "#d97706",
                text: "Gold standard. Cream, tablet, or ring. Restores glycogen, Lactobacillus, pH. Minimal systemic absorption.",
              },
              {
                step: "Step 4",
                title: "Combination Therapy",
                badge: "Optimize",
                badgeBg: "#fce7f3",
                badgeColor: "#db2777",
                accent: "#db2777",
                text: "Vaginal estrogen + probiotics. Add systemic HRT if needed. Address gut microbiome simultaneously.",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                }}
              >
                <div style={{ width: "6px", background: s.accent, flexShrink: 0 }} />
                <div style={{ padding: "16px 18px", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#6b7280" }}>{s.step}</span>
                    <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#294547" }}>{s.title}</span>
                    <span
                      style={{
                        background: s.badgeBg,
                        color: s.badgeColor,
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "2px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "#374151", margin: 0, lineHeight: 1.55 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Probiotic Selection Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "40px" }}>
            {[
              {
                num: "1",
                title: "Strain Specificity",
                text: "L. crispatus (CST I species) > generic L. acidophilus",
              },
              {
                num: "2",
                title: "Delivery Method",
                text: "Vaginal colonizes in 2–3 days; oral takes ~7 days with limited evidence",
              },
              {
                num: "3",
                title: "Combination Approach",
                text: "Estrogen creates conditions; probiotics provide colonizers",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  borderTop: "4px solid #81D9DE",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  borderTopWidth: "4px",
                  borderTopColor: "#81D9DE",
                  padding: "18px 14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    background: "#294547",
                    color: "#81D9DE",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {c.num}
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#294547", marginBottom: "6px" }}>
                  {c.title}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0, lineHeight: 1.45 }}>{c.text}</p>
              </div>
            ))}
          </div>

          {/* ====== H2: Protecting Your Microbiome Every Day ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Protecting Your Microbiome Every Day
          </h2>

          {/* Red/Green two-column */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "40px" }}>
            {/* What Harms - red */}
            <div
              style={{
                border: "2px solid #dc2626",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#dc2626",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "10px 14px",
                  textAlign: "center",
                }}
              >
                What Harms
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  { label: "Douching & scented products", desc: "Disrupts pH, kills Lactobacillus" },
                  { label: "Smoking", desc: "Lower Lactobacillus levels, higher BV risk" },
                  { label: "Unnecessary antibiotics", desc: "Kills beneficial bacteria, creates dysbiosis cycle" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "8px 0", borderBottom: i < 2 ? "1px solid #e5e7eb" : "none" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#dc2626", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>✗</span> {item.label}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px", paddingLeft: "18px" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* What Supports - green */}
            <div
              style={{
                border: "2px solid #16a34a",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "10px 14px",
                  textAlign: "center",
                }}
              >
                What Supports
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  { label: "High-fiber diet", desc: "Feeds estrobolome, 25–30g daily" },
                  { label: "Vaginal moisturizers", desc: "pH-balanced, 2–3x/week" },
                  { label: "Regular sexual activity", desc: "Blood flow to tissue, if comfortable" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "8px 0", borderBottom: i < 2 ? "1px solid #e5e7eb" : "none" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#16a34a", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>✓</span> {item.label}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px", paddingLeft: "18px" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ====== H2: Talking to Your Provider ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Talking to Your Provider
          </h2>

          {/* Conversation Script Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
            {[
              {
                num: "1",
                title: "For Recurrent UTIs",
                script: "\"I've read that vaginal estrogen can prevent UTIs by restoring Lactobacillus. The AUA gives it a Grade A recommendation. Can we try this before more antibiotics?\"",
              },
              {
                num: "2",
                title: "For Vaginal Symptoms",
                script: "\"I'm experiencing GSM symptoms. Can we discuss local vaginal estrogen to address the root cause?\"",
              },
              {
                num: "3",
                title: "If Provider Hesitates",
                script: "\"Local vaginal estrogen has minimal systemic absorption. The AUA/SUFU 2025 guidelines support it even for breast cancer survivors.\"",
              },
              {
                num: "4",
                title: "For Probiotics",
                script: "\"I'd like to try vaginal probiotics with L. crispatus combined with vaginal estrogen for a dual approach.\"",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  borderTop: "4px solid #81D9DE",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  borderTopWidth: "4px",
                  borderTopColor: "#81D9DE",
                  padding: "18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div
                    style={{
                      background: "#294547",
                      color: "#81D9DE",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {c.num}
                  </div>
                  <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#294547" }}>{c.title}</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#374151", margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>
                  {c.script}
                </p>
              </div>
            ))}
          </div>

          {/* Red flag callout */}
          <div
            style={{
              background: "#fef2f2",
              borderLeft: "4px solid #dc2626",
              borderRadius: "8px",
              padding: "18px 20px",
              marginBottom: "40px",
              fontSize: "0.98rem",
              lineHeight: 1.65,
            }}
          >
            <strong>Red flag:</strong> If your provider repeatedly prescribes antibiotics for UTIs without discussing vaginal estrogen, or dismisses symptoms as &ldquo;just aging,&rdquo; consider seeking a menopause specialist.
          </div>

          {/* ====== CONSULTATION CTA ====== */}
          <div
            style={{
              background: "#294547",
              borderRadius: "12px",
              padding: "36px 28px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Yeseva One', serif",
                fontSize: "1.4rem",
                color: "#81D9DE",
                marginBottom: "14px",
              }}
            >
              Your Microbiome Deserves Better Than &ldquo;Just Aging&rdquo;
            </h3>
            <p style={{ color: "#d1d5db", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "22px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              The science is clear: vaginal microbiome changes at menopause are treatable. Vaginal estrogen, targeted probiotics, and lifestyle changes can restore the protective <em>Lactobacillus</em> environment your body needs. Our providers understand the microbiome science and can create a personalized restoration plan.
            </p>
            <a
              href="https://revitalizeme.com/catalog?category=womens-health"
              style={{
                display: "inline-block",
                background: "#81D9DE",
                color: "#294547",
                fontWeight: 700,
                fontSize: "1.05rem",
                padding: "14px 32px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Start Your Free Consultation
            </a>
            <p style={{ color: "#9ca3af", fontSize: "0.82rem", marginTop: "12px" }}>
              No commitment. No pressure. Just answers.
            </p>
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "24px", marginTop: "20px" }}>
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
