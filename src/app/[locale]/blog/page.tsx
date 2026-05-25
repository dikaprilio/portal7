import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import mediaContent from '@/lib/data/media-content';

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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <section className="blog-page-hero section-padding" id="blog-top">
        <div className="portal-background-effect" />
        <div className="floating-cloud cloud-1">
          <img src="img/cloud_orange.png" alt="Orange cloud" />
        </div>
        <div className="floating-cloud cloud-3">
          <img src="img/cloud_blue.png" alt="Blue cloud" />
        </div>

        <div className="container">
          <h1 className="blog-page-title">
            <span>{t('blog_page_hero_title_portal')}</span>{' '}
            <span className="title-accent-highlight">
              {t('blog_page_hero_title_7')}
            </span>{' '}
            <span>{t('blog_page_hero_title_chronicles')}</span>
          </h1>
          <p className="blog-page-subtitle">
            {t('blog_page_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="blog-listing-section section-padding" id="blog-posts">
        <div className="container">
          <h2 className="section-title">{t('blog_all_articles_title')}</h2>
          <div className="articles-grid" id="full-articles-grid">
            {mediaContent.blogArticles.map((article) => (
              <div className="article-card" key={article.id}>
                <Link
                  href={`/blog/${article.id}`}
                  className="article-card-link"
                >
                  <div className="article-image-wrapper">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="article-image"
                    />
                    <div
                      className="article-image-fallback"
                      style={{ display: 'none' }}
                    >
                      <i className="fas fa-image fa-3x" />
                    </div>
                  </div>
                  <div className="article-content">
                    <h4 className="article-title">{article.title}</h4>
                    <p className="article-meta">
                      {article.date} |{' '}
                      <span>{t('article_author_prefix')}</span>{' '}
                      {article.author}
                    </p>
                    <p className="article-summary">{article.summary}</p>
                    <span
                      className="article-link-text"
                      dangerouslySetInnerHTML={{
                        __html: t('article_read_more'),
                      }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
