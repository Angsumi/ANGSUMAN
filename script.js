// Modern Sleek Interactive Features for Angsuman Das Portfolio

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('hidden');
            mobileDrawer.classList.toggle('active');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.add('hidden');
                mobileDrawer.classList.remove('active');
            });
        });
    }

    // 2. Contact Modal Handling
    const contactBtns = [document.getElementById('contactBtn'), document.getElementById('heroContactBtn')].filter(Boolean);
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('active');
        });
    });

    if (closeModal && contactModal) {
        closeModal.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });
    }

    // 3. Scroll Header Transformation
    const header = document.getElementById('navbar-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2');
        } else {
            header.classList.remove('py-2');
        }
    });

    // 4. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.outer-shell, .section-header').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
        revealObserver.observe(el);
    });

});

// Global Clipboard Copy Function with Visual Toast Feedback
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = 'Copied! ✓';
        btnElement.classList.add('bg-emerald-500/20', 'text-emerald-400');
        
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.classList.remove('bg-emerald-500/20', 'text-emerald-400');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
