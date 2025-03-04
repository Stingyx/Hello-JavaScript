// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Japi"
let password ="asd0"

if(user == "Japi" && password == "asd0"){
    console.log("El usuario y la contraseña son válidos")
}else if(user == "Japi" && password != "asd0"){
    console.log("Usuario válido, contraseña incorrecta.")
}
else{
    console.log("Usuario y contraseña incorrectos.")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numba = 0

if(numba > 0){
    console.log("El número es positivo")
}else if(numba ==0){
    console.log("El número es 0")
} else if(numba<0){
    console.log("El número es negativo")
}else{
    console.log("Valor inválido.")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 25

if(edad == 18 || edad > 18){
    console.log("¡Puedes votar en estas elecciones!")
}else{
    console.log("Aún no puedes votar, eres menor de edad :(")
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age = 22

age >= 18 ? console.log("Eres un adulto") : console.log("Aún eres menor de edad")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Septiembre"

if(mes == "Enero" || mes == "Febrero" || mes == "Marzo"){
    console.log("Estamos en Invierno, abrígate bien!")
}else if(mes == "Abril" || mes == "Mayo" || mes == "Junio"){
    console.log("Es primavera, vamos a la playa!")
}else if(mes == "Julio" || mes == "Agosto" || mes == "Septiembre"){
    console.log("Por fin Primavera!")
}else if(mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre"){
    console.log("Entra el otoño.")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == "Enero"){
    console.log("Este mes tiene 31 días.")
}else if(mes =="Febrero"){
    console.log("Este mes tiene 28 días")
}else if(mes =="Marzo"){
    console.log("Este mes tiene 31 días")
}else if(mes =="Abril"){
    console.log("Este mes tiene 30 días")
}else if(mes =="Mayo"){
    console.log("Este mes tiene 31 días")
}else if(mes =="Junio"){
    console.log("Este mes tiene 30 días")
}else if(mes =="Julio"){
    console.log("Este mes tiene 31 días")
}else if(mes =="Agosto"){
    console.log("Este mes tiene 31 días")
}else if(mes =="Septiembre"){
    console.log("Este mes tiene 30 días")
}else if(mes =="Octubre"){
    console.log("Este mes tiene 31 días")
}else if(mes =="Novimebre"){
    console.log("Este mes tiene 30 días")
}else if(mes =="Diciembre"){
    console.log("Este mes tiene 31 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludo = "Chinese"

switch(saludo){
    case "Español":
        console.log("Hola cómo estás")
        break
    case "Inglés":
        console.log("Hi, how are you doing?")
        break
    case "Chinese":
        console.log("nǐ hǎo")
        break
    case "Alemán":
        console.log("Gruß")
        break
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6


let dr
switch(mes){
    case "Enero":
        dr = "Primavera"
        break
    case "Febrero":
        dr = "Primavera"
        break
    case "Marzo":
        dr = "Primavera"
        break
    case "Abril":
        dr = "Verano"
        break
    case "Mayo":
        dr = "Verano"
        break
    case "Junio":
        dr = "Verano"
        break
    case "Julio":
        dr = "Otoño"
        break
    case "Agosto":
        dr = "Otoño"
        break
    case "Septiembre":
        dr = "Otoño"
        break
    case "Octubre":
        dr = "Invierno"
        break
    case "Noviembre":
        dr = "Invierno"
        break
    case "Diciembre":
        dr = "Invierno"
        break
    default:
        dias = null
}
console.log(`Estamos en ${dr}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let dias
switch(mes){
    case "Enero":
        dias = 31
        break
    case "Febrero":
        dias = 28
        break
    case "Marzo":
        dias = 31
        break
    case "Abril":
        dias = 30
        break
    case "Mayo":
        dias = 31
        break
    case "Junio":
        dias = 30
        break
    case "Julio":
        dias = 31
        break
    case "Agosto":
        dias = 31
        break
    case "Septiembre":
        dias = 30
        break
    case "Octubre":
        dias = 31
        break
    case "Noviembre":
        dias =30
        break
    case "Diciembre":
        dias = 31
        break
    default:
        dias = null
}
console.log(`${mes} tiene ${dias} días.`)