import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "Generate a short url for your long url with ease!!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full bg-white">
      <ThemeProvider>
        <body className="${inter.className} h-full">{children}</body>
      </ThemeProvider>
    </html>
  );
}
