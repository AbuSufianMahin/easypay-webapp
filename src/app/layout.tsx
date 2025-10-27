import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "EasyPay",
  description: "browser tab Logo of easy pay",
  icons: {
    icon: "easypay-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <main>
          <Navbar />
          
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
