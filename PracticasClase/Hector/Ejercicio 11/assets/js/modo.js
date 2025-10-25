let modoOscuro = false;

function ModoOscuro() {
    let colorOscuro = document.getElementById("txtcolor").value || "black"; // color personalizado o negro por defecto

    if (!modoOscuro) {
        document.body.style.backgroundColor = colorOscuro;
        document.body.style.color = "white";
        document.body.style.transition = "1s";
        modoOscuro = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modoOscuro = false;
    }
}

function cambiarcolor() {
    let elementos = document.getElementsByClassName('fondo');
    let color = document.getElementById("txtcolor").value;

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = color;
        elementos[i].style.transition = "1s";
    }
}

function resaltar() {
    let pregunta = document.getElementsByClassName('pregunta');
    let color = document.getElementById("txtcolorp").value;

    for (let i = 0; i < pregunta.length; i++) {
        pregunta[i].style.color = color;
        pregunta[i].style.fontWeight = 'bold';
        pregunta[i].style.transition = "1s";
    }
}