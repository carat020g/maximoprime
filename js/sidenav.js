document.addEventListener('DOMContentLoaded', function() {
    
    let languageId = getSavedLanguageOption();
    // ex. linkId = 'nav_main', languageId = 'en'
    function showContent(linkId, languageId) {
        // Clear any existing content


        // Fetch the language JSON file

        Promise.all([
            fetchLanguageData(languageId),
            fetchCommonData()
        ])
        .then(([languageData, commonData]) => {
            // Implement the content change logic based on the link ID and language data
            switch (linkId) {
            case 'nav_main':
                // Code to show the main content
                fetchContentFile('index.html')
                .then(content => {
                    document.getElementById('content').innerHTML = content;
                })
                break;
            case 'nav_how_we_work':
                // Code to fetch and show the "How We Work" content
                fetchContentFile('how-we-work.html')
                .then(content => {
                    document.getElementById('content').innerHTML = content;
                    updateHowWeWorkPageContent(languageData, content);
                })
                .catch(error => {
                    console.error('Error fetching "How We Work" content:', error);
                });
            break;
            case 'nav_faq':
                    // Code to fetch and show the "How We Work" content
                fetchContentFile('faq.html')
                .then(content => {
                    console.log(document);
                    document.getElementById('content').innerHTML = content;
                    updateFaqPageContent(languageData);
                })
                .catch(error => {
                    console.error('Error fetching "FAQ" content:', error);
                });
            break;
            case 'nav_contact_us':
                // Code to fetch and show the "How We Work" content
                fetchContentFile('contact-us.html')
                .then(content => {
                    document.getElementById('content').innerHTML = content;
                    updateContactUsPageContent(languageData, commonData, content);
                })
                .catch(error => {
                    console.error('Error fetching "Contact Us" content:', error);
                });
            break;
            // Add more cases for other navigation links as needed
            default:
                break;
            }
        })
        .catch(error => {
            console.error('Error fetching language data:', error);
        });
    }
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


    // Add event listeners to the navigation links
    document.getElementById('nav_main').addEventListener('click', function(event) {
        event.preventDefault();
        saveSideMenuOption('nav_main');
        showContent('nav_main', `${languageId}`);
    });

    document.getElementById('nav_how_we_work').addEventListener('click', function(event) {
        event.preventDefault();
        saveSideMenuOption('nav_how_we_work');
        showContent('nav_how_we_work', `${languageId}`);
    });

    document.getElementById('nav_faq').addEventListener('click', function(event) {
        event.preventDefault();
        saveSideMenuOption('nav_faq');
        showContent('nav_faq', `${languageId}`);
    });

    document.getElementById('nav_contact_us').addEventListener('click', function(event) {
        event.preventDefault();
        saveSideMenuOption('nav_contact_us');
        showContent('nav_contact_us', `${languageId}`);
    });

});
  