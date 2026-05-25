'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import mediaContent from '@/lib/data/media-content';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { GalleryPhoto, GalleryVideo } from '@/types';

type TabType = 'photos' | 'videos';

export default function GalleryPage() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<TabType>('photos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxType, setLightboxType] = useState<TabType>('photos');

  const photos = mediaContent.gallery.photos;
  const videos = mediaContent.gallery.videos;

  const openLightbox = (index: number, type: TabType) => {
    setLightboxIndex(index);
    setLightboxType(type);
    setLightboxOpen(true);
  };

  const currentItems = lightboxType === 'photos' ? photos : videos;
  const currentItem = currentItems[lightboxIndex];

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? currentItems.length - 1 : prev - 1
    );
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === currentItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="gallery-page-hero section-padding" id="gallery-page-top">
        <div className="portal-background-effect"></div>
        <div className="floating-cloud cloud-2">
          <img src="/img/cloud_blue.png" alt="Awan biru melayang" />
        </div>
        <div className="floating-cloud cloud-5">
          <img src="/img/cloud_pink.png" alt="Awan merah muda melayang" />
        </div>

        <div className="container">
          <h1 className="gallery-page-main-title">
            <span className="title-accent-highlight">
              {t('gallery_page_hero_title_accent')}
            </span>
            <span>{t('gallery_page_hero_title')}</span>
          </h1>
          <p className="gallery-page-main-subtitle">
            {t('gallery_page_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="gallery-section section-padding">
        <div className="container">
          <div className="gallery-tabs">
            <button
              className={`gallery-tab-button ${activeTab === 'photos' ? 'active' : ''}`}
              onClick={() => setActiveTab('photos')}
            >
              {t('media_gallery_tab_photos')}
            </button>
            <button
              className={`gallery-tab-button ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              {t('media_gallery_tab_videos')}
            </button>
          </div>

          <div className="gallery-grid-wrapper">
            <div
              className={`gallery-grid photos-all ${activeTab === 'photos' ? 'active-gallery-content' : ''}`}
              id="all-photos-grid"
            >
              {photos.length > 0 ? (
                photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="gallery-item"
                    onClick={() => openLightbox(index, 'photos')}
                  >
                    <img
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      className="gallery-thumbnail"
                    />
                    <div className="gallery-item-overlay">
                      <span className="gallery-item-title">{photo.title}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="loading-message">
                  {t('gallery_loading_photos_all')}
                </p>
              )}
            </div>
            <div
              className={`gallery-grid videos-all ${activeTab === 'videos' ? 'active-gallery-content' : ''}`}
              id="all-videos-grid"
            >
              {videos.length > 0 ? (
                videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="gallery-item"
                    onClick={() => openLightbox(index, 'videos')}
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="gallery-thumbnail"
                    />
                    <div className="gallery-item-overlay">
                      <span className="gallery-item-title">{video.title}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="loading-message">
                  {t('gallery_loading_videos_all')}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="lightbox-modal max-w-5xl border-none bg-black/90 p-0 text-white">
          <DialogTitle className="sr-only">
            {currentItem?.title ?? 'Lightbox'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {currentItem && 'description' in currentItem
              ? (currentItem as GalleryPhoto).description
              : ''}
          </DialogDescription>
          <div className="lightbox-content">
            {lightboxType === 'photos' && currentItem && (
              <img
                id="lightbox-image"
                src={(currentItem as GalleryPhoto).fullUrl}
                alt={currentItem.title}
                className="mx-auto max-h-[80vh] w-auto"
              />
            )}
            {lightboxType === 'videos' && currentItem && (
              <iframe
                id="lightbox-video"
                src={(currentItem as GalleryVideo).videoUrl}
                width="100%"
                height="500"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
            <div id="lightbox-caption" className="lightbox-caption">
              {currentItem?.title}
            </div>
          </div>
          {currentItems.length > 1 && (
            <>
              <button
                className="lightbox-prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                &#10094;
              </button>
              <button
                className="lightbox-next"
                onClick={goNext}
                aria-label="Next image"
              >
                &#10095;
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
