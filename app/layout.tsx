import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "البـاشـا | Al Basha — مخبز · فول · حمص",
  description: "قائمة طعام — مخبز، فول، وحمص طازج يومياً",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
