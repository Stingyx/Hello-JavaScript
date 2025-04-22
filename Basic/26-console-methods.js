//Métodos de consola


//log
console.log("Hola!")

//error
console.error("Mensaje de Error")

//warn
console.warn("Mensaje de advertencia.")

//info
console.info("Mensaje adicional de información.")

//table

let data = [
    ["Stgx",25],
    ["Jnt",25]
]

console.table(data)

data = [
    {name:"Stgx",age:25},
    {name:"Jnt",age:25}
]//Es posible asiganar nombres a las columnas de la tabla con esta sintaxis


console.table(data)


//group

console.group("Usuario")
console.log("Nombre: JStx")
console.log("Edad:",25)
console.groupEnd()

console.log("Prueba jeej")

//time
console.time("Tiempo de ejecución")

for(let i=0;i<10000;i++){

}
console.timeEnd("Tiempo de ejecución")

//assert

let age = 17
console.assert(age >=18,"El usuario debe ser mayor de edad.") //Muestra el mensaje si no se cumple la condición propuesta

//count
console.count("Click")//Realiza un conteo
console.count("Click")
console.count("Click")
console.countReset("Click") //Resetea el conteo
console.count("Click")

//trace
function FuncA(){
    FuncB()
}
function FuncB(){
    console.trace("Seguimiento de la ejecución.")
}

FuncA()

//clear
//console.clear()