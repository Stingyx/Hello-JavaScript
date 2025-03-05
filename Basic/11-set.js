//set


//Declaración
let myset = new Set()
console.log(myset)


//Inicialización con datos
myset = new Set(["Javier","Jared","García",true,17,"javier@mail.com"])
console.log(myset)

//Métodos comunes

//add y delete

myset.add("Mi mail") //Añade el elemento al final
console.log(myset)

myset.delete("Mi mail") //Es necesario indicar el elemento que se desea eliminar
console.log(myset)

console.log(myset.delete("Javier"))


//has

console.log(myset.has("Jared"))
console.log(myset.has("Javier"))

//size

console.log(myset.size)

//Convertir un set a array

let myArray = Array.from(myset) //Transformar un set a array
console.log(myArray)

//Convertir un array a u set
mySet = new Set(myArray)
console.log(mySet)

//

myset.add("Jared") //No permite duplicar los elementos, todos son únicos dentro del set
console.log(myset)