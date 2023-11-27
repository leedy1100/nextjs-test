import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import RecoilRootContext from "@/context/RecoilRootContext";
import ThemeContext from "@/context/ThemeContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dooy",
  description: "du yeong",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "pwa", "next-pwa"],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export const viewport = {
  width: "device-width",
  minimumScale: 1,
  initialScale: 1,
  maximumScale: 1,
  shrinkToFit: "no",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="">
        <RecoilRootContext>
          <SWRConfigContext>
            <ThemeContext attribute="class" defaultTheme="system" enableSystem>
              <Header />
              <Sidebar />
              <div className="">
                <main className="m-4">{children}</main>
                <Footer />
              </div>
            </ThemeContext>
          </SWRConfigContext>
        </RecoilRootContext>
      </body>
    </html>
  );
}
