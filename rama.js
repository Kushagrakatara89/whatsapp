document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class "img-box"
    const imgBoxes = document.querySelectorAll('.img-box');
  
    // Loop through each img-box element
    imgBoxes.forEach(function(imgBox) {
      // Add click event listener to the img-box
      imgBox.addEventListener('click', function() {
        // Get the image source
        const imgSrc = imgBox.querySelector('img').src;
  
        // Create a modal container element
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');
  
        // Create a modal content element
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
  
        // Create an image element inside modal content
        const modalImg = document.createElement('img');
        modalImg.src = imgSrc;
  
        // Append the image to the modal content
        modalContent.appendChild(modalImg);
  
        // Append the modal content to the modal container
        modalContainer.appendChild(modalContent);
  
        // Append the modal container to the body
        document.body.appendChild(modalContainer);
  
        // Close modal when clicked outside the image
        modalContainer.addEventListener('click', function(event) {
          if (event.target === modalContainer) {
            modalContainer.remove();
          }
        });
      });
    });
  });
  