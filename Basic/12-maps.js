//Maps

//Diccionario con key y value
//Declaración
let mymap = new Map()

console.log(mymap)

//Inicialización

mymap = new Map([
    ["Name","Javier"],
    ["Email","javier.mail.com"],
    ["age",25]
])
console.log(mymap)

//Métodos y propiedades

//set
mymap.set("Alias","Japi")
console.log(mymap)

mymap.set("name","Jared") //No puede haber repetidos en clave (Key)
console.log(mymap)

//get
console.log(mymap.get("Email")) //devuelve el valor de la clave
console.log(mymap.get("surname"))

//has
console.log(mymap.has("Email")) //Devuelve un booleano si una clave existe (true) o no (false)
console.log(mymap.has("surname"))

//delete

mymap.delete("Email")
console.log(mymap)

//Keys
console.log(mymap.keys())

//Values
console.log(mymap.values())

//Size
console.log(mymap.size)

//Entries
console.log(mymap.entries())

//Clear
mymap.clear()
console.log(mymap)



