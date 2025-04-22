// 1. Captura una excepción utilizando try-catch

let myc =[]

// try{
//     console.log(myc.length)
// }catch(error){
//     console.log("Se ha producido el primer error de los ejercicos")
// }

// 2. Captura una excepción utilizando try-catch y finally

// try{
//     console.log(myc.length)
// }catch(error){
//     console.log("Se ha producido el primer error de los ejercicos")
// }finally{
//     console.log("En realidad si hubo un error pero continuaremos con el código")
// }



// 3. Lanza una excepción genérica

// try{
//     console.log(myc.length)
// }catch(error){
//     console.log("Se ha producido el primer error de los ejercicos")
//     throw error
// }finally{
//     console.log("En realidad si hubo un error pero continuaremos con el código")
    
// }

// 4. Crea una excepción personalizada
// function Pruebaexcepcion(){ 
//         throw new Error("Prueba de excepción personalizada 1")
    
// }


// 5. Lanza una excepción personalizada
//console.log(Pruebaexcepcion())


// 6. Lanza varias excepciones según una lógica definida

// function Shangri(User,parametros){
//     try{
//         if(!User){
//             throw new Error("Usuario inválido")
//     }else if(parametros>10){
//         throw new Error("Excediste los parámetros")
//     }
//     }catch(error){
//         console.log("Se ha producido un error: ",error.message)
//     }
// }

// Shangri("",1) //Error de ususario inválido
// Shangri("Stgx",15) //Error de parámetros excedidos



// 7. Captura varias excepciones en un mismo try-catch

// function Shangri(User,parametros,altura,vida){
//     try{
//         if(!User){
//             throw new Error("Usuario inválido")
//     }else if(altura>=10){
//         throw new Error("Excediste el límite del parámetro altura debe ser menor a 10")
//     }else if(vida>=10){
//         throw new Error("Excediste el límite del parámetro vida debe ser menor a 10")
//     }else if(parametros>15){
//         throw new Error("Excediste los parámetros")
//     }
//     }catch(error){
//         console.log("Se ha producido un error: ",error.message)
//     }
// }
// Shangri("A",9,9,9)

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// const valores = ["42", "hola", 3.14, null, "100abc", true, "0.98"];


// for (let valor of valores) {
//     try {
//     let convertido = parseFloat(valor);

//     if (isNaN(convertido)) {
//         throw new Error(`No se pudo convertir el valor: ${valor}`);
//     }

//     console.log(`Convertido correctamente: ${valor} → ${convertido}`);
    
//     } catch (error) {
//     console.log(`Error: ${error.message}`);
//     }
// }

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// let games = {
//     name : "shangri",
//     plataforma : "pc",
//     año : 2015
// }

// try{
//     if()
//     console.log(games.horas)
// }catch(error){
//     throw new Error("El objeto no tiene esta propiedad!")
// }



// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10