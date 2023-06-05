let currentLanguage = 'en'; // Default language
let currentFontClass = 'font-sans-pro'; // Default font class

function loadLanguage(language) {
  const filePath = `json/${language}.json`; // Update the file path based on the language

  fetch(filePath)
    .then(response => response.json())
    .then(translations => {
      updateText(translations);
    })
    .catch(error => {
      console.error('Error fetching language JSON:', error);
    });
}

function updateText(translations) {
  // Update the text content of elements using the translations object
  // Example: document.getElementById('elementId').textContent = translations.someText;
}

// Add event listeners to the language selection links
document.querySelectorAll('.topnav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const selectedLanguage = link.id.slice(5); // Extract the language code from the link id
    currentLanguage = selectedLanguage;
    loadLanguage(currentLanguage);
  });
});

// Initialize the text on the website with the default language
loadLanguage(currentLanguage);
