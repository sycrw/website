import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "./componets/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tim Kausemann",
  description: "Portfolio of Tim Kausemann",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0">{children}</body>
    </html>
  );
}
