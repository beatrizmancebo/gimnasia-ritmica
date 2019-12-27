    var nombre = prompt("¿Como te llamas?");
    var edad = prompt("¿Cuantos años tienes?");
    var fecha = new Date();
    if (fecha.getHours() < 12) {
        document.getElementById("saludo").innerHTML = ' Buenos días ' + nombre + ' . Disfruta de tus ' + edad + ' años.';
    } else {
        document.getElementById("saludo").innerHTML = ' Buenos tardes ' + nombre + ' . Disfruta de tus ' + edad + ' años.';
    }

alert("PINCHA EN EL LOGO DE INSTAGRAM")

