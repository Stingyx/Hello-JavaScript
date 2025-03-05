// 1. Crea un array que almacene cinco animales

let myarray = ["Perro","Gato","Vaca","Delfin","Tigre"]

// 2. Añade dos más. Uno al principio y otro al final

myarray.push("León")    //Añade elementos al final del array
//console.log(myarray)
myarray.unshift("Tiburón") //Añade elemento al inicio del array
console.log(myarray)

// 3. Elimina el que se encuentra en tercera posición

//myarray.pop() //Elimina el último elemento del array
myarray.splice(2,1) //Elimina el número de elementos proporcionados a partir del número de inicio (Numero-inicio,Número-datos-a-borrar)
console.log(myarray)
// 4. Crea un set que almacene cinco libros

let myset = new Set(["Libro 1","Libro 2","Libro 3","Libro 4","Libro 5"])
console.log(myset)


// 5. Añade dos más. Uno de ellos repetido

myset.add("Libro 1")
myset.add("Libro 6")
console.log(myset)

// 6. Elimina uno concreto a tu elección

myset.delete("Libro 3")
console.log(myset)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mymap = new Map([
    ["January",1],
    ["Febrary",2],
    ["March",3],
    ["April",4],
    ["May",5],
    ["June",6],
    ["July",7],
    ["August",8],
    ["September",9],
    ["October",10],
    ["November",11],
    ["December",12]
])

console.log(mymap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mymap.has("May"))
console.log(mymap.get("May"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let myarray2 = ["Enero","Febrero","Marzo"]

mymap.set("Verano",myarray2)
console.log(mymap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myarray3 = ["Thing 1","Thing 2","Thing 3"]
let myset2 = new Set(myarray3)

let mymap2 = new Map([["Cosas",myset2]
])

console.log(mymap2)