import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Recontech - Personal Finance, Credit Cards, Loans & Investments in India",
    template: "%s | Recontech",
  },
  description:
    "Recontech is India's trusted personal finance platform. Compare credit cards, loans, SIPs, mutual funds, income tax tips, and insurance plans. Make smarter money decisions today.",
  keywords: [
    "personal finance India",
    "credit cards comparison",
    "best credit cards India",
    "home loans India",
    "personal loans",
    "SIP investment",
    "mutual funds India",
    "income tax saving",
    "health insurance",
    "life insurance",
    "term insurance",
    "financial planning",
    "money management",
  ],
  authors: [{ name: "Recontech" }],
  creator: "Recontech",
  publisher: "Recontech",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://recontech.in",
    siteName: "Recontech",
    title: "Recontech - Personal Finance, Credit Cards, Loans & Investments in India",
    description:
      "Compare credit cards, loans, SIPs, mutual funds, and insurance plans. India's trusted personal finance guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Recontech Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recontech - Personal Finance India",
    description: "Compare credit cards, loans, SIPs, mutual funds & insurance plans.",
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8685123310989975"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <link rel="canonical" href="https://recontech.in" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
