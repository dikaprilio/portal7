import { getTranslations } from 'next-intl/server';
import GalleryPage from '@/components/pages/GalleryPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: `${t('gallery_page_hero_title')} | Portal 8`,
    description:
      'Explore unforgettable moments and inspiring works from the series of events at Portal 8.',
    openGraph: {
      title: `${t('gallery_page_hero_title')} | Portal 8`,
      description: 'Unforgettable moments and inspiring works from Portal 8.',
      url: 'https://portalipb.site/gallery',
    },
  };
}

export default function Page() {
  return <GalleryPage />;
}
