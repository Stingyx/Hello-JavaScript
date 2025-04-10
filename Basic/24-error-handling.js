//

let MyObject

//MyObject.email

//Tratamiento de errores

//Try - Catch

try{
    //Código a ejecutar
    console.log(MyObject.email)
    console.log("No se han producido errores.")
}
catch(error){
    //Bloque de errror
    console.log("Se ha producido un error:", error.message);
}

//finally

try {
    console.log(MyObject.email)
}catch(error){
    console.log("Se ha producido un error: ", error.message)
}finally{
    console.log("Este codigo se ejecuta siempre")
}

//No soporta
//try {
//    console.log(MyObject.email)
//}finally{
//    console.log("Este codigo se ejecuta siempre")
//}


//throw
function sumaEntero(a,b){
    if(!Number.isInteger(a)|| !Number.isInteger(b)){
        throw new Error("Error en la función suma enteros")
        //console.log("No es un numero entero")
    }if(!Number.isInteger(a)|| !Number.isInteger(b)){
        throw new Error("Esta operación solo cuma números enteros")
    }
    if(a== 0 || b==0){
        throw new sumaCeroEnteroError("Se está intentando sumar 0", a, b)
    }
    return a+b
}
try{
    console.log(sumaEntero(4,5))
    console.log(sumaEntero("4",5))
}catch(error){
    console.log("Se ha producido un error:",error.message)
}


//throw new Error("Se ha producido un error");

//Capturar varios tipos de errores

try{
    console.log(sumaEntero("5",10))
}catch(error){
    if(error instanceof TypeError){
        console.log("Se ha producido un error de tipo: ", error.message)
    }else if(error instanceof Error){
        console.log("Se ha un producido un error: ", error.message)
    }
}

//Crear excepciones personalizadas

class sumaCeroEnteroError extends Error{
    constructor (message,a,b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(this.a,"+",this.b)
    }
}

try{
    console.log(sumaEntero(0,10))
}catch(error){
    console.log("5.- Se ha producido un error personalizado: ",error.message)
    error.printNumbers()
}