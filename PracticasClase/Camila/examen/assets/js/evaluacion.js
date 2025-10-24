function evaluarExamen(){
    //declarar  una variable que pueda recoger las respuestas correctas
    const respuestasCorrectas = {
        p1: "a", //RM
        p2: "d",
        p3: "b",
        p4: "b",

    };
    let puntaje = 0;//calcula la calif
    let totalPreguntas = 4;//depende de cuantas preguntas


    //revision de respuestas seleccionadas
    for(let pregunta in respuestasCorrectas){
        let opciones = document.getElementsByName(pregunta);
        //recorre cada una de las opciones de acuerdo al total de preguntas
        for(let i = 0; i < opciones.length; i++){
            if(opciones[i].checked && opciones[i].value === respuestasCorrectas[pregunta]){
                puntaje++;

            }

        }

    }
///calcular calificación
let calificacion =(puntaje/totalPreguntas)* 100;
alert ('La calificación de tu examen es: ' + calificacion + ' con un total de ' + puntaje + ' respuestas correctas');
}