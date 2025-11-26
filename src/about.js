export function initAboutModal() {
    // Select all links that point to #about (desktop and mobile)
    const aboutLinks = document.querySelectorAll('a[href="#about"]');
    const aboutModal = document.getElementById('aboutModal');
    const closeBtn = document.querySelector('.close-about');

    if (!aboutModal) {
        console.warn('About modal element not found');
        return;
    }

    // Open Modal
    if (aboutLinks.length > 0) {
        aboutLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                aboutModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });
    }

    // Close Modal Function
    const closeModal = () => {
        aboutModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close on X button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on click outside
    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && aboutModal.classList.contains('active')) {
            closeModal();
        }
    });
}
