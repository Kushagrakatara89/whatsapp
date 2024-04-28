document.addEventListener("DOMContentLoaded", function() {
    // Get all message boxes in the chat container
    const messageBoxes = document.querySelectorAll(".chat-container .message-box");
  
    // Function to format the message and timestamp
    function formatMessage(messageBox) {
      // Get the message and timestamp elements from the message box
      const messageElement = messageBox.querySelector("p");
      const timestampElement = messageBox.querySelector("span");
  
      // Format the message with Poppins font
      messageElement.style.fontFamily = "Poppins";
  
      // Format the timestamp with smaller size and grey color
      timestampElement.style.fontSize = "small";
      timestampElement.style.color = "grey";
      timestampElement.style.float = "right";
    }
  
    // Loop through each message box and format its content
    messageBoxes.forEach(function(messageBox) {
      formatMessage(messageBox);
    });
  });
  