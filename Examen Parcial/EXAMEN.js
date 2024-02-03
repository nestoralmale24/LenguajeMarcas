//HORA
setInterval(muestraHora, 10);
let boton1 = document.querySelector('#boton1');

function muestraHora(){
    const fechaActual = new Date();
    document.querySelector("#hora").innerHTML = `<b>Hoy es: ${fechaActual.toLocaleDateString()} son las: ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}<b>`;
}

//MOSTRAR CAJA
const boton2= document.querySelector('#boton1').textcontent;
    if(boton2 == 'ABRIR CAJA'){
        document.querySelector("#ocultable").style.visibility = 'visible'
        document.querySelector("#boton1").textContent='CERRAR CAJA'
    }else{
        document.querySelector("#ocultable").style.visibility = 'hidden'
        document.querySelector("#boton1").textContent='ABRIR CAJA'
    }
document.querySelector("#boton1").addEventListener("click", mostrarcuerpo);

function mostrarcuerpo(){
    const boton1= document.querySelector('#boton1').textContent;
    if(boton1 == 'ABRIR CAJA'){
        document.querySelector("#ocultable").style.visibility = 'visible'
        document.querySelector("#boton1").textContent='CERRAR CAJA'
        document.querySelector("#boton1").style.background ="green";

        document.querySelector("#boton1").onclick = () => {
            document.querySelector("#valor1").value = null;
            document.querySelector("#resultado1").innerHTML = null;

            document.querySelector("#valor2").value = null;
            document.querySelector("#resultado2").innerHTML = null;

            document.querySelector("#valor3").value = null;
            document.querySelector("#resultado3").innerHTML = null;

            document.querySelector("#valor4").value = null;
            document.querySelector("#resultado4").innerHTML = null;

            document.querySelector("#valor5").value = null;
            document.querySelector("#resultado5").innerHTML = null;

            document.querySelector("#valor6").value = null;
            document.querySelector("#resultado6").innerHTML = null;

            document.querySelector("#valor7").value = null;
            document.querySelector("#resultado7").innerHTML = null;

            document.querySelector("#valor8").value = null;
            document.querySelector("#resultado8").innerHTML = null;

            document.querySelector("#valor9").value = null;
            document.querySelector("#resultado9").innerHTML = null;

            document.querySelector("#valor10").value = null;
            document.querySelector("#resultado10").innerHTML = null;

            document.querySelector("#valor11").value = null;
            document.querySelector("#resultado11").innerHTML = null;

            document.querySelector("#valor12").value = null;
            document.querySelector("#resultado12").innerHTML = null;

            document.querySelector("#spTotal").innerHTML = null;

        }

    }else{
        document.querySelector("#ocultable").style.visibility = 'hidden'
        document.querySelector("#boton1").textContent='ABRIR CAJA'
        document.querySelector("#boton1").style.background ="red";
    }
}

var dinero1 = document.querySelector('#valor1');
 dinero1.onkeydown = function(){
    var valor1 = dinero1.value;
    if(valor1 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor1").value);
    document.querySelector("#resultado1").innerHTML = (valor1 *200).toFixed(2) + "€";
    console.log(result);
}

var dinero2 = document.querySelector('#valor2');
dinero2.onkeydown = function(){
    var valor2 = dinero2.value;
    if(valor2 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor2").value);
    document.querySelector("#resultado2").innerHTML = (valor2 *100).toFixed(2)+ "€";
    console.log(result);
}

var dinero3 = document.querySelector('#valor3');
dinero3.onkeydown = function(){
    var valor3 = dinero3.value;
    if(valor3 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor3").value);
    document.querySelector("#resultado3").innerHTML = (valor3 *50).toFixed(2)+ "€";
    console.log(result);
}

var dinero4 = document.querySelector('#valor4');
dinero4.onkeydown = function(){
    var valor4 = dinero4.value;
    if(valor4 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor4").value);
    document.querySelector("#resultado4").innerHTML = (valor4 *20).toFixed(2)+ "€";
    console.log(result);
}


var dinero5 = document.querySelector('#valor5');
dinero5.onkeydown = function(){
    var valor5 = dinero5.value;
    if(valor5 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor5").value);
    document.querySelector("#resultado5").innerHTML = (valor5 * 10).toFixed(2)+ "€";
    console.log(result);
}


var dinero6 = document.querySelector('#valor6');
dinero6.onkeydown = function(){
    var valor6 = dinero6.value;
    if(valor6 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor6").value);
    document.querySelector("#resultado6").innerHTML = (valor6 * 5).toFixed(2)+ "€";
    console.log(result);
}

var dinero7 = document.querySelector('#valor7');
dinero7.onkeydown = function(){
    var valor7 = dinero7.value;
    if(valor7 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor7").value);
    document.querySelector("#resultado7").innerHTML = (valor7 * 2).toFixed(2)+ "€";
    console.log(result);
}

var dinero8 = document.querySelector('#valor8');
dinero8.onkeydown = function(){
    var valor8 = dinero8.value;
    if(valor8 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor8").value);
    document.querySelector("#resultado8").innerHTML = (valor8 * 1).toFixed(2)+ "€";
    console.log(result);
}

var dinero9 = document.querySelector('#valor9');
dinero9.onkeydown = function(){
    var valor9 = dinero9.value;
    if(valor9 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor9").value);
    document.querySelector("#resultado9").innerHTML = (valor9 * 0.50).toFixed(2)+ "€";
    console.log(result);
}


var dinero10 = document.querySelector('#valor10');
dinero10.onkeydown = function(){
    var valor10 = dinero10.value;
    if(valor10 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor10").value);
    document.querySelector("#resultado10").innerHTML = (valor10 * 0.20).toFixed(2)+ "€";
    console.log(result);
}


var dinero11 = document.querySelector('#valor11');
dinero11.onkeydown = function(){
    var valor11 = dinero11.value;
    if(valor11 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor11").value);
    document.querySelector("#resultado11").innerHTML = (valor11 * 0.10).toFixed(2)+ "€";
    console.log(result);
}


var dinero12 = document.querySelector('#valor12');
dinero12.onkeydown = function(){
    var valor12 = dinero12.value;
    if(valor12 <  0){
        alert ('No se permiten negativos');
        return;
    }
    const result = Number(document.querySelector("#valor12").value);
    document.querySelector("#resultado12").innerHTML = (valor12 * 0.05).toFixed(2)+ "€";
    console.log(result);
}


function calculoTotal() {
    var numeros = document.querySelectorAll(".total");
    var total = 0;
  
    for (var i = 0; i < numeros.length; i++) {
      if (parseFloat(numeros[i].innerText)) total += parseFloat(numeros[i].innerText);
    }
    document.querySelector("#spTotal").innerHTML = "<b>TOTAL CAJA: </b>" + total + "<b> € </b>";
  }