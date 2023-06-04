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
      
    },
    ch: {
      
    },    
    sp: {
      
    },
    fr: {
      
    },
    ge: {
      
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

  document.getElementById('#slogan1').textContent = translations.slogan.slogan1;
  document.getElementById('#slogan2').textContent = translations.slogan.slogan2;
}

// Initialize the text on the website to the default language
updateText();