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
    import(`./translation-${selectedLanguage}.js`).then((translations) => {
      // Update the current language translations
      currentTranslations = translations.default;
      // Update the text on the website to the current language
      updateText();
    });
  });
});

function updateText() {
  // Update the text on the website to the current language using the currentTranslations variable
  // For example:
  document.getElementById('slogan1').textContent = currentTranslations.slogan.slogan1;
  document.getElementById('slogan2').textContent = currentTranslations.slogan.slogan2;
  // Update other elements as needed
}
