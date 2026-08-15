// Interactive Engine for Soothing Editorial Minimalist Web App

document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Manager (Light / Dark Switcher)
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.removeAttribute('data-theme');
        updateThemeIcon(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                updateThemeIcon(false);
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon(true);
            }
        });
    }

    function updateThemeIcon(isDark) {
        if (!themeToggleBtn) return;
        if (isDark) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun text-amber-400"></i>';
            themeToggleBtn.setAttribute('title', 'Switch to Soothing Light Mode');
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon text-sky-600"></i>';
            themeToggleBtn.setAttribute('title', 'Switch to Dark Slate Mode');
        }
    }

    // 2. Mobile Navigation Toggle
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

    // 3. Contact Modal Triggers
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

    // 4. Document Lightbox Modal Handlers
    const docLightboxModal = document.getElementById('docLightboxModal');
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');

    if (closeLightboxBtn && docLightboxModal) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
        docLightboxModal.addEventListener('click', (e) => {
            if (e.target === docLightboxModal) closeLightbox();
        });
    }

    // 5. Navigation Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 140) {
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

    // 6. Smooth Intersection Observer for entry reveals
    const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.soothing-card, .stat-box, .paper-box, .col-section').forEach(el => {
        el.classList.add('transition-all', 'duration-500', 'ease-out');
        observer.observe(el);
    });

});

// Global Function: Open Interactive Document Lightbox
function openLightbox(url, title, type = 'pdf') {
    const lightboxModal = document.getElementById('docLightboxModal');
    const titleEl = document.getElementById('lightboxTitle');
    const frameContainer = document.getElementById('lightboxFrameContainer');
    const downloadBtn = document.getElementById('lightboxDownloadBtn');

    if (!lightboxModal || !frameContainer) return;

    titleEl.innerText = title;
    downloadBtn.href = url;

    if (type === 'image' || url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png')) {
        frameContainer.innerHTML = `<img src="${url}" alt="${title}" class="max-w-full max-h-full object-contain mx-auto my-auto rounded-lg shadow-lg">`;
    } else {
        frameContainer.innerHTML = `<iframe src="${url}" class="w-full h-full border-0 rounded-lg"></iframe>`;
    }

    lightboxModal.classList.add('active');
}

// Global Function: Close Document Lightbox
function closeLightbox() {
    const lightboxModal = document.getElementById('docLightboxModal');
    const frameContainer = document.getElementById('lightboxFrameContainer');
    if (lightboxModal) lightboxModal.classList.remove('active');
    if (frameContainer) frameContainer.innerHTML = '';
}

// Global Function: Filter Publications by Category
function filterPublications(category, btnElement) {
    const paperBoxes = document.querySelectorAll('.paper-box');
    const tabBtns = document.querySelectorAll('.tab-filter-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    paperBoxes.forEach(box => {
        const cat = box.getAttribute('data-category');
        if (category === 'all' || cat === category) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });
}

// Global Function: Search Skills
function filterSkills() {
    const query = document.getElementById('skillSearchInput').value.toLowerCase();
    const boxes = document.querySelectorAll('.skill-icon-box');

    boxes.forEach(box => {
        const name = (box.getAttribute('title') || '').toLowerCase();
        if (name.includes(query)) {
            box.style.opacity = '1';
            box.style.transform = 'scale(1)';
        } else {
            box.style.opacity = '0.25';
            box.style.transform = 'scale(0.92)';
        }
    });
}

// Copy to Clipboard with Visual Feedback
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = 'Copied! ✓';
        btnElement.classList.add('bg-sky-600', 'text-white');
        
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.classList.remove('bg-sky-600', 'text-white');
        }, 2000);
    });
}
