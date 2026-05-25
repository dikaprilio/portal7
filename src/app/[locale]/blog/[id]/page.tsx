import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import mediaContent from '@/lib/data/media-content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale });
  const article = mediaContent.blogArticles.find((a) => a.id === id);

  return {
    title: article
      ? `${article.title} - Portal 8`
      : t('index_page_title_meta'),
    description:
      article?.summary ||
      'Portal 8 is the premier digital competition and seminar by BEM SV IPB University. Join us to innovate in UI/UX Design, Short Movie, and Digital Poster, and get inspired by industry leaders.',
  };
}

export async function generateStaticParams() {
  return mediaContent.blogArticles.map((article) => ({ id: article.id }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const article = mediaContent.blogArticles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="blog-detail-hero">
        <h1 className="article-title-main">{article.title}</h1>
        <p className="article-meta-main">
          <i className="fas fa-calendar-alt" /> {article.date} |{' '}
          <i className="fas fa-user" /> {article.author}
        </p>
      </section>
      {article.image && (
        <div className="article-featured-image-wrapper">
          <img
            src={article.image}
            alt={article.title}
            className="article-featured-image"
          />
        </div>
      )}
      <div className="article-content-container">
        <article
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.fullContentHTML }}
        />
      </div>
    </>
  );
}
