import type { Metadata } from "next";
import { Karla, Esteban } from "next/font/google";
import "./globals.css";

const esteban = Esteban({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poems and film",
  description: "Life in poems and on film",
  openGraph: {
    title: "Poems and filmzzzz",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={esteban.className}>{children}</body>
      </html>
    </>
  );
}
