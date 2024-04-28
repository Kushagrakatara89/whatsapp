document.addEventListener("DOMContentLoaded", function() {
    const chatBoxes = document.querySelectorAll(".chat-box");
  
    chatBoxes.forEach(function(chatBox) {
      chatBox.addEventListener("click", function() {
        const chatContainer = document.querySelector(".chat-container");
        const messageBoxes = chatContainer.querySelectorAll(".message-box");
  
        messageBoxes.forEach(function(messageBox) {
          messageBox.style.display = "none";
        });
      });
    });
  });
  