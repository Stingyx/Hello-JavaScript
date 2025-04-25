//Estructuras avanzadas

let array = [1,2,3,4,5,6]


//for Each
array.forEach(element => console.log(element))

//Map


let double = array.map(element => element*2)
console.log(double)

//filter

let evens = array.filter(element => element%2 === 0)
console.log(evens)

//reduce
let sum = array.reduce((result,current) => result+current,0)
console.log(sum)

// - Manipulación

// flat

let nestedArray = [1,[2,[3,[4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

//flatMap

let phrases = ["Hola mundo","Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// -Ordenar

//sort

let unsorted = ["b","g","a","n","p","j"]
let sorted= unsorted.sort()
console.log(sorted)

unsorted = [5,2,7,1,11,1.5,12]
sorted= unsorted.sort((a,b) => a-b)
console.log(sorted)

//reverse
sorted.reverse()
console.log(sorted)

// - Búsquedas

//includes

console.log(sorted.includes(3))
console.log(sorted.includes(2))

//find

let firtsEven = sorted.find(element => element%2 === 0)
console.log(firtsEven)

//findIndex
let firtsEvenIndex = sorted.findIndex(element => element%2 === 0)
console.log(firtsEvenIndex)

// Sets avanzados

// - Operaciones

//Eliminación de duplicados 

const numbersArray = [1,2,2,3,4,5,6,6]
const numbersSet = [...new Set(numbersArray)]
console.log(numbersSet)

//Unión

const SetA = new Set([1,2,3])
const SetB = new Set([2,3,4,5])
const Union = new Set([...SetA,...SetB])
console.log(Union)


//Intersección
const intersection = new Set([...SetA].filter(element => SetB.has(element)))
console.log(intersection)

//Diferencia
const diference = new Set([...SetA].filter(element => !SetB.has(element)))
console.log(diference)

//Conversión
console.log([...SetA])

// - Iteración

//for Each

SetA.forEach(element=>console.log(element))

//Maps avanzados

let myMap = new Map([
    ["name","Stgx"],
    ["age",25]
])
console.log(myMap)

// -Iteración

myMap.forEach((value,key) => console.log(`${key}: ${value}`))

//-Conversión

//Map a array

const MyArrayFromMap = Array.from(myMap)
console.log(MyArrayFromMap)

//Mapa a objeto

const ObjectFromMap = Object.fromEntries(myMap)
console.log(ObjectFromMap)

//Objeto a mapa
const ObjectToMap = new Map(Object.entries(ObjectFromMap))
console.log(ObjectToMap)
