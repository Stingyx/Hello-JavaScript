//Strings

let myname = "Japi"
let greeting ="Hola, " + myname
console.log(greeting)
console.log(typeof greeting)

//Longitud Cadenas de texto
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[9])

//Métodos comunes 
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Japi"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.includes("Japi"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Buenas"))
console.log(greeting.slice(0,8))
console.log(greeting.replace("Japi", "Javier"))

let mensaje = `Hola,
esta es mi
prueba
de
mensaje en
varias
lineas
utilizando alt+96 
para acento invertido `
console.log(mensaje)

let email = "javierjgc170@gmail.com"

console.log(`Hola ${myname}!, tu email es ${email}`)