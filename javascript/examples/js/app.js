const PI = 3.1416;
const APIKEY = "12456576h";

let myBoolean = true;
myBoolean = false;

const number1 = 5;
const number2 = 10 / number1;

//console.log(number2);

// const name = "Juan  José";
// const message = "Welcome "+ name;

// //console.log(message);

const number5 = 5;
let string5 = "5";
// string5 = parseInt(string5);

console.log(number5, string5);

console.log("Son iguales?:");
console.log(number5 === string5);

console.log("Son diferentes?: ");
console.log(number5 !== string5);


console.log("------ARRAYS--------");
const productPrices = [5000, 'computer', 2500];
productPrices.push(4000);

console.log("El precio de tus productos: " + productPrices);

let totalPrices = 0;

productPrices.forEach(function(price) {
    if(typeof price === "number") {
        totalPrices += price;
    }
});

console.log("El total es: " + totalPrices);

// JSON (Javascrip Object Notion)
// OBJECTS

console.log("------OBJECTS--------");

const celphone = {
    brand: "Xiaomi",
    color: "blue",
    "5g": true,
    camera: 2,
    "property-one": 3,
};

// celphone[0] NO!
console.log(celphone.color);
console.log(celphone.camera);
console.log(celphone["5g"]);
console.log(celphone["property-one"]);

const user = {
    name: "Oscar",
    email: "oscar@gmail.com",
    isActive: true,
}

console.log("Welcome "+user.name);

if(user.isActive === false) {
    alert("Please confirm your email!");
}

// Destructuración de objetos
console.log("------OBJECT DESTRUCTURING--------");

const result = {
	// "name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	// "films": [
	// 	"https://swapi.dev/api/films/2/",
	// 	"https://swapi.dev/api/films/6/",
	// 	"https://swapi.dev/api/films/3/",
	// 	"https://swapi.dev/api/films/1/",
	// 	"https://swapi.dev/api/films/7/"
	// ],
	"species": [
		"https://swapi.dev/api/species/1/"
	],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
};

// result.name;
// result.films;

const { name = "user", films = [] } = result;
console.log("Welcome "+ name);
console.log(name, films);


const people = [
    // Person 0
    {
        name: "Angelica",
        grade: 4,
    },
    // Person 1
    {
        name: "Juliana",
        grade: 3,
    },
    // ...
    {
        name: "Oscar",
        grade: 4.7,
    },
    {
        name: "Yoshiki",
        grade: 4.5,
    },
    {
        name: "Julian",
        grade: undefined
    }
];

let finalGrade = 0;

people.forEach(function(person){
    const { grade = 0 } = person;
    finalGrade += grade;
});

console.log(finalGrade / people.length);