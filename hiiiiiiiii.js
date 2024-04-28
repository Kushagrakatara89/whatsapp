document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.querySelector(".chatbox-input input");
  const microphoneIcon = document.querySelector(".fa-solid.fa-microphone");
  const sendIcon = document.querySelector(".fa-solid.fa-paper-plane"); // Assuming you have a send icon
  
  // Add event listener to the input box for input event
  messageInput.addEventListener("input", function () {
    // Retrieve the message typed by the user
    const message = messageInput.value.trim();

    // Toggle the display of microphone and send icons based on message presence
    if (message !== "") {
      microphoneIcon.style.display = "none";
      sendIcon.style.display = "inline-block"; // Display the send icon
    } else {
      microphoneIcon.style.display = "inline-block";
      sendIcon.style.display = "none"; // Hide the send icon
    }
  });

  // Add event listener to the send icon
  sendIcon.addEventListener("click", function () {
    // Retrieve the message typed by the user
    const message = messageInput.value.trim();

    // Check if the message is not empty
    if (message !== "") {
      // Create a new message box element
      const messageBox = document.createElement("div");
      messageBox.classList.add("message-box", "my-message");
      messageBox.innerHTML = `<p>${message}<br><span>${getCurrentTime()}</span></p>`;

      // Append the message box to the chat container
      chatContainer.appendChild(messageBox);

      // Clear the input box after sending the message
      messageInput.value = "";

      // Toggle back to the microphone icon after sending the message
      microphoneIcon.style.display = "inline-block";
      sendIcon.style.display = "none";
    }
  });

  // Function to get the current time in HH:MM format
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.querySelector(".chatbox-input input");
  const microphoneIcon = document.querySelector(".fa-solid.fa-microphone");
  const sendIcon = document.querySelector(".fa-solid.fa-paper-plane");
  const chatContainer = document.querySelector(".chat-container");

  // Add event listener to the send icon
  sendIcon.addEventListener("click", function () {
    // Retrieve the message typed by the user
    const message = messageInput.value.trim();

    // Check if the message is not empty
    if (message !== "") {
      // Create a new message box element
      const messageBox = document.createElement("div");
      messageBox.classList.add("message-box", "my-message", "slide-in");
      messageBox.innerHTML = `<p>${message}<br><span>${getCurrentTime()}</span></p>`;

      // Append the message box to the chat container
      chatContainer.appendChild(messageBox);

      // Clear the input box after sending the message
      messageInput.value = "";

      // Scroll to the bottom of the chat container to show the latest message
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });

  // Function to get the current time in HH:MM format
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
});
