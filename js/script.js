
document.addEventListener("DOMContentLoaded", function () {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    let index = 0;
  
    function updateCarousel() {
      const offset = -index * 100;
      carouselWrapper.style.transform = `translateX(${offset}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  
    document.querySelector(".prev").addEventListener("click", function () {
      index = (index - 1 + items.length) % items.length;
      updateCarousel();
    });
  
    document.querySelector(".next").addEventListener("click", function () {
      index = (index + 1) % items.length;
      updateCarousel();
    });
  
    dots.forEach((dot, i) => {
      dot.addEventListener("click", function () {
        index = i;
        updateCarousel();
      });
    });
  
    updateCarousel(); // Initialize
  });
  