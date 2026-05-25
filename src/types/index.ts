export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  link: string;
  fullContentHTML: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  year: string;
  thumbnailUrl: string;
  fullUrl: string;
  description: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description?: string;
}

export interface PartnerSponsor {
  id: string;
  name: string;
  logoUrl: string;
  type: 'media_partner' | 'sponsor';
  websiteUrl: string;
}

export interface MediaContent {
  blogArticles: BlogArticle[];
  gallery: {
    photos: GalleryPhoto[];
    videos: GalleryVideo[];
  };
  partnersSponsors: PartnerSponsor[];
}
