(function() {
  'use strict';

  var style = document.createElement('style');
  style.textContent =
    '* { box-sizing: border-box; }' +
    '.slider { position: relative; max-width: 800px; margin: 40px auto; overflow: hidden; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }' +
    '.slides { display: flex; transition: transform 0.4s ease-in-out; }' +
    '.slide { min-width: 100%; height: 400px; background-size: cover; background-position: center; }' +
    '.slider-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.7); border: none; font-size: 28px; padding: 10px 16px; cursor: pointer; border-radius: 50%; transition: background 0.3s; }' +
    '.slider-btn:hover { background: rgba(255,255,255,1); }' +
    '.prev { left: 15px; }' +
    '.next { right: 15px; }' +
    '.dots { text-align: center; padding: 12px; background: #f9f9f9; }' +
    '.dot { display: inline-block; width: 14px; height: 14px; margin: 0 6px; background: #bbb; border-radius: 50%; cursor: pointer; transition: background 0.3s; }' +
    '.dot.active { background: #333; }';
  document.head.appendChild(style);

  var slider = document.createElement('div');
  slider.className = 'slider';

  var slidesContainer = document.createElement('div');
  slidesContainer.className = 'slides';
  slidesContainer.id = 'slides';

  var images = [
    'https://picsum.photos/id/1015/800/400',
    'https://picsum.photos/id/1016/800/400',
    'https://picsum.photos/id/1018/800/400'
  ];

  images.forEach(function(src) {
    var slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = 'url(' + src + ')';
    slidesContainer.appendChild(slide);
  });

  var prevBtn = document.createElement('button');
  prevBtn.className = 'slider-btn prev';
  prevBtn.id = 'prevBtn';
  prevBtn.innerHTML = '&#10094;';

  var nextBtn = document.createElement('button');
  nextBtn.className = 'slider-btn next';
  nextBtn.id = 'nextBtn';
  nextBtn.innerHTML = '&#10095;';

  var dotsContainer = document.createElement('div');
  dotsContainer.className = 'dots';
  dotsContainer.id = 'dotsContainer';

  slider.appendChild(slidesContainer);
  slider.appendChild(prevBtn);
  slider.appendChild(nextBtn);
  slider.appendChild(dotsContainer);
  document.body.appendChild(slider);

  var slideCount = images.length;
  var currentIndex = 0;

  function createDots() {
    for (var i = 0; i < slideCount; i++) {
      var dot = document.createElement('span');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.dataset.index = i;
      dot.addEventListener('click', function() {
        goToSlide(parseInt(this.dataset.index, 10));
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    slidesContainer.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    var dots = dotsContainer.children;
    for (var j = 0; j < dots.length; j++) {
      dots[j].classList.toggle('active', j === currentIndex);
    }
  }

  function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount;
    updateSlider();
  }

  prevBtn.addEventListener('click', function() {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', function() {
    goToSlide(currentIndex + 1);
  });

  createDots();
  updateSlider();
})();
