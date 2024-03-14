/* Esto es un comentario */
// Esto también
// Y esto

// Para definir variables en el ámbito global
var age = 18;

// Para definir variables en el ámbito de bloque
let color = "red";

// Para definir variables que no pueden reasignadas 
const height = 187

function myFunction(){
    let car = "toyota"
}

/* Si declaro una variable en una función, dicha variable podrá ser usada fuera de ella */

let car = "toyota"
let string = "palabra"
let isTrue = true
let isFalse = false
let undefinedVariable 
let nullValue = null

const text = "un trozo de texto " + " otro trozo"
console.log(car, string ,isTrue, isFalse, undefinedVariable, nullValue)
console.log(text)

// Declarar un objeto

const myObject = {
    property: "property1 value", // <- hay que poner coma para separarlos
    property2: "property2 value"
}

const person = {
    age: 18,
    height: 178,
    hairColor: "brown"
}

// Para acceder a la propiedad de un objeto
console.log("AGE:", person.age)

// ARRAYS

const cars = ["bmw", "mazda", "toyota", "kia", 17, {myProperty: "myProperty"}]

console.log(person, cars)

// truthy flasy - Cualquier valor se puede convertir a true o false. 0 es false, null o undefined es false, 1 es true... etc

const falsy = "" // false
const truthy = "Text" // true

console.log(!!falsy, !!truthy)

// Operadores

let a = 1
let b = 2

const sum = a + b
const substract = a - b
const multiply = b * a
const modulo = a % b // the reminder 
a++
b--

console.log(sum, substract, multiply, modulo, a, b)

// Los primitivos se copian por valor y no por referencia

const x = 1
const y = x

console.log(x, y)


console.log(x,y)

let obj1 = {
    age:18
}

let obj2 = obj1
console.log(obj1, obj2) // 18 

obj1.age = 19

console.log(obj1, obj2) // 19

// Con esto obtenemos que si modificamos uno de los dos objetos se modifican ambos porque se reasigna por REFERENCIA y no por valor.


// Con el == lo que hace es una inferencia de tipos "3" == 3 será true porque "3" lo convierte a numero para compararlo
//En cambio, con === discrimina totalmente

// Si intento comparar dos objetos lo hace por REFERENCIA, si no comparten la misma posición siempre será false.

// CONDICIONALES

if (isTrue){}

// SWITCH
let animal = "dog" // no es fijo
switch(animal){
    case "dog": {
        console.log("This is a dog")
        break;
    }
    case "cat": {
        console.log("This is a cat")
        break;
    }
    default: {
        console.log("Richi")
    }
}

// Bucles

for(let i = 0; i < 10; i++){
    console.log(i)
}


let i = 0
while(i<10){
    console.log(i)
    i++
}

let iterableObject = {
    property1: "1",
    property2: "2",
    property3: "3",
    property4: "4",
    property5: "5",
    property6: "6",
}
// el For In se aplica sobre no iterables
for(property in iterableObject){
    console.log("property:", property, iterableObject[property])
}

let myArray = ["item1", "item2", "item3"]

// El For Of solo se aplica sobre arrays
for(item of myArray){
    console.log("property:", item)

}

// Funciones

function myFunction(arg1, arg2, arg3){
    console.log(arg1, arg2, arg3)
}

// Llamamos a la función con los argumentos que nosotros hemos creado previamente. 
myFunction("first", "second", "third")


// Tambien se pueden declarar con arrow functions

const myArrowFunction = (arg1, arg2, arg3) => {
    console.log(arg1, arg2, arg3)
}

myArrowFunction("first", "second", "third")

// Argumentos REST - cuando no sabemos cuantos argumentos recibirmemos

function restArguments(...args){
    console.log(args)
    let argCount = 0
    for(let i = 0; i < args.length; i++){
        argCount++
    }
    console.log(argCount)
}

restArguments("first", "second", "third")

// Callback: es una función que se le pasa como parámetro a otra función para ser llamada posteriormente

function arithMeticOperation(number1, number2, operation){
   console.log(operation(number1, number2))
}

arithMeticOperation(2, 5, (number1, number2) => {return number1 + number2})

// se puede hacer tambien declarando la función previamente

function divide(number1, number2){
    return number1 / number2
}

arithMeticOperation(2, 5, divide)

// Metodos sobre objetos

const objectWithMethod = {
    age: 18,
    reminder: (number1, number2) => {return number1 % number2}
}

console.log(objectWithMethod.reminder(5,7))

// ARRAYS

const exampleArray = ["first", "second", "third"]
exampleArray.push("new pushed element")
console.log(exampleArray)
exampleArray.pop()
console.log(exampleArray)

// Para recorrer nuestro array
exampleArray.forEach((item, i) => {console.log(item, i)})

// Con el map podemos modificar 
const modifiedArray = exampleArray.map((item, i) => { return item + " modified"})
console.log(modifiedArray)

// Tiene que devolver una condición, y si se cumple me devuelve un array con el elemento que coincida
const filteredArray = exampleArray.filter((item) => { return item === "first" })
console.log(filteredArray)

// Convertir un objeto JSON: serializar

const serializedObject = JSON.stringify(iterableObject) 

console.log(serializedObject, "serialized")

const deserialized = JSON.parse(serializedObject)
console.log(deserialized, "deserialized")