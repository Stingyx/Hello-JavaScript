// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

//for(let i=0;i<=20;i++){
//    console.log(`${i}`)
//}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

/* let n
let S

n=1
while(n<=100){
    S = ((n+1)*(n/2))
    n++
}
console.log(`${S}`) */

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

/* for(i=0;i<=50;i++){
    if(i%2 !=0){
        continue
    }else{
        console.log(`${i}`)
    }
} */

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

/* let nombres = ["Javier","Jared","Janeth","Pedro","José","Lulú","Ramiro"]

for(let valor of nombres){
console.log(`${valor}`)
}

 */

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

/* const myString = "aeiouAEIOU"
let contador =0
let mystring2 = "Prueba de funcionamiento"

for (let letra of myString) {
    if (mystring2.includes(letra)) {
        contador++;
        //console.log(contador)
    }
}
console.log(contador)
 */

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

/* let numarray= [1,2,3,4,5]
let total 
let total1
let i =0
for(i of numarray)
{
    i++
    console.log(numarray[i])

} */

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
/* 
i=0
do{
    let j = i*5
    console.log(j)
    i++
}while(i<=10)


 */
// 8. Usa un bucle para invertir una cadena de texto

/* let cadena = "Hola a todos!"
for(let n = cadena.length;n != -1;n--){
    console.log(cadena[n])

}
 */

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

//Suma de los primeros 10 números, la secuencia de Fibonacci es una serie infinita de números donde cada término es la suma de los dos anteriores, comenzando con 0 y 1.
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/* 
let fib = [0, 1]; // Inicializamos los primeros dos números de Fibonacci

for (let i = 2; i < 11; i++) {
  fib[i] = fib[i - 1] + fib[i - 2]; // La suma de los dos anteriores
}
console.log(fib)

 */
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

/* Numarray = [1,10,15,4,2,24,0,29,15,4]
let nuevoarray = []
let i = 0
do{
    if(Numarray[i]>=10){
        nuevoarray.push(Numarray[i])
}
i++
}while(i<Numarray.length)

console.log(nuevoarray) */