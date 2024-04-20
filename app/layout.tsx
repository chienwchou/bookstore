import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./provider";
import { Navigation } from "@/components/Navigation/Navigation";

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
          <header>
            <Navigation />
          </header>
          {children}
          <footer>
            Image by{" "}
            <a href="https://www.freepik.com/free-photo/study-group-learning-library_21138864.htm#query=bookstore&position=43&from_view=keyword&track=sph&uuid=64ccf7ae-35c5-471c-835b-6da67dff04cc">
              Freepik
            </a>
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
