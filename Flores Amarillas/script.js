const flowerGallery = document.getElementById('flower-gallery');

function createFlower(delay = 0) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.setProperty('--delay', `${delay}s`);

    // Parámetros de pétalos
    const petalCount = 10;
    const petals = [];
    for (let i = 0; i < petalCount; i++) {
        const angle = (360 / petalCount) * i;
        petals.push(
            `<ellipse cx="60" cy="32" rx="12" ry="28" fill="#ffe066" stroke="#ffd700" stroke-width="3"
                opacity="0.95" transform="rotate(${angle} 60 60)"/>`
        );
    }

    flower.innerHTML = `
    <svg viewBox="0 0 120 140">
        <g>
            <!-- Petals -->
            <g>
                ${petals.join('\n')}
            </g>
            <!-- Center -->
            <circle cx="60" cy="60" r="22" fill="#ffd700" stroke="#fffbe0" stroke-width="5" filter="url(#glow)"/>
            <circle cx="60" cy="60" r="10" fill="#fffbe0" opacity="0.7"/>
            <!-- Stem -->
            <rect x="56" y="100" width="8" height="30" rx="4" fill="#6ab04c"/>
        </g>
        <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
    </svg>
    `;
    return flower;
}

// Crear 3 flores con retardo de aparición
for (let i = 0; i < 6; i++) {
    setTimeout(() => {
        flowerGallery.appendChild(createFlower(i * 0.5));
    }, i * 400);
}