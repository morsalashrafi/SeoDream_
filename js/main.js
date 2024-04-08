// Menu Mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-icon");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerIcon.innerHTML = menu.classList.contains("hidden")
    ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
});


$(".owl-carousel").owlCarousel({
  loop: true,
  margin:20,
  autoplay:true,
  autoplayTimeout :2000 ,
  SmartSpeed:2500,

  // nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});







 