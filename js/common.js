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

      updateMainPageContent(languageData);

        fetchContentFile('main-content.html')
                  .then(content => {
                      document.getElementById('content').innerHTML = content;
                  })              



});