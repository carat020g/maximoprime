document.addEventListener('DOMContentLoaded', function() {
   
  let savedLanguageOption = getSavedLanguageOption();
  if (!savedLanguageOption) {
      savedLanguageOption = 'en';
  }
  
    
    let langLinks = document.querySelectorAll('.topnav a');
      langLinks.forEach(link => {
        if (link.id === `lang_${savedLanguageOption}`) {
          link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
      });

  fetchLanguageData(savedLanguageOption)
    .then(([languageData]) => {
        let linkId = getSavedSideMenuOption();
            fetchContentFile('main-content.html')
            .then(content => {
                document.getElementById('content').innerHTML = content;
                updateMainPageContent(languageData, content);
            })

          }).catch(error => {
                    console.error('Error fetching language data:', error);
                });

});