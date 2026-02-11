import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Mohit Sharma Portfolio",
  description: "Mohit Sharma's Professional Resume & Portfolio",
  icons: {
    icon: "/MohitSharmaProfileImage.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen bg-background text-foreground relative">
            {/* Background Glows (Fixed to viewport to prevent height issues) */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <Header />
            {children}
          </div>
        </Providers>
      </body>

    </html>
  );
}
