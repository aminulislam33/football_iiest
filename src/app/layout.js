import { Geist, Geist_Mono, Bebas_Neue, DM_Sans, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm',
});

const teko = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-teko',
});

export const metadata = {
  title: "IIEST Football - College Tournaments & Matches",
  description: "College football community hosting multiple tournaments including Inter-College Cup, Inter-Year Tournament, Inter-Department League, and Freshers Knockout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${dmSans.variable} ${teko.variable}`}>
      <body className="bg-stadium-black">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
