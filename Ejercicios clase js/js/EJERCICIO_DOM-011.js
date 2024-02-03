/* crear nodo*/

const item3 = document.createElement('li');
const item4 = document.createElement('li');
const item5 = document.createElement('li');

/* crear nodo tipo texto*/

const texto3 = document.createTextNode('Item 3');
const texto4 = document.createTextNode('Item 4');
const texto5 = document.createTextNode('Item 5');

/* Metodo append */

const lista1 = document.querySelector("#lista1");
lista1.append(item3);
lista1.append(item4);
lista1.append(item5);

/*Appendchild*/ 

item3.appendChild(texto3);
item4.appendChild(texto4);
item5.appendChild(texto5);

/*Creación de una tabla dinámica*/

const tabla = document.querySelector("#tabla");
for (let x = 1; x<=10; x++){
    const dato = `${x} * 5 = ${x * 5}`;
    const elemento = document.createElement('p');
    const texto = document.createTextNode(dato);
    elemento.appendChild(texto);
    tabla.append(elemento);
}