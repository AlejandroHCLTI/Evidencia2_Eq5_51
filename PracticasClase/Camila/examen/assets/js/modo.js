let Oscuro = false;
function modoOscuro() {
    
   if (!Oscuro){
        document.body.style.backgroundColor = "black";
        document.body.style.color ="purple";
        document.body.style.transition ="0.8s";
        Oscuro = true;

    }
    else{ 
        document.body.style.backgroundColor = "white";
        document.body.style.color ="BLACK";
        Oscuro = false;
    }
}

function Cambiarcolor() {
    let color = document.getElementById('txtcolor').value;
    document.body.style.backgroundColor = color;
}