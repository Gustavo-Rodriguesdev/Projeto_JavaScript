console.log("java script esta funcionando!! ahahahahahahahaahahhhahahahhaahhhaahhahahhahaahhahahahah")

let firstname ="cachorro"
let lastname = "pao com banana"

console.log(firstname,lastname)

const age = 18

console.log(age)


//variaveis
let itemName ="caneta"
let price =3
let itemAvailable = true
let itemColor ="azul"

console.log(itemName,itemColor,itemAvailable,price)

//objetos

let caneta = {
    itemName:"caneta azul azul caneta",
    itemPrice: 2.99,
    itemAvailable: true,
    itemColor:"azul"

}

console.log(caneta)

//caguei no pal mt forte e n tava funcionando mas tirei o = do console.log e funfou

//Arrays

let cars = ["gol","uno","fusca"]
cars[2] = "fusca"
console.log(cars[0])

//functions
//function saleStatus (status, total) {

   // console.log("transaction: " + status + " Total Amount $" + total)
//}

//saleStatus("aproved",30)


//atividade
function saleStatuss(preço, desconto,) {

    let discontou= preço - preço * desconto/100
    return discontou
    }
    
    console.log(saleStatuss(100, 10))

    