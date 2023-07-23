import Navbar from "./componets/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className=" my-5">
        <Navbar />
        <div className="pt-6">{children}</div>
      </body>
    </html>
  );
}
