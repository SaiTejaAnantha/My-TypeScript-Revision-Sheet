// Typescript is a programming language created by microsoft inorder to address the shortcomings of Javascript

// Typescript is the superset of Javascript, and it is a statically typed language unlike javascript

// Everything available in JS is availabe in TS and more.

// Typescript is all about Type Safety which JS doesn't have due to its looselya and dynamic type nature of JS

// if there is any error, typescript displays when we are writing the program itself

// browser don't know how to run ts code, so, at the end of the day typescript file(.ts) is transpiled by typescriptcompiler(tsc) to javascript file(.js), the js file is used for production

// .ts file => Compiler => .js file (this process is called transpilation)

// Since Javascript is a dynamically and loosely typed language, there are lot of chances to get errors, and it's hard to debug

// The above problem is solved by typescript, unlike javascript, we cannot change the type of variable

// Typescript is essentially Javascript with type checking

// for simple projects, JS is enough, but for medium to large project, Typescript should be used
 
// tsc --init - creates a new tsconfig.json file, we can change the settings in it, based on our needs. 

// I changed settings such that if i run .ts file index.js file is generted inside dist folder and I set index.ts file in src folder, now to run .ts file just type tsc instead of tsc index.ts

// also when .ts is transpiled into .js, I changed settings such that comments are removed when .js file is generated after transpilation, etc.

// This is Typescript Revision Sheet, the corresponding .js file after transpilation is in the same repository as index.js

// check how the line of code written in .ts converts into js syntax in index.js file for better understanding
let variableName = 100 // implicit declaration
let nameVariable: number = 100 // explicit declaration, best practice, gives more information about variable, although both lines of code convert to same js code
// basic syntax is let variableName: type = value, type should be lowercase

/*
Typescript Data types
   JS types like string, number, boolean, bigint, undefined, null, object, array
   special types - any, unknown, never
   any - It's a type that disables type checking and effectively allows all types to be used
   unknown - It's similar to 'any' but safer alternative to any, unknown is best used when
   you don't know the type of data being typed, to add a type later, you'll need to cast it,
   casting is when we use the "as" keyword to say property or variable is of the casted type.
   never - never effectively throws an error whenever it is defined
   undefined & null - these types don't have much use unless strictNullChecks is enabled in the tsconfig.json file
   Arrays - typescript has a specific syntax for typing arrays
   tuples - a tuple is a typed array with pre-defined length and types for each index
   Object - typescript has specific syntax for typing objects
   Functions - typescript has a specific syntax for typing function parameter and return values
*/

/* any - not a best practice
let variableName: any = true;
variableName = "somestring"; // doesn't produce error
*/

/* never - rarely used
let x: never = true; // erro: type 'boolean' is not assignable to type 'never'
*/

/* Arrays
readonly - The 'readonly' keyword can prevent arrays from being changed

const names: readonly string[] = ["Sai Teja"];
names.push("Sai"); // gives Error: Property 'push' does not exist on type 'readonly string[]'.
*/
const names: string[] = [];
names.push("Sai Teja"); 

//tuples - to define a tuple, specify the type of each element in the array
let theTuple: [string, number, boolean]; // defining tuple
theTuple = ['typescript', 7, true]; // initializing tuple
// a good practice is to make the tuple  readonly
// named tuples - allows us to provide context for our values at each index
const graph: [x: number, y: number] = [77, 777];
// destructuring tuples - since tuples are arrays, we can also destructures them
const [x, y] = graph;

// Objects
const kar: {type: string, model:string, year: number} = {
    type: "toyota",
    model: "corolla",
    year: 2009
};
// typescript can infer the types of properties based on their values
const secondCar = {
    type: "toyota",
};
secondCar.type = "ford"; // no error
// secondCar.type = 2; // error: type  'number' is not assignable to type 'string'


// number
let userID: number = 1234

//boolean
let isLoggedIn: boolean = false

//any - using this we can get rid of type checking for that particular variable 
let someVariable; // any is default value of variable if we don't initialize in ts
// using 'any' is not a best practice, since it blocks type checking

let level; // if we declare a variable and don't initialize, by default it will value of 'any' in ts

let user = {name: "sai teja", age: 20}
console.log(user.name);  

// Enums - An enum is a special "class" that represents a group of constants(unchangable variabes)
// Enums are 2 types - Numeric Enums and String Enums

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value
enum cardinalDirections {
    North, 
    East, 
    South, 
    West
}
let currentDirection = cardinalDirections.North;
console.log(currentDirection); // logs 0
// currentDirection = 'North'; // error: 'north' is not assignable to type 'cardinalDirections'.

// Numeric Enums - Initialized
enum caardinalDirections {
    North = 1,
    East, 
    South,
    West
}
console.log(caardinalDirections.North); // prints 1
console.log(caardinalDirections.West); // prints 4

// Numeric Enums - Fully Initialized
enum statusCodes {
    NotFound = 404,
    Success = 200,
    Accpted = 202,
    BadRequest = 400
}
console.log(statusCodes.NotFound) // prints 404
console.log(statusCodes.Success) // prints 200

// String Enums - enums can also contain strings, this is more common than numeric enums, because of their readability and intent
enum kardinalDirections {
    North = 'North',
    East = 'East',
    South = 'south',
    West = 'West'
};
console.log(kardinalDirections.North); // prints North
console.log(kardinalDirections.West); // printgs West

// Technically, we can mix and match string and numeric enums values, but it is recommended not to do so.

// Type Aliases and Interfaces
// typescript allows types to be defined seperately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects

// Type Aliases - allow defining types with a custom name (an Alias
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
}

const carYear: CarYear = 2001
const carType: CarType = "toyota"
const carModel: CarModel = "corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

// Interfaces - these are similar to Type Aliases, except they only apply to object types

interface Rectangle {
    height: number, 
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

// Union Types - are used when a value can be more than a single type, such as when a property would be string or number
// union | (OR)
// using the  | we are saying our parameter is a string or number
function printStatusCode(code: string | number) {
    console.log('My status code is ${code}.')
}
printStatusCode(404); // prints 404
printStatusCode('404'); // prints 404

// union type errors - you need to know what your type is when union types are being used to avoid type errors
/* 
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'
}
*/

// Functions 
// return type - the type of the value returned by the function can be explicitly defined
// ':number' specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}
// if no return type is defined, typescript will attempt to infer it through the types of the variables or expressions returned

// void return type - the type void can be used to indicate a function doesn't reutrn any value
function printHello(): void {
    console.log('Hello!');
}

// parameters - function parameters are typed with a similar syntax as variable declarations
function multiply(a: number, b: number) {
    return a*b;
}
// if no parameter type is defined, typescript will default to using any, unless additional type information is avaiable as shown in default parameters & type alias sections given below

// optional parameters - by default typescript will assume all paramaters are required, but they can explicitly marked as optional
// the '?' operator here marks parameter 'c' as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c||0);
}

// default parameters - for parameters with default values, the default value goes after the type annotation
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
// typescript can also infer the type from the default value

// named parameters - typing named parameters follows the same pattern as typing normal parameters
function divide ({dividend, divisor}: {dividend:number, divisor: number}) {
    return dividend/divisor;
}

// rest parameters - can be typed like normal parameters, but the type must be an array as rest parameters are alway sarrays
function addd(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p,c) => p+c, 0);
}

// type alias
// function types can be specified seperately from function wtih type aliases
// these types are written similarly to arrow functions
type Negate = (value: number) => number;
// in this function, the paramter 'value' automatically gets assigned the type'number' from tye type 'Negate'
const negateFunction: Negate = (value) => value*-1;

// TypeScript Casting
// There are times when working with types where it's necessary to override, 
// the types of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type

// Casting with 'as'
// A straightforward way to cast a variable using the 'as' keyword ,which will directly change the type of the given variable
let z: unknown = 'hello';
console.log((z as string).length);

// casting doesn't actually change the type of the date within the variable, for example 
// the following code will not work as expected since the variable p is still holds a number
/*let p: unknown = 7;
console.log((x as string).length);*/ // prints undefined since numbers don't have a lenght

// typescript will still attempt to typecheck casts to prevent casts that don't seem correct, 
// for example the following code will throw a type error since typescript knows casting a string to a number
// doesn't make sense without converting the data;
// console.log((4 as string).length)
// gives Error: conversion of type 'number' to type 'string' may be a mistake because neither
// type sufficiently overlaps with the ohter. If thi was intentionoal, conver the expression to 'unknown' first

// Casting with <> - works same as casting with 'as'
// this type of casting will not work with tsx, such as when working on react files

// Force Casting
// To override type errors that typescript may throw when casting, first cast to unkonwn, then to the target type
/*let q = 'hello';
console.log((x as unknown) as number).length); */ 
// x is not actually a number so this will return undefined

// TypeScript Classes
// typescript adds types and visibility modifiers to javascript classes

// Member: Types
// the members of a class(properties&methods) are typed using annotations, similar to variables
/*class Person{
    name: string;
}
const person = new Person(); // this will be reviewed and updated
person.name = "sai";*/

// Member: Visibility
// class members also be given speical modfiers which affect visibility
// there are 3 main visibility modifiers which affect visibility
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
    private name: string;

    public constructor(name:string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
const person = new Person("saiteja");
console.log(person.getName()); // person.name isn't accesible from outside the class since it's private
// The 'this' keyword in a class unsually refers to the instance of the class.

// Parameter Properties
// typescript provides a convineint way to define class members in the constructor, by adding a visibility modifiers to the parameter
class PPerson {
    // name is a private member variable
    public constructor(private name: string) {}

    public getName(): string {
        return this. name;
    }
}
const pperson = new PPerson("sai");
console.log(pperson.getName());

// Readonly
// similar to arrays, the readonly keyword can prevent class members from being changed
class PPPerson {
    private readonly name: string;
  
    public constructor(name: string) {
      // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const ppperson = new PPPerson("Jane");
  console.log(ppperson.getName());

// Inheritance: Implements(will be updated)
// Inheritance: Extends(will be updated)
// Override(will be updated)
// Abstract Classes(will be updated)

// TS basic generics
// ts utility types
// ts keyof
// ts null
// ts defintely types
