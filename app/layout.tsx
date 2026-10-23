import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quartodonda Technologies | Fields Shape Reality",
  description:
    "Quartodonda Technologies Private Limited — RF, radio and radar-based solutions for tactical and civilian applications, based in Thanjavur, Tamil Nadu.",
  keywords: [
    "Quartodonda Technologies",
    "RF solutions",
    "radar systems",
    "radio systems",
    "aerospace",
    "defence technology",
    "Thanjavur"
  ],
  openGraph: {
    title: "Quartodonda Technologies",
    description: "Fields Shape Reality.",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" }
    ],
    apple: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
