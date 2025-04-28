//Objetos Avanzados

// -Prototipos y herencia

//Prototipos
let person = {
    name: "JStg",
    edad:25,
    greet(){
        console.log(`Hola ${this.name}!`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.SayAge = function(){
    console.log(`Tienes ${this.edad} años.`)
}

console.log(person)
person.SayAge()

//Herencia
console.log("----Herencia----")

let programmer = Object.create(person)
console.log(programmer)

programmer.name = "Jrd"
programmer.language = "JavaScript"

console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.language)
console.log(programmer.edad)
programmer.greet()
programmer.SayAge()

// -Métodos Estáticos y de Instancia

function Person(name,age){
    this.name =name,
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hola ${this.name}!`)
}

let newPerson = new Person("Jvss",25)
newPerson.greet()

//-Métodos Avanzados

//assign

let person_core = {name: "Jddd"}
let person_details ={age : 25,email: "Jddd@mail.com"}

let fullPerson = Object.assign(person_core,person_details)
console.log(fullPerson)

//Keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))