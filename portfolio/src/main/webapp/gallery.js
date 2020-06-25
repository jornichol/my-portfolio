
function addRandomCity() {
  const cities = ["sanfrancisco.jpg","nyc.jpg", "seattle.jpg", "paris.jpg"];

  // Pick a random city.
  const city = cities[Math.floor(Math.random() * cities.length)];

  // Add it to the page.
  document.getElementById('displaycity').src = city;
}
