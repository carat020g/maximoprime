
// Handle menu item click events
document.getElementById('nav_how_we_work').addEventListener('click', function() {
    loadContent('how-we-work.html');
  });
  
  // document.getElementById('mag').addEventListener('click', function() {
  //   loadContent('products.html');
  // });
  
  document.getElementById('nav_faq').addEventListener('click', function() {
    loadContent('faq.html');
  });
  
  // Function to load HTML content
  function loadContent(htmlFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', htmlFile, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  