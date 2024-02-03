// metodo querySelectorAll

// SELECCION POR ids
const lista1 = document.querySelectorAll('#p1, #lista1'); // #: Para seleccionar ids
for(let element of lista1){
    element.style.backgroundColor="red";
}

// SELECCION POR CLASE
const obj1 = document.querySelectorAll('.li_it2');
for(let element of obj1){
    element.style.backgroundColor = 'grey';
}

const obj2 = document.querySelectorAll('li,h1');
for(let element of obj2){
    element.style.backgroundColor = 'green';
}

const obj3 = document.querySelectorAll('ol span');
for(let element of obj3){
    element.style.backgroundColor = 'orange';
}