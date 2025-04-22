
//Importación de módulos

import { add, name, PI,circle } from "./28-export-modules.js";

//Funciones
console.log(add(5,2))

//Propiedades
console.log(PI)
console.log(name)

let Circulo1= new circle(5)
console.log(Circulo1.area().toFixed(2))
console.log(Circulo1.perimetro().toFixed(2)) 
