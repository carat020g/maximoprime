import enTranslation from './translation-english.js'
import chTranslation from './translation-chinese.js'
import spTranslation from './translation-spanish.js'
import frTranslation from './translation-french.js'
import geTranslation from './translation-german.js'

// Define the variable to store the current translations
let currentTranslations = {};

// Add an event listener to the language selection element
document.querySelectorAll('.topnav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedLanguage = link.id.slice(5); // Extract the language code from the link id
    // Import the translation file based on the selected language
    switch (selectedLanguage) {
      case 'en':
        currentTranslations = enTranslations;
        break;
      case 'ch':
        currentTranslations = chTranslations;
        break;
      case 'sp':
        currentTranslations = spTranslations;
        break;
      case 'fr':
        currentTranslations = frTranslations;
        break;
      case 'ge':
        currentTranslations = geTranslations;
        break;
      default:
        currentTranslations = enTranslations; // Default to English
    }
    updateText();    
  });
});

function updateText() {
  // Update the text on the website to the current language using the currentTranslations variable
  // For example:
  document.getElementById('slogan1').textContent = currentTranslations.slogan.slogan1;
  document.getElementById('slogan2').textContent = currentTranslations.slogan.slogan2;
  // Update other elements as needed
}
