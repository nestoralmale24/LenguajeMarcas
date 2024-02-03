
//METODO innerHTML

//alert(document.body.innerHTML);
setTimeout(tiempoEspera, 2000);
function tiempoEspera(){
    const lista1 = document.querySelector("#lista1");
    lista1.innerHTML = "<li>one</li> <li>two</li> <li>three</li> <li>four</li> <li>five</li>"
}

