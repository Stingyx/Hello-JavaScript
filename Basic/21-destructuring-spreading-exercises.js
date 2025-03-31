// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myarray = [0,1,2,3]

let [valor1,valor2] = myarray
console.log(valor1,valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [valor3=0,valor4=0,valor5=0,valor6=0,valor7=0]=myarray
console.log(valor3,valor4,valor5,valor6,valor7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person3 = {
    name: "Stingyx",
    age: 25,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 0.5,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let {name,age} = person3
console.log(name,age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name:name2,age:age2}=person3
console.log(name2,age2)


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let{job:{name:nombre,exp:exp3}}=person3
console.log(`Serás un ${nombre}!, y ya tienes ${exp3} años de experiencia, sigue esforzándote!`)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [5,6,7,8]

let myArray3 = [...myarray,...myArray2]
console.log(myArray3)


// 7. Usa propagación para crear una copia de un array

let myArray4 =[...myArray3]
console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person2 = {
    var1: "Javs",
    var2: 1,
    var3: "StinJavs",
    var4: function () {
        console.log("La persona camina.")
    }
}


let person4 ={...person2,...person3}
console.log(person4)

// 9. Usa propagación para crear una copia de un objeto

let person5 = {...person4}
console.log(person5)

// 10. Combina desestructuración y propagación

let [variable1,variable2,,,,,,variable3] = [...myArray4]
console.log(variable1,variable2,variable3)