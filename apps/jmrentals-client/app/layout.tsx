import { ThemeProvider } from "@repo/ui";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JMRentals",
  description:
    "JMRentals offers a diverse range of self-driving cars for rent, providing customers with flexible and convenient rental options. With branches in multiple locations, JMRentals delivers a hassle-free car rental experience, whether you’re renting for a day, a week, or longer. Explore a wide variety of vehicles, from compact cars to SUVs, and enjoy the freedom of self-drive with reliable and well-maintained vehicles. Discover affordable rates, easy car selection, and the freedom to travel at your own pace with JMRentals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
