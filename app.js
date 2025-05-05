const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});



// SLIDESHOW LOGIC
const images = [
  "images/dart.jpg",
  "images/dart1.jpg",
  "images/dart2.jpg",
  "images/dart3.jpg"
];

let currentIndex = 0;
const imgElement = document.getElementById("main__img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showImage(index) {
  imgElement.style.opacity = 0;
  imgElement.style.transform = "translateX(-50%)";
  
  setTimeout(() => {
    imgElement.src = images[index];
    imgElement.style.transform = "translateX(0)";
    imgElement.style.opacity = 1;
  }, 300);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Event listeners per le frecce
nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

// Cambio automatico ogni 2 secondi
setInterval(nextImage, 2000);


// MUSICA SUL SITO
document.getElementById("playPauseBtn").addEventListener("click", function () {
  var audioPlayer = document.getElementById("audioPlayer");

  if (audioPlayer.paused) {
    audioPlayer.play();  // Riprendi la musica
    this.innerHTML = '<i class="fas fa-pause"></i>';  // Mostra icona pause
  } else {
    audioPlayer.pause();  // Pausa la musica
    this.innerHTML = '<i class="fas fa-play"></i>';  // Mostra icona play
  }
});
