let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function changeSlide(direction) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }