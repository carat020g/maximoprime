
// Function to show content based on the clicked link
function showContent(linkId) {
  // Clear any existing content
  document.getElementById('content').innerHTML = '';

  // Implement the content change logic based on the link ID
  switch (linkId) {
    case 'nav_main':
      // Code to show the main content
      document.getElementById('content').innerHTML = '<h1>Main Content</h1>';
      break;
    case 'nav_how_we_work':
      // Code to fetch and show the "How We Work" content
      fetch('how-we-work.html')
        .then(response => response.text())
        .then(content => {
          document.getElementById('content').innerHTML = content;
        })
        .catch(error => {
          console.error('Error fetching "How We Work" content:', error);
        });
      break;
    case 'nav_faq':
      // Code to fetch and show the FAQ content
      fetch('faq.html')
        .then(response => response.text())
        .then(content => {
          document.getElementById('content').innerHTML = content;
        })
        .catch(error => {
          console.error('Error fetching FAQ content:', error);
        });
      break;
    case 'nav_contact_us':
      // Code to fetch and show the Contact Us content
      fetch('contact-us.html')
        .then(response => response.text())
        .then(content => {
          document.getElementById('content').innerHTML = content;
        })
        .catch(error => {
          console.error('Error fetching Contact Us content:', error);
        });
      break;
    // Add more cases for other navigation links as needed
    default:
      break;
  }
}
