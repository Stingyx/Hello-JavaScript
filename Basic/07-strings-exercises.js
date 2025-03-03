// 1. Concatena dos cadenas de texto
nombre = "Jared "
Apellido = "Cruz"

mensaje = "Hola " + nombre + Apellido
console.log(mensaje)

// 2. Muestra la longitud de una cadena de texto
console.log(mensaje.length)

// 3. Muestra el primer y último carácter de un string

console.log(mensaje[0])
console.log(mensaje[14])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(mensaje.toUpperCase())
console.log(mensaje.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
ManyLines = `Cadena 
de 
texto 
de  
varias  
lineas`
console.log(ManyLines)

// 6. Interpola el valor de una variable en un string

console.log(mensaje.replace("Jared","Javier "))

// 7. Reemplaza todos los espacios en blanco de un string por guiones


console.log(ManyLines.replace(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(mensaje.includes("Javier"))
console.log(mensaje.includes("Jared"))

// 9. Comprueba si dos strings son iguales

msj1 = "hola"
msj2 = "hola"
console.log("Cadenas de texto similares: ")
console.log(msj1 == msj2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(msj1.length == msj2.length)