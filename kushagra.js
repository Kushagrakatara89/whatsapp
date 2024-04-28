document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("messageInput");
    const sendIcon = document.querySelector(".fa-solid.fa-paper-plane");
    const chatContainer = document.querySelector(".chat-container");

    // Load messages from localStorage when the page is loaded
    loadMessages();

    // Add event listener to the send icon
    sendIcon.addEventListener("click", function () {
      sendMessage();
    });

    // Add event listener to input box for "Enter" key
    messageInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });

    function sendMessage() {
      // Retrieve the message typed by the user
      const message = messageInput.value.trim();

      // Check if the message is not empty
      if (message !== "") {
        // Save the message to localStorage
        saveMessage(message);

        // Add the message to the chat container
        addMessageToChat(message);

        // Clear the input box after sending the message
        messageInput.value = "";

        // Scroll to the bottom of the chat container to show the latest message
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }

    // Function to save a message to localStorage
    function saveMessage(message) {
      // Retrieve existing messages from localStorage or initialize an empty array
      const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

      // Add the new message to the array
      messages.push(message);

      // Save the updated array back to localStorage
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }

    // Function to load messages from localStorage and add them to the chat container
    function loadMessages() {
      // Retrieve messages from localStorage
      const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

      // Add each message to the chat container
      messages.forEach(function (message) {
        addMessageToChat(message);
      });
    }

    // Function to add a message to the chat container
    function addMessageToChat(message) {
      // Create a new message box element
      const messageBox = document.createElement("div");
      messageBox.classList.add("message-box", "my-message");
      messageBox.innerHTML = `<p>${message}<br><span>${getCurrentTime()}</span></p>`;

      // Append the message box to the chat container
      chatContainer.appendChild(messageBox);
    }

    // Function to get the current time in HH:MM format
    function getCurrentTime() {
      const now = new


    



Continue generating
    }
