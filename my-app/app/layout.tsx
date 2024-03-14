import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <h1>Header in layout.tsx</h1>
        {children}
        <h1>Footer in layout.tsx</h1>           
      </body> 
    </html>
  );
}
