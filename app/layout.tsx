import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fluxo | Software House & Desenvolvimento Web",
    template: "%s | Fluxo",
  },
  description:
    "Software house especializada em desenvolvimento de sites, sistemas web, landing pages e soluções digitais sob medida.",
  keywords: [
    "software house",
    "desenvolvimento web",
    "criação de sites",
    "landing pages",
    "sistemas web",
    "empresa de tecnologia",
    "Campinas",
    "São Paulo"
  ],
  authors: [{ name: "Fluxo" }],
  creator: "Fluxo",
  metadataBase: new URL("https://sejafluxo.com"),
  openGraph: {
    title: "Fluxo | Software House",
    description: "Suas ideias, fluindo. Soluções digitais sob medida.",
    url: "https://sejafluxo.com",
    siteName: "Fluxo",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Fluxo Software House",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluxo | Software House",
    description: "Desenvolvimento de sites, sistemas e landing pages.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
