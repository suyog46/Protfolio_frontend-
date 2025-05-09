import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ThemeProvider } from "./provider"
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' });


export const metadata: Metadata = {
  title: "Suyog's Protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`} >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  </>
  );
}
