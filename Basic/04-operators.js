// Sirven para realizar operaciones

//Operadores aritmeticos
let a= 5
let b= 10
console.log(a+b) //Suma
console.log(a-b)//Resta
console.log(a*b)//Multiplicación
console.log(a/b)//División

console.log(a%b)//Módulo de la división (El restante de la división)
console.log(a**b)//Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)


//Operadores de aisgnación
let myVariable = 2
console.log(myVariable) 
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


//Operaciones de comparación

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a==6) //Igualdad por valor
console.log(a=="6")
console.log(a===a) //Igualdad por identidad (Tipo y valor)
console.log(a===6)
console.log(a==="6")
console.log(a != 6)

//Truthy values (Valores verdaderos)
//Todos los número positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacías
//El boolean true

//Falsy (Valores falsos)
/*
0n
null
undefined
NaN
El boolean False
Cadenas de texto vacías
 */

//Operadores Lógicos

//and (&&)
console.log(5> 10 && 15>20)
console.log(5< 10 && 15<20)


//or (||)
console.log(5>10 || 15<20)

//not (!)
console.log(!true)
console.log(!false)

// Operadores ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")