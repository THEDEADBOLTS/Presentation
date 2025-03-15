// Pas de changement nécessaire dans script.js pour cette mise à jour
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Lien cliqué : ${link.textContent}`);
            link.classList.add('clicked');
            setTimeout(() => {
                link.classList.remove('clicked');
            }, 300);
        });
    });
});