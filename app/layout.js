import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

// Load fonts with CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata = {
  title: "D&A Portfolio",
  icons: {
    icon: "/logo.png", // or "/favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
