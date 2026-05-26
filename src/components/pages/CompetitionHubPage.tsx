'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { ChevronLeft, ChevronRight, Leaf, BookOpen, Zap, ArrowRight } from 'lucide-react';

export default function CompetitionHubPage() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(2);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const competitions = [
    {
      positionClass: 'right',
      image: '/img/poster.png',
      alt: 'A graphic designer working on a poster.',
      fallback:
        'https://placehold.co/600x750/1a1d24/EC4899?text=Poster&font=montserrat',
      titleKey: 'competition_poster_title',
      descKey: 'competition_poster_desc_full',
      criteria: [
        { nameKey: 'competition_poster_c1_name', value: '30%' },
        { nameKey: 'competition_poster_c2_name', value: '35%' },
        { nameKey: 'competition_poster_c3_name', value: '20%' },
        { nameKey: 'competition_poster_c4_name', value: '15%' },
      ],
      prizeValue: 'Rp4.000.000',
      cpLink: 'https://wa.me/qr/H2ZUWH3IYYSMG1',
      cpKey: 'cp_poster_name',
      registerLink:
        'https://ipb.link/portal8-digitalposter-competition-registration',
    },
    {
      positionClass: 'left',
      image: '/img/short-movie.png',
      alt: 'A filmmaker operating a camera.',
      fallback:
        'https://placehold.co/600x750/1a1d24/F97316?text=Movie&font=montserrat',
      titleKey: 'competition_short_movie_title',
      descKey: 'competition_short_movie_desc_full',
      criteria: [
        { nameKey: 'competition_short_movie_c1_name', value: '20%' },
        { nameKey: 'competition_short_movie_c2_name', value: '15%' },
        { nameKey: 'competition_short_movie_c3_name', value: '20%' },
        { nameKey: 'competition_short_movie_c4_name', value: '25%' },
        { nameKey: 'competition_short_movie_c5_name', value: '10%' },
        { nameKey: 'competition_short_movie_c6_name', value: '10%' },
      ],
      prizeValue: 'Rp7.000.000',
      cpLink: 'https://wa.me/6287839244094',
      cpKey: 'cp_movie_name',
      registerLink:
        'https://ipb.link/portal8-shortmovie-competition-registration',
    },
    {
      positionClass: 'left',
      image: '/img/competition-hub.jpeg',
      alt: 'A UI/UX designer working on wireframes.',
      fallback:
        'https://placehold.co/600x750/1a1d24/3B82F6?text=Video+Animated+Campaign&font=montserrat',
      titleKey: 'competition_video_animated_title',
      descKey: 'competition_video_animated_desc_full',
      criteria: [
        { nameKey: 'competition_video_animated_c1_name', value: '20%' },
        { nameKey: 'competition_video_animated_c2_name', value: '20%' },
        { nameKey: 'competition_video_animated_c3_name', value: '25%' },
        { nameKey: 'competition_video_animated_c4_name', value: '15%' },
        { nameKey: 'competition_video_animated_c5_name', value: '10%' },
        { nameKey: 'competition_video_animated_c6_name', value: '10%' },
      ],
      prizeValue: 'Rp7.000.000',
      cpLink: 'https://wa.me/6289611418732',
      cpKey: 'cp_video_animated_name',
      registerLink:
        'https://ipb.link/portal8-animatedvideo-competition-registration',
    },
  ];

  const toggleExpanded = (idx: number) => {
    setExpandedCards((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % competitions.length);
  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + competitions.length) % competitions.length
    );

  return (
    <div id="competition-hub-main">
      <section className="competition-hub-hero section-padding" id="hero">
        <div className="floating-cloud cloud-1">
          <img src="/img/cloud_pink.png" alt="Pink cloud" />
        </div>
        <div className="floating-cloud cloud-2">
          <img src="/img/cloud_blue.png" alt="Blue cloud" />
        </div>
        <div className="floating-cloud cloud-3">
          <img src="/img/cloud_yellow.png" alt="Yellow cloud" />
        </div>
        <div className="floating-cloud cloud-4">
          <img src="/img/cloud_orange.png" alt="Orange cloud" />
        </div>
        <div className="floating-cloud cloud-5">
          <img src="/img/cloud_blue.png" alt="Blue cloud" />
        </div>
        <div className="portal-background-effect"></div>
        <div className="hero-content-comp-hub">
          <h1 className="competition-hub-title">
            {t('competition_hub_hero_title_main')}
          </h1>
          <p className="competition-hub-subtitle">
            {t('competition_hub_hero_subtitle')}
          </p>
        </div>
      </section>

      <div className="competition-listing-container">
        <div className="competition-background-geometry">
          <img
            src="/img/Asset 16@4x.png"
            alt="Geometric Accent"
            className="comp-deco-1"
          />
          <img
            src="/img/abstract_star-yellow.png"
            alt="Geometric Accent"
            className="comp-deco-2"
          />
          <img
            src="/img/Asset_18@4x.png"
            alt="Geometric Accent"
            className="comp-deco-3"
          />
        </div>

        <div className="carousel-timer-section">
          <h3 className="timer-title">{t('timer_title')}</h3>
          <CountdownTimer targetDate={new Date('2026-08-17T23:59:59')} />
        </div>

        <div className="competition-carousel-wrapper">
          <button
            className="carousel-nav prev"
            aria-label="Previous Competition"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-slides-container">
            {competitions.map((comp, idx) => (
              <section
                key={idx}
                className={`comp-card ${comp.positionClass} ${
                  idx === activeIndex ? 'active' : ''
                }`}
                style={{ display: idx === activeIndex ? '' : 'none' }}
              >
                <div className="comp-card-image">
                  <img
                    src={comp.image}
                    alt={comp.alt}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = comp.fallback;
                    }}
                  />
                </div>
                <div className="comp-card-content">
                  <h2 className="comp-card-title">{t(comp.titleKey)}</h2>
                  <h4 className="theme-title">{t('theme_title')}</h4>
                  <div className="description-wrapper">
                    <div
                      className={`expandable-content ${
                        expandedCards.includes(idx) ? 'expanded' : ''
                      }`}
                    >
                      <p className="comp-card-description">
                        {t(comp.descKey)}
                      </p>
                      <div className="comp-card-details">
                        <div className="detail-group">
                          <h4>{t('sub_themes_title')}</h4>
                          <ul className="sub-theme-list">
                            <li>
                              <Leaf size={16} className="inline mr-1" />
                              <span>{t('sub_themes_1')}</span>
                            </li>
                            <li>
                              <BookOpen size={16} className="inline mr-1" />
                              <span>{t('sub_themes_2')}</span>
                            </li>
                            <li>
                              <Zap size={16} className="inline mr-1" />
                              <span>{t('sub_themes_3')}</span>
                            </li>
                            <li>
                              <Zap size={16} className="inline mr-1" />
                              <span>{t('sub_themes_4')}</span>
                            </li>
                            <li>
                              <Zap size={16} className="inline mr-1" />
                              <span>{t('sub_themes_5')}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="detail-group">
                          <h4>{t('assessment_criteria_title')}</h4>
                          <ul className="criteria-list-kapow">
                            {comp.criteria.map((c, cIdx) => (
                              <li key={cIdx}>
                                <span>{t(c.nameKey)}</span>{' '}
                                <span className="value">{c.value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button
                      className="read-more-btn"
                      onClick={() => toggleExpanded(idx)}
                    >
                      {expandedCards.includes(idx)
                        ? t('read_less_text')
                        : t('read_more_text')}
                    </button>
                  </div>
                  <div className="total-prize-container">
                    <span className="prize-label">
                      {t('prize_pool_title')}
                    </span>
                    <div className="prize-amount-wrapper">
                      <span className="prize-value">{comp.prizeValue}</span>
                    </div>
                  </div>
                  <div className="comp-card-actions">
                    <a
                      href={comp.cpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portal-button contact-button-whatsapp"
                    >
                      <span>{t(comp.cpKey)}</span>
                    </a>
                    <a
                      href={comp.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portal-button register-button-kapow"
                    >
                      <span>Register</span>{' '}
                      <ArrowRight size={16} className="inline" />
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <button
            className="carousel-nav next"
            aria-label="Next Competition"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>

          <div className="carousel-dots">
            {competitions.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${
                  idx === activeIndex ? 'active' : ''
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
