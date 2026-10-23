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
