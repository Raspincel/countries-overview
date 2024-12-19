import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FaEarthAmericas } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Countries overview",
  description:
    "Test assessment for a fullstack developer position at DevelopsToday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="h-10 w-full bg-slate-700 text-white flex items-center justify-center">
          <Link href="/" className="flex items-center gap-1">
            <FaEarthAmericas size={12} />
            <h2 className="font-bold text-sm">Countries overview</h2>
          </Link>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
