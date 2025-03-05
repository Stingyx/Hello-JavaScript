//Arrays (Estructura de datos)


//Declaración
let myarray = []

let myarray2 = new Array(3)

console.log(myarray)
console.log(myarray2)

myarray = [1,2,3,4]
myarray2 = new Array(1,2,3,4)

console.log(myarray)
console.log(myarray2)



myarray = []
myarray[5] = "Jared"

console.log(myarray)

//Métodos comunes

myarray = []

//push y pop
myarray.push("Javier")
myarray.push("García")
myarray.push("Cruz")
myarray.push(17)
console.log(myarray)

console.log(myarray.pop())
console.log(myarray)

myarray.pop() //Elimina el último valor del array y lo devuelve
console.log(myarray)

console.log(myarray.shift()) //Elimina el primer elemento del array y lo devuelve (Es posible guardar el elemento en una variable)
console.log(myarray)

myarray.unshift("Javier","Cruz",17)//Agrega uno o más elementos al principio del array
console.log(myarray)


//length
console.log(myarray.length)


//Clear

myarray = []
//myarray.length = 0
console.log(myarray)


//slice

myarray.unshift("Javier","Cruz",17,22,32)//Agrega uno o más elementos al principio del array
let mynewaarray = myarray.slice(1,3)
console.log(mynewaarray)

//splice

myarray.splice(1,3) //Elimina elementos desde 1 a 3 en este caso
console.log(myarray)