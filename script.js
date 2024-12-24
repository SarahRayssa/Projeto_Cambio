// Tipos de variaveis:
// let idade = 27 //tipo number
// let nome = 'Sarah' // tipo string
// let log = false // tipo boolean

// array e objetos
// let ingredientes = ["Farinha", "Agua", "Sal", "Corante"] // lista
// let produto = {
//     // propriedades (caracteristicas)
//     nome: "Tenis Adidas",
//     numero: 36,
//     cor: "Preto",
//     quantdade: 200,
//     preco: 100
// }

// Função
// function sum(a, b) { // INPUT
//     let resultado = a + b
//     return resultado
// }

// arrow function
// let sum2 = (a, b) => {
//     let resultado = a+b
//     return resultado
// }

// let x = sum(15, 5) // processar
// let y = sum2(2, 8)

// console.log(x) // OUTPUT
// console.log(y)

// Condicional
// if (idade >= 18) { //se o numero for maior ou igual que 18, é maior de idade
//     console.log("você é maior de idade")
// } else { // senão....
//     console.log("você é menor")
// }

// Looping
// let lista = [10, 20, 30, 40]

// for(let item of lista) {
//     console.log(item)
// }

//gerenciamento de eventos (quando clicar no botão, aparecer um alert)
// function avisar() {
//     alert("opa, disparei")
// }

// definição do botão
// let botao = document.querySelector("#botao")
// evento de clique no botão
// document.addEventListener("click", () => {
//     avisar()
// })

//evento ao passar o mouse no botão
// botao.addEventListener("mouseover", () => {
//     avisar()
// })

// let usdInput = document.querySelector("#usd")
// let brlInput = document.querySelector("#brl")
//evento para mostrar todos os caracteres digitados no teclado
// usdInput.addEventListener("keyup", () => {
//     console.log(usdInput.value)
// })

// brlInput.addEventListener("keyup", () => {
//     console.log(brlInput.value)
// })
let dolar = 6.15

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})
brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})
brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

// Funções
function formatCurrency(value) {
    // ajustar o valor
    let fixedValue = fixValue(value)
    // utilizar função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    // retorno do valor formatado
    return formatter.format(fixedValue)
}

function fixValue(value) { 
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue) // transforma string em numero
    if(floatValue == NaN) {
        floatValue = 0
    }

    return floatValue // retorno do valor formatado
}

function convert(type) {
    if(type == "usd-to-brl") {
        // valor ajustado
        let fixedValue = fixValue(usdInput.value)
        // converter o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)
        // mostra no campo de real
        brlInput.value = formatCurrency(result)
    }
    if(type == "brl-to-brl") {
        // ajustar o valor
        let fixedValue = fixValue(brlInput.value)
        // converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        // mostra no campo de dolar
        usdInput.value = formatCurrency(result)
    }
}