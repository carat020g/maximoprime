import './translation-how-we-work.js'
import './translation-faq.js'
import './translation-contact-us.js'

const languageOptions = {
    common:{
      email: {
        google: "with.maximoprime@gmail.com",
        aliyun: "maximoprime@aliyun.com"
      },
      copyright: "Copyright (c) Maximo Prime"
    },
    en: {
      slogan: {
        slogan1: "We Deliver",
        slogal2: "Opportunitiess",  
      },
      nav: {
        chooseyourlanguage: "Choose your language",
        main: "MAIN",
        howwework: "HOW WE WORK",
        faq: "FAQ",
        contact: "CONTACT",  
      }
    },
    ch: {
      slogan: {
      slogan1: "我们提供",
      slogal2: "机会",
      },
      nav: {
      chooseyourlanguage: "选择您的语言",
      main: "首页",
      howwework: "我们的工作方式",
      faq: "常见问题",
      contact: "联系我们",
      }
    },    
    sp: {
      slogan: {
        slogan1: "Entregamos",
        slogal2: "Oportunidades",
        },
        nav: {
        chooseyourlanguage: "Elige tu idioma",
        main: "INICIO",
        howwework: "CÓMO TRABAJAMOS",
        faq: "PREGUNTAS FRECUENTES",
        contact: "CONTACTO",
      }
    },
    fr: {
      slogan: {
        slogan1: "Nous Livrons",
        slogal2: "Des Opportunités",
        },
        nav: {
        chooseyourlanguage: "Choisissez votre langue",
        main: "ACCUEIL",
        howwework: "COMMENT NOUS TRAVAILLONS",
        faq: "FAQ",
        contact: "CONTACT",
      }
    },
    ge: {
      slogan: {
        slogan1: "Wir liefern",
        slogal2: "Chancen",
        },
        nav: {
        chooseyourlanguage: "Wählen Sie Ihre Sprache",
        main: "STARTSEITE",
        howwework: "WIE WIR ARBEITEN",
        faq: "FAQ",
        contact: "KONTAKT",
      }
    },        
  };
  
  // Set default language to English
  let currentLanguage = 'en';
  
  // Listen for click events on language links
  document.querySelectorAll('.topnav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      // Prevent default navigation
      event.preventDefault();
  
      // Update current language
      currentLanguage = link.id.slice(5);
  
      // Update text on website to new language
      updateText();
    });
  });
  
  // Function to update the text on the website to the current language
  function updateText() {
    const translations = languageOptions[currentLanguage];
  
    // document.querySelector('.welcome').textContent = translations.welcome;
    // document.querySelector('.about').textContent = translations.about;
    // document.querySelector('.contact').textContent = translations.contact;
  }
  
  // Initialize the text on the website to the default language
  updateText();
  