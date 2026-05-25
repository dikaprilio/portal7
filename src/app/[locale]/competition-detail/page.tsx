import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t('uiux_detail_page_title_meta'),
    description:
      'Official final technical guide for the Portal 8 UI/UX Competition (Team System). All submission requirements, pitch deck details, video demo rules, and research proof formats.',
  };
}

export default async function CompetitionDetailPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .guide-hero {
              padding: 4rem 2rem;
              text-align: center;
              background-color: #0c0a1f;
              background-image: radial-gradient(ellipse at 70% 30%, rgba(var(--pink-accent-rgb), 0.2) 0%, transparent 45%), radial-gradient(ellipse at 30% 70%, rgba(var(--blue-accent-rgb), 0.25) 0%, transparent 45%), linear-gradient(160deg, #0c0a1f 30%, #1a1238 100%);
              color: var(--secondary-color);
              position: relative;
              overflow: hidden;
            }
            .guide-hero .guide-title-main {
              font-size: clamp(2.5rem, 6vw, 3.2rem);
              font-weight: 800;
              margin-bottom: 1rem;
              line-height: 1.2;
              text-shadow: 0 0 10px rgba(var(--pink-accent-rgb), 0.3);
            }
            .guide-hero .guide-subtitle {
              font-size: clamp(1rem, 2.5vw, 1.1rem);
              color: #b0b8c4;
              max-width: 800px;
              margin: 0 auto;
              line-height: 1.7;
            }
            .guide-content-container {
              max-width: 850px;
              margin: 0 auto;
              padding: 3rem 1.5rem;
              background-color: var(--navbar-bg);
              color: var(--secondary-color);
            }
            .guide-body {
              line-height: 1.8;
              font-size: 1.05rem;
              color: #d1d5db;
            }
            .guide-body h2, .guide-body h3 {
              color: var(--secondary-color);
              margin-top: 2.8em;
              margin-bottom: 1.2em;
              padding-bottom: 0.4em;
              border-bottom: 2px solid;
              border-image: linear-gradient(to right, var(--pink-accent), var(--blue-accent)) 1;
              font-weight: 700;
            }
            .guide-body h2 { font-size: 1.8rem; }
            .guide-body h3 { font-size: 1.4rem; margin-top: 2em; }
            .guide-body p { margin-bottom: 1.2em; }
            .guide-body ul, .guide-body ol {
              padding-left: 25px;
              margin-bottom: 1.5em;
            }
            .guide-body li {
              margin-bottom: 1em;
              padding-left: 10px;
            }
            .guide-body ul li::marker {
              color: var(--pink-accent);
              font-size: 1.2em;
            }
            .guide-body ol li::marker {
              color: var(--blue-accent);
              font-weight: bold;
            }
            .guide-label {
              font-weight: 700;
              color: var(--yellow-accent);
              display: block;
              margin-bottom: 0.5rem;
            }
            .badge-required, .badge-recommended {
              background-color: var(--blue-accent);
              color: white;
              padding: 3px 12px;
              border-radius: 12px;
              font-size: 0.8em;
              font-weight: bold;
              margin-left: 8px;
              vertical-align: middle;
            }
            .badge-recommended {
              background-color: var(--green-accent);
            }
            .info-box {
              background-color: #2f3542;
              border-left: 4px solid var(--blue-accent);
              padding: 1.5rem;
              margin: 2rem 0;
              border-radius: 8px;
            }
            .info-box p, .info-box li { margin: 0; }
            .info-box ul { padding-left: 20px; margin-top: 1rem; }
          `,
        }}
      />
      <div className="guide-hero">
        <h1 className="guide-title-main">{t('uiux_detail_hero_title')}</h1>
        <p className="guide-subtitle">{t('uiux_detail_hero_subtitle')}</p>
        <a
          href="/src/booklets/UI_UX_BOOKLET_PORTAL_7.pdf"
          download="Portal7-UIUX-Competition-Booklet.pdf"
          className="hero-button button-secondary-cta"
          style={{ marginTop: '2rem' }}
        >
          <i className="fas fa-download"></i> Download Full Booklet
        </a>
      </div>

      <div className="guide-content-container">
        <article className="guide-body">
          <h2>{t('uiux_detail_submission_title')}</h2>
          <p>{t('uiux_detail_submission_intro')}</p>
          <ol>
            <li>{t('uiux_detail_submission_item1')}</li>
            <li>{t('uiux_detail_submission_item2')}</li>
            <li>{t('uiux_detail_submission_item3')}</li>
          </ol>

          <h2>{t('uiux_detail_pitchdeck_title')}</h2>
          <p>{t('uiux_detail_pitchdeck_intro')}</p>

          <h3>{t('uiux_detail_pd_cover_title')}</h3>
          <ul>
            <li>{t('uiux_detail_pd_cover_item1')}</li>
            <li>{t('uiux_detail_pd_cover_item2')}</li>
            <li>{t('uiux_detail_pd_cover_item3')}</li>
          </ul>

          <h3>{t('uiux_detail_pd_research_title')}</h3>
          <ul>
            <li>
              <span>{t('uiux_detail_pd_research_bg_label')}</span>{' '}
              {t('uiux_detail_pd_research_bg_desc')}
            </li>
            <li>
              <span>{t('uiux_detail_pd_research_method_label')}</span>
              <span className="badge-required">
                {t('uiux_badge_mandatory')}
              </span>
              <p>{t('uiux_detail_pd_research_method_desc')}</p>
              <ul>
                <li>{t('uiux_detail_pd_research_method1')}</li>
                <li>{t('uiux_detail_pd_research_method2')}</li>
                <li>{t('uiux_detail_pd_research_method3')}</li>
                <li>{t('uiux_detail_pd_research_method4')}</li>
                <li>{t('uiux_detail_pd_research_method5')}</li>
              </ul>
            </li>
            <li>
              <span>{t('uiux_detail_pd_research_results_label')}</span>
              <p>{t('uiux_detail_pd_research_results_desc')}</p>
              <ul>
                <li>{t('uiux_detail_pd_research_persona')}</li>
                <li>{t('uiux_detail_pd_research_painpoints')}</li>
              </ul>
            </li>
          </ul>

          <h3>{t('uiux_detail_pd_ideation_title')}</h3>
          <ul>
            <li>{t('uiux_detail_pd_ideation_item1')}</li>
            <li>{t('uiux_detail_pd_ideation_item2')}</li>
          </ul>

          <h3>{t('uiux_detail_pd_userflow_title')}</h3>
          <ul>
            <li>{t('uiux_detail_pd_userflow_item1')}</li>
          </ul>

          <h3>{t('uiux_detail_pd_hifi_title')}</h3>
          <ul>
            <li>{t('uiux_detail_pd_hifi_item1')}</li>
            <li>{t('uiux_detail_pd_hifi_item2')}</li>
          </ul>

          <h3>{t('uiux_detail_pd_vision_title')}</h3>
          <p>{t('uiux_detail_pd_vision_intro')}</p>
          <ul>
            <li>{t('uiux_detail_pd_vision_item1')}</li>
            <li>{t('uiux_detail_pd_vision_item2')}</li>
            <li>{t('uiux_detail_pd_vision_item3')}</li>
          </ul>

          <h3>{t('uiux_detail_pd_closing_title')}</h3>
          <ul>
            <li>{t('uiux_detail_pd_closing_item1')}</li>
            <li>{t('uiux_detail_pd_closing_item2')}</li>
          </ul>

          <h2>{t('uiux_detail_video_title')}</h2>
          <p>{t('uiux_detail_video_intro')}</p>

          <h3>{t('uiux_detail_video_format_title')}</h3>
          <ul>
            <li>{t('uiux_detail_video_format_item1')}</li>
            <li>{t('uiux_detail_video_format_item2')}</li>
          </ul>

          <h3>{t('uiux_detail_video_audio_title')}</h3>
          <ul>
            <li>{t('uiux_detail_video_audio_item1')}</li>
            <li>{t('uiux_detail_video_audio_item2')}</li>
          </ul>

          <h3>{t('uiux_detail_video_structure_title')}</h3>
          <ul>
            <li>
              <span>{t('uiux_detail_video_structure_intro_title')}</span>
              <ul>
                <li>{t('uiux_detail_video_structure_intro_item1')}</li>
                <li>{t('uiux_detail_video_structure_intro_item2')}</li>
                <li>{t('uiux_detail_video_structure_intro_item3')}</li>
              </ul>
            </li>
            <li>
              <span>{t('uiux_detail_video_structure_demo_title')}</span>
              <ul>
                <li>{t('uiux_detail_video_structure_demo_item1')}</li>
                <li>{t('uiux_detail_video_structure_demo_item2')}</li>
              </ul>
            </li>
            <li>
              <span>{t('uiux_detail_video_structure_outro_title')}</span>
              <ul>
                <li>{t('uiux_detail_video_structure_outro_item1')}</li>
                <li>{t('uiux_detail_video_structure_outro_item2')}</li>
              </ul>
            </li>
          </ul>

          <h2>
            {t('uiux_detail_appendix_title')}
            <span className="badge-recommended">
              {t('uiux_badge_recommended')}
            </span>
          </h2>
          <p>{t('uiux_detail_appendix_intro')}</p>

          <h3>{t('uiux_detail_appendix_interview_title')}</h3>
          <ul>
            <li>{t('uiux_detail_appendix_interview_item1')}</li>
            <li>{t('uiux_detail_appendix_interview_item2')}</li>
          </ul>

          <h3>{t('uiux_detail_appendix_survey_title')}</h3>
          <ul>
            <li>{t('uiux_detail_appendix_survey_item1')}</li>
            <li>{t('uiux_detail_appendix_survey_item2')}</li>
          </ul>

          <h3>{t('uiux_detail_appendix_secondary_title')}</h3>
          <ul>
            <li>{t('uiux_detail_appendix_secondary_item1')}</li>
          </ul>

          <h3>{t('uiux_detail_appendix_forum_title')}</h3>
          <ul>
            <li>{t('uiux_detail_appendix_forum_item1')}</li>
          </ul>
        </article>
      </div>
    </>
  );
}
