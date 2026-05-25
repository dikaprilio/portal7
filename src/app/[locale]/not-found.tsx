'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations();

  return (
    <section className="error-page-section">
      <div className="portal-background-effect"></div>
      <div className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-title">{t('not_found_title')}</h1>
        <p className="error-subtitle">{t('not_found_subtitle')}</p>
        <Link href="/" className="hero-button button-main-cta">
          <span dangerouslySetInnerHTML={{ __html: t('not_found_back_to_home') }} />
        </Link>
      </div>
    </section>
  );
}
