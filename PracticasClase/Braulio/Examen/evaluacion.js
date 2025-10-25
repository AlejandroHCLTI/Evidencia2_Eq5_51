function evaluarexamen() {
    const respuestasCorrectas = {
        p1: 'a', //2
        p2: 'd', //Antartida
        p3: 'c', //Superman (2025)
        p4: 'b' //25/12/25
    }; 
    let puntaje = 0;
    let totalPreguntas = 4;
    for (let pregunta in respuestasCorrectas) {
        let opciones = document.getElementsByName(pregunta);
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked && opciones[i].value === respuestasCorrectas[pregunta]) {
                puntaje++;
                break; 
            }
        }
    }
    let calificacion = (puntaje / totalPreguntas) * 100;
    alert("La calificación de tu examen es: " + calificacion);
}