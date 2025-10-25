document.addEventListener('DOMContentLoaded', () => {
    const notas = [];

    const btnAgregar = document.getElementById('btnAgregar');
    const btnCalcular = document.getElementById('btnCalcular');
    const btnReiniciar = document.getElementById('btnReiniciar');
    const lista = document.getElementById('lista');
    const resultado = document.getElementById('resultado');

    if (btnAgregar) btnAgregar.addEventListener('click', agregarCalificaciones);
    if (btnCalcular) btnCalcular.addEventListener('click', calcularPromedio);
    if (btnReiniciar) btnReiniciar.addEventListener('click', reiniciar);

    function agregarCalificaciones() {
        while (true) {
            const entrada = prompt('Ingresa una calificación (deja vacío o pulsa Cancelar para terminar):');
            if (entrada === null) break;
            const valor = entrada.trim();
            if (valor === '') break; 
            const num = parseFloat(valor.replace(',', '.')); 
            if (isNaN(num)) {
                alert('Valor no válido. Ingresa un número (ej. 85.5).');
                continue;
            }
            notas.push(num);
            actualizarLista();
        }
    }

    function calcularPromedio() {
        if (notas.length === 0) {
            alert('No hay calificaciones ingresadas.');
            return;
        }
        const suma = notas.reduce((a, b) => a + b, 0);
        const promedio = suma / notas.length;
        const estado = promedio >= 70.0 ? 'APROBÓ' : 'REPROBÓ';
        if (resultado) resultado.innerText = `Promedio: ${promedio.toFixed(2)} — ${estado} (${notas.length} calificación(es))`;
        else alert(`Promedio: ${promedio.toFixed(2)} — ${estado}`);
    }

    function reiniciar() {
        notas.length = 0;
        actualizarLista();
        if (resultado) resultado.innerText = '';
    }

    function actualizarLista() {
        if (!lista) return;
        if (notas.length === 0) {
            lista.innerHTML = '<em>No hay calificaciones ingresadas.</em>';
            return;
        }
        lista.innerHTML = notas.map((n, i) => `<span class="nota">#${i+1}: ${n}</span>`).join(' ');
    }

    actualizarLista();
});
