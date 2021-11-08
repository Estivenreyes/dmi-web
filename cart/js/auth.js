import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFKaAuMGLffTNfvJ_fvItiIyfx-2VZCfs",
    authDomain: "carrito-a8ed7.firebaseapp.com",
    projectId: "carrito-a8ed7",
    storageBucket: "carrito-a8ed7.appspot.com",
    messagingSenderId: "696452535589",
    appId: "1:696452535589:web:51bd8e65e981c6a1bd76cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const facebookButton = document.getElementById("facebook");


const createUser = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        if (e.code === "auth/email-already-in-use") {
            console.log("Correo electrónico en uso...")
        }
        if (e.code === "auth/weak-password") {
            console.log("Intenta con una contraseña más segura...")
        }
    }
}

const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(`Bienvenido ${user.email}`);
    } catch (e) {
        if (e.code === "auth/user-not-found") {
            console.log("Este usuario no existe en nuestra base de datos");
        }
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    } catch (e) {
        console.log(e);
    }
}

const loginWithFacebook = async () => {

    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(result);

}

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    if (email && password) {
        createUser(email, password);
    } else {
        console.log("Completa todos los campos...");
    }

});


loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email && password) {
        login(email, password);
    } else {
        console.log("completa todos los campos...");
    }
});

logoutButton.addEventListener("click", e => {
    logout();
})

facebookButton.addEventListener("click", e => {
    loginWithFacebook();
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginForm.classList.add("hidden");
        logoutButton.classList.add("visible");
    } else {
        loginForm.classList.remove("hidden");
        logoutButton.classList.remove("visible");
    }
})