import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"], 
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: "Prachi Shivale | AI Developer Portfolio",
  description: "Building intelligent AI solutions, automation systems, and modern software experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col relative overflow-x-hidden`}>
        {/* Glow Orb Background Effects */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] glow-orb rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] glow-orb rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
