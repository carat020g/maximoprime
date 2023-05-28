document.getElementById('menu1').style.color = '#568826';

// Handle menu item click events
document.getElementById('menu1').addEventListener('click', function() {
    loadContent('about.html');
  });
  
  document.getElementById('menu2').addEventListener('click', function() {
    loadContent('products.html');
  });
  
  document.getElementById('menu3').addEventListener('click', function() {
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
  