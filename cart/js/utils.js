const firebaseConfig = {
    apiKey: "AIzaSyAFKaAuMGLffTNfvJ_fvItiIyfx-2VZCfs",
    authDomain: "carrito-a8ed7.firebaseapp.com",
    projectId: "carrito-a8ed7",
    storageBucket: "carrito-a8ed7.appspot.com",
    messagingSenderId: "696452535589",
    appId: "1:696452535589:web:51bd8e65e981c6a1bd76cc"
};

const formatCurrency = (price) => {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price);
};