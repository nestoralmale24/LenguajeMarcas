const botones = {
    handleEvent(evento){
        evento.currentTarget.textContent = Number.parseInt(evento.currentTarget.textContent) +1;
    }
}

document.querySelector("#boton1").addEventListener("click", botones);
document.querySelector("#boton2").addEventListener("click", botones);
document.querySelector("#boton3").addEventListener("click", botones);
document.querySelector("#boton4").addEventListener("click", botones);