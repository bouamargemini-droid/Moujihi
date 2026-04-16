import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Moujihi — Ton orientation, guidée par l'IA",
    template: "%s | Moujihi",
  },
  description:
    "Moujihi accompagne les bacheliers marocains dans leur orientation post-bac grâce à un agent IA conversationnel. Bilan personnalisé, candidature automatique, et bien plus.",
  keywords: [
    "orientation",
    "bac",
    "maroc",
    "études supérieures",
    "IA",
    "intelligence artificielle",
    "ENSA",
    "ENCG",
    "écoles",
    "universités",
    "moujihi",
  ],
  authors: [{ name: "Moujihi" }],
  creator: "Moujihi",
  metadataBase: new URL("https://moujihi.ma"),
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://moujihi.ma",
    siteName: "Moujihi",
    title: "Moujihi — Ton orientation, guidée par l'IA",
    description:
      "Moujihi accompagne les bacheliers marocains dans leur orientation post-bac grâce à un agent IA conversationnel.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moujihi — Orientation IA pour bacheliers marocains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moujihi — Ton orientation, guidée par l'IA",
    description:
      "Moujihi accompagne les bacheliers marocains dans leur orientation post-bac.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
