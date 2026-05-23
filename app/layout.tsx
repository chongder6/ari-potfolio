import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Arijit Chongder | AI Product Manager",
  description:
    "Portfolio of Arijit Chongder — AI Product Manager specializing in LLMs, analytics, and scalable digital products.",

  keywords: [
    "Product Manager",
    "AI Product Manager",
    "LLM",
    "Portfolio",
    "Product Strategy",
    "Technical Product Manager",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}