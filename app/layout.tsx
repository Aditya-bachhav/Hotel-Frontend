import type { Metadata } from "next";
import { Italiana, Manrope } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luxury",
  display: "swap", // Critical for Performance
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-clean",
  display: "swap", // Critical for Performance
});

export const metadata: Metadata = {
  title: "Hotel K Max | Luxury Stays in Vadodara",
  description: "VVIP Jacuzzi Suites & Budget Stays starting @ ₹999. Instant WhatsApp Booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${italiana.variable} ${manrope.variable} bg-[#050505] text-white antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}