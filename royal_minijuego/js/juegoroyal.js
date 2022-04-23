document.getElementById('player').addEventListener("click",sumarPuntos);
puntos = 0;
tiempo = 35;
necesarios = 30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "</b>";
    randNum = Math.round(Math.random()*450);
    randNum2 = Math.round(Math.random()*450);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == 30) {
    alert("Ganaste");
    tiempo = 35;
    puntos = 0;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; Tiempo: "+tiempo;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "</b>";
    }
}

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; Tiempo: "+tiempo;
    if (tiempo == 0) {
    alert("Perdiste");
    tiempo = 35;
    puntos = 0;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; Tiempo: "+tiempo;
    }
}

setinterval(restarTiempo,1000);