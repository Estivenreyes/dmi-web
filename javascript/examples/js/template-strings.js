// TEMPLATE STRINGS

const newsSection = document.getElementById("news");
const nombre = "Juan";
const age = 28;

const message = "Hola " + nombre + " tienes " + age + " años";
const messageWithTemplates = `Hola ${nombre} tienes ${age} años`;

const modal = document.createElement('div');
modal.className = "modal";
// modal.classList.add("modal");
modal.innerHTML = `
    <h1 class="modal__title">Modal title!</h1>
    <p>Hola ${nombre}!</p>
    <button>Close!</button>
`;
newsSection.appendChild(modal);

console.log(messageWithTemplates);


// ARROW FUNCTIONS - FUNCIONES FLECHA

// Antes ES5
function nombreFuncion (param1, param2) {
    return param1 + param2;
}

// Con la llegada de ES6, disponemos de las arrow functions:
const nombreFuncion = (param1, param2) => param1 + param2;


console.log(nombreFuncion(2, 2));