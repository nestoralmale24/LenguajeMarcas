function mostrarMensaje(mensaje){
    document.querySelector("#mensaje").textContent = mensaje;
}

document.querySelector("#boton2").onclick = () =>{
    document.querySelector("#mensaje").textContent = "Se presiono el boton 2"
}

document.querySelector("#boton2").onclick = mostrarMensaje1;
function mostrarMensaje1(){
    document.querySelector("#mensaje").textContent = "Se presiono el boton 2 sin flecha";
}

 document.querySelector("#boton3").onclick = () => {
    document.querySelector("#boton1"). onclick = null;
    document.querySelector("#boton2"). onclick = null;
    document.querySelector("#mensaje"). textContent = "Se eliminaron"
 }

 document.querySelector("#boton4").addEventListener("click", () => {
    document.querySelector("#mensaje"). textContent = "Se prsiono el boton 4";
 })

 document.querySelector("#boton4").addEventListener("click", () => {
    document.querySelector("#boton4"). textContent = "Segunda funcion disparada";
 })

 let cant = 0;
 document.querySelector("#boton4").addEventListener("click", cambiarBoton1);

 function cambiarBoton1(){
    cant++;
    document.querySelector("#boton1").textContent = `contador: ${cant}`;
    if(cant==5){
        document.querySelector("#boton4").removeEventListener("click", cambiarBoton1);
    }

    if(cant == 0){
        console.log(cant)
    }

    /*if(cant ='0'){
        alert(cant)
    }*/

    /*if(cant === 0){
        console.log("la variable es " +  cant)
    }*/
 }