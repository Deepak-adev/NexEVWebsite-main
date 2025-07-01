import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "NexEV - Advanced Electric Vehicle Solutions",
  description: "NexEV Solutions is at the forefront of revolutionizing electric vehicle (EV) technology with cutting-edge regenerative systems, intelligent battery management systems, and innovative charging solutions.",
  keywords: "EV, electric vehicles, battery management, charging solutions, regenerative systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="min-h-screen bg-[#000B1D] text-white relative">
          {children}
        </div>
      </body>
    </html>
  );
}
