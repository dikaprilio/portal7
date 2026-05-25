'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Trophy,
  Paintbrush,
  Film,
  LayoutGrid,
  Mic,
  GraduationCap,
  Megaphone,
  Award,
  MessageCircle,
  Pencil,
  Users,
  Upload,
  Gavel,
  Handshake,
  Camera,
  ExternalLink,
  MailOpen,
  Share2,
  Send,
  Image as ImageIcon,
  Newspaper,
  Plus,
  Minus,
} from 'lucide-react';
import CountdownTimer from '@/components/shared/CountdownTimer';
import NaraTribute from '@/components/shared/NaraTribute';
import mediaContent from '@/lib/data/media-content';

function WhatsAppIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );
}

function TikTokIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.67c0 3.24-1.89 6.21-4.82 7.57-2.96 1.38-6.51.69-8.78-1.73-2.27-2.42-2.49-6.21-.53-8.86 1.97-2.68 5.66-3.56 8.64-2.11.07.03.14.07.2.11v4.29c-.55-.32-1.17-.55-1.82-.68-1.45-.29-3.03.11-4.14 1.09-1.12 1-1.57 2.56-1.18 4.01.39 1.45 1.54 2.58 3 2.95 1.45.37 3.01-.08 4.11-1.16.71-.71 1.1-1.66 1.1-2.65v-13.8c-.01-.01-.02-.01-.04-.02z" />
    </svg>
  );
}

export default function HomePage() {
  const t = useTranslations();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'photos' | 'videos'>('photos');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    { q: 'faq_q1', a: 'faq_a1' },
    { q: 'faq_q2', a: 'faq_a2' },
    { q: 'faq_q3', a: 'faq_a3' },
    { q: 'faq_q4', a: 'faq_a4' },
    { q: 'faq_q5', a: 'faq_a5' },
  ];

  const timelineItems = [
    { icon: <Pencil size={14} />, date: 'timeline_1_date', event: 'timeline_1_event' },
    { icon: <Users size={14} />, date: 'timeline_2_date', event: 'timeline_2_event' },
    { icon: <Upload size={14} />, date: 'timeline_3_date', event: 'timeline_3_event' },
    { icon: <Gavel size={14} />, date: 'timeline_4_date', event: 'timeline_4_event' },
    { icon: <Megaphone size={14} />, date: 'timeline_5_date', event: 'timeline_5_event' },
    { icon: <GraduationCap size={14} />, date: 'timeline_6_date', event: 'timeline_6_event' },
    { icon: <Award size={14} />, date: 'timeline_7_date', event: 'timeline_7_event' },
  ];

  const blogArticles = mediaContent.blogArticles.slice(0, 3);
  const galleryPhotos = mediaContent.gallery.photos.slice(0, 6);
  const partners = mediaContent.partnersSponsors;

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section section-padding" id="hero">
        <div className="hero-carousel-container" />
        <div className="hero-overlay" />
        <div className="portal-background-effect" />
        <div className="geometric-edge-decorations">
          <img
            src="/img/geometry-4.png"
            alt="Geometric Top Left Corner Accent"
            className="geo-shape geo-top-left-edge-accent"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
          <img
            src="/img/geometry-1.png"
            alt="Geometric Left Accent"
            className="geo-shape geo-bottom-left-edge-accent"
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
          <img
            src="/img/geometry-4.png"
            alt="Geometric Right Accent"
            className="geo-shape geo-top-right-edge-accent"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
          <img
            src="/img/geometry-6.png"
            alt="Geometric Corner Accent"
            className="geo-shape geo-bottom-right-edge-accent"
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>
        <div className="hero-content" data-aos="zoom-out-up" data-aos-delay="500">
          <div className="hero-left">
            <img
              src="/img/Portal_Logo.png"
              alt="Logo Besar Portal 8"
              className="portal-logo hero-logo-entry"
            />
          </div>
          <div className="hero-right">
            <h1 className="hero-title">
              <span className="hero-title-empower">Empower</span>
              <span className="hero-title-digital">
                <span className="char-d">D</span>
                <span className="char-i1">i</span>
                <span className="char-g">g</span>
                <span className="char-i2">i</span>
                <span className="char-t">t</span>
                <span className="char-a">a</span>
                <span className="char-l">l</span>
              </span>
              <span className="hero-title-seven">8</span>
            </h1>
            <p className="tagline">{t('hero_tagline')}</p>
            <CountdownTimer targetDate={new Date('2026-09-19T00:00:00')} />
            <div className="hero-buttons">
              <a href="#pendaftaran" className="hero-button button-main-cta">
                {t('hero_button_daftar')}
              </a>
              <a href="#tentang" className="hero-button button-main-cta-b">
                {t('hero_button_what_is')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding" id="tentang">
        <img
          src="/img/Asset_18@4x.png"
          alt="Geometric Deco Top"
          className="about-deco about-deco-top"
          data-aos="fade-down-right"
          data-aos-delay="400"
        />
        <img
          src="/img/abstract_star-yellow.png"
          alt="Geometric Star"
          className="about-deco about-deco-star"
          data-aos="zoom-in"
          data-aos-delay="500"
        />
        <h2 className="section-title" data-aos="zoom-in-out">
          {t('about_title')}
        </h2>
        <div className="about-content" data-aos="fade-up">
          <div className="about-text">
            <h3>{t('about_what_is_portal_title')}</h3>
            <p>{t('about_what_is_portal_desc')}</p>
          </div>
          <div className="about-illustration">
            <img src="/img/Slide5.JPG" alt="Ilustrasi Portal 8" />
          </div>
        </div>
        <div className="inspire-framework-container" data-aos="fade-up" data-aos-delay="300">
          <h3 className="framework-title">{t('inspire_framework_title')}</h3>
          <div className="framework-grid">
            {[
              { letter: 'E', title: 'inspire_e1', desc: 'inspire_e1_desc' },
              { letter: 'K', title: 'inspire_k', desc: 'inspire_k_desc' },
              { letter: 'S', title: 'inspire_s', desc: 'inspire_s_desc' },
              { letter: 'P', title: 'inspire_p', desc: 'inspire_p_desc' },
              { letter: 'L', title: 'inspire_l', desc: 'inspire_l_desc' },
              { letter: 'O', title: 'inspire_o', desc: 'inspire_o_desc' },
              { letter: 'R', title: 'inspire_r', desc: 'inspire_r_desc' },
              { letter: 'E', title: 'inspire_e2', desc: 'inspire_e2_desc' },
            ].map((item, idx) => (
              <div className="framework-item" key={idx}>
                <div className="framework-letter-wrapper">
                  <span className="framework-letter">{item.letter}</span>
                </div>
                <div className="framework-meaning">
                  <h4>{t(item.title)}</h4>
                  <p>{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/img/Asset 16@4x.png"
          alt="Geometric Deco Bottom"
          className="about-deco about-deco-bottom"
          data-aos="fade-up-left"
          data-aos-delay="400"
        />
      </section>

      {/* SDG Section */}
      <section className="sdg-section section-padding" id="sdg-commitment">
        <img
          src="/img/Asset 16@4x.png"
          alt="Geometric Accent"
          className="sdg-geometric-deco deco-top-left"
          data-aos="fade-down-right"
          data-aos-delay="300"
        />
        <img
          src="/img/Asset_18@4x.png"
          alt="Geometric Accent"
          className="sdg-geometric-deco deco-bottom-right"
          data-aos="fade-up-left"
          data-aos-delay="300"
        />
        <h2 className="section-title" data-aos="zoom-in-up">
          <span>{t('sdg_commitment_title_span')}</span>{' '}
          <span>{t('sdg_commitment_title_main')}</span>
        </h2>
        <p className="section-subtitle" data-aos="zoom-in-up" data-aos-delay="100">
          {t('sdg_commitment_subtitle')}
        </p>
        <div className="sdg-container">
          <div className="sdg-item" data-aos="fade-up" data-aos-delay="200">
            <div className="sdg-item-header">
              <img src="/img/sdg_quality-edu.png" alt="SDG 4: Pendidikan Berkualitas" className="sdg-icon" />
              <div className="sdg-title-number">
                <span className="sdg-number">SDG 4</span>
                <h3>{t('sdg_4_title_1')}</h3>
                <h3>{t('sdg_4_title_2')}</h3>
              </div>
            </div>
            <div className="sdg-item-body">
              <p>{t('sdg_4_desc')}</p>
            </div>
            <div className="sdg-item-deco-line" />
          </div>
          <div className="sdg-item" data-aos="fade-up" data-aos-delay="350">
            <div className="sdg-item-header">
              <img src="/img/sdg_decent-work.png" alt="SDG 8: Pekerjaan Layak dan Pertumbuhan Ekonomi" className="sdg-icon" />
              <div className="sdg-title-number">
                <span className="sdg-number">SDG 8</span>
                <h3>{t('sdg_8_title')}</h3>
              </div>
            </div>
            <div className="sdg-item-body">
              <p>{t('sdg_8_desc')}</p>
            </div>
            <div className="sdg-item-deco-line" />
          </div>
          <div className="sdg-item" data-aos="fade-up" data-aos-delay="500">
            <div className="sdg-item-header">
              <img src="/img/sdg_industry-innovation.png" alt="SDG 9: Infrastruktur, Industri, dan Inovasi" className="sdg-icon" />
              <div className="sdg-title-number">
                <span className="sdg-number">SDG 9</span>
                <h3>{t('sdg_9_title')}</h3>
              </div>
            </div>
            <div className="sdg-item-body">
              <p>{t('sdg_9_desc')}</p>
            </div>
            <div className="sdg-item-deco-line" />
          </div>
        </div>
        <img
          src="/img/abstract_star-yellow.png"
          alt="Abstract Star"
          className="sdg-star-deco wow-guest-deco"
          data-aos="zoom-in-out"
          data-aos-delay="600"
        />
      </section>

      {/* Guest Stars (Next) */}
      <section className="wow-guest-stars-section section-padding" id="guest-stars">
        <h2 className="section-title">
          <span>{t('next_guest_star_title_part1')}</span>{' '}
          <span className="wow-accent">{t('next_guest_star_title_star')}</span>
        </h2>
        <p className="section-subtitle">{t('next_guest_star_subtitle')}</p>
        <div className="wow-guest-stars-grid single-guest">
          <div className="wow-guest-star-card" data-aos="fade-up" data-aos-delay="100">
            <div className="wow-guest-star-image-wrapper">
              <img src="/img/mysterious-guest.jpg" alt="Mysterious Guest Star 2026" />
              <div className="wow-guest-star-image-overlay">
                <span className="overlay-year">2026</span>
              </div>
            </div>
            <div className="wow-guest-star-info">
              <h4>{t('mysterious_guest_name')}</h4>
              <p className="wow-guest-title">{t('mysterious_guest_title')}</p>
              <p className="wow-guest-teaser">{t('mysterious_guest_teaser')}</p>
            </div>
            <div className="wow-guest-card-flare" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlight-section section-padding" id="highlight">
        <h2 className="section-title" data-aos="fade-down">
          <span>{t('highlight_title_span')}</span>{' '}
          <span>{t('highlight_title_main')}</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">
          {t('highlight_subtitle')}
        </p>
        <div className="highlight-grid">
          <div className="competition-highlight portal-card" data-aos="zoom-in-right">
            <div className="card-header">
              <Trophy className="card-icon" size={24} />
              <h3 className="highlight-title">
                <span>{t('highlight_arena_title_main')}</span>{' '}
                <span className="title-accent">{t('highlight_arena_title_accent')}</span>
              </h3>
            </div>
            <p className="card-intro">{t('highlight_arena_intro')}</p>
            <div className="competition-item">
              <h4>
                <Paintbrush className="item-icon" size={16} />{' '}
                <span>{t('highlight_digital_poster_title')}</span>
              </h4>
              <p>{t('highlight_digital_poster_desc')}</p>
            </div>
            <div className="competition-item">
              <h4>
                <Film className="item-icon" size={16} />{' '}
                <span>{t('highlight_short_movie_title')}</span>
              </h4>
              <p>{t('highlight_short_movie_desc')}</p>
            </div>
            <div className="competition-item">
              <h4>
                <LayoutGrid className="item-icon" size={16} />{' '}
                <span>{t('highlight_animate_video_title')}</span>
              </h4>
              <p>{t('highlight_animate_video_desc')}</p>
            </div>
            <div className="total-prize-container">
              <span className="prize-label">{t('highlight_prize_label')}</span>
              <div className="prize-amount-wrapper">
                <span className="prize-value" data-value="18000000">
                  Rp18.000.000
                </span>
              </div>
              <span className="prize-details">{t('highlight_prize_details')}</span>
            </div>
            <Link href="/competition-hub" className="button-view-more portal-button">
              {t('highlight_button_explore')}
            </Link>
          </div>
          <div className="seminar-highlight portal-card" data-aos="zoom-in-left">
            <div className="card-header">
              <Mic className="card-icon" size={24} />
              <h3 className="highlight-title">
                <span>{t('highlight_knowledge_title_main')}</span>{' '}
                <span className="title-accent">{t('highlight_knowledge_title_accent')}</span>
              </h3>
            </div>
            <p className="card-intro">{t('highlight_knowledge_intro')}</p>
            <ul className="seminar-list">
              <li>
                <GraduationCap className="list-icon" size={16} />{' '}
                <span>{t('highlight_mentorship_span')}</span>{' '}
                <span>{t('highlight_mentorship_text')}</span>
              </li>
              <li>
                <Megaphone className="list-icon" size={16} />{' '}
                <span>{t('highlight_pitch_day_span')}</span>{' '}
                <span>{t('highlight_pitch_day_text')}</span>
              </li>
              <li>
                <Award className="list-icon" size={16} />{' '}
                <span>{t('highlight_awarding_span')}</span>{' '}
                <span>{t('highlight_awarding_text')}</span>
              </li>
              <li>
                <MessageCircle className="list-icon" size={16} />{' '}
                <span>{t('highlight_future_forum_span')}</span>{' '}
                <span>{t('highlight_future_forum_text')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section-padding" id="linimasa">
        <h2 className="section-title" data-aos="fade-up">
          {t('timeline_title')}
        </h2>
        <div className="timeline-container" data-aos="fade-up" data-aos-delay="200">
          {timelineItems.map((item, idx) => (
            <div className="timeline-entry" key={idx}>
              <div className="timeline-icon-dot">{item.icon}</div>
              <div className="timeline-label">
                <p className="timeline-date">{t(item.date)}</p>
                <p className="timeline-event">{t(item.event)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Section */}
      <section className="registration-section section-padding" id="pendaftaran" data-aos="fade-up">
        <div className="registration-deco-1" />
        <div className="registration-deco-2" />
        <div className="registration-deco-3" />
        <h2 className="section-title">
          <span>{t('registration_title_span')}</span>{' '}
          <span>{t('registration_title_main')}</span>
        </h2>
        <p className="section-subtitle">{t('registration_subtitle')}</p>
        <div className="container">
          <div className="registration-grid">
            <div className="registration-column registration-flow" data-aos="fade-left" data-aos-delay="200">
              <h3 className="reg-card-title">{t('registration_flow_title')}</h3>
              <ul className="batch-list">
                <li>
                  <div className="batch-item-content">
                    <span className="batch-number">01</span>
                    <div className="batch-info">
                      <h4>{t('registration_batch1_title')}</h4>
                      <p className="batch-dates">{t('registration_batch1_date')}</p>
                      <span className="batch-status status-open">{t('registration_batch_status_open')}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <p className="reg-process-info">{t('registration_process_info')}</p>
              <br />
              <a
                href="https://drive.google.com/drive/folders/1x8a7XD_737sUTe584xTGGuYfF06XKjWx?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="guidebook-button portal-button"
              >
                {t('registration_guidebook_button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Guest Stars */}
      <section className="guest-stars-section section-padding" id="past-guest-stars">
        <h2 className="section-title">{t('past_guest_stars_title')}</h2>
        <p className="section-subtitle">{t('past_guest_stars_subtitle')}</p>
        <div className="guest-stars-grid">
          <div className="guest-star-card" data-aos="fade-up">
            <img src="/img/kevin.jpg" alt="Foto Kevin Anggara" />
            <div className="guest-star-info">
              <h4>{t('kevin_anggara_name')}</h4>
              <p>{t('kevin_anggara_role')}</p>
            </div>
          </div>
          <div className="guest-star-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/img/aulion.jpg" alt="Foto Aulion" />
            <div className="guest-star-info">
              <h4>{t('aulion_name')}</h4>
              <p>{t('aulion_role')}</p>
            </div>
          </div>
          <div className="guest-star-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/jovial.jpeg" alt="Foto Jovial da Lopez" />
            <div className="guest-star-info">
              <h4>{t('jovial_da_lopez_name')}</h4>
              <p>{t('jovial_da_lopez_role')}</p>
            </div>
          </div>
          <div className="guest-star-card" data-aos="fade-up" data-aos-delay="0">
            <img src="/img/Andovi.jpg" height={400} alt="Foto Andovi da Lopez" />
            <div className="guest-star-info">
              <h4>{t('andovi_da_lopez_name')}</h4>
              <p>{t('andovi_da_lopez_role')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="who-can-join-section section-padding" id="peserta">
        <h2 className="section-title">{t('who_can_join_title')}</h2>
        <div className="who-can-join-content">
          <p className="section-subtitle">{t('who_can_join_subtitle')}</p>
          <ul className="who-can-join-list">
            <li>
              {t('who_can_join_list_item1')}
            </li>
          </ul>
          <p className="team-info">{t('who_can_join_team_info')}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding" id="faq">
        <h2 className="section-title">{t('faq_title')}</h2>
        <div className="faq-container">
          {faqItems.map((item, idx) => (
            <div
              className={`faq-item ${openFaq === idx ? 'active' : ''}`}
              key={idx}
            >
              <div className="faq-question" onClick={() => toggleFaq(idx)}>
                <h4>{t(item.q)}</h4>
                <span className="faq-icon">
                  {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              <div
                className="faq-answer"
                style={{
                  display: openFaq === idx ? 'block' : 'none',
                }}
              >
                <p>{t(item.a)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="cta-bottom-section section-padding" id="cta-bottom">
        <div className="cta-bottom-content">
          <h2>{t('cta_bottom_title')}</h2>
          <p>{t('cta_bottom_subtitle')}</p>
          <div className="cta-buttons">
            <a href="#pendaftaran" className="hero-button button-main-cta">
              {t('cta_bottom_button_register')}
            </a>
            <a
              href="https://drive.google.com/drive/folders/1x8a7XD_737sUTe584xTGGuYfF06XKjWx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button button-secondary-cta"
            >
              {t('cta_bottom_button_guidebook')}
            </a>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="media-section section-padding" id="media" data-aos="fade-up">
        <h2 className="section-title">{t('media_section_title')}</h2>
        <p className="section-subtitle">{t('media_section_subtitle')}</p>
        <div className="media-subsection" id="blog-articles-container" data-aos="fade-up" data-aos-delay="100">
          <h3>
            <Newspaper size={18} /> <span>{t('media_articles_title')}</span>
          </h3>
          <div className="articles-grid">
            {blogArticles.map((article) => (
              <div className="article-card" key={article.id}>
                <img src={article.image} alt={article.title} />
                <div className="article-content">
                  <h4>{article.title}</h4>
                  <p className="article-date">{article.date}</p>
                  <p className="article-summary">{article.summary}</p>
                  <Link href={article.link} className="article-read-more">
                    {t('article_read_more')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <Link href="/blog" className="button-view-more-media">
              {t('media_articles_view_all')}
            </Link>
          </div>
        </div>
        <div className="media-subsection" id="gallery-container" data-aos="fade-up" data-aos-delay="200">
          <h3>
            <ImageIcon size={18} /> <span>{t('media_gallery_title')}</span>
          </h3>
          <div className="gallery-tabs">
            <button
              className={`gallery-tab-button ${activeGalleryTab === 'photos' ? 'active' : ''}`}
              onClick={() => setActiveGalleryTab('photos')}
            >
              {t('media_gallery_tab_photos')}
            </button>
            <button
              className={`gallery-tab-button ${activeGalleryTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveGalleryTab('videos')}
            >
              {t('media_gallery_tab_videos')}
            </button>
          </div>
          <div className="gallery-grid-wrapper">
            <div className={`gallery-grid photos ${activeGalleryTab === 'photos' ? 'active-gallery-content' : ''}`}>
              {galleryPhotos.map((photo) => (
                <div className="gallery-item" key={photo.id}>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <div className="gallery-overlay">
                    <span>{photo.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={`gallery-grid videos ${activeGalleryTab === 'videos' ? 'active-gallery-content' : ''}`}>
              {mediaContent.gallery.videos.length > 0 ? (
                mediaContent.gallery.videos.map((video) => (
                  <div className="gallery-item" key={video.id}>
                    <img src={video.thumbnailUrl} alt={video.title} />
                    <div className="gallery-overlay">
                      <span>{video.title}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="loading-message">{t('media_gallery_videos_loading')}</p>
              )}
            </div>
          </div>
          <div className="view-all-container">
            <Link href="/gallery" className="button-view-more-media">
              {t('media_gallery_view_all')}
            </Link>
          </div>
        </div>
        <div className="media-subsection" id="partners-container" data-aos="fade-up" data-aos-delay="300">
          <h3>
            <Handshake size={18} /> <span>{t('media_partners_title')}</span>
          </h3>
          <div className="partners-scroller" data-speed="slow" data-direction="left">
            <ul className="partners-list">
              {partners.map((partner) => (
                <li key={partner.id}>
                  <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <img src={partner.logoUrl} alt={partner.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="sponsorship-section section-padding" id="sponsorship" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">{t('sponsorship_combined_title')}</h2>
          <p className="section-subtitle">{t('sponsorship_combined_subtitle')}</p>
          <div className="sponsorship-proposal-visual" data-aos="zoom-in-up" data-aos-delay="200">
            <h3>{t('sponsorship_proposal_title')}</h3>
            <a
              href="https://ipb.link/proposal-sponsorship-portal8"
              target="_blank"
              rel="noopener noreferrer"
              className="proposal-image-button"
              aria-label="View Sponsorship Proposal"
            >
              <img src="/img/propo-page-1.png" alt="Portal 8 IPB Sponsorship Proposal Cover" />
              <div className="proposal-button-overlay">
                <span className="proposal-overlay-text">
                  Click to View Proposal <ExternalLink size={14} />
                </span>
              </div>
            </a>
          </div>
          <div className="sponsorship-opportunities highlight-grid" data-aos="fade-up" data-aos-delay="300">
            <div className="opportunity-card">
              <div className="card-icon-sponsor">
                <Handshake size={24} />
              </div>
              <h4>{t('sponsorship_sponsor_title')}</h4>
              <p>{t('sponsorship_card_desc')}</p>
              <a
                href="https://wa.me/6281294993495"
                target="_blank"
                rel="noopener noreferrer"
                className="portal-button contact-button-wa"
              >
                {t('sponsorship_card_button_contact')}
              </a>
            </div>
            <div className="opportunity-card">
              <div className="card-icon-sponsor">
                <Camera size={24} />
              </div>
              <h4>{t('medpar_card_title')}</h4>
              <p>{t('medpar_card_desc')}</p>
              <a
                href="https://wa.me/6288211115118"
                target="_blank"
                rel="noopener noreferrer"
                className="portal-button contact-button-wa"
              >
                {t('medpar_card_button_contact')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section-padding" id="kontak" data-aos="zoom-in-up">
        <div className="contact-header">
          <h2 className="section-title quirky-title">
            <span>{t('contact_title_span')}</span>
          </h2>
          <p className="section-subtitle quirky-subtitle">{t('contact_subtitle')}</p>
        </div>
        <div className="contact-content-wrapper">
          <div className="contact-info-form-container">
            <div className="contact-direct-info" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <MessageCircle className="quirky-icon-header" size={18} />{' '}
                <span>{t('contact_direct_chat_title')}</span>
              </h3>
              <div className="info-item">
                <WhatsAppIcon className="accent-icon orange" size={20} />
                <div>
                  <p>
                    <strong>{t('contact_pic_whatsapp')}</strong>
                  </p>
                  <p>
                    <a href="https://wa.me/6282298819586" target="_blank" rel="noopener noreferrer">
                      +62 822-9881-9586
                    </a>{' '}
                    (Salma)
                  </p>
                </div>
              </div>
              <div className="info-item">
                <Handshake className="accent-icon green" size={20} />
                <div>
                  <p>
                    <strong>{t('contact_sponsorship')}</strong>
                  </p>
                  <p>
                    <a href="https://wa.me/6281294993495" target="_blank" rel="noopener noreferrer">
                      +62 812-9499-3495
                    </a>{' '}
                    (Budi)
                  </p>
                </div>
              </div>
              <div className="info-item">
                <Camera className="accent-icon blue" size={20} />
                <div>
                  <p>
                    <strong>{t('contact_medpar')}</strong>
                  </p>
                  <p>
                    <a href="https://wa.me/6288211115118" target="_blank" rel="noopener noreferrer">
                      +62 882-1111-5118
                    </a>{' '}
                    (Firyal)
                  </p>
                </div>
              </div>
              <div className="info-item">
                <MailOpen className="accent-icon pink" size={20} />
                <div>
                  <p>
                    <strong>{t('contact_official_email')}</strong>
                  </p>
                  <p>
                    <a href="mailto:portal.ipbuniversity@gmail.com">portal.ipbuniversity@gmail.com</a>
                  </p>
                </div>
              </div>
              <h3 className="social-title">
                <Share2 className="quirky-icon-header" size={18} />{' '}
                <span>{t('contact_follow_us_title')}</span>
              </h3>
              <div className="contact-social-links">
                <a
                  href="https://instagram.com/portal_ipb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon ig"
                  aria-label="Instagram Portal IPB"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@portalipb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon yt"
                  aria-label="YouTube Portal IPB"
                >
                  <YouTubeIcon size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@portal_ipb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon tk"
                  aria-label="TikTok Portal IPB"
                >
                  <TikTokIcon size={20} />
                </a>
              </div>
            </div>
            <div className="contact-form-container" data-aos="fade-left" data-aos-delay="300">
              <h3>
                <Send className="quirky-icon-header" size={18} />{' '}
                <span>{t('contact_send_message_title')}</span>
              </h3>
              <form
                action="https://formspree.io/f/mvgrogko"
                method="POST"
                className="contact-form"
                id="main-contact-form"
              >
                <div className="form-group">
                  <input type="text" id="contact-name" name="name" required placeholder=" " />
                  <label htmlFor="contact-name">{t('contact_form_name_label')}</label>
                </div>
                <div className="form-group">
                  <input type="email" id="contact-email" name="_replyto" required placeholder=" " />
                  <label htmlFor="contact-email">{t('contact_form_email_label')}</label>
                </div>
                <div className="form-group">
                  <textarea id="contact-message" name="message" rows={5} required placeholder=" " />
                  <label htmlFor="contact-message">{t('contact_form_message_label')}</label>
                </div>
                <input type="hidden" name="_subject" value="Pesan Baru dari Website Portal 8!" />
                <button type="submit" className="hero-button button-main-cta quirky-submit">
                  {t('contact_form_button_send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <NaraTribute />
    </main>
  );
}
