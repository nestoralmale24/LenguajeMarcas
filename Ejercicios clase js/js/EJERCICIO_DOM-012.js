/* prepend
añade 1 hijo al principio del elemento*/

const lista1 = document.querySelector("#lista1");
const elemento1 = document.createElement('li');
const texto1 = document.createTextNode('prepend');
elemento1.appendChild(texto1);

lista1.prepend(elemento1);
const elemento2 = document.createElement('li');
const texto2 = document.createTextNode('append');
elemento2.appendChild(texto2);
lista1.append(elemento2);

const mensaje = document.createElement("h4");
mensaje.appendChild(document.createTextNode("Copyright 2023"));

const fecha = document.querySelector("#fecha");
fecha.replaceWith(mensaje);