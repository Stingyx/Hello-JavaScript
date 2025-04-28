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
    constructor (){
        if(new.target === Pago){
            throw new Error("No puedes instanciar una clase abstracta")
        }
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
        console.log("Prueba de retiro desde subclase")
    }
}


let Mibanco = new Santander()
Mibanco.retiro()


// 7. Utiliza polimorfismo en dos clases diferentes



// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy