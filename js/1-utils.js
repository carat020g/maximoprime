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
  