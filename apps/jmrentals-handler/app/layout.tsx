import { ThemeProvider } from "@repo/ui";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JMRentals-Handler",
  description:
    "JMRentals-Handler is a powerful platform for branch managers to manage car rental operations seamlessly. It enables handlers to confirm bookings, manage vehicle availability, generate agreements, extend rental durations, and process offline bookings efficiently. Integrated with the main JMRentals system, this tool ensures smooth and professional branch-level management, enhancing customer satisfaction and operational efficiency",
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
