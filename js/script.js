import languageOptions from './translations.js';

// set default language to English
let currentLanguage = 'en';

// listen for click events on language links
document.querySelectorAll('.topnav a').forEach((link) => {
  link.addEventListener('click', (event) => {
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
  const translations = languageOptions[currentLanguage];

  document.querySelector('.welcome').textContent = translations.welcome;
  document.querySelector('.about').textContent = translations.about;
  document.querySelector('.contact').textContent = translations.contact;
}

// initialize the text on the website to the default language
updateText();
