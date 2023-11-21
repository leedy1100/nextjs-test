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
      <body className="">
        <RecoilRootWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div
              className={classNames({
                grid: true,
                "grid-cols-sidebar": true,
                "grid-cols-sidebar-collapsed": !true,
                "transition-[grid-template-columns] duration-300 ease-in-out":
                  true,
              })}
            >
              <Sidebar />
              <div className="">
                <Header />
                <main className="w-[calc(100vw-300px)]">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
