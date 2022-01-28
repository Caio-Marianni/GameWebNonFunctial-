[{"id": 312,"name": "Super Mario Odyssey","price": 197.88,"score": 100,"image": "super-mario-odyssey.png"},{"id": 201,"name": "Call Of Duty Infinite Warfare","price": 49.99,"score": 80,"image": "call-of-duty-infinite-warfare.png"},{"id": 102,"name": "The Witcher III Wild Hunt","price": 119.5,"score": 250,"image": "the-witcher-iii-wild-hunt.png"},{"id": 99,"name": "Call Of Duty WWII","price": 249.99,"score": 205,"image": "call-of-duty-wwii.png"},{"id": 12,"name": "Mortal Kombat XL","price": 69.99,"score": 150,"image": "mortal-kombat-xl.png"},{"id": 74,"name": "Shards of Darkness","price": 71.94,"score": 400,"image": "shards-of-darkness.png"},{"id": 31,"name": "Terra Média: Sombras de Mordor","price": 79.99,"score": 50,"image": "terra-media-sombras-de-mordor.png"},{"id": 420,"name": "FIFA 18","price": 195.39,"score": 325,"image": "fifa-18.png"},{"id": 501,"name": "Horizon Zero Dawn","price": 115.8,"score": 290,"image": "horizon-zero-dawn.png"}]







var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

