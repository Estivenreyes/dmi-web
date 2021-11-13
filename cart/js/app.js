import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

let products = [];
let userLogged = null;
let cart = [];

const getAllProducts = async() => {
    const collectionRef = collection(db, "products");
    const { docs } = await getDocs(collectionRef);

    const firebaseProducts = docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    })

    console.log(firebaseProducts);
    // Recorro cada uno de los 4 productos que tengo en mi arreglo
    firebaseProducts.forEach(product => {
        // Llamo la funcion productTemplate para cada product.
        productTemplate(product);
    });

    products = firebaseProducts;
};

const getMyCart = () => {
    const cart = localStorage.getItem("cart");
    // Si cart no es nulo, parseo la info y sino, retorno un arreglo vacío
    return cart ? JSON.parse(cart) : [];
};

const getFirebaseCart = async (userId) => {
    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : {
        products: []
    }
};

const addProductsToCart = async (products) => {
    await setDoc(doc(db, "cart", userLogged.uid), {
        products
    });
};

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

    const thumbnailImage = "https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png";

    // Añadir el HTML a nuestro elemento product.
    product.innerHTML = `
    <img src="${item.image !== '' ? item.image : thumbnailImage }" alt="${item.name}" class="product__image">
    <div class="product__description">
        ${tagHtml}
        <h3 class="product__price">${ formatCurrency(item.price) }</h3>
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

        if (userLogged) {
            addProductsToCart(cart);
        }

        localStorage.setItem("cart", JSON.stringify(cart));


        
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


const user = {
    name: "Juan José",
    email: "jujogi413@gmail.com"
}

localStorage.setItem("user", JSON.stringify(user));

//stringy para almacenar la info del objecto en localStorage
// parse cuando recupero la información

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const result = await getFirebaseCart(user.uid);
        cart = result.products;
        userLogged = user;
    } else {
        cart = getMyCart();
    }

    getAllProducts();
});
