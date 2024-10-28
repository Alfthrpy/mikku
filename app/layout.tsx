import type { Metadata } from "next";
import { Fredoka } from '@next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from 'react-hot-toast';

const fredoka = Fredoka({
  weight: '400', // Adjust weight to suit your needs
  subsets: ['latin'], // Choose subset appropriately
});

export const metadata: Metadata = {
  title: "Mikku",
  description: "Mimik Wajahku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='myTheme'>
      <head>
        {/* Add any meta tags, links, or scripts here if needed */}
      </head>
      <body className={fredoka.className}>
      <Toaster position="top-right" reverseOrder={false} />
        {/* Navbar should be inside the body */}
        <Navbar />
        {/* Render children inside the body */}
        {children}
      </body>
    </html>
  );
}
