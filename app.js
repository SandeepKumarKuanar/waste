
const fadeImages = document.querySelectorAll('.hidden');
const scrollContainer = document.querySelector('.scroll-container');
scrollContainer.addEventListener('scroll', () => {
  for (const image of fadeImages) {
    if (image.getBoundingClientRect().top < window.innerHeight) {
      image.classList.add('show');
    } else {
      image.classList.remove('show');
    }
  }
});