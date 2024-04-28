document.addEventListener('DOMContentLoaded', function() {
    const xMarkIcon = document.querySelector('.notif-box .fa-solid.fa-xmark');
    const notifBox = document.querySelector('.notif-box');
  
    xMarkIcon.addEventListener('click', function() {
      notifBox.style.display = 'none';
    });
  });
  