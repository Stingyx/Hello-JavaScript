//Desestructuración

let myarray = [1,2,3,4]

let person = {
    name: "Jared",
    age: 25,
    alias: "Japi"
}

let myValue = myarray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

//Desestructuración

//Sintaxis en arrays
let [myValue0,myValue1,myValue2,myValue3,myValue4]=myarray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//Sintaxis arrays con valores predeterminados

let [myValue5=0,myValue6=0,myValue7=0,myValue8=0,myValue9=0] = myarray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//Ignorar elementos de un array
let [myValue10,,,myValue11]=myarray
console.log(myValue10)
console.log(myValue11)

//Sintaxis objects
let {name,age,alias} = person
console.log(name)
console.log(age)
console.log(alias)

//Sintaxis Objects con valores predeterminados

let {name2,age2,alias2,email="mail@mail.com"}=person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

//Sintaxis Objects con nuevos nombres de variables
let {name:name3,age:age3,alias:alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

let person3 = {
    name: "Javi",
    age: 25,
    alias: "Stingix",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}


//Desestructurar objetos anidados
let {name:name4,job:{name:name5}}=person3
console.log(name4)
console.log(name5)

//Propagación (...)

//Sintaxis Arrays

let myArray2 = [...myarray]
console.log(myArray2)

//Copia de arrays

let myArray3 = [...myarray,5,6]
console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "japi@mail.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)