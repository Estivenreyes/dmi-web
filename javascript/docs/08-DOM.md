# 🤖 DOM (Document Object Model)

## ¿Qué es el DOM?

Estructura del HTML que puede ser accedida mediante Javascript para modificar su comportamiento o contenido.

## El objeto Document
En Javascript, la forma de acceder al `DOM` es a través de un objeto llamado document, que representa el árbol o estructura de nuestra página web.

---

## API Nativa 

### Seleccionar elementos
- Si queremos hacer una modificación o interacción de un elemento en nuestra página, lo primero que debemos hacer es seleccionar `el elemento HTML`. Para ello, se suele identificar el elemento a través de un `id` o una `clase`.

| Métodos                        | Descripción                               |
|--------------------------------|-------------------------------------------|
| .getElementById(id)            | Busca el elemento HTML por un id          |
| .getElementsByClassName(class) | Busca los elementos HTML por una clase    |
| .getElementsByTagName(tag)     | Busca los elementos HTML por una etiqueta |
| .querySelector(anySelector)    | Busca el primer elemento del documento    |

---

### Añadir estilos (DOM Styles)
- El objeto `style` es la representación de CSS en Javascript. Los atributos CSS deben nombrarse con `camelCase`.
- [HTML DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)

```
const title = document.getElementById("title");
title.style.color = "red";
title.style.fontSize = "20px";
```

### Anadir clases
- Podemos añadir clases que se encarguen de los estilos y no tener que añadirlos vía Javascript.
- Con la propiedad `classList` podemos acceder a la lista de clases de un elemento.
- La propiedad `classList`, tiene métodos como `add` y `remove` para gestionar nuevas clases.
- El método `toggle` verifica si la clase existe, sino, la añade.
- [Element.classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList)

```
// CSS 
.title--red {
    color: red;
    font-size: 20px;
}

// JS
title.classList.add('title--red');
title.classList.remove('title--red');
title.classList.toggle('title--red');


```
### Obtener el valor
- Para obtener el valor de un elemento en HTML:
    - Texto: `title.textContent`
    - Input: `input.value`

--- 

### Agregar interacción a los elementos
- Métodos `element.addEventListener`
    - `click`: Al hacer click en botones de inicio de sesión, galerías y más.
    - `submit`: Se ejecuta en formularios

### Añadir nuevos elementos en el DOM
```
const message = document.createElement('div');
message.innerHTML = "<h1>I'm a new HTML Object</h1>";
document.body.appendChild(message);

```

---

## Ejercicio #2
Desarrollaremos un formulario de contacto donde pondremos a prueba conceptos como `condicionales`, `objetos`, `manipulación e interacción del DOM`.
- Nuestro formulario de contacto debe tener los siguientes campos:
    - Nombre
    - Apellidos
    - Correo electrónico
    - Mensaje
    - Botón de Enviar.
- Todos los campos son obligatorios, de lo contrario el usuario no podrá enviar el formulario. Añade un `alert` como feedback para el usuario con el mensaje `"Completa todos los campos por favor"`.
- Los valores deben almacenarse en un `objeto` con el nombre `user`, donde cada propiedad será un valor del formulario. El objeto debe mostrarse en consola, siempre y cuando el paso anterior se cumpla.
- Cuando todo haya salido bien, debe crearse un nuevo `elemento` en el DOM con el mensaje: `"Pronto nos pondremos en contacto contigo ${Nombre}. Gracias"`
- Plus si se utilizan funciones para optimizar el código.