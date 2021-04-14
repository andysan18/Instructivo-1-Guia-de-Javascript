function generarNroRandom(){
    var minVacio = document.getElementById("nro1").value;
    var maxVacio = document.getElementById("nro2").value;

    if(minVacio == "" || maxVacio == ""){
        alert("Error 8009 - Un/os campo/s vacio/s");
    }else{
        var min = Number(minVacio);
        var max = Number(maxVacio);
        console.log(min);
        console.log(max);
        if (!(isNaN(min) || isNaN(max))) {
            var random = Math.round(Math.random() * (max - min) + min);
            document.getElementById("random").innerHTML = random;
        }else{
            alert("Error 4005 - Campos contienen letras (solo se aceptan números)");
        }
    }
}