"use client";
import Image from "next/image";
import { useState } from "react";

export default function LibidoGuide() {
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
          subject: "New Lead: Libido Guide",
        }),
      });
      if (res.ok) {
        window.location.href = "/libido-guide/thank-you";
      }
    } catch {
      setSubmitted(false);
    }
    setLoading(false);
  };

  return (
    <>
      <head>
        <title>The Libido Crash Nobody Warned You About: HSDD, Desire, and What Actually Works | RevitalizeMe</title>
        <meta name="description" content="HSDD affects ~40% of menopausal women. Learn about the biology of desire, why SSRIs may be making it worse, and what treatments — including the 2025 flibanserin approval — actually work." />
        <meta property="og:title" content="The Libido Crash Nobody Warned You About: HSDD, Desire, and What Actually Works" />
        <meta property="og:description" content="HSDD is a medical condition with real treatments. Learn the science of desire and what actually works at menopause." />
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
            The Libido Crash Nobody Warned You About: HSDD, Desire, and What Actually Works
          </h1>

          {/* Byline */}
          <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "32px" }}>
            By Dr. Cyrus, MD &bull; February 2026 &bull; 13 min read
          </p>

          {/* Opening */}
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "16px" }}>
            It wasn&apos;t just a phase. It wasn&apos;t stress. It wasn&apos;t your relationship. When your sex drive disappeared at perimenopause, you lost something real — and medicine has been spectacularly unhelpful about explaining why or what to do about it.
          </p>
          <p style={{ fontSize: "1.08rem", lineHeight: 1.75, marginBottom: "40px" }}>
            HSDD affects approximately 40% of menopausal women, yet 53% have never sought healthcare for it. That changes now.
          </p>

          {/* ====== H2: This Isn't in Your Head ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            This Isn&apos;t in Your Head
          </h2>

          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "28px" }}>
            {[
              { stat: "~40%", label: "of menopausal women experience low sexual desire" },
              { stat: "8–12%", label: "meet clinical criteria for HSDD (distressing low desire)" },
              { stat: "53%", label: "of women with HSDD have never sought healthcare for it" },
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
            HSDD — Hypoactive Sexual Desire Disorder — is the most common sexual dysfunction in women. It&apos;s defined as persistent lack of sexual interest lasting at least 6 months that causes distress. The PRESIDE study (31,000+ women) found HSDD peaks at 12.3% ages 45–64.
          </p>

          {/* QOL Callout */}
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
            <strong>HSDD has a quality-of-life impact comparable to diabetes and chronic back pain.</strong> The biggest decrements are in mental health, vitality, and social functioning. This is not a luxury problem — it&apos;s a medical condition with real consequences.
          </div>

          {/* ====== H2: Rethinking Desire — It Was Never Linear ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Rethinking Desire — It Was Never Linear
          </h2>

          {/* Side-by-side: Old vs New model */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
            {/* Old Model - Red */}
            <div style={{ border: "2px solid #dc2626", borderRadius: "10px", overflow: "hidden" }}>
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
                Old Linear Model (1966)
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  "Desire → Arousal → Plateau → Orgasm → Resolution",
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: "0.85rem", padding: "6px 0", marginBottom: "10px", color: "#374151", fontWeight: 600 }}>
                    {item}
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "10px" }}>
                  {[
                    "Assumes desire always comes first",
                    "Based on male sexual response",
                  ].map((item, i) => (
                    <div key={i} style={{ fontSize: "0.83rem", padding: "4px 0", display: "flex", alignItems: "flex-start", gap: "6px", color: "#6b7280" }}>
                      <span style={{ color: "#dc2626" }}>✗</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Basson Model - Green */}
            <div style={{ border: "2px solid #16a34a", borderRadius: "10px", overflow: "hidden" }}>
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
                Basson Circular Model (2000)
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  { num: "1", text: "Intimacy motivation" },
                  { num: "2", text: "Sexual stimuli" },
                  { num: "3", text: "Subjective arousal" },
                  { num: "4", text: "Responsive desire emerges" },
                  { num: "5", text: "Satisfaction" },
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: "0.83rem", padding: "3px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        background: "#16a34a",
                        color: "#fff",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {item.num}
                    </span>
                    <span style={{ color: "#374151" }}>{item.text}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "8px", marginTop: "8px" }}>
                  <div style={{ fontSize: "0.8rem", color: "#16a34a", fontWeight: 600 }}>
                    ✓ Desire can come before OR after arousal
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "40px" }}>
            Dr. Rosemary Basson demonstrated that female desire is often <em>responsive</em>, not spontaneous. You don&apos;t need to feel desire before sex — desire often emerges during arousal. This is normal. But when even responsive desire disappears — that&apos;s HSDD.
          </p>

          {/* ====== H2: The Biology Behind the Crash ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            The Biology Behind the Crash
          </h2>

          {/* Drive vs Suppress comparison */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
            {/* Drive - Green */}
            <div style={{ border: "2px solid #16a34a", borderRadius: "10px", overflow: "hidden" }}>
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
                Drive Sexual Desire
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  { name: "Dopamine", icon: "⚡" },
                  { name: "Norepinephrine", icon: "🔥" },
                  { name: "Oxytocin", icon: "💗" },
                  { name: "Testosterone", icon: "💪" },
                  { name: "Estrogen", icon: "🌸" },
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: "0.88rem", padding: "6px 0", borderBottom: i < 4 ? "1px solid #e5e7eb" : "none", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{item.icon}</span>
                    <span style={{ color: "#374151", fontWeight: 600 }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Suppress - Red */}
            <div style={{ border: "2px solid #dc2626", borderRadius: "10px", overflow: "hidden" }}>
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
                Suppress Sexual Desire
              </div>
              <div style={{ padding: "14px" }}>
                {[
                  { name: "Serotonin excess", icon: "⚠️" },
                  { name: "Prolactin", icon: "🔻" },
                  { name: "Endocannabinoids", icon: "🧠" },
                  { name: "Opioids", icon: "💊" },
                  { name: "Cortisol", icon: "😰" },
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: "0.88rem", padding: "6px 0", borderBottom: i < 4 ? "1px solid #e5e7eb" : "none", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{item.icon}</span>
                    <span style={{ color: "#374151", fontWeight: 600 }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "28px" }}>
            At menopause: estrogen drops (causing pain and dryness), testosterone drops ~50% by age 40, and serotonin dynamics shift. If you&apos;re on an SSRI (common for perimenopause mood symptoms), the medication actively suppresses desire-driving neurotransmitters.
          </p>

          {/* SSRI Amber Callout */}
          <div
            style={{
              background: "#fffbeb",
              borderLeft: "4px solid #d97706",
              borderRadius: "8px",
              padding: "18px 20px",
              marginBottom: "40px",
              fontSize: "0.98rem",
              lineHeight: 1.65,
            }}
          >
            <strong>SSRI antidepressants are one of the most common iatrogenic causes of low desire.</strong> If you were started on an SSRI for perimenopause mood symptoms (which may have been hormonal), the medication itself may be suppressing your libido. Ask about bupropion as an alternative.
          </div>

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
              Want the Complete Libido Guide?
            </h3>
            <p style={{ color: "#4b5563", fontSize: "0.95rem", marginBottom: "20px", lineHeight: 1.6 }}>
              Download the full guide with the desire model comparison, neurotransmitter balance chart, treatment grid, 5-step action plan, provider conversation scripts, and 10 cited sources.
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

          {/* ====== H2: The Ripple Effect ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            The Ripple Effect — What Nobody Talks About
          </h2>

          {/* Three-column impact cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "28px" }}>
            {[
              {
                title: "Self",
                color: "#f43f5e",
                bg: "#fff1f2",
                items: ["Loss of femininity & identity", "Guilt and shame", "Frustration, hopelessness", "QOL impact like chronic conditions"],
              },
              {
                title: "Relationship",
                color: "#d97706",
                bg: "#fffbeb",
                items: ["Partner feels rejected", "Avoidance of all physical affection", "Communication breakdown", "Emotional distance grows"],
              },
              {
                title: "Barriers to Help",
                color: "#7c3aed",
                bg: "#f5f3ff",
                items: ["53% never seek help", "Shame prevents disclosure", "Providers rarely ask", "\"It's normal after menopause\""],
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  background: c.bg,
                  borderTop: `4px solid ${c.color}`,
                  borderRadius: "10px",
                  padding: "16px 14px",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: c.color, marginBottom: "10px", textAlign: "center" }}>
                  {c.title}
                </div>
                {c.items.map((item, j) => (
                  <div key={j} style={{ fontSize: "0.8rem", color: "#374151", padding: "3px 0", lineHeight: 1.4 }}>
                    • {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Avoidance vs Breaking cycle */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "40px" }}>
            <div
              style={{
                background: "#fef2f2",
                border: "2px solid #dc2626",
                borderRadius: "10px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#dc2626", marginBottom: "8px" }}>
                The Avoidance Spiral
              </div>
              <div style={{ fontSize: "0.85rem", color: "#374151", lineHeight: 1.55 }}>
                Low desire → avoid intimacy → partner withdrawal → guilt/shame → lower desire → more avoidance
              </div>
            </div>
            <div
              style={{
                background: "#f0fdf4",
                border: "2px solid #16a34a",
                borderRadius: "10px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#16a34a", marginBottom: "8px" }}>
                Breaking the Cycle
              </div>
              <div style={{ fontSize: "0.85rem", color: "#374151", lineHeight: 1.55 }}>
                Seek help → treat root causes → small wins → confidence returns → desire rebuilds → connection restored
              </div>
            </div>
          </div>

          {/* ====== H2: What Actually Works — Treatment Options ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            What Actually Works — Treatment Options
          </h2>

          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "28px" }}>
            {[
              { stat: "Dec 2025", label: "FDA approved flibanserin for postmenopausal women <65" },
              { stat: "High", label: "Evidence level for transdermal testosterone (ICSM 2024)" },
              { stat: "53%", label: "of women with HSDD have never sought healthcare" },
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
                <div style={{ fontFamily: "'Yeseva One', serif", fontSize: "1.5rem", color: "#81D9DE" }}>
                  {c.stat}
                </div>
                <div style={{ color: "#d1d5db", fontSize: "0.82rem", marginTop: "6px", lineHeight: 1.35 }}>
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          {/* 3x2 Treatment Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "28px" }}>
            {[
              {
                badge: "Hormonal",
                badgeBg: "#dbeafe",
                badgeColor: "#2563eb",
                title: "Transdermal Testosterone",
                text: "Off-label, 150–300 mcg/day. Endorsed by BMS/IMS/Endocrine Society.",
              },
              {
                badge: "Rx",
                badgeBg: "#fce7f3",
                badgeColor: "#db2777",
                title: "Flibanserin (Addyi)",
                text: "FDA-approved Dec 2025 for postmenopausal <65. Daily pill, rebalances brain chemistry.",
              },
              {
                badge: "Rx",
                badgeBg: "#fce7f3",
                badgeColor: "#db2777",
                title: "Bremelanotide (Vyleesi)",
                text: "As-needed injection. Melanocortin receptor agonist.",
              },
              {
                badge: "Hormonal",
                badgeBg: "#dbeafe",
                badgeColor: "#2563eb",
                title: "Vaginal Estrogen",
                text: "Treat GSM pain first — pain kills desire. Cream, tablet, or ring.",
              },
              {
                badge: "Psych",
                badgeBg: "#f5f3ff",
                badgeColor: "#7c3aed",
                title: "CBT / Sex Therapy",
                text: "Mindfulness, sensate focus, couples communication.",
              },
              {
                badge: "Lifestyle",
                badgeBg: "#fef3c7",
                badgeColor: "#d97706",
                title: "Lifestyle Optimization",
                text: "Exercise, sleep, stress reduction, medication review, pelvic floor PT.",
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
                  padding: "16px 14px",
                }}
              >
                <span
                  style={{
                    background: c.badgeBg,
                    color: c.badgeColor,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: "999px",
                    display: "inline-block",
                    marginBottom: "8px",
                  }}
                >
                  {c.badge}
                </span>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#294547", marginBottom: "6px" }}>
                  {c.title}
                </div>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", margin: 0, lineHeight: 1.45 }}>{c.text}</p>
              </div>
            ))}
          </div>

          {/* Flibanserin callout */}
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
            <strong>The December 2025 flibanserin approval is historic.</strong> For the first time, postmenopausal women have an FDA-approved option for HSDD.
          </div>

          {/* ====== H2: Your Action Plan ====== */}
          <h2
            style={{
              fontFamily: "'Yeseva One', serif",
              fontSize: "1.55rem",
              color: "#294547",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            Your Action Plan
          </h2>

          {/* Five Numbered Action Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            {[
              {
                num: "1",
                title: "Rule Out Contributing Factors",
                text: "Medication review (SSRIs, beta-blockers), depression screen, thyroid check, relationship assessment.",
                accent: "#2563eb",
              },
              {
                num: "2",
                title: "Treat Pain First",
                text: "Vaginal estrogen for GSM, moisturizers, pelvic floor PT. Pain is the fastest desire killer.",
                accent: "#0d9488",
              },
              {
                num: "3",
                title: "Optimize Hormones",
                text: "Transdermal estrogen + consider testosterone (3–6 month evaluation period).",
                accent: "#d97706",
              },
              {
                num: "4",
                title: "Consider FDA-Approved Meds",
                text: "Flibanserin (daily) or bremelanotide (as-needed). Discuss with your provider.",
                accent: "#db2777",
              },
              {
                num: "5",
                title: "Address the Psychological Layer",
                text: "CBT, sex therapy, couples therapy, shame/body image work.",
                accent: "#7c3aed",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                }}
              >
                <div style={{ width: "6px", background: c.accent, flexShrink: 0 }} />
                <div style={{ padding: "16px 18px", flex: 1, display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div
                    style={{
                      background: "#294547",
                      color: "#81D9DE",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {c.num}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#294547", marginBottom: "4px" }}>
                      {c.title}
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{c.text}</p>
                  </div>
                </div>
              </div>
            ))}
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

          {/* Five Conversation Script Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              {
                num: "1",
                script: "\"I've noticed a significant change in desire since perimenopause. I'd like to discuss HSDD treatment.\"",
              },
              {
                num: "2",
                script: "\"My SSRI may be contributing. Can we discuss alternatives like bupropion?\"",
              },
              {
                num: "3",
                script: "\"I'd like to try transdermal testosterone. BMS, IMS, and Endocrine Society endorse it.\"",
              },
              {
                num: "4",
                script: "\"I know flibanserin was approved Dec 2025 for postmenopausal women. Am I a candidate?\"",
              },
              {
                num: "5",
                script: "\"HSDD has QOL impact comparable to diabetes. Can you refer me to a sexual medicine specialist?\"",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  borderLeft: "4px solid #81D9DE",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  borderLeftWidth: "4px",
                  borderLeftColor: "#81D9DE",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
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
                    marginTop: "2px",
                  }}
                >
                  {c.num}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#374151", margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>
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
            <strong>Red flag:</strong> If your provider says &ldquo;it&apos;s just menopause&rdquo; or &ldquo;that&apos;s normal at your age,&rdquo; seek a second opinion from a menopause or sexual medicine specialist.
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
              You Deserve to Want What You Used to Want
            </h3>
            <p style={{ color: "#d1d5db", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "22px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              Sexual desire is not a luxury. HSDD is a medical condition with real treatments — hormonal, pharmaceutical, and psychological. The December 2025 flibanserin approval means postmenopausal women finally have an FDA-approved option. Our providers specialize in sexual wellness and can create a personalized treatment plan.
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
              This content is for educational purposes only and is not intended as medical advice. Testosterone therapy for women is off-label in the U.S. Flibanserin (Addyi) is a prescription medication with specific contraindications including alcohol use. All treatment decisions should be made with a qualified healthcare provider. Information reflects published research as of February 2026.
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
