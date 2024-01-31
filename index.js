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

    //b

    let num1 = 3
    let num2 = 2
    console.log(num1+num2)
    console.log(num1-num2)
    console.log(num1*num2)
    console.log(num1/num2)
    console.log(num1%num2)
    console.log(num1**num2)

    let total = 5

    console.log(++total)
    console.log(--total)
    //console.log(total++)
     
    //operaçoes de atribuiçao

    let num3 = 10

  console.log(num3+=20)
  console.log(num3-=20)
  console.log(num3*=20)
  console.log(num3/=20)

  //operadores de comparaçao

  let num4 = 10

  console.log(num4 > 0)
  console.log(num4 < 0)
  console.log(num4>=10)
  console.log(num4<=10)

  console.log(num4!=10)
  console.log(num4==10)

  let num5 = 10

  let num6 = "10"

  console.log(num5==num6)
  console.log(num5===num6)

  //operadores ternarios

  let driver = 109
  let speed = driver>110? "above":"below"
  console.log(speed)

//operadores logicos

let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima&&temTituloEleitor
console.log(podeVotar)

let podeViajar=! podeVotar
console.log(podeViajar)

//operadores logicos com strings

let corCliente = undefined
let corEstoque = "black"
let corVendida = corCliente || corEstoque
console.log(corVendida)

//precedencia de operadores

let num7 = (3 + 4) * 2
console.log(num7)

//if - else
let driverSpeed = 200
if(driverSpeed >110) {

    console.log("Above Speed Limit")

}

else if (driverSpeed >=60 && driverSpeed <=110) {

console.log("Speed okay")
}

else{

 console.log("Bellow Speed Limit")

}

//swich case

let airPortName= "GRU"

switch(airPortName){
    case "GRU":
        console.log("Orlando internacional airport")
      break

        
    case "PAO":
    console.log("Pao internacional airport")
    break


    default:
        console.log("airport not found")
        break
}

//for loop



for(i=1; i<=5; i++) {

    console.log("onumero é:",i)
}

//let mynumber= 20

//for(i=1; i<=mynumber; i++) {

    //console.log("onumero é:",i)
//}

//while loop

let index= 1

while(index<=100) {

    console.log ("o numero é: ", index)
    index++
}



