//Loops o bucles

// Estructura de control para repetir un bloque de código

//for

for(let i =0; i < 5; i++) {
    console.log(`Hola! ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8,9,10]

for(let i =0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}


//While
let i = 0
while(i<5){
    i++
    console.log(`Hola While! ${i}`)
}

//do while

i = 6
do{
    console.log(`Hola ${i}`)
}while(i<5)


//for of
let myarray = [1,2,3,4]
let myset = new Set(["Javier","Jared","García",true,17,"javier@mail.com"])
let mymap = new Map([
    ["Name","Javier"],
    ["Email","javier.mail.com"],
    ["age",25]
])

mystring = "Hola, buenos días"

for(let valor of myarray){
console.log(valor)
}

for(let valor of myset){
    console.log(valor)
    }

for(let valor of mymap){
console.log(valor)
}

for(let valor of mystring){
console.log(valor)
}



//Buenas prácticas
//break y continue

for(let i =0; i < 10; i++) {
    if(i==5){
        continue
    }else if(i==7){
        break
    }
    console.log(`Hola! ${i}`)
}
