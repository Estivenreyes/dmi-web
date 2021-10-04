const title = document.getElementById("title"); // Retorna un objeto/elemento
const subtitles = document.getElementsByClassName("subtitle"); // Retorna un array de objetos []
const products = document.getElementsByTagName("section"); // Retorna un array []
const news = document.querySelector(".news__header #news__title"); // Depende de la cantidad de elementos

// Añadir estilos a un solo elemento
title.style.color = "red";

// Tengo que recorrer el arreglo para poder añadir estilos a cada elemento
for (let index = 0; index < subtitles.length; index++) {
    const element = subtitles[index];
    element.style.fontSize = "35px";
    element.style.border = "solid 2px red";
    element.classList.add("new--title");
}

title.classList.add("laClasequeYoquiera");
console.log(title.classList);
console.log(title.textContent);
// console.log(title);

const name = document.getElementById("name");
const email = document.getElementById("email");

console.log(name.value, email.value);


title.addEventListener("click", function(){
    console.log('Title has been clicked!');
});


const form = document.getElementById("myForm");
form.addEventListener("submit", function() {
    if (name.value && email.value ) {
        console.log("Enviando mensaje...");
        console.log(name.value, email.value);
    } else {
        alert("Por favor completa todos los campos.")
    }
});


const galleryButton = document.getElementById("openGallery");
const section = document.getElementById("dynamicSection");

galleryButton.addEventListener("click", function() {
    loadNewComponents();
});

function loadNewComponents(){
    const newTitle = document.createElement("h1");
    newTitle.innerText = "Cualquier valor string";
    section.appendChild(newTitle);

    const newBody = document.createElement("div");
    newBody.innerHTML = "<h1 class='myClass'>My title</h1><p>Hola!</p>"
    section.appendChild(newBody);
}
