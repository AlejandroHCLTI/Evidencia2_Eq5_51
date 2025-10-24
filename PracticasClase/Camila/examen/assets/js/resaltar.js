function resaltar() {
    let preguntas = document.getElementsByClassName('pregunta');
    let color = document.getElementById('txtcolorpreguntas').value;

    for (let i = 0; i < preguntas.length; i++) {
        preguntas[i].style.color = color;
        preguntas[i].style.fontWeight = 'bold';
    }
}


