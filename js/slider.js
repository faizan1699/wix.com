var sliderContainer = document.querySelector('.slider-container');
var slider = sliderContainer.querySelector('.slider');
var images = slider.getElementsByTagName('img');
var prevButton = sliderContainer.querySelector('.prev-button');
var nextButton = sliderContainer.querySelector('.next-button');
var currentIndex = 0;
var interval = 2000; // 2 seconds

function slideNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function slidePrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function updateSlider() {
  var translateValue = -currentIndex * 100;
  slider.style.transform = 'translateX(' + translateValue + '%)';
}

nextButton.addEventListener('click', slideNext);
prevButton.addEventListener('click', slidePrev);

var autoSlideInterval = setInterval(slideNext, interval);

sliderContainer.addEventListener('mouseenter', function() {
  clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener('mouseleave', function() {
  autoSlideInterval = setInterval(slideNext, interval);
});

// Duplicate the first image and append it to the end
var firstImageClone = images[0].cloneNode(true);
slider.appendChild(firstImageClone);

// Adjust the slider position for the duplicate image
slider.style.transform = 'translateX(0)';

// Update the slider position on window resize
window.addEventListener('resize', function() {
  updateSlider();
});
