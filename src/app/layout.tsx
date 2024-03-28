import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/provider/ThemeProvider';
import SWRProvider from '@/provider/SWRProvider';
import BottomNav from '@/components/BottomNav';
import LanguageProvider from '@/provider/LanguageProvider';
import MapsProvider from '@/provider/MapsProvider';
import AuthProvider from '@/provider/AuthProvider';

export const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: 'dooy',
  description: 'du yeong',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'nextjs14', 'pwa', 'next-pwa'],
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  minimumScale: 1,
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

const clientId = process.env.NAVER_MAPS_CLIENT_ID!;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.className}>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SWRProvider>
            <LanguageProvider>
              <MapsProvider clientId={clientId}>
                <body className="">
                  <Header />
                  <Sidebar />
                  <div className="mt-[72px] md:mt-[96px]">
                    <main className="mb-16">{children}</main>
                    <Footer />
                  </div>
                  <BottomNav />
                </body>
              </MapsProvider>
            </LanguageProvider>
          </SWRProvider>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
