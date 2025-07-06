// --- Global Variables & Initial Setup ---
import translations from './translations.json';
import mediaContent from './media-content.js';

let currentLang = localStorage.getItem('lang') || 'en'; // Default to English
const langToggleButton = document.getElementById('lang-toggle');
const mainNavLinks = document.getElementById('main-nav-links');
const menuToggleButton = document.getElementById('mobile-menu-toggle');
let menuIcon = menuToggleButton ? menuToggleButton.querySelector('i') : null;
let pageTitleElement = null;

// --- Language Toggle Functionality ---
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    if (langToggleButton && translations[lang] && translations[lang].lang_toggle) {
        langToggleButton.textContent = translations[lang].lang_toggle;
    } else if (langToggleButton) {
        langToggleButton.textContent = lang === 'id' ? 'EN' : 'ID';
    }

    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
    elementsToTranslate.forEach(el => {
        const key = el.dataset.translateKey;
        if (translations[lang] && typeof translations[lang][key] !== 'undefined') {
            if (el.children.length > 0 && el.innerHTML.includes("<i")) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    if (pageTitleElement) {
        const titleKey = pageTitleElement.dataset.translateKey;
        if (translations[lang] && translations[lang][titleKey]) {
            document.title = translations[lang][titleKey];
        }
    }
    setupReadMoreToggles();
}
// --- AOS Initialization ---
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
        });
    }
}

// --- ACCURATE SMOOTH SCROLLING ---
function smoothScrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const navElement = document.querySelector('nav');
        const navHeight = navElement ? navElement.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return true;
    }
    return false;
}

// --- Mobile Navigation (with correct scroll call) ---
function closeMobileMenu() {
    if (mainNavLinks && mainNavLinks.classList.contains('active')) {
        mainNavLinks.classList.remove('active');
        if (menuToggleButton) menuToggleButton.setAttribute('aria-expanded', 'false');
        if (menuIcon) {
            menuIcon.className = 'fas fa-bars';
        }
        document.querySelectorAll('.nav-links .nav-item.dropdown.open').forEach(d => d.classList.remove('open'));
    }
}

function setupMobileNavigation() {
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = mainNavLinks.classList.toggle('active');
            menuToggleButton.classList.toggle('active', isActive);
            menuToggleButton.setAttribute('aria-expanded', isActive);

            if (!isActive) {
                document.querySelectorAll('.nav-links .nav-item.dropdown.open').forEach(d => d.classList.remove('open'));
            }
        });
    }

    document.querySelectorAll('.nav-links .dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (mainNavLinks && mainNavLinks.classList.contains('active')) {
                if (this.getAttribute('href') === '#') e.preventDefault();
                this.closest('.nav-item.dropdown')?.classList.toggle('open');
                e.stopPropagation();
            }
        });
    });

    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const isSamePageLink = href.startsWith('#') || href.startsWith('/#') || href.startsWith('index.html#');

            if (isSamePageLink) {
                const targetId = href.substring(href.indexOf('#') + 1);
                if (document.getElementById(targetId)) {
                    e.preventDefault();
                    smoothScrollToTarget(targetId);
                    if (mainNavLinks.classList.contains('active')) {
                        closeMobileMenu();
                    }
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (mainNavLinks && mainNavLinks.classList.contains('active')) {
            if (!mainNavLinks.contains(event.target) && !menuToggleButton.contains(event.target)) {
                closeMobileMenu();
            }
        }
    });
}

function setupPageTransitions() {
    const body = document.body;
    const transitionDuration = 800;

    window.addEventListener('load', () => {
        body.classList.remove('is-loading');
    });

    body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link || !link.hasAttribute('href')) return;

        const href = link.getAttribute('href');
        if (href.startsWith('mailto:') || href.startsWith('tel:') || (link.hasAttribute('target') && link.getAttribute('target') === '_blank')) return;

        const currentPath = window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/';
        const linkUrl = new URL(href, window.location.origin);
        const linkPath = linkUrl.pathname.endsWith('/') ? linkUrl.pathname : linkUrl.pathname + '/';
        const isSamePageAnchorLink = (href.startsWith('#')) || (linkPath === currentPath && href.includes('#'));

        if (isSamePageAnchorLink) {
            const targetId = href.substring(href.indexOf('#') + 1);
            if (document.getElementById(targetId)) {
                e.preventDefault();
                smoothScrollToTarget(targetId);
                closeMobileMenu();
            }
            return;
        }

        e.preventDefault();
        body.classList.add('is-transitioning');
        setTimeout(() => {
            window.location.href = href;
        }, transitionDuration);
    });
}

function setupReadMoreToggles() {
    document.querySelectorAll('.comp-card .read-more-btn').forEach(button => {
        if (button.hasAttribute('data-readmore-listener')) return;
        button.setAttribute('data-readmore-listener', 'true');
        button.addEventListener('click', () => {
            const expandableContent = button.closest('.description-wrapper').querySelector('.expandable-content');
            if (expandableContent) {
                const isExpanded = expandableContent.classList.toggle('expanded');
                button.textContent = isExpanded ? (button.dataset.less || 'Read Less') : (button.dataset.more || 'Read More');
            }
        });
    });
}
function handlePageLoadAnchors() {
    if (window.location.hash) {
        window.addEventListener('load', () => {
             setTimeout(() => {
                smoothScrollToTarget(window.location.hash.substring(1));
            }, 100);
        }, { once: true });
    }
}

function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach((question) => {
            question.addEventListener('click', () => {
                const currentItem = question.parentElement;
                const isActive = currentItem.classList.contains('active');
                currentItem.classList.toggle('active', !isActive);
                const currentIcon = question.querySelector('.faq-question .faq-icon i');
                if (currentIcon) {
                    currentIcon.className = currentItem.classList.contains('active') ? 'fas fa-minus' : 'fas fa-plus';
                }
            });
        });
    }
}

function startCountdown() {
    const countdownTimerEl = document.getElementById("countdown-timer");
    if (!countdownTimerEl) return;
    const countdownDate = new Date("October 11, 2025 00:00:00").getTime();
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        const seconds = Math.floor((distance % (1000*60))/1000);
        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
        if (distance < 0) {
            clearInterval(countdownFunction);
            const eventStartedKey = 'event_started_message';
            countdownTimerEl.innerHTML = `<span data-translate-key="${eventStartedKey}">${(translations[currentLang] && translations[currentLang][eventStartedKey]) || "EVENT HAS STARTED!"}</span>`;
            countdownTimerEl.style.fontSize="1.5rem";
            countdownTimerEl.style.fontWeight="bold";
            if (translations[currentLang] && translations[currentLang][eventStartedKey]) {
                const spanElement = countdownTimerEl.querySelector(`[data-translate-key="${eventStartedKey}"]`);
                if(spanElement) spanElement.textContent = translations[currentLang][eventStartedKey];
            }
        }
    }, 1000);
}

function startSubmissionCountdown() {
    const countdownTimerEl = document.getElementById("submission-countdown");
    if (!countdownTimerEl) return;
    const countdownDate = new Date("September 3, 2025 23:59:59").getTime();
    const daysEl = document.getElementById("sub-days");
    const hoursEl = document.getElementById("sub-hours");
    const minutesEl = document.getElementById("sub-minutes");
    const secondsEl = document.getElementById("sub-seconds");
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        if (distance < 0) {
            clearInterval(interval);
            countdownTimerEl.innerHTML = `<span style="font-size: 1.5rem; font-weight: bold; color: var(--pink-accent);">SUBMISSION CLOSED</span>`;
            return;
        }
        const format = (num) => String(num).padStart(2, '0');
        daysEl.innerText = format(Math.floor(distance / (1000 * 60 * 60 * 24)));
        hoursEl.innerText = format(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        minutesEl.innerText = format(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        secondsEl.innerText = format(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
}

function renderBlogArticlesPreview(articles, container) {
    if (!container) return;
    if (!articles || articles.length === 0) {
        container.innerHTML = `<p data-translate-key="no_articles">Belum ada artikel.</p>`;
        return;
    }
    container.innerHTML = '';
    articles.slice(0, 3).forEach(article => {
        const articleCardHTML = `
            <div class="article-card" data-aos="fade-up" data-aos-anchor="#blog-articles-container">
                <a href="${article.link}" class="article-card-link">
                    <div class="article-image-wrapper">
                        <img src="${article.image}" alt="${article.title}" class="article-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="article-image-fallback" style="display: none;"><i class="fas fa-image fa-3x"></i></div>
                    </div>
                    <div class="article-content">
                        <h4 class="article-title">${article.title}</h4>
                        <p class="article-meta">${article.date} | <span data-translate-key="article_author_prefix">Oleh:</span> ${article.author}</p>
                        <p class="article-summary">${article.summary}</p>
                        <span class="article-link-text" data-translate-key="article_read_more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></span>
                    </div>
                </a>
            </div>`;
        container.insertAdjacentHTML('beforeend', articleCardHTML);
    });
}

function renderGalleryPhotosPreview(photos, container) {
    if (!container) return;
    if (!photos || photos.length === 0) {
        container.innerHTML = `<p data-translate-key="no_photos">Belum ada foto.</p>`;
        return;
    }
    container.innerHTML = '';
    photos.slice(0, 6).forEach(photo => {
        const photoItem = `
            <div class="gallery-item photo" data-aos="zoom-in-up" data-aos-anchor="#gallery-container" onclick="openLightboxFromPreview('${photo.id}', 'photo')">
                <img src="${photo.thumbnailUrl}" alt="${photo.title}" onerror="this.src='https://placehold.co/300x300/e0e0e0/757575?text=Error&font=montserrat';">
                <div class="gallery-item-overlay">
                    <i class="fas fa-search-plus"></i>
                    <span>${photo.title} ${photo.year ? '('+photo.year+')' : ''}</span>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', photoItem);
    });
}

function renderGalleryVideosPreview(videos, container) {
     if (!container) return;
    if (!videos || videos.length === 0) {
        container.innerHTML = `<p data-translate-key="no_videos">Belum ada video.</p>`;
        return;
    }
    container.innerHTML = '';
    videos.slice(0, 3).forEach(video => {
        const videoItem = `
            <div class="gallery-item video" data-aos="zoom-in-up" data-aos-anchor="#gallery-container" onclick="openLightboxFromPreview('${video.id}', 'video')">
                <img src="${video.thumbnailUrl}" alt="${video.title}" onerror="this.src='https://placehold.co/300x200/e0e0e0/757575?text=Error&font=montserrat';">
                <div class="gallery-item-overlay">
                    <i class="fas fa-play-circle"></i>
                    <span>${video.title}</span>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', videoItem);
    });
}

function loadAllBlogArticles() {
    const fullArticlesGrid = document.getElementById('full-articles-grid');
    if (!fullArticlesGrid) return;
    if (mediaContent && mediaContent.blogArticles) {
        renderFullBlogArticles(mediaContent.blogArticles, fullArticlesGrid);
    } else {
        fullArticlesGrid.innerHTML = `<p class="error-message" data-translate-key="error_no_articles_found">No articles found in data.</p>`;
    }
    applyTranslations(currentLang);
    if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderFullBlogArticles(articles, container) {
    if (!container) return;
    if (!articles || articles.length === 0) {
        container.innerHTML = `<p data-translate-key="no_articles_available">Belum ada artikel untuk ditampilkan.</p>`;
        return;
    }
    container.innerHTML = '';
    articles.forEach(article => {
        const articleCardHTML = `
            <div class="article-card" data-aos="fade-up">
                <a href="${article.link}" class="article-card-link">
                    <div class="article-image-wrapper">
                        <img src="${article.image}" alt="${article.title}" class="article-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="article-image-fallback" style="display: none;"><i class="fas fa-image fa-3x"></i></div>
                    </div>
                    <div class="article-content">
                        <h4 class="article-title">${article.title}</h4>
                        <p class="article-meta">${article.date} | <span data-translate-key="article_author_prefix">Oleh:</span> ${article.author}</p>
                        <p class="article-summary">${article.summary}</p>
                        <span class="article-link-text" data-translate-key="article_read_more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></span>
                    </div>
                </a>
            </div>`;
        container.insertAdjacentHTML('beforeend', articleCardHTML);
    });
}

function loadSpecificBlogArticle() {
    const articleDetailWrapper = document.getElementById('article-detail-wrapper');
    if (!articleDetailWrapper) return;
    articleDetailWrapper.innerHTML = `<div class="loading-article"><p data-translate-key="blog_detail_loading">Memuat artikel...</p></div>`;
    applyTranslations(currentLang);
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');
    if (!articleId) {
        articleDetailWrapper.innerHTML = `<div class="article-not-found"><p data-translate-key="blog_detail_no_id">Artikel tidak ditemukan...</p></div>`;
        applyTranslations(currentLang);
        return;
    }
    if (mediaContent && mediaContent.blogArticles) {
        const article = mediaContent.blogArticles.find(post => post.id === articleId);
        if (article) {
            if (pageTitleElement) { document.title = article.title + " - Portal 7"; }
            let articleHTML = `<section class="blog-detail-hero"><h1 class="article-title-main" data-aos="fade-up">${article.title}</h1><p class="article-meta-main" data-aos="fade-up" data-aos-delay="100"><i class="fas fa-calendar-alt"></i> ${article.date} | <i class="fas fa-user"></i> <span data-translate-key="article_author_prefix">Oleh:</span> ${article.author}</p></section>`;
            if (article.image) { articleHTML += `<div class="article-featured-image-wrapper" data-aos="zoom-in" data-aos-delay="200"><img src="${article.image}" alt="${article.title}" class="article-featured-image"></div>`; }
            articleHTML += `<div class="article-content-container"><article class="article-body" data-aos="fade-up" data-aos-delay="300">${article.fullContentHTML || `<p data-translate-key="blog_detail_content_unavailable">Konten lengkap tidak tersedia.</p>`}</article></div>`;
            articleDetailWrapper.innerHTML = articleHTML;
            if (typeof AOS !== 'undefined') AOS.refresh();
        } else {
            articleDetailWrapper.innerHTML = `<div class="article-not-found"><p data-translate-key="blog_detail_not_found">Artikel tidak ditemukan.</p></div>`;
        }
    } else {
         articleDetailWrapper.innerHTML = `<div class="article-not-found"><p data-translate-key="blog_detail_load_error">Gagal memuat artikel.</p></div>`;
    }
    applyTranslations(currentLang);
}

let allGalleryPhotos = [];
let allGalleryVideos = [];
let currentLightboxItems = [];
let currentLightboxIndex = 0;

function loadAllGalleryContent() {
    const allPhotosContainer = document.getElementById('all-photos-grid') || document.getElementById('gallery-container');
    const allVideosContainer = document.getElementById('all-videos-grid');
    if (!allPhotosContainer && !allVideosContainer) return;
    if (mediaContent && mediaContent.gallery) {
        allGalleryPhotos = mediaContent.gallery.photos || [];
        allGalleryVideos = mediaContent.gallery.videos || [];
        if (allPhotosContainer) renderGalleryItems(allGalleryPhotos, allPhotosContainer, 'photo');
        if (allVideosContainer) renderGalleryItems(allGalleryVideos, allVideosContainer, 'video');
        applyTranslations(currentLang);
        if (typeof AOS !== 'undefined') AOS.refresh();
    } else {
        console.error("Gallery content not found in media-content.js");
        if (allPhotosContainer) allPhotosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_photos_full">Gagal memuat foto.</p>`;
        if (allVideosContainer) allVideosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_videos_full">Gagal memuat video.</p>`;
        applyTranslations(currentLang);
    }
}

function renderGalleryItems(itemsToRender, container, itemType) {
    if (!container) return;
    if (!itemsToRender || itemsToRender.length === 0) {
        const noItemKey = itemType === 'photo' ? 'no_photos_available' : 'no_videos_available';
        container.innerHTML = `<p data-translate-key="${noItemKey}">Belum ada ${itemType} untuk ditampilkan.</p>`;
        return;
    }
    container.innerHTML = '';
    itemsToRender.forEach((item, index) => {
        const imageUrl = item.thumbnailUrl;
        const galleryItemDiv = document.createElement('div');
        galleryItemDiv.classList.add('gallery-item', itemType);
        galleryItemDiv.setAttribute('data-aos', 'zoom-in-up');
        galleryItemDiv.setAttribute('data-item-id', item.id);
        galleryItemDiv.innerHTML = `
            <img src="${imageUrl}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/300x300/e0e0e0/757575?text=Error&font=montserrat';">
            <div class="gallery-item-overlay">
                <i class="fas ${itemType === 'photo' ? 'fa-search-plus' : 'fa-play-circle'}"></i>
                <span>${item.title} ${item.year ? '('+item.year+')' : ''}</span>
            </div>`;
        galleryItemDiv.addEventListener('click', () => openLightbox(itemsToRender, index, itemType));
        container.appendChild(galleryItemDiv);
    });
}

function setupGalleryTabs() {
    const galleryPageTabs = document.querySelectorAll('.gallery-section .gallery-tab-button');
    if (galleryPageTabs.length > 0) {
        galleryPageTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                galleryPageTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                document.querySelectorAll('.gallery-section .gallery-grid').forEach(content => {
                    content.classList.remove('active-gallery-content');
                });
                const targetContentClass = tab.dataset.tab;
                const newActiveContent = document.querySelector(`.gallery-section .gallery-grid.${targetContentClass}`);
                if (newActiveContent) newActiveContent.classList.add('active-gallery-content');
            });
        });
    }
}

window.openLightboxFromPreview = function(itemId, itemType) {
    let itemsCollection = itemType === 'photo' ? allGalleryPhotos : allGalleryVideos;
    if (itemsCollection.length === 0) {
        allGalleryPhotos = mediaContent.gallery.photos || [];
        allGalleryVideos = mediaContent.gallery.videos || [];
        itemsCollection = itemType === 'photo' ? allGalleryPhotos : allGalleryVideos;
    }
    const itemIndex = itemsCollection.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        openLightbox(itemsCollection, itemIndex, itemType);
    } else {
        console.error(`Item with ID ${itemId} of type ${itemType} not found for lightbox.`);
    }
}

function openLightbox(items, index, type) {
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) return;
    currentLightboxItems = items;
    currentLightboxIndex = index;
    updateLightboxContent(type);
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    if (!lightbox) return;
    lightbox.style.display = 'none';
    if (lightboxImage) lightboxImage.style.display = 'none';
    if (lightboxVideo) {
        lightboxVideo.style.display = 'none';
        lightboxVideo.src = "";
    }
    document.body.style.overflow = 'auto';
}

function updateLightboxContent(itemType) {
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    if (!currentLightboxItems || currentLightboxItems.length === 0 || !lightboxImage || !lightboxVideo || !lightboxCaption) return;
    const item = currentLightboxItems[currentLightboxIndex];
    if (!item) return;
    lightboxImage.style.display = 'none';
    lightboxVideo.style.display = 'none';
    lightboxVideo.src = "";
    if (itemType === 'photo') {
        lightboxImage.src = item.fullUrl || item.thumbnailUrl;
        lightboxImage.alt = item.title;
        lightboxImage.style.display = 'block';
    } else if (itemType === 'video' && item.videoUrl) {
        let videoEmbedUrl = item.videoUrl;
        if (videoEmbedUrl.includes("watch?v=")) { videoEmbedUrl = videoEmbedUrl.replace("watch?v=", "embed/"); }
        lightboxVideo.src = videoEmbedUrl;
        lightboxVideo.style.display = 'block';
    }
    lightboxCaption.textContent = item.title + (item.description ? ` - ${item.description}` : '');
    if(lightboxPrev) lightboxPrev.style.display = currentLightboxItems.length > 1 ? 'block' : 'none';
    if(lightboxNext) lightboxNext.style.display = currentLightboxItems.length > 1 ? 'block' : 'none';
}

function showPrevLightboxItem() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
    const itemType = currentLightboxItems[currentLightboxIndex].videoUrl ? 'video' : 'photo';
    updateLightboxContent(itemType);
}

function showNextLightboxItem() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length;
    const itemType = currentLightboxItems[currentLightboxIndex].videoUrl ? 'video' : 'photo';
    updateLightboxContent(itemType);
}

function setupLightboxControls() {
    const lightboxCloseBtn = document.querySelector('.lightbox-close');
    const lightboxPrevBtn = document.querySelector('.lightbox-prev');
    const lightboxNextBtn = document.querySelector('.lightbox-next');
    const lightboxModal = document.getElementById('lightbox-modal');
    if(lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if(lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevLightboxItem);
    if(lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextLightboxItem);
    if(lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (lightboxModal && lightboxModal.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (currentLightboxItems.length > 1) {
                if (e.key === 'ArrowLeft') showPrevLightboxItem();
                if (e.key === 'ArrowRight') showNextLightboxItem();
            }
        }
    });
}

function setupAccordions(accordionSelector, toggleSelector) {
    const accordions = document.querySelectorAll(accordionSelector);
    if (accordions.length > 0) {
        document.querySelectorAll(toggleSelector).forEach(button => {
            button.addEventListener('click', () => {
                const accordionContent = button.nextElementSibling;
                const icon = button.querySelector('.accordion-icon');
                button.classList.toggle('active');
                if (accordionContent.style.maxHeight) {
                    accordionContent.style.maxHeight = null;
                    if(icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
                } else {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                    if(icon) { icon.classList.remove('fa-chevron-down'); icon.classList.add('fa-chevron-up'); }
                }
            });
        });
    }
}

function loadAndSetupPartnerScroller() {
    const scroller = document.querySelector(".partners-scroller");
    if (!scroller) return;
    const partnersList = scroller.querySelector(".partners-list");
    if (!partnersList) return;
    if (mediaContent.partnersSponsors && mediaContent.partnersSponsors.length > 0) {
        partnersList.innerHTML = '';
        mediaContent.partnersSponsors.forEach(partner => {
            const logoUrl = partner.logoUrl;
            const listItem = document.createElement('li');
            listItem.className = 'partner-logo-item';
            listItem.innerHTML = `<a href="${partner.websiteUrl || '#'}" target="_blank"><img src="${logoUrl}" alt="${partner.name} logo"></a>`;
            partnersList.appendChild(listItem);
        });
        setupAnimation(scroller);
    } else {
        partnersList.innerHTML = '<li>No partners to display.</li>';
    }
}

function setupAnimation(scroller) {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".partners-list");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    }
}
function setupCompetitionCarousel() {
    const wrapper = document.querySelector('.competition-carousel-wrapper');
    if (!wrapper) return;
    const slidesContainer = wrapper.querySelector('.carousel-slides-container');
    const slides = slidesContainer.querySelectorAll('.comp-card');
    const prevButton = wrapper.querySelector('.carousel-nav.prev');
    const nextButton = wrapper.querySelector('.carousel-nav.next');
    const dotsContainer = wrapper.querySelector('.carousel-dots');
    let currentSlide = 0;
    if (slides.length <= 1) {
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
        if (dotsContainer) dotsContainer.style.display = 'none';
        if (slides.length === 1) slides[0].classList.add('active');
        return;
    }
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.dot');
    const showSlide = (index) => {
        currentSlide = index;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };
    const nextSlide = () => showSlide((currentSlide + 1) % slides.length);
    const prevSlide = () => showSlide((currentSlide - 1 + slides.length) % slides.length);
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    let touchstartX = 0;
    slidesContainer.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; }, { passive: true });
    slidesContainer.addEventListener('touchend', e => {
        const touchendX = e.changedTouches[0].screenX;
        if (touchendX < touchstartX - 50) nextSlide();
        if (touchendX > touchstartX + 50) prevSlide();
    }, { passive: true });
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    setupPageTransitions();
    initializeAOS();
    setupMobileNavigation();
    handlePageLoadAnchors();
    pageTitleElement = document.querySelector('title[data-translate-key]');
    applyTranslations(currentLang);
    if (document.getElementById("countdown-timer")) {
        startCountdown();
    }
    if (document.getElementById('media')) {
        loadAndSetupPartnerScroller();
        const blogArticlesContainer = document.querySelector('#blog-articles-container .articles-grid');
        const galleryPhotosContainer = document.querySelector('#gallery-container .gallery-grid.photos');
        const galleryVideosContainer = document.querySelector('#gallery-container .gallery-grid.videos');
        if (mediaContent) {
            if (blogArticlesContainer) renderBlogArticlesPreview(mediaContent.blogArticles, blogArticlesContainer);
            if (galleryPhotosContainer) renderGalleryPhotosPreview(mediaContent.gallery.photos, galleryPhotosContainer);
            if (galleryVideosContainer) renderGalleryVideosPreview(mediaContent.gallery.videos, galleryVideosContainer);
        }
        const galleryTabs = document.querySelectorAll('#media .gallery-tab-button');
        if (galleryTabs.length > 0) {
            galleryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    galleryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    document.querySelectorAll('#media .gallery-grid').forEach(content => {
                        content.classList.remove('active-gallery-content');
                    });
                    const targetContentClass = tab.dataset.tab;
                    const newActiveContent = document.querySelector(`#media .gallery-grid.${targetContentClass}`);
                    if (newActiveContent) newActiveContent.classList.add('active-gallery-content');
                });
            });
        }
    }
    if (document.getElementById('full-articles-grid')) loadAllBlogArticles();
    if (document.getElementById('article-detail-wrapper')) loadSpecificBlogArticle();
    if (document.querySelector('.gallery-page-hero')) {
        setupGalleryTabs();
        loadAllGalleryContent();
        setupLightboxControls();
    }
    if (document.body.classList.contains('competition-hub-body')) {
        setupCompetitionCarousel();
        startSubmissionCountdown();
    }
    setupFAQAccordion();
    setupAccordions('.accordion-seminar', '.accordion-seminar-toggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const newLang = currentLang === 'id' ? 'en' : 'id';
            applyTranslations(newLang);
        });
    }
    const tributeCode = ['n', 'a', 'r', 'a'];
    let currentPosition = 0;
    const tributeOverlay = document.getElementById('nara-tribute-overlay');
    const closeButton = document.querySelector('.close-tribute');
    function showTribute() {
        if (tributeOverlay) {
            tributeOverlay.style.display = 'flex';
            setTimeout(() => {
                tributeOverlay.style.opacity = '1';
                tributeOverlay.querySelector('.tribute-modal').style.transform = 'scale(1)';
            }, 10);
        }
    }
    function hideTribute() {
        if (tributeOverlay) {
            tributeOverlay.style.opacity = '0';
            tributeOverlay.querySelector('.tribute-modal').style.transform = 'scale(0.9)';
            setTimeout(() => {
                tributeOverlay.style.display = 'none';
            }, 500);
        }
    }
    document.addEventListener('keydown', function(e) {
        if (e.key.toLowerCase() === tributeCode[currentPosition]) {
            currentPosition++;
            if (currentPosition === tributeCode.length) {
                showTribute();
                currentPosition = 0;
            }
        } else {
            currentPosition = 0;
        }
    });
    if (closeButton) closeButton.addEventListener('click', hideTribute);
    if (tributeOverlay) tributeOverlay.addEventListener('click', (e) => { if (e.target === tributeOverlay) hideTribute(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && tributeOverlay && tributeOverlay.style.display === 'flex') hideTribute(); });
});

window.addEventListener('load', () => {
    if (window.location.hash) {
        setTimeout(() => {
            smoothScrollToTarget(window.location.hash.substring(1));
        }, 100);
    }
});