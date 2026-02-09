import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RevitalizeMe® Multi Collagen Peptides | Grass-Fed Types I & III",
  description:
    "Grass-fed & pasture-raised Multi Collagen Peptides with 19 amino acids. May support hair, skin, nail & joint health. Gluten free, Non-GMO, dairy free.",
  openGraph: {
    title: "RevitalizeMe® Multi Collagen Peptides | Grass-Fed Types I & III",
    description:
      "Grass-fed & pasture-raised Multi Collagen Peptides with 19 amino acids. May support hair, skin, nail & joint health.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
