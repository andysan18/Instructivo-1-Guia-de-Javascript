var activo = true;
var operacion;

function escribirNumero(numero) {
    document.getElementById("error").innerHTML = "";
    if (activo) {
        var nroActivo = document.getElementById("primerNro");
        var primerNumero = nroActivo.innerHTML + numero;
        nroActivo.innerHTML = primerNumero;
        nroActivo.style.visibility = 'visible';
    } else {
        var nroActivo = document.getElementById("segundoNro");
        var segundoNumero = nroActivo.innerHTML + numero;
        nroActivo.innerHTML = segundoNumero;
        nroActivo.style.visibility = 'visible';
    }
}

function escribirOperador(operador){
    document.getElementById("error").innerHTML = "";
    document.getElementById("operador").innerHTML = "";
    if(operador === "dividir"){
        document.getElementById("operador").innerHTML = "÷";
        operacion = operador;
    }else if(operador === "multiplicar"){
        document.getElementById("operador").innerHTML = "x";
        operacion = operador;
    }else if(operador === "restar"){
        document.getElementById("operador").innerHTML = "-";
        operacion = operador;
    }else if(operador === "sumar"){
        document.getElementById("operador").innerHTML = "+";
        operacion = operador;
    }
    document.getElementById("operador").style.visibility = 'visible';
    cantNumeros = 0;
    activo = false;
}

function cambiarSigno(){
    document.getElementById("error").innerHTML = "";
    if(activo){
        var nro1 = Number(document.getElementById("primerNro").innerHTML);
        var cambioSigno1 = nro1 * -1;
        document.getElementById("primerNro").innerHTML = cambioSigno1;
    }else{
        var nro2 = Number(document.getElementById("segundoNro").innerHTML);
        var cambioSigno2 = nro2 * -1;
        document.getElementById("segundoNro").innerHTML = cambioSigno2;
    }
}

function borrar(){
    document.getElementById("error").innerHTML = "";
    if(activo){
        let numero = document.getElementById("primerNro").innerHTML;
        let numeroActualizado = numero.substring(0, numero.length - 1);
        document.getElementById("primerNro").innerHTML = numeroActualizado;
    }else{
        let numero = document.getElementById("segundoNro").innerHTML;
        let numeroActualizado = numero.substring(0, numero.length - 1);
        document.getElementById("segundoNro").innerHTML = numeroActualizado;
    }
}

function limpiar(){
    document.getElementById("error").innerHTML = "";
    document.getElementById("primerNro").style.visibility = "hidden";
    document.getElementById("operador").style.visibility = "hidden";
    document.getElementById("segundoNro").style.visibility = "hidden";
    document.getElementById("primerNro").innerHTML = "";
    document.getElementById("segundoNro").innerHTML = "";
    op = false;
    activo = true;
}

function realizarOperacion() {
    var nro1 = document.getElementById("primerNro").innerHTML;
    var nro2 = document.getElementById("segundoNro").innerHTML;
    var divisionPorCero = false;

    if (nro1 === "" || nro2 === "") {
        alert("Debe ingresar 2 números");
        limpiar();
    } else {
        var nro1 = Number(document.getElementById("primerNro").innerHTML);
        var nro2 = Number(document.getElementById("segundoNro").innerHTML);
        var resultado;
        if (operacion === "dividir") {
            if(nro2 != 0){
                resultado = nro1 / nro2;
            }else{
                divisionPorCero = true;
            }
        } else if (operacion === "multiplicar") {
            resultado = nro1 * nro2;
        } else if (operacion === "restar") {
            resultado = nro1 - nro2;
        } else if (operacion === "sumar") {
            resultado = nro1 + nro2;
        }

        if(divisionPorCero){
            document.getElementById("error").innerHTML = "Error! - Division por cero";
            document.getElementById("error").style.color = "red";
        }else{
            document.getElementById("primerNro").innerHTML = resultado;
            document.getElementById("operador").style.visibility = "hidden";
            document.getElementById("segundoNro").innerHTML = "";
            op = false;
            activo = true;
        }
    }
}

function decimal(){
    document.getElementById("error").innerHTML = "";
    if (activo) {
        var nroActivo = document.getElementById("primerNro");
        var primerNumero = nroActivo.innerHTML + ".";
        nroActivo.innerHTML = primerNumero;
    } else {
        var nroActivo = document.getElementById("segundoNro");
        var segundoNumero = nroActivo.innerHTML + "."
        nroActivo.innerHTML = segundoNumero;
    }
}