  // Function to fetch the HTML content file and apply language translations
  function fetchContentFile(filename) {

    // Replace 'your-content-files-path' with the path to your HTML content files
    let url = `${filename}`;
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch content file (${response.status} ${response.statusText})`);
        }
        console.log(filename)
        return response.text();
      })
      .catch(error => {
        console.error('Error fetching content file:', error);
        throw error; // Rethrow the error to propagate it to the caller
      });
  }     

function updateLanguageOptions(languageData){
    document.getElementById('lang_en').textContent = languageData.main.language.english;
    document.getElementById('lang_ch').textContent = languageData.main.language.chinese;
    document.getElementById('lang_sp').textContent = languageData.main.language.spanish;
    document.getElementById('lang_fr').textContent = languageData.main.language.french;
    document.getElementById('lang_ge').textContent = languageData.main.language.german;  
}


function updateSideMenuOptions(languageData){
            // Update the navigation menu
            document.getElementById('nav_main').textContent = languageData.main.nav.main;
            document.getElementById('nav_how_we_work').textContent = languageData.main.nav.howwework;
            document.getElementById('nav_faq').textContent = languageData.main.nav.faq;
            document.getElementById('nav_contact_us').textContent = languageData.main.nav.contact;
    
}
    // Function to update the page content with the fetched language data
    function updateMainPageContent(languageData) {
        // Update the main slogan
        document.getElementById('slogan1').textContent = languageData.main.slogan.slogan1;
        document.getElementById('slogan2').textContent = languageData.main.slogan.slogan2;

    }
    
function updateHowWeWorkPageContent(languageData) {
    // Update the HTML elements with the fetched content and language data
    document.getElementById('businessType').textContent = languageData.howWeWork.businesstype;
    document.getElementById('header1').textContent = languageData.howWeWork.header.header1;
    document.getElementById('context1').textContent = languageData.howWeWork.context.context1;
    document.getElementById('header2').textContent = languageData.howWeWork.header.header2;
    document.getElementById('element1').textContent = languageData.howWeWork.context.context2.element1;
    document.getElementById('element2').textContent = languageData.howWeWork.context.context2.element2;
    document.getElementById('element3').textContent = languageData.howWeWork.context.context2.element3;
    document.getElementById('element4').textContent = languageData.howWeWork.context.context2.element4;
    document.getElementById('header3').textContent = languageData.howWeWork.header.header3;
    document.getElementById('element1').textContent = languageData.howWeWork.context.context3.element.element1;
    document.getElementById('element2').textContent = languageData.howWeWork.context.context3.element.element2;
    document.getElementById('element3').textContent = languageData.howWeWork.context.context3.element.element3;
    updateLanguageOptions(languageData);
}

    // Function to update the page content with the fetched language data
function updateFaqPageContent(languageData) {
    document.getElementById('question1').textContent = languageData.faq.questions.question1;
    document.getElementById('question2').textContent = languageData.faq.questions.question2;
    document.getElementById('question3').textContent = languageData.faq.questions.question3;
    document.getElementById('question4').textContent = languageData.faq.questions.question4;
    document.getElementById('question5').textContent = languageData.faq.questions.question5;

    document.getElementById('answer1').textContent = languageData.faq.answers.answer1;
    document.getElementById('answer2').textContent = languageData.faq.answers.answer2;
    document.getElementById('answer3').textContent = languageData.faq.answers.answer3;
    document.getElementById('answer4').textContent = languageData.faq.answers.answer4;
    document.getElementById('answer5').textContent = languageData.faq.answers.answer5;
    updateLanguageOptions(languageData);
}

        // Function to update the page content with the fetched language data
function updateContactUsPageContent(languageData, commonData) {
    console.log(document)
     document.getElementById('message1').textContent = languageData.contactUs.message_simple_version.message1;
     document.getElementById('message2').textContent = languageData.contactUs.message_simple_version.message2;
     
     // Update the form labels
     document.getElementById('email1').textContent = commonData.email.google;
     document.getElementById('email2').textContent = commonData.email.aliyun;  
     updateLanguageOptions(languageData);  
}