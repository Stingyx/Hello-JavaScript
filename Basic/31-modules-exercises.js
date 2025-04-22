// 1. Exporta una función

export function MyFunc(string){
    return console.log("Tu nombre es:",string)
}

MyFunc("Javier")

// 2. Exporta una constante

export const alias = "Stgx"

// 3. Exporta una clase

export class Ejercicio{
    constructor(repeticiones,musculo,peso){
        this.repeticiones = repeticiones
        this.peso=peso
        this.musculo=musculo
    }
    
}

// 4. Importa una función

// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior