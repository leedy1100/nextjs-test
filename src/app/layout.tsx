import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import classNames from "classnames";
import RecoilRootWrapper from "@/provider/RecoilRootWrapper";
import ThemeProvider from "@/provider/ThemeProvider";
import SidebarProvider from "@/provider/SidebarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dooy",
  description: "dooy next app",
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
                <main className="mb-[112px] bg-slate-50">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
