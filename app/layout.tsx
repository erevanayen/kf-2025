import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kysuce Freeride 2025",
  description: "Downhill skateboarding event in Svrčinovec, Slovakia",
  metadataBase: new URL("https://kysucefreeride.com"),
  openGraph: {
    title: "Kysuce Freeride 2025",
    description: "Join an epic downhill skateboarding event in Svrčinovec, Slovakia",
    url: "https://kysucefreeride.com",
    siteName: "Kysuce Freeride 2025",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Downhill Skateboarding Action"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kysuce Freeride 2025",
    description: "Join an epic downhill skateboarding event in Svrčinovec, Slovakia",
    images: ["https://kysucedownhill.com/og-image.jpg"]
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
