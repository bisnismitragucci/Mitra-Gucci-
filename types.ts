export type Language = 'id' | 'en';
export type PageView = 'home' | 'legality';

export interface Translations {
  nav: {
    people: string;
    partners: string;
    academy: string;
    opportunities: string;
    login: string;
    backToHome: string;
  };
  loginBar: {
    text: string;
    link: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    websiteLink: string;
  };
  stats: {
    followersLabel: string;
    followersValue: string;
    followersDesc: string;
    
    ratingLabel: string;
    ratingValue: string;
    ratingDesc: string;

    legalityLabel: string;
    legalityValue: string;
    legalityDesc: string;
    viewLegality: string;
  };
  testimonials: {
    title: string;
    earningLabel: string;
    items: {
      name: string;
      role: string;
      quote: string;
      earnings: string;
      image: string;
    }[];
  };
  legalityDoc: {
    header1: string;
    header2: string;
    nibLabel: string;
    nibNumber: string;
    intro: string;
    labels: {
      name: string;
      address: string;
      npwp: string;
      capital: string;
      kbli: string;
      status: string;
    };
    values: {
      name: string;
      address: string;
      npwp: string;
      capital: string;
      kbli: string;
      status: string;
    };
    footerNote: string;
    datePlace: string;
    signerTitle: string;
    signerName: string;
  };
  grid: {
    craftsmanship: string;
    innovation: string;
    sustainability: string;
    readMore: string;
  };
  footer: {
    followUs: string;
    copyright: string;
    links: string[];
    legal: string[];
  }
}

export interface Dictionary {
  id: Translations;
  en: Translations;
}