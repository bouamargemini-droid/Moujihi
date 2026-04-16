import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Moujihi — Ton orientation, guidée par l'IA",
    template: "%s | Moujihi",
  },
  description:
    "Moujihi accompagne les bacheliers marocains dans leur orientation post-bac grâce à un agent IA conversationnel.",
  metadataBase: new URL("https://moujihi.ma"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#050505] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
