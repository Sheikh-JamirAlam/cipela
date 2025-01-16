import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ogg = localFont({
  src: "./fonts/Ogg-RegularItalic.ttf",
  variable: "--font-ogg",
  display: "swap",
});

const aeonik = localFont({
  src: "./fonts/Aeonik-Regular.otf",
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cipela",
  description: "Buy great shoes at great prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ogg.variable} ${aeonik.variable} antialiased`}>{children}</body>
    </html>
  );
}
