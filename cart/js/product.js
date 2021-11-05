// Obtenemos el parámetro id de la url
const url = window.location.search;
const searchParams = new URLSearchParams(url);
const productId = searchParams.get("id");

// Buscamos en el arreglo de nuestros productos, el id que haga match con el param "id"
// de la barra de navegación
const product = products.find(product => product.id == productId);

// Obtenemos estos elementos del DOM para modificarlos con la info del producto
const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const productGallery = document.getElementById("gallery");
const customContent = document.getElementById("customContent");

// Modificamos la info del producto
productName.innerText = product.name;
productDescription.innerText = product.description;
productPrice.innerText = `${ formatCurrency(product.price) }`;
productImage.setAttribute("src", product.image);

// Creamos la galería
const createGallery = (images) => {
    // Creamos un elemento div
    const gallery = document.createElement("div");

    // Guardamos el primer elemento en el elemento
    gallery.innerHTML = `<img src="${product.image}">`;
    
    // Almacenamos las demás imágenes en el elemento
    images.forEach(image => {
        gallery.innerHTML += `<img src="${image}">`;
    });

    // Añadimos la galería al DOM
    productGallery.appendChild(gallery);

    // Guardamos las imágenes de la galería
    const productGalleryImages = document.querySelector(".product__image > #gallery > div");
    productGalleryImages.addEventListener("click", e => {
        // Cuando demos clic en cualquier imagen de la galería

        if (e.target.tagName === "IMG") {
            const imageSource = e.target.currentSrc;
            //Remplazamos la imagen principal con el nuevo source
            productImage.setAttribute("src", imageSource);
        }
    });

};

const createSelectColors = (colors) => {
    const selectContent = document.createElement("div");
    const select = document.createElement("select");

    // Lleno este elemento con un label
    selectContent.innerHTML = "<label class='product__colors'>Colores disponibles</label>";

    // Lleno el select con un input
    colors.forEach(color => {
        select.innerHTML += `<option value="${color}">${color}</option>`;
    });
    
    // Añado el select dentro del selectContent
    selectContent.appendChild(select);
    // Añado el selectContent dentro de customContent
    customContent.appendChild(selectContent);

};

// Solo si mi producto tiene imagenes,llamo la función createGallery
if (product.images) {
    createGallery(product.images);
}

// Solo si mi producto tiene colors,llamo la función createSelectColors
if (product.colors) {
    createSelectColors(product.colors);
}