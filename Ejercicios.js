/*Escribe una función que convierta grados Celsius a Fahrenheit.*/

function celsiusToFarenheit(celsius){
    const fahrenheit = (9/5) * celsius + 32
    return fahrenheit
}

console.log(celsiusToFarenheit(40))


/* Crea una función que retorne el último elemento de un array sin modificar el array original. */

let myArray = ["item1", "item2", "item3"]

function returnLastElement(myArray){
  return myArray[myArray.length-1]
}

console.log(returnLastElement(myArray))

/* Escribe un script que imprima "Hola Mundo" en la consola. */

function helloWorld(){
    console.log("Hello amijo")
}

helloWorld()


/* Crea una función que invierta un string. */

let text = "Hola"

function reverseString(string){
    let textSplited = text.split("")
    console.log(textSplited)
    let newString = ""

    for(let i = textSplited.length-1; i >= 0; i--){
        newString += textSplited[i]
    }
    console.log(newString)
}

reverseString(text)

// Desarrolla una función que cheque si un número es par o impar.

function pairChecker(number){
    if (number % 2 === 0){
        console.log("El número es par")
    } else {
        console.log("El número es impar")
    }
}

 pairChecker(4)
 pairChecker(7)

 // Escribe una función que elimine todos los valores falsos de un array (falsy values: false, null, 0, "", undefined, y NaN).

function eliminarFalsy(data) {
    let newArray = []; // Creamos una nueva matriz para almacenar los elementos que no son falsy
    
    // Recorremos el array original
    for (let i = 0; i < data.length; i++) {
        // Verificamos si el elemento no es falsy
        if (data[i]) {
            // Si no es falsy, lo agregamos a la nueva matriz
            newArray.push(data[i]);
        }
    }
    
    return newArray; // Devolvemos la nueva matriz sin los valores falsy
}

// Ejemplo de uso
let arrayOriginal1 = [false, null, 0, "", undefined, NaN, "hola", 123];
let arraySinFalsy1 = eliminarFalsy(arrayOriginal);
console.log(arraySinFalsy);

/*La condición if (data[i]) evalúa si data[i] es un valor que no es falsy. Si es así, se ejecuta el
bloque de código dentro del if, 
lo que significa que data[i] se considera un valor que no es falsy y se agrega a la nueva matriz newArray. 
Si data[i] es un valor falsy, el bloque de código dentro del if no se ejecuta, y el valor no se agrega a newArray.*/

// Opción 2:

const eliminarFalsy = (data) => {
    const newArray = data.filter(item => {
        // Retornar true si el elemento no es falsy
        return item;
    });
    return newArray;
}

// Ejemplo de uso
const arrayOriginal = [false, null, 0, "", undefined, NaN, "hola", 123];
const arraySinFalsy = eliminarFalsy(arrayOriginal);
console.log(arraySinFalsy);


/*
La función de retorno dentro de filter():

Retorna true si el elemento item no es falsy.
Retorna false si el elemento item es falsy.
La expresión return item; se evalúa como true para cualquier elemento que no sea falsy 
(ya que los valores no falsy son evaluados como true en JavaScript), y se evalúa 
como false para los elementos que son falsy (como false, null, 0, "", undefined, NaN).

Por lo tanto, filter() incluirá solo los elementos que son evaluados como true por la función 
de retorno, es decir, los elementos que no son falsy. 
Esto es cómo filter() sabe si un elemento es verdadero o no.
*/


// 9. Escribe una función que retorne la longitud de un string sin usar el método .length.

function longitudString(str) {
    let longitud = 0;
    // Iterar sobre cada caracter del string
    // En cada iteración, 'caracter' representa un caracter del string 'texto'
    for (let caracter of str) {
        // Incrementar la longitud por cada caracter encontrado
        longitud++;
    }
    // Devolver la longitud calculada
    return longitud;
}

// Ejemplo de uso
const texto = "Hola, mundo!";
console.log(longitudString(texto)); // Salida: 12


//10. Desarrolla una función que genere un ID aleatorio de 5 caracteres.

