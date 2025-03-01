/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

/*Operaciones aritmeticas */

console.log("1.-")
let a=2
let b=9

let suma = a+b 
console.log(suma)

let resta= a-b
console.log(resta)

let multiplicacion = a*b
console.log(multiplicacion)

let division = a/b
console.log(division)

let exponencial = a**b
console.log(exponencial)

let residuo = a%b
console.log(residuo)

let aumento = a++
console.log(aumento)

let decremento = a--
console.log(decremento)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("2.-   ")

let varmas = 2
let varmenos =3
let varentre =4
let varexp=5
let varmult =6
let varres =7

varmas += a
console.log(varmas)

varmenos -= a
console.log(varmenos)

varentre /=a
console.log(varentre)

varexp **= a
console.log(varexp)

varmult *=a
console.log(varmult)

varres %=a
console.log(varres)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("3.- Operaciones de comparación verdaderas")

console.log(5>1)
console.log(1<67)
console.log(1==1)
console.log(76===76)
console.log(15>=10)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("4.- Operaciones de comparación falsas")

console.log(a===3)
console.log(b==1)
console.log(18<15)
console.log(1!=1)
console.log(1>6)

// 5. Utiliza el operador lógico and

console.log("5.- Operador AND")
console.log(a!=b && 1===1)

// 6. Utiliza el operador lógico or

console.log("6.- Operador OR")
console.log(1!=a || b>a)

// 7. Combina ambos operadores lógicos
console.log("7.- Combinación de AND y OR")
console.log(1==1 && a!=b || b>a)


// 8. Añade alguna negación

console.log("8.- Negación")
console.log(!true)
console.log(!false)

// 9. Utiliza el operador ternario
console.log("9.- Operador ternario")

let soyEstudiante = true
soyEstudiante ? console.log("Pronto terminarás y conseguirás trabajo de programador") : ("Estudia un poco más que lo lograrás")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log("Combinación de operadores aritméticos, de comparación y lógicos")

console.log(!(18<= 25 || a>b) === false)