//26:28
const chatBody = document.querySelector(".chat-body")
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");

const userData = {
    message: null
}

//Created message element with dynamic classes and return it
const createMessageElement = (content, classes)=>{
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}
//handle outgoing user messages
const handleOutgoingMessage = (e)=>{
    e.preventDefault();
    userData.message = messageInput.value.trim();
    //create user message
   const messageContent = `<div class="message-text">${userData.message}</div>`;
   const outGoingMessageDiv = createMessageElement(messageContent, "user-message")
   chatBody.appendChild(outGoingMessageDiv);
}
// handle enter key press for sending messages
messageInput.addEventListener("keydown", (e)=>{
   const userMessage = e.target.value.trim();
   if(e.key == "Enter" && userMessage)
   {
    handleOutgoingMessage(userMessage);
   }
})

sendMessageButton.addEventListener("click", (e)=>{
    handleOutgoingMessage(e)
})