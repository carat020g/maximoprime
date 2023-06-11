document.addEventListener('DOMContentLoaded', function() {
    let langLinks = document.querySelectorAll('.topnav a');
    langLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove active class from all links
        langLinks.forEach(link => {
        link.classList.remove('active');
        });
        // Set current link as active
        this.classList.add('active');

        // Get the language ID from the link's ID
        let languageId = this.id.replace('lang_', '');

        // Save the selected language option
        saveLanguageOption(languageId);

        // Change the website language
        changeLanguage(languageId);
    });
    });

    // Language change logic
    function changeLanguage(languageId) {

    Promise.all([
        fetchLanguageData(languageId),
        fetchCommonData(),
    ])
    .then(([languageData, commonData]) => {
        console.log(languageId)
        console.log(languageData)
        let linkId = getSavedSideMenuOption();
        updateLanguageOptions(languageData);
        // Implement the content change logic based on the link ID and language data
        switch (linkId) {
        case 'nav_main':
            // Code to show the main content
            fetchContentFile('main-content.html')
            .then(content => {
                document.getElementById('content').innerHTML = content;
                updateMainPageContent(languageData, content);
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
                console.error('Error fetching "How We Work" content:', error);
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
                console.error('Error fetching "How We Work" content:', error);
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

  

});