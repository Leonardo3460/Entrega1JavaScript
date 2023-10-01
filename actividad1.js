function actividad1() {
    let count = 0;
    count = parseInt(prompt('¿Cuántos estudiantes están cursando?', ''));
    let pesos = [];
    for (let i=0; i<count; i++) {
        let j=i+1
        let alum=0;
        alum = prompt("¿Cuánto pesa el alumno "+j+"?",'');
        pesos.push(parseInt(alum));
    }
    let contador1=0;
    let contador2=0;
    let contador3=0;
    let contador4=0;
    for (let i = 0; i < pesos.length; i++) {
        if (pesos[i] < 40) {
            contador1++;
        }
    }
    for (let i = 0; i < pesos.length; i++) {
        if (pesos[i] >= 40 && pesos[i] <= 50) {
            contador2++;
        }
    }
    for (let i = 0; i < pesos.length; i++) {
        if (pesos[i] > 50 && pesos[i] < 60) {
            contador3++;
        }
    }
    for (let i = 0; i < pesos.length; i++) {
        if (pesos[i] >= 60) {
            contador4++;
        }
    }
    document.getElementById("act1").innerHTML = '<h1>Actividad 1</h1><br><li>'+contador1+' Alumnos pesan menos de 40 Kg</li><br><li>'+contador2+' Alumnos pesan entre 40 Kg y 50 Kg</li><br><li>'+contador3+' Alumnos pesan más 50 Kg y menos de 60 Kg</li><br><li>'+contador4+' Alumnos pesan 60 Kg o más</li><br><br>';
}