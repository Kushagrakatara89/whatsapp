document.addEventListener('DOMContentLoaded', function() {
    // Image box
    const imageBoxes = document.querySelectorAll('.img-box');
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    imageBoxes.forEach(function(imageBox) {
      const image = imageBox.querySelector('.img-cover');
      image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = image.src;
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  