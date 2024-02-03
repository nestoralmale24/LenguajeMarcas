document.querySelector(".recuadro").addEventListener('mousemove', (evento) =>{
    document.querySelector("#dato1").textContent = `Coordenadas respecto al documento : (${evento.clientX},${evento.clientY})`
    document.querySelector("#dato2").textContent = `Coordenadas respecto a la pantalla : (${evento.screenX},${evento.screenY})`

})

document.querySelector(".recuadro").addEventListener(`mousedown`, (evento) =>{
let boton = ''
switch (evento.button){
    case 0: boton ='izquierdo';
        break;
    case 1: boton ='medio';
        break;
    case 2: boton ='derecho';
        break;
}
document.querySelector("#dato3").textContent =`se presiono el boton : ${boton}`
})