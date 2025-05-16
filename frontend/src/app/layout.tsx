import { Poppins, Jost } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: "BMV",
  description: "BMV short description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${jost.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
