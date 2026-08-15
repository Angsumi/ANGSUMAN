/* ==========================================================================
   ANGSUMAN DAS - INTERACTIVE ENGINE & 3D SIMULATION SUITE
   - 3D Interactive DNA Double-Helix Particle Canvas Background
   - Interactive 3D Molecular Protein Structure Viewer Canvas
   - AD-BIO-CLI Live Terminal Emulator
   - Web Audio API Sound Synthesizer Engine
   - Research Category Filter Tabs & Magnetic Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive DNA Double Helix Background Canvas
    initDnaCanvas();

    // 2. Interactive 3D Molecular Viewer Canvas
    initMoleculeCanvas();

    // 3. Mouse Cursor Glow Tracking
    initCursorGlow();

    // 4. Mobile Drawer & Scroll Setup
    initNavigation();

    // 5. Scroll Reveal Observer
    initScrollReveal();

});

/* ==========================================================================
   1. DNA Double Helix Canvas Engine (Pure HTML5 Math Simulation)
   ========================================================================== */
function initDnaCanvas() {
    const canvas = document.getElementById('dna-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const numNodes = 45;
    let angle = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function draw() {
        ctx.clearRect(0, 0, width, height);

        const radius = Math.min(width, height) * 0.18;
        const speed = 0.015;
        angle += speed;

        const centerX = width * 0.82 + (mouseX - width / 2) * 0.05;
        const startY = height * 0.15;
        const spacing = (height * 0.75) / numNodes;

        for (let i = 0; i < numNodes; i++) {
            const currentAngle = angle + i * 0.18;
            const y = startY + i * spacing;

            const x1 = centerX + Math.sin(currentAngle) * radius;
            const z1 = Math.cos(currentAngle);
            const scale1 = (z1 + 2) / 3;

            const x2 = centerX + Math.sin(currentAngle + Math.PI) * radius;
            const z2 = Math.cos(currentAngle + Math.PI);
            const scale2 = (z2 + 2) / 3;

            // Draw Base Pair Connecting Hairline
            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(x2, y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 * ((z1 + 1.5) / 2.5)})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Strand 1 Atom Node (Cyan)
            ctx.beginPath();
            ctx.arc(x1, y, 3 * scale1, 0, Math.PI * 2);
            ctx.fillStyle = z1 > 0 ? '#38bdf8' : '#0284c7';
            ctx.shadowBlur = z1 > 0 ? 10 : 0;
            ctx.shadowColor = '#38bdf8';
            ctx.globalAlpha = 0.2 + 0.6 * scale1;
            ctx.fill();

            // Strand 2 Atom Node (Violet/Emerald)
            ctx.beginPath();
            ctx.arc(x2, y, 3 * scale2, 0, Math.PI * 2);
            ctx.fillStyle = z2 > 0 ? '#818cf8' : '#34d399';
            ctx.shadowBlur = z2 > 0 ? 10 : 0;
            ctx.shadowColor = '#818cf8';
            ctx.globalAlpha = 0.2 + 0.6 * scale2;
            ctx.fill();
        }

        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
        requestAnimationFrame(draw);
    }

    draw();
}

/* ==========================================================================
   2. Interactive 3D Protein Structure Molecular Viewer Canvas
   ========================================================================== */
let molMode = 'ribbon';
let molRotationX = 0.4;
let molRotationY = 0.6;
let isDraggingMol = false;
let previousMousePosition = { x: 0, y: 0 };

function initMoleculeCanvas() {
    const canvas = document.getElementById('molecule-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const container = document.getElementById('molecule-container');
    
    function resizeCanvas() {
        if (!container) return;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse Drag Rotation Controls
    container.addEventListener('mousedown', (e) => {
        isDraggingMol = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
        isDraggingMol = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDraggingMol) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        molRotationY += deltaX * 0.01;
        molRotationX += deltaY * 0.01;

        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Generate 3D TLR Protein Atom Coordinates
    const atoms = [];
    const numResidues = 60;
    for (let i = 0; i < numResidues; i++) {
        const t = (i / numResidues) * Math.PI * 4;
        atoms.push({
            x: Math.sin(t) * 70 + Math.sin(i * 0.5) * 20,
            y: (i - numResidues / 2) * 3.5,
            z: Math.cos(t) * 70 + Math.cos(i * 0.5) * 20,
            type: i % 3 === 0 ? 'N' : i % 3 === 1 ? 'CA' : 'O'
        });
    }

    function renderMolecule() {
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        if (!isDraggingMol) {
            molRotationY += 0.005; // Auto rotate when idle
        }

        const cx = width / 2;
        const cy = height / 2;

        const projectedAtoms = atoms.map(atom => {
            // Rotation Y
            let x1 = atom.x * Math.cos(molRotationY) - atom.z * Math.sin(molRotationY);
            let z1 = atom.x * Math.sin(molRotationY) + atom.z * Math.cos(molRotationY);
            let y1 = atom.y;

            // Rotation X
            let y2 = y1 * Math.cos(molRotationX) - z1 * Math.sin(molRotationX);
            let z2 = y1 * Math.sin(molRotationX) + z1 * Math.cos(molRotationX);

            const perspective = 300 / (300 + z2);
            return {
                x: cx + x1 * perspective,
                y: cy + y2 * perspective,
                z: z2,
                scale: perspective,
                type: atom.type
            };
        });

        // Sort by Z for Depth Buffer
        projectedAtoms.sort((a, b) => b.z - a.z);

        // Render Connections (Ribbon / Lattice)
        if (molMode === 'ribbon' || molMode === 'bonds') {
            ctx.beginPath();
            for (let i = 0; i < projectedAtoms.length - 1; i++) {
                const a1 = projectedAtoms[i];
                const a2 = projectedAtoms[i + 1];
                ctx.moveTo(a1.x, a1.y);
                ctx.lineTo(a2.x, a2.y);
            }
            ctx.strokeStyle = molMode === 'ribbon' ? 'rgba(56, 189, 248, 0.6)' : 'rgba(129, 140, 248, 0.4)';
            ctx.lineWidth = molMode === 'ribbon' ? 3 : 1;
            ctx.stroke();
        }

        // Render Atoms
        projectedAtoms.forEach(atom => {
            ctx.beginPath();
            const r = (atom.type === 'CA' ? 6 : 4) * atom.scale;
            ctx.arc(atom.x, atom.y, Math.max(1, r), 0, Math.PI * 2);

            let color = '#38bdf8';
            if (atom.type === 'N') color = '#818cf8';
            if (atom.type === 'O') color = '#34d399';

            ctx.fillStyle = color;
            ctx.globalAlpha = 0.3 + (atom.scale * 0.7);
            ctx.fill();
        });

        ctx.globalAlpha = 1.0;
        requestAnimationFrame(renderMolecule);
    }

    renderMolecule();
}

function setMoleculeMode(mode) {
    molMode = mode;
    document.querySelectorAll('.mol-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
        btn.classList.add('bg-white/5', 'text-slate-400', 'border-white/10');
    });

    event.target.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
    event.target.classList.remove('bg-white/5', 'text-slate-400', 'border-white/10');
    playSound(700, 0.05);
}

/* ==========================================================================
   3. AD-BIO-CLI Live Terminal Emulator
   ========================================================================== */
const terminalCmds = {
    'blastn': `
<span class="text-cyan-400">[BLASTN 2.14.0+]</span> Executing nucleotide query vs NCBI GenBank...
Query: >TLR4_HomoSapiens (Length: 2520 bp)
Identity: 99.8% | E-value: 0.0 | Bit-score: 4612
Target: Human Toll-like receptor 4 (TLR4), mRNA [NM_138554.4]
Alignment Summary: Matches leucine-rich repeat (LRR) domain & TIR signaling region.
    `,

    'net-rank': `
<span class="text-emerald-400">[CSIR-UGC NET JRF VERIFICATION]</span>
Candidate Name: Angsuman Das
Subject: Life Sciences (Dec 2022 - June 2023)
Status: JRF (NET) - UGC Qualified
Rank: <span class="text-emerald-400 font-bold">AIR 180</span> | Percentile: <span class="text-cyan-400 font-bold">97.50%</span>
Award Letter: Document reference [csir_net_jrf_award_letter.jpg] verified.
    `,

    'adre-info': `
<span class="text-amber-400">[ADRE 2025 APPOINTMENT LOG]</span>
Assam Direct Recruitment Examination (Grade III - Graduate Level)
Candidate: Angsuman Das
Selection Post: Junior Assistant
Status: <span class="text-emerald-400 font-bold">Selected (2025)</span> | Govt of Assam Appointment Letter Verified.
    `,

    'papers': `
<span class="text-violet-400">[PUBLICATIONS INDEX] Total 8 Peer-Reviewed Papers</span>
1. A Green Solution to Industrial Dye Pollution (Environmental Biotech)
2. Analysis of Physico-Chemical Parameters of Aquatic Ecosystems (Ecology)
3. Aquatic Remedies: Ethnopharmacological Study (Ethnozoology)
4. Clinical Applications of Mass Spectrometry (Toxicology)
5. Conversational Interfaces in Bioinformatics (AI & Bio)
6. Cultural Zoology of Assamese Tribes (Ethnozoology)
7. GPT Vision Meets Taxonomy (AI & Taxonomy)
8. Green Heritage of Assam Meta-Analysis (Ethnopharmacology)
    `,

    'help': `
Available Commands:
 - <span class="text-cyan-400">blastn</span> : Run BLAST search on TLR4 target sequence
 - <span class="text-emerald-400">net-rank</span> : Inspect CSIR-NET JRF AIR 180 verification
 - <span class="text-amber-400">adre-info</span> : Check ADRE Grade III appointment status
 - <span class="text-violet-400">papers</span> : List all published research manuscripts
 - <span class="text-slate-400">clear</span> : Clear terminal screen
    `
};

function runTerminalCmd(cmdKey) {
    const termBody = document.getElementById('terminal-body');
    if (!termBody) return;

    playSound(600, 0.04);

    if (cmdKey === 'clear') {
        termBody.innerHTML = '<div><span class="text-cyan-400">angsuman@bio-node-01:~$</span> Terminal cleared.</div>';
        return;
    }

    const output = terminalCmds[cmdKey] || `Command not recognized: '${cmdKey}'. Type 'help' for options.`;
    
    const cmdLine = document.createElement('div');
    cmdLine.innerHTML = `<span class="text-cyan-400">angsuman@bio-node-01:~$</span> ${cmdKey}`;
    termBody.appendChild(cmdLine);

    const outLine = document.createElement('div');
    outLine.className = 'text-slate-300 pl-4 border-l border-cyan-500/30';
    outLine.innerHTML = output;
    termBody.appendChild(outLine);

    termBody.scrollTop = termBody.scrollHeight;
}

function handleTerminalEnter(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('terminal-input');
        const val = input.value.trim().toLowerCase();
        if (val) {
            runTerminalCmd(val);
            input.value = '';
        }
    }
}

/* ==========================================================================
   4. Research Category Filter Tabs
   ========================================================================== */
function filterPapers(category, btnElement) {
    playSound(550, 0.03);

    document.querySelectorAll('.paper-tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
        btn.classList.add('bg-white/5', 'text-slate-400', 'border-white/10');
    });

    btnElement.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
    btnElement.classList.remove('bg-white/5', 'text-slate-400', 'border-white/10');

    const cards = document.querySelectorAll('.paper-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = 'block';
            card.classList.add('opacity-100', 'scale-100');
        } else {
            card.style.display = 'none';
        }
    });
}

/* ==========================================================================
   5. Mouse Cursor Glow Tracking
   ========================================================================== */
function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    window.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
}

/* ==========================================================================
   6. Navigation & Scroll Reveal
   ========================================================================== */
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('hidden');
            mobileDrawer.classList.toggle('active');
            playSound(500, 0.04);
        });
    }

    // Modal Handling
    const contactBtns = [document.getElementById('contactBtn'), document.getElementById('heroContactBtn')].filter(Boolean);
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('active');
            playSound(800, 0.05);
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
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.outer-shell, .section-header').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
        observer.observe(el);
    });
}

/* ==========================================================================
   7. Web Audio API Sound Synthesizer Engine
   ========================================================================== */
let audioCtx = null;
let soundMuted = true; // Muted by default

function playSound(freq, duration) {
    if (soundMuted) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
        // Audio fallback
    }
}

const soundToggleBtn = document.getElementById('soundToggleBtn');
if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
        soundMuted = !soundMuted;
        const icon = document.getElementById('soundIcon');
        if (soundMuted) {
            icon.className = 'fas fa-volume-xmark';
            soundToggleBtn.classList.remove('text-cyan-400', 'border-cyan-400/40');
        } else {
            icon.className = 'fas fa-volume-high text-cyan-400';
            soundToggleBtn.classList.add('border-cyan-400/40');
            playSound(880, 0.1);
        }
    });
}

function copyToClipboard(text, btnElement) {
    playSound(900, 0.06);
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = 'Copied! ✓';
        btnElement.classList.add('bg-emerald-500/20', 'text-emerald-400');
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.classList.remove('bg-emerald-500/20', 'text-emerald-400');
        }, 2000);
    });
}
