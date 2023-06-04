let currentLanguage = 'en'; // Default language

function loadCommon() {
  // Construct the path to the common JSON file
  const filePath = './json/common.json';

  // Make an AJAX request to fetch the common JSON file
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', filePath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const commonTranslations = JSON.parse(xhr.responseText);
      // Update the common text content of elements using the commonTranslations object
      updateCommonText(commonTranslations);
    }
  };
  xhr.send();
}


function updateCommonText(commonTranslations) {
  // Update the common text content of elements using the commonTranslations object
  // Example: document.getElementById('elementId').textContent = commonTranslations.someText;
}


function loadLanguage(language) {
  // Construct the path to the JSON file based on the language
  const filePath = './json/${language}.json';

  // Make an AJAX request to fetch the language JSON file
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', filePath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const translations = JSON.parse(xhr.responseText);
      // Update the text content of elements using the translations object
      updateText(translations);
    }
  };
  xhr.send();
}

function updateText(translations) {
  // Update the text content of elements using the translations object
  // Example: document.getElementById('elementId').textContent = translations.someText;
}

// Add event listeners to the language selection links
document.querySelectorAll('.topnav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedLanguage = link.id.slice(5); // Extract the language code from the link id
    currentLanguage = selectedLanguage;
    loadLanguage(currentLanguage);
  });
});

// Initialize the common texts on the website
loadCommon();

// Initialize the text on the website with the default language
loadLanguage(currentLanguage);

