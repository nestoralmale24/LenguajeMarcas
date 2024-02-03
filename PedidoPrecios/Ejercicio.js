calculo();
//MOSTRAR TODO EL CONTENIDO
const boton2= document.querySelector('#boton1').textcontent;
    if(boton2 == 'Crear pedido'){
        document.querySelector("#ocultable").style.visibility = 'visible'
        document.querySelector("#boton1").textContent='Eliminar pedido'
    }else{
        document.querySelector("#ocultable").style.visibility = 'hidden'
        document.querySelector("#boton1").textContent='Crear pedido'
    }
document.querySelector("#boton1").addEventListener("click", mostrarcuerpo);

function mostrarcuerpo(){
    const boton1= document.querySelector('#boton1').textContent;
    if(boton1 == 'Crear pedido'){
        document.querySelector("#ocultable").style.visibility = 'visible'
        document.querySelector("#boton1").textContent='Eliminar pedido'
    }else{
        document.querySelector("#ocultable").style.visibility = 'hidden'
        document.querySelector("#boton1").textContent='Crear pedido'
        location.reload();
    }
}

//NUEVA LINEA
document.getElementById("boton2").addEventListener("click", function añadir() { 
  var general = document.getElementById("abajo");
  var clone = general.cloneNode(true); 
  var datos = clone.querySelectorAll("select, input"); 
  for (var i = 0; i < datos.length; i++) { 
    datos[i].selectedIndex = 0; 
    datos[i].value = null; 
  }   
  general.parentNode.insertBefore(clone, general.nextSibling); 
    calculo();
    eliminarLinea();
}); 


//BORRAR LINEA
document.addEventListener("click", function(eliminarLinea) {
  if (eliminarLinea.target.matches(".boton3")) {
      eliminarLinea.preventDefault()
      document.querySelector(".boton3").parentElement.remove();
  }}, false);

//MOSTRAR FACTURA
document.getElementById("factura").addEventListener("click", function factura(){
const facturaBoton = document.getElementById("factura").textcontent;
    if(facturaBoton == "Factura"){
        document.getElementById("final").style.visibility = "hidden";
    }else{
        document.getElementById("final").style.visibility = "visible";
        calcularTotalIVA();
        calculoTotal();
    } 
}); 

//OPERACION FACTURA
function calcularTotalIVA() { 
    const totalIVA = document.querySelectorAll(".iva");
      var total21 = 0;
      var total10 = 0;
      var total4 = 0;

    for (var element of totalIVA) {
        const parent = element.parentElement.parentElement;
        const precio = parent.querySelector(".precio").value;
        const unidades = parent.querySelector(".unidades").value;
        

        var iva = Number(element.value);

        if (iva == 21) {
          total21 += Number(unidades) * Number(precio) * (iva / 100.0);
        } else if (iva == 10) {
          total10 += Number(unidades) * Number(precio) * (iva / 100.0);
        } else if (iva == 4) {
          total4 += Number(unidades) * Number(precio) * (iva / 100.0);
        }
      }
      document.querySelector(".iva21").innerHTML = total21.toFixed(2);
      document.querySelector(".iva10").innerHTML = total10.toFixed(2);
      document.querySelector(".iva4").innerHTML = total4.toFixed(2);
    }

//CALCULO TOTAL
function calculoTotal() {
  var Facturatotal = 0;
  var num = document.querySelectorAll("#total");

  for (var i = 0; i < num.length; i++) {
    var elementValue = num[i].value;

    if (Number(elementValue)) {
      Facturatotal += Number(elementValue);
    }
  }
  document.querySelector(".Facturatotal").innerHTML = Facturatotal.toFixed(2) + "€";
}

// OPERACION LINEA
function calculo() {
  document.querySelectorAll(".abajo").forEach(abajo => {
        abajo.querySelector(".unidades").addEventListener("input", (event) => { calculoLinea(event.target); });
        abajo.querySelector(".precio").addEventListener("input", (event) => { calculoLinea(event.target); });
        abajo.querySelector(".iva").addEventListener("change", (evento) => { calculoLinea(evento.target); });
    });
  
 }function calculoLinea(elemento){ 
    const padreelement = elemento.parentElement.parentElement; 
    const unidades = padreelement.querySelector(".unidades").value; 
    const precio = padreelement.querySelector(".precio").value; 
    const iva = padreelement.querySelector(".iva").value; 
    const total = padreelement.querySelector(".total"); 
    total.value = ((unidades) * (precio) * (1 + iva / 100)).toFixed(2); 
  } 



  