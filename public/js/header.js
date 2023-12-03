document.addEventListener('DOMContentLoaded', function () {
    fetch('./Bloques/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('myHeader').innerHTML = data;
      });
  });