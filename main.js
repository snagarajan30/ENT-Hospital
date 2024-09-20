
// Initial display
showSlide(currentIndex);

const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('active');
});





       