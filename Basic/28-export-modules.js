//Exportación de módulos


//funciones

export function add(a,b){
    return a+b
}

console.log(add(5,4))

export const PI = 3.1416
export let name = "Javier"

export class circle{
    constructor(radio){
        this.radio = radio
    }
    area(){
        return Math.PI*Math.pow(this.radio,2)
    }
    perimetro(){
        return Math.PI*this.radio*2
    }
}