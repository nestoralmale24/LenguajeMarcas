
// getElementById
const li2 = document.getElementById("list1_2");
li2.style.backgroundColor="purple";

//seleccionamos los hijos del elemento con id = lista1
const lista1 = document.getElementById("lista1");
for(let elemento of lista1.children){
    elemento.style.fontfamily= "Courier";
    elemento.style.fontSize= "3rem";
}


//querySelector

//selector de id
{
    const li2 = document.querySelector("#list1_2");
li2.style.backgroundColor="blue";

}

//selector de clase
const clas1 = document.querySelector(".li_it2");
clas1.style.backgroundColor ="red";

//selector de objeto
const obj1 = document.querySelector("li");
obj1.style.backgroundColor ="orange";