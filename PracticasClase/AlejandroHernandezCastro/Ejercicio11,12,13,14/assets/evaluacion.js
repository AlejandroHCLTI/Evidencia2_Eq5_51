function evaluar(){
    // declarar la variable que pueda recoger las repustas correctas 
    const RespuestasCorrectas = {
    p1: "a", //slix
    p2: "b", //negro
    p3: "b", //martes
    p4: "c"  //100
    };

    let puntaje = 0; //calcular puntaje
    let totalpreguntas = 4; //depende de cuantas preguntas tengas

    // revision de respuestas selecionadas 
    // asigna a la respuesta correcta
    for(let pregunta in RespuestasCorrectas){
        let opciones = document.getElementsByName(pregunta);

        //recorre cada una de las secciones
        for(let i = 0; i < opciones.length; i++){

            //validar la respuestas del usuario sea igual a la correcta
            if(opciones[i].checked && opciones[i].value === RespuestasCorrectas[pregunta]){
                puntaje++; // suma pts
            }
        }
    }

    //calculo de la calif
    let calificacion = (puntaje / totalpreguntas) * 100;
    alert('La calificacion de tu examen es de un total de: ' + calificacion + ' con unas respuestas correctas de ' + puntaje);
}
