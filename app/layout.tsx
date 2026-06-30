import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"], 
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Prachi Mahendra Shivale | AI Developer Portfolio",
  description: "AI Developer & Python Engineer building intelligent solutions, automation systems, and modern software experiences.",
  keywords: ["AI Developer", "Python Engineer", "LangChain", "Agentic AI", "Portfolio", "Prachi Shivale"],
  authors: [{ name: "Prachi Mahendra Shivale" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col relative overflow-x-hidden`}>
        {/* Ambient Background Orbs */}
        <div className="fixed top-0 left-[-5%] w-[55%] h-[60%] glow-orb rounded-full blur-[120px] pointer-events-none -z-10 opacity-80" />
        <div className="fixed bottom-[-10%] right-[-5%] w-[50%] h-[55%] glow-orb rounded-full blur-[120px] pointer-events-none -z-10 opacity-60" />
        <div className="fixed top-[40%] right-[20%] w-[30%] h-[30%] glow-orb-gold rounded-full blur-[100px] pointer-events-none -z-10 opacity-50" />
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
