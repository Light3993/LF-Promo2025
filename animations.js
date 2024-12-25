// Animations pour les éléments flottants
document.addEventListener('DOMContentLoaded', () => {
    // Animation des icônes au survol
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.color = '#00ff9d';
            icon.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
            icon.style.color = '';
        });
    });

    // Animation du titre de bienvenue
    const title = document.querySelector('.animated-title');
    if (title) {
        title.innerHTML = title.textContent.split('').map(letter => 
            `<span style="display: inline-block">${letter}</span>`
        ).join('');

        const letters = title.querySelectorAll('span');
        letters.forEach((letter, index) => {
            letter.style.animation = `float 3s infinite ease-in-out ${index * 0.1}s`;
        });
    }
});