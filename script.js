    // common.js

// Function to set the selected language and store it in a cookie
function setLanguage(language) {
    document.cookie = `selectedLanguage=${language}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  }
  // artists.html or index.html
  
  // Function to change content based on the selected language
  function changeContentBasedOnLanguage() {
    const selectedLanguage = getSelectedLanguage();
    if (selectedLanguage) {
      if (selectedLanguage === 'en') {
        // Implement logic to display content in English
        // For example: document.getElementById('content').innerHTML = 'English Content';
      } else if (selectedLanguage === 'ar') {
        // Implement logic to display content in Arabic
        // For example: document.getElementById('content').innerHTML = 'المحتوى باللغة العربية';
      }
    }
  }
  
  // Call the function to change content based on the selected language
  changeContentBasedOnLanguage();
  
const apiUrl = 'http://localhost:1337/blog-posts';
        
        // Make a GET request to the API
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            // Process and use the retrieved data here
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
          const container = document.getElementById('blog-container'); // Replace with your HTML element
        data.forEach((post) => {
          const postElement = document.createElement('div');
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
          `;
          container.appendChild(postElement);
        });  