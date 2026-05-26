import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata, Viewport } from 'next';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NaraTribute from '@/components/shared/NaraTribute';

export const metadata: Metadata = {
  metadataBase: new URL('https://portalipb.site'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/img/favicon-portal.png', type: 'image/png', sizes: '32x32' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Portal 8 - Empower Digital',
    images: [
      {
        url: '/img/Portal_Logo.png',
        width: 1200,
        height: 630,
        alt: 'Portal 8 - Empower Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/img/Portal_Logo.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = '${locale}'`,
        }}
      />
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <NaraTribute />
        <Analytics />
      </NextIntlClientProvider>
    </>
  );
}
