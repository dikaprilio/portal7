import { getTranslations } from 'next-intl/server';
import CompetitionHubPage from '@/components/pages/CompetitionHubPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t('competition_hub_page_title_meta'),
    description:
      'Explore Portal 8 competition branches: Digital Poster, Short Movie, and Animated Video Campaign. Find your passion and register now!',
  };
}

export default function Page() {
  return <CompetitionHubPage />;
}
