// firstElementChild
//Seleccionar el primer hjo del objeto body

const body_hijo1 = document.body.firstElementChild;
body_hijo1.style.backgroundColor="yellow";

//lastelementChild
//Seleccionar el ultimo hjo del objeto body
const div_hijolast = body_hijo1.lastElementChild;
div_hijolast.style.backgroundColor="blue";

//nextelementsibling
const div_hermano = body_hijo1.nextElementSibling;
div_hermano.style.backgroundColor="red";

//previusElementSibling
const ul_hijoultimo = div_hermano.lastElementChild;
const ul_hijoprev = ul_hijoultimo.previousElementSibling;
ul_hijoprev.style.backgroundColor="green";

//Hijos del utimo objeto del body
const body_hijoultimo = document.body.lastElementChild;
const hijos = body_hijoultimo.children;

for(let elemento of hijos){
    elemento.style.backgroundColor="orange";
}

//parentElement
const padre = body_hijo1.parentElement;
padre.style.backgroundColor="grey";