function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent (data);
    document.body.appendChild(paragraph);
}
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20O';
    xhr.open('Get', url);
    xhr.onload=function() {
        if (xhr.status === 200) {
            // Parse the JSON response
            const response = JSON.parse(xhr.responseText);
            
            // Extract the page content
            const page = response.query.pages[Object.keys(response.query.pages)[0]];
            const extract = page.extract;
            
            // Call the callback function with the extracted data
            callback(extract);
        } else {
            console.error('Failed to fetch data from Wikipedia');
        }
    }
    // Send the request
    xhr.send();
}
// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);