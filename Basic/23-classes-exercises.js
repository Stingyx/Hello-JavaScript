// 1. Crea una clase que reciba dos propiedades

class MyClass{
    constructor(age,hobby){
        this.age = age
        this.hobby = hobby
    }
}

let Prueba1 = new MyClass(18,"Programar")
console.log(Prueba1)

// 2. Añade un método a la clase que utilice las propiedades

class MyClassWM{
    constructor(nombre,accion){
        this.nombre=nombre
        this.accion=accion
    }
    Run(){
        console.log(`${this.nombre}, suele ${this.accion}`)
    }
}

let Prueba2 = new MyClassWM("Javier","cocinar")
//Prueba2.Run()


// 3. Muestra los valores de las propiedades e invoca a la función

console.log(Prueba2.nombre)
console.log(Prueba2.accion)
Prueba2.Run()

// 4. Añade un método estático a la primera clase

class MyClassWStatic{
    constructor(age,hobby){
        this.age = age
        this.hobby = hobby
    }

    static Sap(){
        return (`Prueba de funcionamiento válida.`)
    }
}
let Prueba3 = new MyClassWStatic(18,"Correr")
//console.log(Prueba3.Sap())    --No es necesario instanciar la clase para hacer uso del método estático


// 5. Haz uso del método estático
console.log(MyClassWStatic.Sap())

// 6. Crea una clase que haga uso de herencia

class My3Class extends MyClassWM{
    constructor(nombre,accion){
        super(nombre,accion)
    }
    P4(){
        console.log(`${this.nombre}, esta realizando la prueba de funcionamiento mientras ${this.accion}`)
    }
}

let Prueba4 = new My3Class("Stinx", "Juega")
Prueba4.P4()

// 7. Crea una clase que haga uso de getters y setters

class MY4ClassWGetSet{
    constructor(id,pin){
        this.id = id
        this.pin =pin
    }
    set(id){
        this.id = id
    }
    get(id){
        this.id = id
    }
    set(pin){
        this.id = pin
    }
    get(pin){
        this.id = pin
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class MY5ClassWGetSetPrivate{
    #id
    #pin
    
    constructor(id,pin){
        this.#id = id
        this.#pin =pin
    }
    set id(id){
        this.#id = id
    }
    get pin(){
        return this.#pin
    }
}

let Prueba5 = new MY5ClassWGetSetPrivate(4567,1234)
console.log(Prueba5.id)



// 9. Utiliza los get y set y muestra sus valores

console.log(Prueba5.pin)
Prueba5.id = "4554"

// 10. Sobrescribe un método de una clase que utilice herencia 

class My6Class extends My3Class{
    P4(){
        console.log("Sobreescribir fue un éxito!")
    }
}

let Prueba6 = new My6Class()
Prueba6.P4()