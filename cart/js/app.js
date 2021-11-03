// Elementos que añadí a mi carrito
// Ya añadí el Fifa 22
const cart = [
    {
        id: 2,
    },
];

// Añadir cada producto a un elemento contenedor
const productsSection = document.getElementById("products");

// Se ejecuta para cada producto
// item = product
const productTemplate = (item) => {

    // Creamos un elemento a, le agregamos la clase "product"
    const product = document.createElement("a");
    product.className = "product";

    // Seteamos el atributo href con una url dinámica, donde le pasamos el id del producto
    product.setAttribute("href", `./product.html?id=${item.id}`);
    product.setAttribute("target", `_blank`);

    // Lógica de nuestro tag, botón de Recomendado o Más vendido
    let tagHtml;
    if (item.isRecommended) {
        tagHtml = `<span class="product__tag product__tag--recommended">Recomendado</span>`;
    } else if (item.isBestSeller){
        tagHtml = `<span class="product__tag product__tag--best-seller">Más vendido</span>`;
    } else {
        tagHtml = "";
    }

    // Lógica para saber si un producto ya fue añadido al carrito
    // para deshabilitar el botón.
    const isAdded = cart.some(productCart => productCart.id === item.id);
    let buttonHtml;

    if (isAdded) {
        buttonHtml = `<button class="product__cart" disabled>Producto añadido</button>`
    } else {
        buttonHtml = `<button class="product__cart">Añadir al carrito</button>`;
    }

    // Añadir el HTML a nuestro elemento product.
    product.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="product__image">
    <div class="product__description">
        ${tagHtml}
        <h3 class="product__price">$ ${item.price}</h3>
        <h2 class="product__name">${item.name}</h2>
        ${buttonHtml}
    </div>
    `;

    // Agregar cada producto a nuestro contenedor
    productsSection.appendChild(product);


    // Busco el botón del carrito en el producto (.product__cart)
    const productCartButton = product.querySelector(".product__cart");

    // Cuando haga click en el botón del carrito:
    productCartButton.addEventListener("click", e => {

        // Evita un comportamiento por defecto
        // Dirigirme a otra página (enlace - a) && Refrescar la página (form)
        e.preventDefault();

        const productAdded = {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price
        };

        cart.push(productAdded);
        
        // Deshabilito el botón
        productCartButton.setAttribute("disabled", true);
    });

};


const filterByCategorySelect = document.getElementById("categories");
const orderBySelect = document.getElementById("orderBy");

const loadProducts = () => {
    // Recupera la categoria del select (#categories)
    const category = filterByCategorySelect.value || "";
    // Recupera el orden del select (#orderBy)
    const order = orderBySelect.value || "";

    // Borra los productos anteriores
    productsSection.innerHTML = "";

    // Creamos una variable donde almacenaremos nuestros productos filtrados
    let filteredProductsByCategory;

    // Si la categoria no esta vacía:
    if (category !== "") {
        // Buscamos en el arreglo products, los products que hagan match con el type y la categoria
        filteredProductsByCategory = products.filter((product) => product.type === category);
    } else {
        // En caso de que category esté vacia, llenamos filteredProductsByCategory con todos los productos.
        filteredProductsByCategory = products;
    }

    // Ordenamiento de menor a mayor
    if (order === "asc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => a.price - b.price);
    }

    // Ordenamiento de mayor a menor
    if (order === "desc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => b.price - a.price);
    }
    
    filteredProductsByCategory.forEach(product => {
        // Llamo la funcion productTemplate para cada product y pintarlo en el HTML.
        productTemplate(product);
    });
}

// Cuando el usuario quiere filtrar por una categoria
filterByCategorySelect.addEventListener("change", e => {
    loadProducts();
});

// Cuando el usuario quiere modificar el orden de los productos
orderBySelect.addEventListener("change", e => {
    loadProducts();
});


// Recorro cada uno de los 4 productos que tengo en mi arreglo
products.forEach(product => {
    // Llamo la funcion productTemplate para cada product.
    productTemplate(product);
});
