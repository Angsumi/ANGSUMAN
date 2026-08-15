// Interactive Engine for Reference Design Match

document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileNavMenu = document.getElementById('mobileNavMenu');

    if (mobileNavToggle && mobileNavMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.add('hidden');
            });
        });
    }

    // Contact Modal Triggers
    const contactBtns = [document.getElementById('contactModalBtn'), document.getElementById('heroContactBtn')].filter(Boolean);
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (contactModal) contactModal.classList.add('active');
        });
    });

    if (closeModal && contactModal) {
        closeModal.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) contactModal.classList.remove('active');
        });
    }

    // Navigation Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

});

// Copy to Clipboard with Visual Toast Feedback
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = 'Copied! ✓';
        btnElement.classList.add('bg-gold', 'text-dark-oled');
        
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.classList.remove('bg-gold', 'text-dark-oled');
        }, 2000);
    });
}
