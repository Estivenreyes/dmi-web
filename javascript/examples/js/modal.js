const button = document.getElementById("openModal");
const loginButton = document.getElementById("openLogin");
const loginForm = document.getElementById("login");
const closeLoginForm = document.getElementById("close");


const showModal = (name) => {
    const modal = document.createElement("div");
    modal.className = "modal"; // Permitir agregar estilos vinculados a .modal
    modal.innerHTML = `
    <div class="modal__content">
        <h3>Welcome ${name}</h3>
        <p>Woohoo, you're reading this text in a modal!</p>
        <button id="closeModalButton">X</button>
    </div>
    `;
    document.body.appendChild(modal);
    closeModal(modal);
};

const closeModal = (modal) => {
    const closeButton = document.getElementById("closeModalButton");
    closeButton.addEventListener("click", () => {
        modal.remove();
    });
};

button.addEventListener("click", () => {
    showModal("David");
});

loginButton.addEventListener("click", () => {
    loginForm.style.display = "flex";
});

closeLoginForm.addEventListener("click", () => {
    loginForm.style.display = "none";
});