document.addEventListener('DOMContentLoaded', function () {
    fetch('./Bloques/carousel.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('myCarousel').innerHTML = data;
      });
  });