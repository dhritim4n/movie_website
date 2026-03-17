"use client"
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
    <html lang="en" className="">
      <body className="flex flex-col gap-5">
          <Navbar />
          {children}
      </body>
    </html>
    </QueryProvider>
  );
}
