// Language selection
const langLinks = document.querySelectorAll('.topnav a');

langLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove active class from all links
    langLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Set current link as active
    this.classList.add('active');

    // Get the language ID from the link's ID
    const languageId = this.id.replace('lang_', '');

    // Save the selected language option
    saveLanguageOption(languageId);

    // Change the website language
    changeLanguage(languageId);
  });
});

// Function to save the selected language option
function saveLanguageOption(languageId) {
  // Use your preferred method (e.g., localStorage, cookies) to save the language option
  // Example using localStorage:
  localStorage.setItem('languageOption', languageId);
}

// Function to retrieve the saved language option
function getSavedLanguageOption() {
  // Use your preferred method to retrieve the saved language option
  // Example using localStorage:
  return localStorage.getItem('languageOption');
}

// Language change logic
function changeLanguage(languageId) {
  // Fetch language data using AJAX or fetch API
  fetchLanguageData(languageId)
    .then((data) => {
      // Update the page content with the fetched language data
      updatePageContent(data);
    })
    .catch((error) => {
      console.error('Error fetching language data:', error);
    });
}

// Function to fetch language data
function fetchLanguageData(languageId) {
  // Replace the URL with the actual endpoint to fetch language data
  const url = `language-api-endpoint?lang=${languageId}`;

  // Return a promise that resolves with the fetched language data
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch language data');
      }
      return response.json();
    });
}

// Function to update the page content with the fetched language data
function updatePageContent(languageData) {
  // Update the main slogan
  document.getElementById('slogan1').textContent = languageData.main.slogan.slogan1;
  document.getElementById('slogan2').textContent = languageData.main.slogan.slogan2;

  // Update the navigation menu
  document.getElementById('nav_main').textContent = languageData.main.nav.main;
  document.getElementById('nav_how_we_work').textContent = languageData.main.nav.howwework;
  document.getElementById('nav_faq').textContent = languageData.main.nav.faq;
  document.getElementById('nav_contact_us').textContent = languageData.main.nav.contact;
}

// Retrieve the saved language option and change the language on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguageOption = getSavedLanguageOption();
  if (savedLanguageOption) {
    changeLanguage(savedLanguageOption);
  }
});
