import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NaraTribute from '@/components/shared/NaraTribute';

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
    <html lang={locale}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <NaraTribute />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
