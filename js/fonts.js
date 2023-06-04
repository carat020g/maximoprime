// Font options for each language
const fontOptions = {
    en: {
      headingFont: 'Font2',
      paragraphFont: 'Font3',
    },
    sp: {
      headingFont: 'Font5',
      paragraphFont: 'Font6',
    },
    ch: {
      headingFont: 'ZCOOL XiaoWei',
      paragraphFont: 'ZCOOL XiaoWei',
    },
    fr: {

    },
    ge: {

    }
  };
  
  // Set default language to English
  let currentLanguage = 'en';
  
  // Listen for click events on language links
  document.querySelectorAll('.topnav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      // Prevent default navigation
      event.preventDefault();
  
      // Update current language
      currentLanguage = link.id.slice(5);
  
      // Update font styles for the new language
      updateFont();
    });
  });
  
  // Function to update the font styles based on the current language
  function updateFont() {
    const fonts = fontOptions[currentLanguage];
  
    // Update body font
    document.body.style.fontFamily = fonts.bodyFont;
  
    // Update heading font
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach((heading) => {
      heading.style.fontFamily = fonts.headingFont;
    });
  
    // Update paragraph font
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph) => {
      paragraph.style.fontFamily = fonts.paragraphFont;
    });
  }
  
  // Initialize the font styles to the default language
  updateFont();
  