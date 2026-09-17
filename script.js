// Efecto visual para la barra de navegación al hacer scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Lógica básica para el menú hamburguesa (Para expansión futura en móviles)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Si la pantalla es pequeña, al hacer click cambia la visibilidad (requerirá más CSS, pero deja las bases listas).
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(13, 13, 18, 0.95)';
        navLinks.style.width = '100%';
        navLinks.style.textAlign = 'center';
        navLinks.style.padding = '20px 0';
    }
});