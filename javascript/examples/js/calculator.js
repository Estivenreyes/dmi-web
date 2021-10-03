
function sum (arrayNumbers) {
    let total = 0;
    arrayNumbers.forEach(function(num){
        total = total + num;
        //total += num;
    });
    return parseInt(total);
}


function multiplicar (arrayNumbers) {
    let total = 1;
    arrayNumbers.forEach(function(num){
        console.log(num);
        total = total * num;
        //total += num;
    });
    return total;
}


function operation (arrayNumbers, type) {
    let total = arrayNumbers[0];

    arrayNumbers.forEach(function(num, index){
        if (index !== 0) {
            if(type === "sumar") {
                total = total + num;
            }
            if(type === "resta") {
                total = total - num;
            }
            if(type === "multiplicar") {
                total = total * num;
            }
            if(type === "dividir") {
                total = total / num;
            }
        }   
    });
    return total;
}


const arrayNumbers = [1, 4, 23, 5, 6, 9, 3];
const result = sum(arrayNumbers);
// console.log(result);


const suma = operation(arrayNumbers, "sumar");
const resta = operation(arrayNumbers, "resta");
const multiplicacion = operation(arrayNumbers, "multiplicar");
const division = operation(arrayNumbers, "dividir");

console.log(suma, resta, multiplicacion, division);


// -- Interación con el navegador
// -- DOM (Document Object Model)

