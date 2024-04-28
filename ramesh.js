document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.querySelector('.message-input');
    const chatList = document.querySelector('.chat-list');
  
    // Load messages from local storage when the page loads
    loadMessages();
  
    // Event listener for sending a message
    messageInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
          saveMessage(messageText); // Save the message
          appendMessage(messageText); // Append the message to the chat list
          messageInput.value = ''; // Clear the input field
        }
      }
    });
  
    // Function to save a message to local storage
    function saveMessage(message) {
      let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
      messages.push(message);
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  
    // Function to load messages from local storage
    function loadMessages() {
      let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
      messages.forEach(message => {
        appendMessage(message);
      });
    }
  
    // Function to append a message to the chat list
    function appendMessage(message) {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat-box');
      chatBox.textContent = message;
      chatList.appendChild(chatBox);
    }
  });
  