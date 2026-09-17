window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'], serif: ['Playfair Display', 'serif'] },
            colors: {
                unicorn: {
                    purple: '#4a2545', dark: '#0a0a0a', magenta: '#e83e8c',
                    button: 'rgba(74, 37, 69, 0.4)', buttonHover: 'rgba(74, 37, 69, 0.8)',
                    navText: 'rgba(255,255,255,0.7)', navBorder: 'rgba(232, 62, 140, 0.2)'
                }
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to right, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.8) 40%, rgba(10, 10, 10, 0) 100%)'
            }
        }
    }
};

const roomData = {
    Doctor: { title: 'Clínica Dr. Sienteesta', img: 'https://placehold.co/800x500/222/ddd?text=Dr.+Office+Interior', desc: 'Privacidad absoluta. Cortinas cerradas, tubo listo para examenes exhaustivos. Ambiente clínico con iluminación especial.' },
    Cell: { title: 'La Celda de Contención', img: 'https://placehold.co/800x500/1a1a1a/aaa?text=Holding+Cell+Interior', desc: 'Cumple tu condena rodeado de lujo brutalista. Barras de acero auténticas y camas tipo litera modificadas para tu disfrute.' },
    '50Shades': { title: '50 Sombras de Asier', img: 'https://placehold.co/800x500/3a0a0a/ff3333?text=Red+Room+Interior', desc: 'Totalmente equipada. Luces rojas tenues, cuero premium y accesorios para cuando quieres problemas sin el público.' },
    Amelie: { title: 'Beso de Amelie', img: 'https://placehold.co/800x500/24152a/e83e8c?text=Beso+de+Amelie', desc: 'Una habitación íntima, elegante y llena de detalles inesperados.' },
};

function showMessage(text) {
    const messageBox = document.getElementById('messageBox');
    document.getElementById('messageText').textContent = text;
    messageBox.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => messageBox.classList.add('translate-y-20', 'opacity-0'), 3000);
}

function openGallery(roomKey) {
    const data = roomData[roomKey];
    if (!data) return;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalImage').src = data.img;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('galleryModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

window.showMessage = showMessage;
window.openGallery = openGallery;
window.closeGallery = closeGallery;

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        navbar.classList.toggle('bg-black/80', isScrolled);
        navbar.classList.toggle('nav-glass', !isScrolled);
        navbar.style.borderBottom = isScrolled ? '1px solid rgba(232, 62, 140, 0.5)' : '1px solid rgba(232, 62, 140, 0.2)';
    });

    document.getElementById('mobile-menu-btn').addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
        event.preventDefault();
        mobileMenu.classList.add('hidden');
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight, behavior: 'smooth' });
    }));

    document.getElementById('galleryModal').addEventListener('click', event => {
        if (event.target.id === 'galleryModal') closeGallery();
    });

    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();
        showMessage('Solicitud enviada. Nos pondremos en contacto pronto.');
    });

    document.getElementById('applicationForm').addEventListener('submit', event => {
        event.preventDefault();
        showMessage('Postulación enviada. Revisaremos tu información pronto.');
    });
});
