const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatbot = document.getElementById('close-chatbot');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
  chatbotWindow.style.display = 'flex';
  chatbotToggle.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
  chatbotWindow.style.display = 'none';
  chatbotToggle.style.display = 'block';
});

sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message !== '') {
    addMessage(message, 'user');
    userInput.value = '';
    setTimeout(() => {
      addMessage('Thanks for your message! We\'ll get back to you shortly. 😊', 'bot');
    }, 500);
  }
});

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(`${sender}-message`);
  messageDiv.textContent = text;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
