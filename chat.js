document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.send-btn');
    const attachButton = document.querySelector('.attach-btn');
    const messagesContainer = document.querySelector('.chat-messages');
    
    // Gestion de l'envoi des messages
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            appendMessage('user', message);
            chatInput.value = '';
        }
    }
    
    // Ajout d'un message dans le conteneur
    function appendMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${content}</p>
                <span class="message-time">${new Date().toLocaleTimeString()}</span>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Événements
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    attachButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,.pdf';
        input.click();
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                appendMessage('user', `Fichier joint: ${file.name}`);
            }
        };
    });
});