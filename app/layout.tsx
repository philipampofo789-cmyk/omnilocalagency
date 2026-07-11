import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniLocal — Local Growth Engine | Kasoa, Ghana",
  description:
    "OmniLocal builds websites, brand design, Google Business Profiles, and AI chatbots for local businesses in Kasoa and beyond. Get a free consultation on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
