'use client';

import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import {
  QrCode,
  Lightbulb,
  MessageSquare,
  Award,
  ClipboardCheck,
  Flag,
  Utensils,
} from 'lucide-react';

function HtmlText({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

function AgendaIcon({ icon }: { icon: string }) {
  const className = 'w-5 h-5 text-[#3B82F6]';
  switch (icon) {
    case 'fa-clipboard-check':
      return <ClipboardCheck className={className} />;
    case 'fa-flag':
      return <Flag className={className} />;
    case 'fa-lightbulb':
      return <Lightbulb className={className} />;
    case 'fa-utensils':
      return <Utensils className={className} />;
    case 'fa-comments':
      return <MessageSquare className={className} />;
    case 'fa-award':
      return <Award className={className} />;
    default:
      return <Lightbulb className={className} />;
  }
}

export default function SeminarPage() {
  const t = useTranslations();

  const agendaItems = [
    {
      time: '08:00 - 09:00',
      icon: 'fa-clipboard-check',
      titleKey: 'seminar_revamp_agenda_1_title',
      descKey: 'seminar_revamp_agenda_1_desc',
    },
    {
      time: '09:00 - 09:30',
      icon: 'fa-flag',
      titleKey: 'seminar_revamp_agenda_2_title',
      descKey: 'seminar_revamp_agenda_2_desc',
    },
    {
      time: '09:30 - 11:30',
      icon: 'fa-lightbulb',
      titleKey: 'seminar_revamp_agenda_3_title',
      descKey: 'seminar_revamp_agenda_3_desc',
    },
    {
      time: '11:30 - 13:00',
      icon: 'fa-utensils',
      titleKey: 'seminar_revamp_agenda_4_title',
      descKey: 'seminar_revamp_agenda_4_desc',
    },
    {
      time: '13:00 - 15:00',
      icon: 'fa-comments',
      titleKey: 'seminar_revamp_agenda_5_title',
      descKey: 'seminar_revamp_agenda_5_desc',
    },
    {
      time: '15:00 - 16:00',
      icon: 'fa-award',
      titleKey: 'seminar_revamp_agenda_6_title',
      descKey: 'seminar_revamp_agenda_6_desc',
    },
  ];

  return (
    <>
      <section
        className="competition-hub-hero seminar-hero section-padding"
        id="seminar-top"
      >
        <div className="portal-background-effect"></div>
        <div className="floating-cloud cloud-1">
          <img src="/img/cloud_pink.png" alt="Awan merah muda melayang" />
        </div>
        <div className="floating-cloud cloud-4">
          <img src="/img/cloud_orange.png" alt="Awan oranye melayang" />
        </div>
        <div className="hero-content-seminar-hub">
          <h1 className="seminar-revamp-hero-title">
            {t('seminar_revamp_hero_title')}
          </h1>
          <p className="seminar-revamp-main-theme">
            {t('seminar_revamp_main_theme')}
          </p>
          <div className="seminar-meta-info">
            <span>
              <HtmlText text={t('seminar_revamp_date')} />
            </span>
            <span>
              <HtmlText text={t('seminar_revamp_location')} />
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding" id="seminar-ticket-cta">
        <div className="container">
          <div className="ticket-cta-grid">
            <div className="ticket-info">
              <h2 className="section-title">
                {t('seminar_ticket_cta_title')}
              </h2>
              <p className="section-subtitle">
                {t('seminar_ticket_cta_subtitle')}
              </p>
              <h4>{t('seminar_ticket_cta_includes_title')}</h4>
              <ul className="ticket-benefits-list">
                <li>
                  <HtmlText text={t('seminar_ticket_cta_include_1')} />
                </li>
                <li>
                  <HtmlText text={t('seminar_ticket_cta_include_2')} />
                </li>
                <li>
                  <HtmlText text={t('seminar_ticket_cta_include_3')} />
                </li>
                <li>
                  <HtmlText text={t('seminar_ticket_cta_include_4')} />
                </li>
              </ul>
            </div>
            <div className="ticket-visual">
              <div className="ticket-graphic">
                <div className="ticket-header">
                  <img src="/img/Portal_Logo.png" alt="Portal 8 Logo" />
                  <span>ALL-ACCESS PASS</span>
                </div>
                <div className="ticket-body">
                  <h3>PORTAL 8 SEMINAR</h3>
                  <p>September 9, 2026</p>
                </div>
                <div className="ticket-stub">
                  <div className="ticket-qr-placeholder">
                    <QrCode size={48} className="text-[#3B82F6]" />
                  </div>
                </div>
              </div>
              <a
                href="https://booking.tribunnews.com/talkshow/portal-7"
                target="_blank"
                rel="noopener noreferrer"
                className="portal-button ticket-booking-button"
              >
                <span>{t('seminar_ticket_cta_button')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding sdg-section" id="seminar-benefits">
        <div className="container">
          <h2 className="section-title">
            {t('seminar_revamp_expect_title')}
          </h2>
          <div className="sdg-container">
            <div className="sdg-item">
              <div className="sdg-item-header">
                <div className="sdg-icon-wrapper">
                  <Lightbulb size={32} className="text-[#FBBF24]" />
                </div>
                <div className="sdg-title-number">
                  <h3>{t('seminar_revamp_expect_seminar_title')}</h3>
                </div>
              </div>
              <div className="sdg-item-body">
                <p>{t('seminar_revamp_expect_seminar_desc')}</p>
              </div>
              <div className="sdg-item-deco-line"></div>
            </div>
            <div className="sdg-item">
              <div className="sdg-item-header">
                <div className="sdg-icon-wrapper">
                  <MessageSquare size={32} className="text-[#3B82F6]" />
                </div>
                <div className="sdg-title-number">
                  <h3>{t('seminar_revamp_expect_talkshow_title')}</h3>
                </div>
              </div>
              <div className="sdg-item-body">
                <p>{t('seminar_revamp_expect_talkshow_desc')}</p>
              </div>
              <div className="sdg-item-deco-line"></div>
            </div>
            <div className="sdg-item">
              <div className="sdg-item-header">
                <div className="sdg-icon-wrapper">
                  <Award size={32} className="text-[#EC4899]" />
                </div>
                <div className="sdg-title-number">
                  <h3>{t('seminar_revamp_expect_awarding_title')}</h3>
                </div>
              </div>
              <div className="sdg-item-body">
                <p>{t('seminar_revamp_expect_awarding_desc')}</p>
              </div>
              <div className="sdg-item-deco-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="seminar-agenda">
        <div className="container">
          <h2 className="section-title">
            {t('seminar_revamp_agenda_title')}
          </h2>
          <div className="agenda-timeline">
            <Accordion defaultValue={[]} className="w-full">
              {agendaItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`agenda-${index}`}
                  className="agenda-item"
                >
                  <AccordionTrigger className="accordion-seminar-toggle">
                    <div className="flex items-center gap-3 text-left">
                      <span className="agenda-time">{item.time}</span>
                      <span className="agenda-icon">
                        <AgendaIcon icon={item.icon} />
                      </span>
                      <span className="agenda-details">
                        <h3>{t(item.titleKey)}</h3>
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-seminar-content">
                    <p className="pl-[120px] text-[#b0b8c4]">
                      {t(item.descKey)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-padding" id="seminar-coaching">
        <div className="container">
          <h2 className="section-title">{t('seminar_coaching_title')}</h2>
          <Accordion defaultValue={[]} className="w-full max-w-[700px] mx-auto">
            <AccordionItem value="coaching-focus">
              <AccordionTrigger className="accordion-seminar-toggle">
                <HtmlText text={t('seminar_coaching_focus_button')} />
              </AccordionTrigger>
              <AccordionContent className="accordion-seminar-content">
                <ul>
                  <li>{t('seminar_coaching_focus_1')}</li>
                  <li>{t('seminar_coaching_focus_2')}</li>
                  <li>{t('seminar_coaching_focus_3')}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section
        className="wow-guest-stars-section section-padding"
        id="guest-stars"
      >
        <h2 className="section-title">
          <span>{t('next_guest_star_title_part1')}</span>{' '}
          <span className="wow-accent">{t('next_guest_star_title_star')}</span>
        </h2>
        <p className="section-subtitle">{t('next_guest_star_subtitle')}</p>
        <div className="wow-guest-stars-grid single-guest">
          <div className="wow-guest-star-card">
            <div className="wow-guest-star-image-wrapper">
              <img
                src="/img/mysterious-guest.jpg"
                alt="Mysterious Guest Star 2026"
              />
              <div className="wow-guest-star-image-overlay">
                <span className="overlay-year">2026</span>
              </div>
            </div>
            <div className="wow-guest-star-info">
              <h4>{t('mysterious_guest_name')}</h4>
              <p className="wow-guest-title">
                {t('mysterious_guest_title')}
              </p>
              <p className="wow-guest-teaser">
                {t('mysterious_guest_teaser')}
              </p>
            </div>
            <div className="wow-guest-card-flare"></div>
          </div>
        </div>
      </section>

      <section className="section-padding venue-section" id="seminar-venue">
        <div className="container">
          <h2 className="section-title">
            {t('seminar_revamp_venue_title')}
          </h2>
          <p className="section-subtitle">
            {t('seminar_revamp_venue_address')}
          </p>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.826923482756!2d106.72379341535974!3d-6.543477895267727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3a3733c5771%3A0x23005a752254e339!2sAuditorium%20Andi%20Hakim%20Nasution!5e0!3m2!1sen!2sid!4v1662886782333!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
