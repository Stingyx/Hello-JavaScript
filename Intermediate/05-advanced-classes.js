//Clases Avanzadas


class Person {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    greet(){
        console.log(`Hola ${this.name}!`)
    }
}

const person = new Person("Javs",25)
person.greet()

person.SayAge = function(){
    console.log(`Tienes ${this.age} años.`)
}
person.SayAge()


//Clases Abstractas

// - Abstracción

class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Error
// const animal = new Animal("Mou")
// console.log(animal)

// - Polimorfismo

class Cat extends Animal{
    makeSound(){
        console.log("Miau!")
    }
}
class Dog extends Animal{
    makeSound(){
        console.log("Guau")
    }
}

let cat = new Cat("CatJap")
cat.makeSound()

let dog = new Dog("DogJop")
dog.makeSound()

// -Mixins

const FlyMixin = {
    fly(){
        console.log(`${this.name} is flying!`)
    }
}

class Bird extends Animal{ }
class Dragon extends Animal{ }

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("JapiBirday")
console.log(bird.name)
bird.fly()

const dragon = new Dragon("DragonPi")
console.log(dragon.name)
dragon.fly()

// - Patrón Singleton

class Session {
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
    this.name= name
    Session.instance = this
    }
}

const session1 = new Session("Japi")
console.log(session1.name)

const session2 = new Session("Stgx")
console.log(session2.name)

console.log(session1 === session2)


// -Symbol

const ID = Symbol("id")

class User{
    constructor(name){
        this.name = name
        this[ID] = Math.random(3) 
    }
    getId(){
        return this[ID]
    }
}


const user = new User("Javi")
console.log(user.name)
console.log(user.getId())
console.log(user.ID)
console.log(user[ID])

// -Instanceof

class Car { }

const car = new Car()
console.log(car instanceof Car)

// - create
const anothercar = Object.create(Car.prototype)
console.log(anothercar instanceof Car)

// - Proxy

const proxy = {
    get(target,property){
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target,property,value){
        if(property === "balance" && value < 0){
            throw new Error("El balance no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance){
        this.balance = balance
    }
}

const Myaccount = new Proxy(new BankAccount(100),proxy)
console.log(Myaccount.balance)

Myaccount.balance = 50
console.log(Myaccount.balance)

//Error
//Myaccount.balance = -10
