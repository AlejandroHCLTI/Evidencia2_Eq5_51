function evaluarexamen() {
    const respuestasCorrectas = {
        p1: 'a',
        p2: 'a',
        p3: 'd',
        p4: 'a'
    }; 
    let puntaje = 0;
    let totalPreguntas = 4;

    for (let pregunta in respuestasCorrectas) {
        let opciones = document.getElementsByName(pregunta);
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked && opciones[i].value === respuestasCorrectas[pregunta]) {
                puntaje++;
                break; // Solo cuenta una vez por pregunta
            }
        }
    }
    let calificacion = (puntaje / totalPreguntas) * 100;
    alert("Tu calificación es: " + calificacion);
}