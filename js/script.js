// define language options
const languageOptions = {
    en: {
      // English translations
      welcome: "Welcome to my website!",
      about: "About Me",
      contact: "Contact Me",
    },
    es: {
      // Spanish translations
      welcome: "Bienvenidos a mi sitio web!",
      about: "Sobre Mí",
      contact: "Contáctame",
    },
    fr: {
      // French translations
      welcome: "Bienvenue sur mon site web!",
      about: "À Propos",
      contact: "Contactez-Moi",
    },
    de: {
      // German translations
      welcome: "Willkommen auf meiner Website!",
      about: "Über Mich",
      contact: "Kontaktieren Sie Mich",
    },
    it: {
      // Italian translations
      welcome: "Benvenuti sul mio sito web!",
      about: "Riguardo a Me",
      contact: "Contattami",
    },
  };
  
  // set default language to English
  let currentLanguage = "en";
  
  // listen for click events on language links
  document.querySelectorAll(".topnav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      // prevent default navigation
      event.preventDefault();
  
      // update current language
      currentLanguage = link.id.slice(5);
  
      // update text on website to new language
      updateText();
    });
  });
  
  // function to update the text on the website to the current language
  function updateText() {
    document.querySelector(".welcome").textContent = languageOptions[currentLanguage].welcome;
    document.querySelector(".about").textContent = languageOptions[currentLanguage].about;
    document.querySelector(".contact").textContent = languageOptions[currentLanguage].contact;
  }
  
  // initialize the text on the website to the default language
  updateText();
  