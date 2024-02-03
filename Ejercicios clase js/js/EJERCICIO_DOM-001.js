/* ACCEDIENDO A LAS PROPIEDADES DE ESTILO DE UN NODO*/
document.body.style.backgroundColor="yellow";

document.body.style.color="blue";
document.body.style.margin="40px";
document.body.style.border="2px solid #f00";
document.body.style.padding="20px";


/* document.body.style.visibility="hidden"; */
/* Eventos de tiempo */
/* SetTimeou: setTimeout (function(),tiempo_ms)*/
/* setInterval: setInterval(function(), tiempo_ms)*/

setTimeout(tiempoEspera, 10000);
setInterval(Intervalo , 1000);

/* FUNCIONES*/
function tiempoEspera(){
    document.body.style.visibility = "hidden";
}

function Intervalo(){
    if(document.body.style.visibility === "visible"){
        document.body.style.visibility = "hidden";
}else{
    document.body.style.visibility = "visible";
}
}

