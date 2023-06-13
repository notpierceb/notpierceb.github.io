// Fetch data from NASA API
fetch('https://api.nasa.gov/planetary/apod?api_key=I9jyxb3gF8cjbgGWFWkej5EnlyRgZ89rqwMhvelr')
  .then(response => response.json())
  .then(data => {
    // Set image source
    document.getElementById('image').src = data.url;
    
    // Set explanation text
    document.getElementById('explanation').textContent = data.explanation;

    document.getElementById('date').textContent = data.date;
  })
  .catch(error => {
    console.log('Error:', error);
  });