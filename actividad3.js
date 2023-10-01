function actividad3() {
    let N=0;
    N = parseInt(prompt('¿Cuántas tarjetas de datos va a ingresar?', ''));
    let alumnos = [];
    for (let i=0; i<N; i++){
        let j=i+1;
        let A=0;
        let C=0;
        let D=0;
        let F=0;
        A = parseInt(prompt("A = Ingrese Número de cédula de identidad del alumno "+j+".",''));
        let B = prompt("B = Ingrese Nombre del alumno "+j+".",'');
        C = parseInt(prompt("C = Ingrese Nota de matemática del alumno "+j+".",''));
        D = parseInt(prompt("D = Ingrese Nota de física del alumno "+j+".",''));
        F = parseInt(prompt("F = Ingrese Nota de programación del alumno "+j+".",''));
        alumnos.push({cedula: A, nombre: B, matematica: C, fisica: D, programacion: F});
    }
    let sumaMatematica = 0;
    let sumaFisica = 0;
    let sumaProgramacion = 0;

    let aproMatematica=0;
    let aproFisica=0;
    let aproProgramacion=0;

    let reproMatematica=0;
    let reproFisica=0;
    let reproProgramacion=0;

    let aprobaronTodas = 0;
    let aprobaronDos = 0;
    let aprobaronUna = 0;

    let nombreMaximoMate = "";
    let cedulaMaximaMate = 0;
    let nombreMaximoFisi = "";
    let cedulaMaximaFisi = 0;
    let nombreMaximoProg = "";
    let cedulaMaximaProg = 0;

    let maximaMatematica = 0;
    let maximaFisica = 0;
    let maximaProgramacion = 0;

    for (let i=0; i<alumnos.length; i++) {
        sumaMatematica += alumnos[i].matematica;
        sumaFisica += alumnos[i].fisica;
        sumaProgramacion += alumnos[i].programacion;

        if (alumnos[i].matematica >= 10) {
            aproMatematica++;
        } else if (alumnos[i].matematica < 10) {
            reproMatematica++;
        }
        if (alumnos[i].fisica >= 10) {
            aproFisica++;
        } else if (alumnos[i].fisica < 10) {
            reproFisica++;
        }
        if (alumnos[i].programacion >= 10) {
            aproProgramacion++;
        } else if (alumnos[i].programacion < 10) {
            reproProgramacion++;
        }

        let materiasAprobadas = 0;
        if (alumnos[i].matematica >= 10) {
            materiasAprobadas++;
        }
        if (alumnos[i].fisica >= 10) {
            materiasAprobadas++;
        }
        if (alumnos[i].programacion >= 10) {
            materiasAprobadas++;
        }
        if (materiasAprobadas == 3) {
            aprobaronTodas++;
        } else if (materiasAprobadas == 2) {
            aprobaronDos++;
        } else if (materiasAprobadas == 1) {
            aprobaronUna++;
        }

        if (alumnos[i].matematica > maximaMatematica) {
            maximaMatematica = alumnos[i].matematica;
            nombreMaximoMate = alumnos[i].nombre;
            cedulaMaximaMate = alumnos[i].cedula;
        }
        if (alumnos[i].fisica > maximaFisica) {
            maximaFisica = alumnos[i].fisica;
            nombreMaximoFisi = alumnos[i].nombre;
            cedulaMaximaFisi = alumnos[i].cedula;
        }
        if (alumnos[i].programacion > maximaProgramacion) {
            maximaProgramacion = alumnos[i].programacion;
            nombreMaximoProg = alumnos[i].nombre;
            cedulaMaximaProg = alumnos[i].cedula;
        }
    }

    let promedioMatematica = sumaMatematica / N;
    let promedioFisica = sumaFisica / N;
    let promedioProgramacion = sumaProgramacion / N;

    document.getElementById("act3").innerHTML = '<h1>Actividad 3</h1><br><li>La nota Promedio en Matemática es: '+promedioMatematica+'</li><li>La nota Promedio en Física es: '+promedioFisica+'</li><li>La nota Promedio en Programación es: '+promedioProgramacion+'</li><li>'+aproMatematica+' Alumnos aprobaron Matemática</li><li>'+aproFisica+' Alumnos aprobaron Física</li><li>'+aproProgramacion+' Alumnos aprobaron Programación</li><li>'+reproMatematica+' Alumnos reprobaron Matemática</li><li>'+reproFisica+' Alumnos reprobaron Física </li><li>'+reproProgramacion+' Alumnos reprobaron Programación</li><li>'+aprobaronTodas+' Alumnos aprobaron todas las materias</li><li>'+aprobaronUna+' Alumnos aprobaron una sola materia</li><li>'+aprobaronDos+' Alumnos aprobaron dos materias</li><li>El alumno '+nombreMaximoMate+' de cedula '+cedulaMaximaMate+' tuvo la nota maxima en matemática: '+maximaMatematica+'</li><li>El alumno '+nombreMaximoFisi+' de cedula '+cedulaMaximaFisi+' tuvo la nota maxima en física: '+maximaFisica+'</li><li>El alumno '+nombreMaximoProg+' de cedula '+cedulaMaximaProg+' tuvo la nota maxima en programación: '+maximaProgramacion+'</li>';
}