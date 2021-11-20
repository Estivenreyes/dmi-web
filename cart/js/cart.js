import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc, addDoc, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("total");
const checkoutForm = document.getElementById("checkout");
const autocompleteFields = document.getElementById("autofill");

let total = 0;
let cart = [];
let userLogged = {};

const getMyCart = () => {
    const cart = localStorage.getItem("cart");
    // Si cart no es nulo, parseo la info y sino, retorno un arreglo vacío
    return cart ? JSON.parse(cart) : [];
};

const removeProduct = (productId) => {
    const cart = getMyCart();
    const newCart = cart.filter(product => product.id !== productId);
    
    // slice approach
    localStorage.setItem("cart", JSON.stringify(newCart));

    renderMyCart();

};

const getFirebaseCart = async (userId) => {
    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : {
        products: []
    }
};

const getUserInfo = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (e) {
        console.log(e);
    }
}



const renderProduct = (product) => {

    const newProduct = document.createElement("li");
    newProduct.className = "product product--cart";
    newProduct.innerHTML = `
        <img src="${product.image}" alt="" class="product__thumbnail">
        <div class="product__info">
            <h2 class="product__name">${product.name}</h2>
            <h3 class="product__price">${formatCurrency(product.price)}</h3>
        </div>
        <button class="product__cart product__cart--thumb">Remove</button>
    `;

    cartSection.appendChild(newProduct);

    newProduct.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            removeProduct(product.id);
        }
    });

};

const renderMyCart = (cart) => {
    cartSection.innerHTML = "";
    total = 0;

    cart.forEach(product => {
        total += parseInt(product.price);
        renderProduct(product);
    });

    totalSection.innerText = `Total: ${formatCurrency(total)}`;
};

const deleteCart = async () => {
    try {
        await deleteDoc(doc(db, "cart", userLogged.uid));
        renderMyCart([]);
        console.log("Carrito de compras actualizado...");
    } catch(e) {
        console.log(e);
    }
};

const createOrder = async (userFields) => {
    try {
        const order = await addDoc(collection(db, "orders"), {
            ...userFields, // spread 
            products: cart,
            total,
            email: userLogged.email,
            status: "pending",
        });
        alert(`Muchas gracias, tu pedido con ID: ${order.id} ha quedado registrado.`);

        deleteCart();
    } catch (e) {
        console.log(e)
    }
};

autocompleteFields.addEventListener("click", e => {
    checkoutForm.name.value = userLogged.name;
    checkoutForm.city.value = userLogged.city;
    checkoutForm.address.value = userLogged.address;
});

checkoutForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = checkoutForm.name.value;
    const city = checkoutForm.city.value;
    const address = checkoutForm.address.value;

    const userFields = {
        name,
        city,
        address
    };

    if (cart.length) {
        if (name && city && address) {
            createOrder(userFields);
        } else {
            alert("Completa todos los campos...");
        }
    } else {
        alert("Selecciona algunos productos...")
    }
});


onAuthStateChanged(auth, async (user) => {
    if (user) {
        const result = await getFirebaseCart(user.uid);
        cart = result.products;
        renderMyCart(cart);

        const userInfo = await getUserInfo(user.uid);
        userLogged = {
            ...user,
            ...userInfo
        };
        console.log(userLogged);
    } else {
        cart = getMyCart();
        renderMyCart(cart);
    }
});
