"use strict";
let variableName = 100;
let nameVariable = 100;
const names = [];
names.push("Sai Teja");
let theTuple;
theTuple = ['typescript', 7, true];
const graph = [77, 777];
const [x, y] = graph;
const kar = {
    type: "toyota",
    model: "corolla",
    year: 2009
};
const secondCar = {
    type: "toyota",
};
secondCar.type = "ford";
let userID = 1234;
let isLoggedIn = false;
let someVariable;
let level;
let user = { name: "sai teja", age: 20 };
console.log(user.name);
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 0] = "North";
    cardinalDirections[cardinalDirections["East"] = 1] = "East";
    cardinalDirections[cardinalDirections["South"] = 2] = "South";
    cardinalDirections[cardinalDirections["West"] = 3] = "West";
})(cardinalDirections || (cardinalDirections = {}));
let currentDirection = cardinalDirections.North;
console.log(currentDirection);
var caardinalDirections;
(function (caardinalDirections) {
    caardinalDirections[caardinalDirections["North"] = 1] = "North";
    caardinalDirections[caardinalDirections["East"] = 2] = "East";
    caardinalDirections[caardinalDirections["South"] = 3] = "South";
    caardinalDirections[caardinalDirections["West"] = 4] = "West";
})(caardinalDirections || (caardinalDirections = {}));
console.log(caardinalDirections.North);
console.log(caardinalDirections.West);
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["NotFound"] = 404] = "NotFound";
    statusCodes[statusCodes["Success"] = 200] = "Success";
    statusCodes[statusCodes["Accpted"] = 202] = "Accpted";
    statusCodes[statusCodes["BadRequest"] = 400] = "BadRequest";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.NotFound);
console.log(statusCodes.Success);
var kardinalDirections;
(function (kardinalDirections) {
    kardinalDirections["North"] = "North";
    kardinalDirections["East"] = "East";
    kardinalDirections["South"] = "south";
    kardinalDirections["West"] = "West";
})(kardinalDirections || (kardinalDirections = {}));
;
console.log(kardinalDirections.North);
console.log(kardinalDirections.West);
const carYear = 2001;
const carType = "toyota";
const carModel = "corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
const rectangle = {
    height: 20,
    width: 10
};
function printStatusCode(code) {
    console.log('My status code is ${code}.');
}
printStatusCode(404);
printStatusCode('404');
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function multiply(a, b) {
    return a * b;
}
function add(a, b, c) {
    return a + b + (c || 0);
}
function pow(value, exponent = 10) {
    return value ** exponent;
}
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
function addd(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
const negateFunction = (value) => value * -1;
let z = 'hello';
console.log(z.length);
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("saiteja");
console.log(person.getName());
class PPerson {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const pperson = new PPerson("sai");
console.log(pperson.getName());
class PPPerson {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const ppperson = new PPPerson("Jane");
console.log(ppperson.getName());
