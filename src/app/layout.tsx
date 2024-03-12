import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ToastProvider from '@/providers/ToastProvider';
import ModalProvider from '@/providers/ModalProvider';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
