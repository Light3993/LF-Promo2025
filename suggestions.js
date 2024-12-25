document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('suggestionForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Envoi du message à l'email spécifié
        sendEmail('39lightob@gmail.com', subject, message);
    });
    
    function sendEmail(to, subject, message) {
        // Configuration pour l'envoi d'email
        const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }
});