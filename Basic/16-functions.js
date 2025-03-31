//Funciones

//Funciones simples

function myfunction(){
    console.log("Hola a mi función!")
}

myfunction()


function myfunctionname(name){
    console.log(`Bienvenido ${name}!`)
}

myfunctionname("Jared")

//Funciones anónimas
//Son capaces de ser almacenadas dentro de variables/constantes

const myFunc2 = function(name){
    console.log(`Bienvenido de nuevo ${name}!`)
}

myFunc2("Javier Jared")

//Arrow Functions

const myFunc3  = (name)=>{
    console.log(`Bienvenido por tercera vez ${name}!`)
}
myFunc3("JJ")

const myFunc4  = (name)=> console.log(`Bienvenido por cuarta vez ${name}!`)
myFunc4("PP")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))