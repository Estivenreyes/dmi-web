function myFunction (name, age) {
    console.log(name + " tiene " + age + " años");
}

// Invocar función
const name = "Andrés";
const age = 20;

myFunction(name, age);
// myFunction("angelica", 20);
function sum (num1, num2) {
    const result = num1 + num2;
    return result;
}

const num1 = sum(1, 1);
const num2 = sum(5, 5);
console.log(num1, num2)

function sendAlert(user, message){
    const { name = "Fulanito" } = user;
    return name+": "+message;
}

const user = {
    age: 28
}

const message = "Iniciar sesión en la aplicación";
const alert = sendAlert(user, message);

console.log(alert);

const alertNtwo = sendAlert(user, "Por favor registrar horas");

console.log(alertNtwo);
