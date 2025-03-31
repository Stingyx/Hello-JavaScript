//Clases

class Person{
    constructor(name,age,alias){
        this.name=name
        this.age=age
        this.alias=alias
    }
}

let person = new Person("Jap",25,"Sting")
console.log(person)

let person2 = new Person("Jav",25,"Stg")
console.log(person2)

console.log(typeof Person)

//Clases con default

class DefaultPerson{
    constructor(name="No name",age=0,alias="No alias"){
        this.name=name
        this.age=age
        this.alias=alias
    }
}

let person3 = new DefaultPerson("Jap") //No es posible saltar parámetros utilizando ","
console.log(person3)

//Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias="SJv"
console.log(person3.alias)

//Funciones en clases

class PersonWMethod{
    constructor(name="No name",age=0,alias="No alias"){
        this.name=name
        this.age=age
        this.alias=alias
    }
    walk(){
        console.log("Caminando")
    }
}

let person4 = new PersonWMethod("Javvss",25,"Saap")
console.log(person4)
person4.walk()

//Propiedades privadas

class PersonWMethod{
    #bank
    constructor(name="No name",age=0,alias="No alias",bank){
        this.name=name
        this.age=age
        this.alias=alias
        this.#bank=bank
    }
    pay(){
        this.#bank
    }
}

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))