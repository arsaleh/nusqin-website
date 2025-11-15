import type { Metadata } from "next";
import { Sora, Syne, Tenor_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { HUBSPOT_CONFIG } from '@/lib/constants';

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const syne = Syne({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const tenorSans = Tenor_Sans({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "NuSQIN Medical Aesthetics | Where Science Meets Artistry",
  description: "Medical aesthetics and skin surgery clinic in Port Coquitlam, BC. Offering Botox, dermal fillers, microneedling, PRP, laser treatments, and minor surgeries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${syne.variable} ${tenorSans.variable} antialiased`}
      >
        {/* HubSpot Tracking Code */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src={`//js.hs-scripts.com/${HUBSPOT_CONFIG.portalId}.js`}
        />

        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
