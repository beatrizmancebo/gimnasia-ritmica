    var nombre = prompt("¿Como te llamas?");
    var edad = prompt("¿Cuantos años tienes?");
    var fecha = new Date();
    if (fecha.getHours() < 12) {
        document.getElementById("saludo").innerHTML = ' Buenos días ' + nombre + ' . Disfruta de la presentación'
    } else {
        document.getElementById("saludo").innerHTML = ' Buenos tardes ' + nombre + ' . Disfruta de la presentación'
    }

alert("PINCHA EN EL LOGO DE INSTAGRAM")

