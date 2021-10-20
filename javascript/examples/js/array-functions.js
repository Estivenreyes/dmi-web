const user = {
    products: [
        {
            name: "PS5",
        },
        {
            name: "computador"
        },
        {
            name: "Mouse"
        }
    ]
};
const newProduct = {
    name: "Cable"
};

// PUSH
user.products.push(newProduct);
// console.log(user);

// SLICE
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 5);

// console.log(fruits, citrus);

// FOREACH
user.products.forEach(product => {
    // console.log(`El producto del usuario es: ${product.name}`);
});

// INCLUDES
const hasBanana = fruits.includes("Banana");
if (hasBanana === true) {
    // console.log("El banano está en el arreglo");
} else {
    // console.log("El banano NO está en el arreglo");
}

// JOIN 
const allFruits = fruits.join(",");
// console.log(allFruits);

const students = [
    {
        name: "Angelica",
        age: 20
    },
    {
        name: "Yoshiki",
        age: 35
    },
    {
        name: "Cristian",
        age: 22
    },
    {
        name: "Juliana",
        age: 16
    }
];

// EVERY : return true or false

const areAdults = students.every((student) => student.age >= 18);
//console.log(areAdults);

// SOME: return true or false
const isYoung = students.some((student) => student.age <= 18);
//console.log(isYoung);

// FILTER
const orders = [
    {
        name: "Order 1",
        status: true,
    },
    {
        name: "Order 2",
        status: true,
    },
    {
        name: "Order 3",
        status: false,
    },
];

const adults = students.filter((student) => student.age >= 18); // Retorna un arreglo con los estudiantes mayores a 18 años.
const activeOrders = orders.filter((order) => order.status); // Retorna un arreglo con las ordenes activas.
//console.log(adults, activeOrders);

// FIND
const adult = students.find((student) => student.age >= 35); // Retorna el primer elemento que cumplió con la condición.
// console.log(adult); // Yoshiki

// MAP

const result = [
    {
        Name: "Name",
        ProductCode: 124,
        IsActive: true,
    },
];

const numbers = [5, 20, 30];
const newNumbers = numbers.map((number) => {
    return number * 5;
});
console.log(newNumbers);
const newResult = result.map((result) => {
    return {
        name: result.Name,
        productCode: result.ProductCode,
        isActive: result.IsActive,
        newProp: true,
        color: "blue",
    };
});

console.log(newResult, result);
