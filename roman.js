// Get all chat boxes
const chatBoxes = document.querySelectorAll('.chat-box');

// Get the image and text elements in the header section of the right container
const headerImage = document.querySelector('.right-container .user-img img');
const headerText = document.querySelector('.right-container h4');

// Loop through each chat box
chatBoxes.forEach(chatBox => {
  // Add click event listener to each chat box
  chatBox.addEventListener('click', () => {
    console.log('Chat box clicked');
    
    // Get the image and text inside the clicked chat box
    const chatImage = chatBox.querySelector('.img-box img').src;
    const chatName = chatBox.querySelector('.text-head h4').textContent;

    console.log('Chat Image:', chatImage);
    console.log('Chat Name:', chatName);
    
    // Replace the image and text in the header section of the right container
    headerImage.src = chatImage;
    headerText.textContent = chatName;
  });
});
