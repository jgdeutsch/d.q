import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diagnostics.Quest - Find Quest Diagnostics Labs Near You",
  description: "Find Quest Diagnostics lab locations nationwide. Search by zip code, city, or state. View hours, ratings, and directions for convenient blood testing.",
  keywords: "Quest Diagnostics, lab testing, blood work, diagnostic labs, lab locations",
  openGraph: {
    title: "Diagnostics.Quest - Find Quest Diagnostics Labs Near You",
    description: "Find Quest Diagnostics lab locations nationwide. Search by zip code, city, or state.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

