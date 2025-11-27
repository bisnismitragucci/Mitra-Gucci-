
export type Language = 'id' | 'en';
export type PageView = 'home' | 'legality' | 'worldOfGucci' | 'collections' | 'businessAccount' | 'affiliateProgram' | 'expertAdvisor' | 'contemporaryStyle';

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
  collaboration: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
  };
  umamaProducts: {
    title: string;
    items: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      role: string;
      quote: string;
      image: string;
    }[];
  };
  collectionsPage: {
    title: string;
    subtitle: string;
    items: {
      image: string;
      title: string;
      description: string;
      cta: string;
    }[];
  };
  businessAccountPage: {
    form: {
      title: string;
      phonePlaceholder: string;
      passwordPlaceholder: string;
      inviteCodePlaceholder: string;
      submitButton: string;
      loginLink: string;
    };
    info: {
      title: string;
      subtitle: string;
      description: string;
      features: {
        title: string;
        desc: string;
      }[];
    };
  };
  affiliateProgramPage: {
    title: string;
    subtitle: string;
    intro: string;
    points: {
      title: string;
      desc: string;
    }[];
    conclusion: string;
  };
  contemporaryStylePage: {
    title: string;
    subtitle: string;
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
  expertAdvisorPage: {
    title: string;
    subtitle: string;
    intro: string;
    duties: {
      title: string;
      desc: string;
    }[];
    conclusion: string;
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
  worldOfGucci: {
    title: string;
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
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