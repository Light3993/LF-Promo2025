// Gestionnaire principal du site
document.addEventListener('DOMContentLoaded', () => {
    // Gestion de la navigation active
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Système de notification pour les nouvelles actualités
    function checkNewContent() {
        // Simulation de nouvelles notifications
        const hasNewContent = Math.random() > 0.7;
        if (hasNewContent) {
            showNotification('Nouveau contenu disponible !');
        }
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Vérification périodique des nouveaux contenus
    setInterval(checkNewContent, 30000);
});