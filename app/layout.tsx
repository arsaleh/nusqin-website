import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { HUBSPOT_CONFIG } from '@/lib/constants';

const workSans = Work_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
        className={`${workSans.variable} ${inter.variable} antialiased`}
      >
        {/* HubSpot Tracking Code */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src={`//js.hs-scripts.com/${HUBSPOT_CONFIG.portalId}.js`}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
