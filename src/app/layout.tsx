import type { Metadata } from "next";
import { Dancing_Script, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kay's Nail Wagon - Mobile Nail Tech Riverside",
  description:
    "Experience luxury manicures at your doorstep. Kay's Nail Wagon brings hygienic, creative nail artistry to Riverside, CA and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${dancingScript.variable} ${playfairDisplay.variable} font-display bg-bg-light text-text-dark overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
