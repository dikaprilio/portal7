import { getTranslations } from 'next-intl/server';
import HomePage from '@/components/pages/HomePage';

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
    openGraph: {
      title: 'Portal 8 - Empower Digital',
      description:
        'A premier digital competition and seminar by BEM SV IPB University, focusing on innovation in UI/UX, film, and design.',
      url: 'https://portalipb.site/',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
    twitter: {
      title: 'Portal 8 - Empower Digital',
      description:
        'A premier digital competition and seminar by BEM SV IPB University, focusing on innovation in UI/UX, film, and design.',
    },
    alternates: {
      canonical: 'https://portalipb.site/',
      languages: {
        en: 'https://portalipb.site/en',
        id: 'https://portalipb.site/id',
        'x-default': 'https://portalipb.site/',
      },
    },
  };
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Portal 8: Empower Digital',
            startDate: '2025-06-10',
            endDate: '2025-10-11',
            eventAttendanceMode:
              'https://schema.org/OnlineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'VirtualLocation',
              url: 'https://portalipb.site/',
            },
            image: ['https://portalipb.site/img/Portal_Logo.png'],
            description:
              'The 8th iteration of Portal, a digital creativity event by BEM SV IPB University featuring competitions in UI/UX Design, Short Movie, and Digital Posters, alongside inspiring seminars.',
            organizer: {
              '@type': 'Organization',
              name: 'BEM Sekolah Vokasi IPB University',
              url: 'https://portalipb.site/',
            },
            offers: {
              '@type': 'Offer',
              url: 'https://portalipb.site/#pendaftaran',
              price: 'See Guidebook',
              priceCurrency: 'IDR',
              availability: 'https://schema.org/InStock',
              validFrom: '2025-06-10',
            },
            performer: {
              '@type': 'Person',
              name: 'Mysterious Guest Star',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Apakah kompetisinya berbayar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ya, terdapat biaya registrasi yang tertera dalam guidebook.',
                },
              },
              {
                '@type': 'Question',
                name: 'Apakah peserta bisa mendaftar lebih dari satu cabang lomba?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Bisa, asalkan sesuai ketentuan dan mengisi formulir untuk masing-masing cabang.',
                },
              },
              {
                '@type': 'Question',
                name: 'Apakah harus berasal dari IPB?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tidak. Portal 8 terbuka untuk peserta dari seluruh Indonesia dan internasional.',
                },
              },
            ],
          }),
        }}
      />
      <HomePage />
    </>
  );
}
