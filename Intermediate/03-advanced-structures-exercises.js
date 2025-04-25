// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let ArrayDNames = ["Jac","P","Jose","Juan","Jorselio","Raúl","Rodrigo","Ivan"]

ArrayDNames.map(element => console.log(element.length))
const Filtrado = ArrayDNames.filter(element => {
    if(element.includes("J")){
        //console.log(element)
        return true
    }
    return false
})
console.log(Filtrado)

const Reducido = ArrayDNames.reduce((element,current) => (`${element} ${current}`))
console.log(Reducido)
const Parael4 = Reducido.split(" ")
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

const MyArray = [1,2,3,4,5,6,7,8,9,10]
let cubo = MyArray.map(element => element**3)
console.log(cubo.filter(element => element %2 ===0))


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log(Parael4)
const FlatMap = Parael4.flatMap(element => element.split(" "))
console.log(FlatMap)
// 4. Ordena un array de números de mayor a menor

const My2Array = [4,7,0,1,2,6,9]
let cubosorted = My2Array.sort((a,b)=>a-b)
console.log(cubosorted.reverse())

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const My1Set = new Set(["Stgx","Jr","Jd","G",25,"C"])
const My2Set = new Set(["Prr","Jr","X","G",15,"Y"])

const Union = new Set([...My1Set,...My2Set])
console.log(Union)

const Intersection = new Set([...My1Set].filter(element =>My2Set.has(element)))
console.log(Intersection)

const Diference = new Set([...My1Set].filter(element =>!My2Set.has(element)))
console.log(Diference)

// 6. Itera los resultados del ejercicio anterior

Union.forEach(element =>console.log(`Iteración de la Unión: ${element}`))
Intersection.forEach(element =>console.log(`Iteración de la Intesercción: ${element}`))
Diference.forEach(element =>console.log(`Iteración de la Diferencia: ${element}`))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

const My1Map = new Map([
    ["Nombres",["Jap","Jth","Ly","X","Y","Z"]],
    ["Edades",[25,12,30,17,15,33]],
    ["Emails",["Stgx@mail.com","Jth@mail.com","Ly@mail.com","x@mail.com","y@mail.com","Z@mail.com"]]
])

My1Map.forEach((value,key) => console.log(`${key}: ${value}`))

// 8. Dado el mapa anterior, crea un array con los nombres

let GetNames = My1Map.get("Nombres")
const NamesArray = Array.from(GetNames)
console.log(NamesArray)
// let GetNames1 = My1Map.values()
// const NamesArray = Array.from(GetNames1)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let GetAges = My1Map.get("Edades")
let GetEmails = My1Map.get("Emails")
let EmailsMayores = []

GetAges.forEach((element,index) => {
    if(element >= 18){
        EmailsMayores.push(GetEmails[index])
    }
})
const FinalSet = new Set(EmailsMayores)
console.log(FinalSet)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

const MapToObject = Object.fromEntries(My1Map)
//console.log(MapToObject)

MapToObject.Nombres
MapToObject.Edades
let clave = MapToObject.Emails[1]
let NewObject = {}
for(let n = 1;n<MapToObject.Emails.length;n++){
    NewObject[MapToObject.Emails[n]] = {Nombre: MapToObject.Nombres[n],
        Edad:MapToObject.Edades[n]}
}
const Mapapapa = Object.entries(NewObject)
console.log(Mapapapa)