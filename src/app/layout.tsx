import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Devfinder - GitHub User Search App, Find and Explore GitHub Profiles Effortlessly" ,
  description:
    "Discover GitHub profiles with ease using our intuitive user search app. Simply enter a username to view detailed information, including repositories, followers, and more. Enjoy a seamless experience with light and dark mode options, responsive design for any device, and automatic theme detection based on your system preferences. Perfect for developers and GitHub enthusiasts alike",
  keywords: [
    "imran shaikh",
    "javascript developer",
    "solana developer",
    "full stack developer",
    "web developer",
    "devfinder",
    "frontend developer",
    "react",
    "nextjs",
    "typescript",
    "blockchain",
    "rust",
  ],
  creator: "Imran Shaikh",
  authors: [{ name: "Imran Shaikh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    countryName: "Bangladesh",
    description:
      "Discover GitHub profiles with ease using our intuitive user search app. Simply enter a username to view detailed information, including repositories, followers, and more. Enjoy a seamless experience with light and dark mode options, responsive design for any device, and automatic theme detection based on your system preferences. Perfect for developers and GitHub enthusiasts alike",
    title: "Devfinder",
    alternateLocale: "bn_BD",
    siteName:
      "GitHub User Search App - Find and Explore GitHub Profiles Effortlessly | Devfinder by Imran Shaikh",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Imran_S_haikh",
    site: "@Imran_S_haikh",
    title: "Devfinder - GitHub User Search App",
    description:
      "Discover GitHub profiles with ease using our intuitive user search app. Simply enter a username to view detailed information, including repositories, followers, and more. Enjoy a seamless experience with light and dark mode options, responsive design for any device, and automatic theme detection based on your system preferences. Perfect for developers and GitHub enthusiasts alike",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground grid sm:place-items-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
