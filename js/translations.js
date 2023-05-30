const languageOptions = {
    common:{
      email: {
        gmail: "with.maximoprime@gmail.com",
        aliyun: "maximoprime@aliyun.com"
      }
    },
    en: {
      slogan: {
        slogan1: "We Deliver",
        slogal2: "Opportunitiess",  
      },
      nav: {
        main: "MAIN",
        about: "ABOUT",
        produdcts: "PRODUCTS",
        faq: "FAQ",
        contact: "CONTACT",  
      },
      about: {
      },
      products: {
      }, 
      faq: {
        questions:{
           question1: "What kind of marketing or promotional support do you offer to promote sales?",
           question2: "What is the process of placing order and delivery on your platform?",
           question3: "How do you handle product returns and exchanges?",
           question4: "How do you handle customer communications?",
           question5: "What is the process of becoming a dropshipping partner?"
        },
        answers: {
          answer1:"Multi-channel market search. Sales events, promotions. But most of all, in order to play effective sales strategies, it is important to build strong partnership with manufacturers beforehand. We look forward to collaborating each other to ",
          answer2:"Once our customer places an order on our online shopping mall, I contact ",
          answer3:"Also, We try to contact with the customer and get to know the reason of return/exchange. These communications become great resrouce for improving product's quality and progress for both my company and manufactures. and When I get a request for return or exchange of a product on Amazon FBA, I can simply ask Amazon to proceed return/exchange process. With other products which are not using FBA service, ",
          answer4:"expose my company's product as much as possible ",
          answer5:"To become our dropshipping partner, please go to [contact] page and fill the form. Hope to share opportunities in our partnership and also, provide opportunities to our customers.",
        }
      },
      contact: {
        input: {
          companyName: "Company Name",
          email : "email",
          
        },
        copyright: "",
      }
    },
    es: {
      welcome: "Bienvenidos a mi sitio web!",
      about: "Sobre Mí",
      contact: "Contáctame",
    },
    // Other language options...
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
  
      // Update text on website to new language
      updateText();
    });
  });
  
  // Function to update the text on the website to the current language
  function updateText() {
    const translations = languageOptions[currentLanguage];
  
    // document.querySelector('.welcome').textContent = translations.welcome;
    // document.querySelector('.about').textContent = translations.about;
    // document.querySelector('.contact').textContent = translations.contact;
  }
  
  // Initialize the text on the website to the default language
  updateText();
  