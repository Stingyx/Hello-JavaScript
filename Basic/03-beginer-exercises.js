/*Ejercicios de Práctica Principiante */
//1.- Escribe un comentario en una línea
//Cometario de una línea en JavaScript

//2.- Escribe un comentario en varias líneas
/*Comentario de varias líneas en JavaScript
Podemos realizar varias líneas de comentarios
3er Prueba de línea de comentarios */

//3.- Declara variables con valores asociados a todos los tipos de datos primitivos
//Variable String
let cadena = "Variable-String"
//Variable numérica
let numero = 5
//Variable booleana
let des = true
//Variable undefined
let sindefinir
//Variable Null
let variablenula= null
//Variable BigInt (Gran entero)
let GranEntero = 6874681684681681681n
let EnteroGrande = BigInt(869459684681681861)
//Variable Simbolo
let Simbolo = Symbol("Simbolo")

//4.- Iprime por consola el valor de todas las variables
console.log(cadena)
console.log(numero)
console.log(des)
console.log(sindefinir)
console.log(variablenula)
console.log(GranEntero)
console.log(EnteroGrande)
console.log(Simbolo)

//5.- Imprime por consola el tipo de todas las variables
console.log(typeof cadena)
console.log(typeof numero)
console.log(typeof des)
console.log(typeof sindefinir)
console.log(typeof variablenula)
console.log(typeof GranEntero)
console.log(typeof Simbolo)

//6.- A continuación, modifica los valores de las variables por otros del mismo tipo
cadena = "Nuevo valor, cadena"
console.log(cadena)

numero = 18
console.log(numero)

des = false
console.log(des)

GranEntero = 526816168168161565
console.log(GranEntero)

Simbolo = Symbol("Nuevo Simbolo")
console.log(Simbolo)

//7.- A continuación, modifica los valores de las variables por otros de distinto tipo
cadena = 15
console.log(cadena)

numero = "Tipo nuevo"
console.log(numero)

des = "Segunda cadena"
console.log(des)

sindefinir = true
console.log(sindefinir)

variablenula = true
console.log(variablenula)

GranEntero = 1
console.log(GranEntero)

Simbolo = "Simbolo"
console.log(Simbolo)

//8.- Declara constantes con valores asociados a todos los tipos de datos primitivos
const Cadena2 = "Cadena constante"
console.log(Cadena2)

const numero2 = 15
console.log(numero2)

const ConstBoleana = false
console.log(ConstBoleana)

//const Sindefinir2         No es posible establecer una variable constante sin definir por obvias razones
//console.log(Sindefinir2)

const Nula2 = null
console.log(Nula2)

const Enterote = 61861313861381n
console.log(Enterote)

const Simbolo2 = Symbol("Simbolo 2")
console.log(Simbolo2)


//9.- A continuación, modifica los valores de las constantes

//Cadena2 = "Cambio cadena constante"
//console.log(Cadena2)
//numero2 = 1
//console.log(numero2)
//ConstBoleana= true
//console.log(ConstBoleana)
//Enterote = 685416851561651651
//console.log(Enterote)
//Simbolo2= "Cambio simbolo"
//console.log(Simbolo2)

//10.- Comenta las líneas que produzcan algún tipo de error al ejecutarse