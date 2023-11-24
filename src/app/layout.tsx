import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import classNames from "classnames";
import RecoilRootWrapper from "@/provider/RecoilRootWrapper";
import ThemeProvider from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dooy",
  description: "dooy next app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="">
        <RecoilRootWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <Sidebar />
            <div className="">
              <main className="">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
