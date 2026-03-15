import type { Metadata } from "next";
import { Playfair_Display, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "THE NUTBAR — Not Your Regular Bar",
  description:
    "Premium nut-based protein chocolate bars. Real nuts. Real protein. No junk. Fuel your performance with THE NUTBAR.",
  keywords: [
    "protein bar",
    "nut bar",
    "healthy snack",
    "chocolate protein",
    "fitness food",
    "THE NUTBAR",
  ],
  openGraph: {
    title: "THE NUTBAR — Not Your Regular Bar",
    description: "Premium nut-based protein chocolate bars for athletes and fitness lovers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${barlowCondensed.variable} ${barlow.variable} bg-choco-dark text-nutty-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}