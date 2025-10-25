(() => {
    'use strict';

    
    const Resaltar = () => [...document.getElementsByClassName('pregunta')]
        .forEach(p => {p.style.color = 'yellow'; p.style.fontWeight = 'bold'; });

    const activarCambioTamano = () => {
        [...document.getElementsByClassName('pregunta')].forEach(el => {
            el.style.cursor = 'pointer';

            el.addEventListener('click', e => {
                const el = e.currentTarget;
                if (!el.dataset.originalSize) el.dataset.originalSize = getComputedStyle(el).fontSize || '16px';
                const num = parseFloat(el.dataset.originalSize), unit = el.dataset.originalSize.replace(num, '');
                el.style.fontSize = el.dataset.toggled === '1' ? el.dataset.originalSize : (num * 1.4) + unit;
                el.dataset.toggled = el.dataset.toggled === '1' ? '0' : '1';
            });
        });
    };

    function activarOcultarMostrar() {
        const btn = document.getElementById('btnToggle');
        const el = document.getElementById('elementoToggle');
        if (!btn || !el) return;

        btn.addEventListener('click', () => {
            const currentlyHidden = window.getComputedStyle(el).display === 'none';
            el.style.display = currentlyHidden ? 'block' : 'none';
            btn.textContent = currentlyHidden ? 'Ocultar' : 'Mostrar';
        });
    }

    // Exportar
    window.Resaltar = Resaltar;

    window.activarCambioTamano = activarCambioTamano;
    
    window.activarOcultarMostrar = activarOcultarMostrar;
})();

window.toggleFondoAnimado = () => {
    const b = document.body;
    if (b.classList.contains('modo-oscuro')) return;
    const active = b.style.animation && b.style.animation !== 'none';
    if (active) {
        b.style.animation = 'none';
        b.style.background = '#222';
        b.style.color = '#fff';
    } else {
        if (!document.getElementById('keyframesGradient')) {
            const s = document.createElement('style');
            s.id = 'keyframesGradient';
            s.innerHTML = `@keyframes gradientBG{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`;
            document.head.appendChild(s);
        }
        b.style.background = 'linear-gradient(-40deg,#cd9effff,#8eb7fd,#fdc188,#90ffe5)';
        b.style.backgroundSize = '400% 400%';
        b.style.animation = 'gradientBG 15s ease infinite';
        b.style.color = '#000';
    }
};
