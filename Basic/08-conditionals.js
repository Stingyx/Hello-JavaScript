//Condicionales (Estructuras de control!)

/*if, else if, else  */

//if

let age = 13

if(age == 24){
    console.log(`Tu edad es ${24}`)

}

if(age == 24){
    console.log(`Tu edad es ${24}`)
} else {
    console.log("No es la edad adecuada")
}

//else if
if(age == 24){
    console.log(`Tu edad es ${24}`)
}else if(age < 18) {
    console.log(`Eres menor de edad, tu edad es ${age}`)
}
else {
    console.log("No es la edad adecuada")
}


//Operador ternario

const menssage = age == 24 ? `La edad es ${age}` : `La edad no es 24`
console.log(menssage)

//Switch

let day = 4
let dayName 

switch(day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName ="Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName= "Viernes"
        break
    case 5:
        dayName ="Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName ="Número de día incorrecto"
}
console.log(dayName)

