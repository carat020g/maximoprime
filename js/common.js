document.addEventListener('DOMContentLoaded', function() {
   
    const savedLanguageOption = getSavedLanguageOption();
    if (!savedLanguageOption) {
        savedLanguageOption = 'en';
    }
    
    const langLinks = document.querySelectorAll('.topnav a');
      langLinks.forEach(link => {
        if (link.id === `lang_${savedLanguageOption}`) {
          link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
      });




});