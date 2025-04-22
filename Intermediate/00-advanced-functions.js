//Funciones avanzadas

//Ciudadanos de primera clase

// function greet(name){
//     console.log(`Hola, ${name}`)
// }
const greet = function greet(name){
    console.log(`Hola, ${name}`)
}
greet("Javier")

function procesGreeting(greetFunction,name){
    greetFunction(name)
}

function returnGreeting(){
    return greet
}

procesGreeting(greet,"StgxS")
const greet2 = returnGreeting()
greet2("JJ")

//Arrow Functions avanzadas

//Retorno implícito
const multiply = (a,b) => a*b
console.log(multiply(3,4)) 

//-this léxico
const handler = {
    name: "Jpp",
    greeting:  function(){
        console.log(`Hola!, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola!, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();

//IIFE (Expresión de Función Invocada Inmediatamente)

(function (){
    console.log("IIFE Clásico")
})();

(() => {
    console.log("IIFE arrow Function")
})()

//Parámetros Rest (...)

function sum(...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result
}

console.log(sum(1,2,3,4,5))
console.log(sum(5,4))

//Operador Spread(...)

const numbers = [1,2,3,4,5]

function sumWithSpread(a,b,c){
    return a+b+c
}

console.log(sumWithSpread(1,2,3)) //Sin Spread
console.log(sumWithSpread(...numbers)) //-- Con Spread -- Solo toma los valores definidos en la función  -- Con Spread
console.log(sumWithSpread(1,2))//-- Con Spread -- Debe ser al menos e número de valores definidos en la función, no pueden ser menos

//Clousures (Clausuras)

function CreateCounter(){
    let counter =0
    return function StartCounter(){
        counter++
        console.log(`Contador: ${counter}`)
    }
}
const counter = CreateCounter()
counter()
counter()

//Recursividad -- Función que se llama a si misma

function factorial(n){
    if(n<=1){
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(2))


//Funciones parciales

function partialsum(a){
    return function (b,c){
        return sum(a,b,c)
    }
}

const sumWith = partialsum(2)
console.log(sumWith(3,2))
console.log(sumWith(5,3))

//Currying
function Currysum(a){
    return function (b){
        return function(c){
            return sum(a,b,c)
        }
    }
}

const SumAB = Currysum(5)(5)
console.log(SumAB(5))
console.log(SumAB(10))
console.log(SumAB(20))

//Callbacks

function ProcessData(data,callback){
    const result = sum(...data)
    callback(result)
}

function ProcessResult(result){
    console.log(result)
}

function ProcessResult2(result){
    console.log(`El resultado es: ${result}`)
}

ProcessData([1,2,3],ProcessResult)
ProcessData([1,2,3],ProcessResult2)
ProcessData([1,2,3],(result)=>{
    console.log(`El resultado de la operación con arrow function es: ${result}`)
})