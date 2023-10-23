const apiUrl = ''; // Replace with your Strapi server URL
const contentContainer = document.getElementById('content');

fetch(`${apiUrl}/articles`)
    .then(response => response.json())
    .then(data => {
        // Process the data and generate HTML content
        const articles = data.map(article => `
            <div class="article">
                <h2>${article.title}</h2>
                <p>${article.content}</p>
            </div>
        `).join('');

        contentContainer.innerHTML = articles;
    })
    .catch(error => console.error('Error fetching data:', error));
