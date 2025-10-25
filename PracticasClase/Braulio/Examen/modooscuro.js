
let modooscuro= false;

function ModoOscuro(){


if(!modooscuro){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    document.body.style.transition="0.9s";
    document.body.style.padding="10px";
    document.body.style.fontFamily="Arial, Helvetica, sans-serif";
    document.body.style.textDecorationColor="blue";
    modooscuro=true;
}
else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    modooscuro=false;

}
}

function abrirPaleta() {
    const colorInput = document.getElementById("colorPicker");
    colorInput.click();
    colorInput.oninput = function() {
        document.body.style.backgroundColor = colorInput.value;
    };
}


function abrirPaletaPregunta() {
    const colorInput = document.getElementById("colorPickerPregunta");
    colorInput.click();
    colorInput.oninput = function() {
        let preguntas = document.getElementsByClassName("pregunta");
        for (let i = 0; i < preguntas.length; i++) {
            preguntas[i].style.color = colorInput.value;
        }
    };
}