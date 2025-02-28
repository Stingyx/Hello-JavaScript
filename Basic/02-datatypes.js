/*Tipos de datos primitivos dentro de JavaScript */

//String (Cadena de texto)
let myname = "Javier Jared"
let alias ='Japi'

//Números   (number)

let age = 37
let height = 1.67

// Booleanos (boolean)
let isStudent = true
let isTeacher = false

// Undefined    No tiene un valor concreto
let UndefinedValue
console.log(UndefinedValue)

//Null
let nullValue = null
console.log(nullValue)

//Symbol    Representa valores únicos, como identificadores de propiedades.
let mySymbol = Symbol("mySymbol")

//BigInt    Número enteros extremandamente grande, ocupa la memoria necesaria y tiene las siguientes dos formas de representación
let myBigInt = BigInt(191816516874169816816816846716846816846168681681978615)
let myBigInt2 = 191816516874169816816816846716846816846168681681978615n

//Mostramos los tipos de datos
console.log(typeof myname)
console.log(typeof alias)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof UndefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)