function getSavedLanguageOption() {
    // Use your preferred method to retrieve the saved language option
    // Example using localStorage:
    return localStorage.getItem('languageOption');
  }
    // Function to save the selected language option
    function saveLanguageOption(languageId) {
      // Use your preferred method (e.g., localStorage, cookies) to save the language option
      // Example using localStorage:
          localStorage.setItem('languageOption', languageId);
      }

  function getSavedSideMenuOption(){
    return localStorage.getItem('sideMenuOption');
  }
  function saveSideMenuOption(sideMenuId) {
    // Use your preferred method (e.g., localStorage, cookies) to save the language option
    // Example using localStorage:
        localStorage.setItem('sideMenuOption', sideMenuId);
    }
  
    function fetchCommonData(){
      return fetch('json/common.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch language data (${response.status} ${response.statusText})`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching language data:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
    }

  // Function to fetch language data
  function fetchLanguageData(languageId) {
    // Define the mapping between language IDs and JSON file names
    const languageFiles = {
      en: 'json/english.json',
      ch: 'json/chinese.json',
      sp: 'json/spanish.json',
      fr: 'json/french.json',
      ge: 'json/german.json'
    };
  
    // Get the file name based on the language ID
    const fileName = languageFiles[languageId];
  
    // Return a promise that fetches the language data from the JSON file
    return fetch(fileName)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch language data (${response.status} ${response.statusText})`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching language data:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
  }