const menuToggle = document.getElementById("menu-toggle");
const navlink = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
    navlink.classList.toggle('show');
});





// Auto Image Slideshow
const notification = document.getElementById("myimage");

const images = [
  { src: "./image/tropical-fruit.png", alt: "Image 2" },
  { src: "./image/pomegranate-juice.png", alt: "Image 3" },
  { src: "./image/fruit-juice-splash.png", alt: "Image 4" },
  { src: "./image/tropical-smoothie.png", alt: "Image 5" },
  { src: "./image/glass.png", alt: "Image 1" }
];

let index = 0;

// change image every 4 seconds
setInterval(() => {
  notification.src = images[index].src;
  notification.alt = images[index].alt;
  index = (index + 1) % images.length; // loop back to start
}, 4000);
