const form = document.querySelector('#search-form');
const breedInput = document.querySelector('#breed');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const breed = breedInput.value.toLowerCase();
  getDogImages(breed);
});

async function getDogImages(breed) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    showDogImages(data.message);
  } catch (error) {
    console.log(error);
  }
}

function showDogImages(images) {
  resultsDiv.innerHTML = '';
  images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = 'Dog image Not Found';
    img.onerror = function() {
      this.style.display = "none";
    } 
    resultsDiv.appendChild(img);
  });
}