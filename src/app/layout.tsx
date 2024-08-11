import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "GitHub User Search App - Find and Explore GitHub Profiles Effortlessly | Devfinder by Imran Shaikh",
  description:
    "Discover GitHub profiles with ease using our intuitive user search app. Simply enter a username to view detailed information, including repositories, followers, and more. Enjoy a seamless experience with light and dark mode options, responsive design for any device, and automatic theme detection based on your system preferences. Perfect for developers and GitHub enthusiasts alike",
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
