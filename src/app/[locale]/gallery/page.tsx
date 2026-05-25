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
    title: t('index_page_title_meta'),
    description:
      'Portal 8 is the premier digital competition and seminar by BEM SV IPB University. Join us to innovate in UI/UX Design, Short Movie, and Digital Poster, and get inspired by industry leaders.',
  };
}

export default function Page() {
  return <GalleryPage />;
}
