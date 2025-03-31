// 1. Crea un objeto con 3 propiedades

let music = {
    year : 2015,
    genre: "rock",
    artist: "ACDC"
}
/*
// 2. Accede y muestra su valor

console.log(music.year)
console.log(music.genre)
console.log(music.artist)

// 3. Agrega una nueva propiedad

music.album = "Back in black" 
console.log(music.album)
console.log(music)

// 4. Elimina una de las 3 primeras propiedades

delete music.year
console.log(music)

// 5. Agrega una función e invócala

music.dato = function (){
    console.log("Esta canción sale en iron man")
}
console.log(music)
music.dato()

// 6. Itera las propiedades del objeto

for(let valor in music){
    console.log(valor )
}
 */
// 7. Crea un objeto anidado

let myobject = {
    dato1: "ACDC",
    dato2: "Prueba2",
    myobjectinside: {
        dato3: 5,
        dato4: "Prueba correcta de anidación",
        dato5: function(){
            console.log(`El valor de el dato 3 es ${this.dato3}`)
        }
    }
}


// 8. Accede y muestra el valor de las propiedades anidadas
console.log(myobject.myobjectinside.dato4)
console.log(myobject.myobjectinside.dato3)
myobject.myobjectinside.dato5()

// 9. Comprueba si los dos objetos creados son iguales

console.log(music == myobject)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(music.artist === myobject.dato1)