// 1. Agrega una función al prototipo de un objeto

const My1Object = {
    name: "Jared",
    age: 25,
    func : function(){
        console.log(`Mi nombre es ${this.name} y tengo ${this.age} años.`)
    }
}

My1Object.func()
console.log(Object.getPrototypeOf(My1Object))

My1Object.prof = function (){
    console.log(`${this.name} quiere ser programador.`)
}

console.log(My1Object)
My1Object.prof()


// 2. Crea un objeto que herede de otro

const My2Object = Object.create(My1Object)
console.log(My2Object)
My2Object.name = "Stgx"
console.log(My2Object.name)
My2Object.func()

// 3. Define un método de instancia en un objeto



// 4. Haz uso de get y set en un objeto

const GetSetObject = {
    _name : "Jav",
    set(value){
        console.log(`Método Set ${value}`)
        this._name = value
    },
    get(){
        console.log(`Método Get`)
        return this._name
    }
}

console.log(GetSetObject.name)
console.log(GetSetObject._name)

console.log(GetSetObject.get())
console.log(GetSetObject.set("Jddd"))

console.log(GetSetObject)

// 5. Utiliza la operación assign en un objeto
//Assign sirve para juntar dos objetos y convertirlos en 1 solo

let assign1 = {name: "Javier",age:25}
let assign2 = {study: "Programar",}

let assign3 = Object.assign(assign1,assign2)
console.log(assign3)


// 6. Crea una clase abstracta


class Pago  {
    constructor (cantidad){
        if(new.target === Pago){
            throw new Error("No puedes instanciar una clase abstracta")
        }
        this.cantidad = cantidad
    }

    retiro(){
        console.log("Debes crear esta función en la subclase")
    }
}

//Error
//const Santander = new Pago()
//console.log(Santander.retiro())


class Santander extends Pago{
    retiro(){
        console.log("Prueba de retiro desde subclase 1 (Santander)")
    }
}


let Mibanco = new Santander()
Mibanco.retiro()


// 7. Utiliza polimorfismo en dos clases diferentes

class BBVA extends Pago{
    retiro(){
        console.log("Prueba de retiro desde BBVA")
    }
}

let BancoNomida = new BBVA()
BancoNomida.retiro()

// 8. Implementa un Mixin

const Deposito = {
    dep(){
        console.log(`Depósito de ${cantidad}` )
    }
}

class Azteca extends Pago{
    retiro(){
        console.log(`Deposito a Banco Ateca de ${this.cantidad} pesos.`)
    }
}

Object.assign(Azteca.prototype,Deposito)

const Persona1 = new Azteca(500)
Persona1.retiro()

// 9. Crea un Singleton


const ID = Symbol("id")
class Gym{
    constructor(name){
        if(Gym.instance){
            return Gym.instance
        }
    this.name= name
    Gym.instance = this
    }
}


const Gym1 = new Gym("Javier")
console.log(Gym1.name)
const Gym2 = new Gym("Jared")
console.log(Gym2.name)


// 10. Desarrolla un Proxy

const proxy = {
    get(target,property){
        console.log(`Se accede a la propiedad ${property}`)
        ///return target[property]
        if (property in target) {
            return target[property];
        } else {
            return "Propiedad no encontrada";
        }
    },
    set(target,property,value){
        if(property === "edad" && (value <= 0 || value >120)){
            throw new Error("La edad esta fuera de los límites.")
        }else if(property === "nombre" && typeof value !== "string"){
            throw new Error("Ingrese un nombre de usuario válido")
        }
        target[property] = value
    }
}

class Validacion {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad=edad
    }
}

const PruebadeValidacion = new Proxy(new Validacion("Javier",25),proxy)
console.log(PruebadeValidacion.nombre)
console.log(PruebadeValidacion.edad)

// PruebadeValidacion.nombre = 5
//PruebadeValidacion.edad = 0
