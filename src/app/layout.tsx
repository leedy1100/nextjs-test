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
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
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
      <body className="grid grid-rows-header">
        <RecoilRootWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <div
              className={classNames({
                grid: true,
                "lg:grid-cols-sidebar": true,
              })}
            >
              <Sidebar />
              <div className="h-screen overflow-auto">
                <main className="mb-[112px">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
