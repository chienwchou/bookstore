import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Modal from "./components/layouts/CustomModal";
import StoreProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bookstore",
  description: "bookstore by Chien Wei Chou (Bill)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
        {children} <Modal/>
        </StoreProvider>
        </body>
    </html>
  );
}
