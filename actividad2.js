function actividad2() {
    let montoInicial=0;
    montoInicial=parseFloat(prompt('¿Cuál es el monto Inicial de la cuenta en el mes de Enero?', ''));
    let interesMensual = 0.0125;
    let montoFinal = montoInicial;
    for (let i = 0; i < 12; i++) {
        montoFinal += montoFinal * interesMensual;
        montoFinal += 250;
    }
    document.getElementById("act2").innerHTML = '<h1>Actividad 2</h1><br><li>El monto final de la cuenta en el mes de Diciembre es de: '+montoFinal+'Bs.</li>';
}