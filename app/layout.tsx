/** @format */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/7c5b46bc02.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/@vogelweb/cursor-js@1.0.6/dist/min/cursor.js"></script>
      </body>
    </html>
  );
}
