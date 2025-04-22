// 1. Crea una función que retorne a otra función

const leer = function reading(book){
    console.log(`${book}`)
}

function returnReading(){
    return leer
}

const prueba1 = returnReading()
prueba1("Hábitos atómicos")

// 2. Implementa una función currificada que multiplique 3 números

function mult(a){
    return function (b){
        return function(c){
            return a*b*c
        }
    }
}

const P2 = mult(2)(3)
console.log(P2(10))


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia(n,m){
    if(m == 1){
        return n
    }
    for(m;m=>0;m--){
        return (n**m)
    }
}
const P3 = potencia(1,1)
console.log(P3)


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(ValorInicial){
    let counter = ValorInicial
    return {
        increment : function(){
            counter ++
        },
        decrement: function(){
            counter--
        },
        getValue : function(){
            return counter
        }
    }
}
const P4 = createCounter(3)

console.log(P4.getValue())
P4.decrement()
console.log(P4.getValue())
P4.increment()
console.log(P4.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

let numbers = [1,2,3,4,5]

function sumManyTimes(multiplier, ...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return (result*multiplier)
}
const P5 = sumManyTimes(4,1,2,3,4,5)
console.log(P5)


// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function callback1(numbers,callback){
    let result = 0
    for(let number of numbers){
        result += number
    }
    callback(result)
}

function resultado(result){
    console.log(`El resultado de la operación es: ${result}`)
}


const P6 = callback1([1,2,3,4,5],resultado)

// 7. Desarrolla una función parcial

function partialmult(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a*b*c*d*e
                }
            }
        }
    }

}

const A = partialmult(1)(2)(3)
console.log(A(4)(5))

// 8. Implementa un ejemplo que haga uso de Spread

function names(a,b,c){
    return console.log(`Lista de personas: ${a},${b},${c}`)
}

let lista = ["J","J","J"]

names(...lista)

// 9. Implementa un retorno implícito



// 10. Haz uso del this léxico

const thislex={
    nombre: "Jppxts",
    accion : function(){
        console.log(`${this.nombre} está aprendiendo a programar.`)
    }
}
thislex.accion()