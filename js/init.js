document.addEventListener('DOMContentLoaded', function() {
   
  let savedLanguageOption = getSavedLanguageOption();
  if (!savedLanguageOption) {
    saveLanguageOption('en');
      savedLanguageOption = 'en';
  }

  let savedSideMenuOption = getSavedLanguageOption();
  if (!savedSideMenuOption) {
    saveSideMenuOption('nav_main');
    savedSideMenuOption = 'nav_main';
  }
  
    let langLinks = document.querySelectorAll('.topnav a');
      langLinks.forEach(link => {
        if (link.id === `lang_${savedLanguageOption}`) {
          link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
      });

  fetchLanguageData('en')
    .then(languageData => {
            fetchContentFile('main-content.html')
            .then(content => {
              console.log("DATA IS :")
              console.log(languageData);
                document.getElementById('content').innerHTML = content;
                updateLanguageOptions(languageData);
                updateSideMenuOptions(languageData);
                updateMainPageContent(languageData, content);
            })
          }).catch(error => {
                    console.error('Error fetching language data:', error);
          });

});