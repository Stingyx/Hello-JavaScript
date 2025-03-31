// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

/* function sum(a,b){
    return a+b
}
console.log(sum(4,10))
 */

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

/* myArray = [1, 15, 3, 18];

function comparacion(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(comparacion(myArray));  */

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

/* const myString = "aeiouAEIOU"
let contador =0
let MyString2="Prueba de funcionamiento ejercicio 3"
let MyString3 = "A veces"

function CuentaVocales(string){
    for (let letra of string) {
      if (myString.includes(letra)) {
        contador++;
      }
    }
    console.log(contador)
}
CuentaVocales(MyString3)
 */

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

/* let Strarray = ["javier","prueba","uno","ocho"]
const nuevo = Strarray.map(elemento => elemento.toUpperCase())
console.log(nuevo) */

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

/* function esPrimo(a) {
  if (a <= 1) {
    return false; 
  }
  if (a <= 3) {
    return true; 
  }
  if (a % 2 === 0 || a % 3 === 0) {
    return false; 
  }

  for (let i = 5; i * i <= a; i += 6) {
    if (a % i === 0 || a % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(esPrimo(15))
 */

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array0 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let array2 = [1,2,3,4,5,6,7,8]

let array3 = []

function comunes(array1,array){
  for(let i = 0;i<array.length && i< array1.length; i++){
    if(array1[i] == array [i]){
    array3.push(array[i])
    }}
    return array3
}

//console.log(comunes(array0,array2))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
/* let arrayprueba = [1,2,3,4,5,6,7,8,9,10,12,11,13,15]
let suma2 = 0
function sumapares(array){
  for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
      suma2 +=array[i]
    }
  }
  return suma2
} */

//console.log(sumapares(arrayprueba))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
/* let numba = [1,2,3,4,5,6]
function alcuadrado(array){
  let regreso  = []
  for(let i = 0;i<array.length;i++){
    regreso.push(array[i]**2)
  }
  return regreso
}

console.log(alcuadrado(numba)) */

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

/* let cadena = "Hola buenas"

function inverso(string){
  let encadena2 =""
  for(let i = string.length-1; i>=0;i--){
    encadena2 += string[i]
  }
  return encadena2
}

function invertirPalabras(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(invertirPalabras(cadena));

console.log(inverso(cadena))
 */
// 10. Crea una función que calcule el factorial de un número dado


/* 
function factorial(a) {
  if (a === 0 || a === 1) {
    return 1; // Caso base
  }
  
  let regreso = 1;
  for (let i = 2; i <= a; i++) {
    regreso *= i; // Multiplicación acumulativa
  }
  return regreso;
}

console.log(factorial(3)) */